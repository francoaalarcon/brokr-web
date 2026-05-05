/**
 * BROKR - Client-side router with pretty URLs
 * Uses the History API (pushState/popState) for clean links.
 */

const Router = (() => {
  const routes = {};

  /**
   * Register a route.
   * @param {string} path - e.g. '/', '/about', '/listing/:id'
   * @param {function} handler - receives params object, returns HTML string or renders to #app
   */
  function register(path, handler) {
    // Convert path params like :id to named capture groups
    const paramNames = [];
    const regexStr = path
      .replace(/:[^\\/]+/g, (match) => {
        paramNames.push(match.slice(1));
        return '([^\\/]+)';
      })
      .replace(/\//g, '\\/');

    routes[path] = {
      regex: new RegExp(`^${regexStr}$`),
      paramNames,
      handler,
    };
  }

  /**
   * Navigate to a path using pushState.
   * @param {string} path
   */
  function navigate(path) {
    window.history.pushState({}, '', path);
    resolve(path);
  }

  /**
   * Match and execute the handler for the given path.
   * @param {string} path
   */
  function resolve(path) {
    // Strip query string for matching
    const cleanPath = path.split('?')[0];

    for (const key in routes) {
      const route = routes[key];
      const match = cleanPath.match(route.regex);

      if (match) {
        const params = {};
        route.paramNames.forEach((name, i) => {
          params[name] = decodeURIComponent(match[i + 1]);
        });

        route.handler(params);
        return;
      }
    }

    // No route matched → 404
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = '<div class="not-found"><h1>404</h1><p>Página no encontrada.</p></div>';
    }
  }

  // Intercept all <a> clicks to use pushState instead of full reload
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href');

    // Skip external links, anchors, mailto, tel, etc.
    if (
      !href ||
      href.startsWith('http') ||
      href.startsWith('//') ||
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:')
    ) {
      return;
    }

    e.preventDefault();
    navigate(href);
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    resolve(window.location.pathname);
  });

  // Kick off routing on initial load
  function init() {
    resolve(window.location.pathname);
  }

  return { register, navigate, init };
})();
