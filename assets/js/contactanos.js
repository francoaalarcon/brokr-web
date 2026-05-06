/**
 * BROKR — Contáctanos page scripts
 * FAQ accordion + contact form success state.
 */
(function () {

  /* ── FAQ accordion ──────────────────────────────────────────────────────── */
  var items = document.querySelectorAll('.ct-faq-item');
  items.forEach(function (item) {
    var btn = item.querySelector('.ct-faq-item__q');
    var ans = item.querySelector('.ct-faq-item__a');
    if (!btn || !ans) return;

    btn.addEventListener('click', function () {
      var isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Collapse all
      items.forEach(function (other) {
        var ob = other.querySelector('.ct-faq-item__q');
        var oa = other.querySelector('.ct-faq-item__a');
        if (ob && oa) {
          ob.setAttribute('aria-expanded', 'false');
          oa.style.maxHeight = '0';
        }
      });

      // Expand clicked (if it wasn't already open)
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });

  /* ── Contact form ───────────────────────────────────────────────────────── */
  var form    = document.getElementById('contactForm');
  var success = document.getElementById('contactSuccess');
  if (!form || !success) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) { form.reportValidity(); return; }

    form.style.opacity        = '0';
    form.style.pointerEvents  = 'none';

    setTimeout(function () {
      form.style.display = 'none';
      success.style.display = 'flex';
      setTimeout(function () { success.style.opacity = '1'; }, 20);
    }, 300);
  });

})();
