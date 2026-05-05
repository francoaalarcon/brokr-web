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

Router.register('/beneficios', () => {
  renderBeneficios();
});

Router.register('/contactanos', () => {
  renderContactanos();
});

// ── Init ──────────────────────────────────────────────────────────────────────

Router.init();
