/**
 * BROKR - Main entry point
 * Register all routes here and initialize the router.
 */

// ── Routes ────────────────────────────────────────────────────────────────────

Router.register('/', () => {
  renderHome();
});

Router.register('/nosotros', () => {
  renderNosotros();
});

// ── Init ──────────────────────────────────────────────────────────────────────

Router.init();
