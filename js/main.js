/**
 * BROKR - Main entry point
 * Register all routes here and initialize the router.
 */

// ── Routes ────────────────────────────────────────────────────────────────────

Router.register('/', () => {
  renderHome();
});

// ── Init ──────────────────────────────────────────────────────────────────────

Router.init();
