/**
 * BROKR — Shared navbar scroll behavior
 * Swaps logo and background when the user scrolls past 40px.
 */
(function () {
  var navbar = document.getElementById('navbar');
  var logo   = navbar && navbar.querySelector('.navbar-logo-img');
  if (!navbar || !logo) return;

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.remove('at-top');
      navbar.classList.add('scrolled');
      logo.src = '/assets/img/logo-oscuro-colores.png';
    } else {
      navbar.classList.add('at-top');
      navbar.classList.remove('scrolled');
      logo.src = '/assets/img/logo-blanco-colores.png';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
