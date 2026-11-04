// 1. Page transitions: fade the page out, then navigate
document.addEventListener('click', function (e) {
  var a = e.target.closest('a');
  if (!a || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
  var url = new URL(a.href, location.href);
  if (url.origin !== location.origin || a.hasAttribute('download')) return;
  if (url.pathname === location.pathname && url.hash) return; // same-page anchor
  e.preventDefault();
  document.body.classList.add('leaving');
  setTimeout(function () { location.href = a.href; }, 300);
});
window.addEventListener('pageshow', function () { document.body.classList.remove('leaving'); });

// 2. Gallery: builds each <figure data-src data-cap> and shows a placeholder until the image exists
document.querySelectorAll('.gallery figure').forEach(function (f) {
  var src = f.dataset.src, cap = f.dataset.cap || '';
  var img = new Image();
  img.alt = cap; img.loading = 'lazy';
  img.onload = function () {
    f.appendChild(img);
    if (cap && !/^Caption \d+$/.test(cap)) { var c = document.createElement('figcaption'); c.textContent = cap; f.appendChild(c); }
    var ph = f.querySelector('.ph'); if (ph) ph.remove();
  };
  img.onerror = function () {
    f.innerHTML = '<div class="ph">Add your image at<br>' + src.replace('../', '') + '</div>';
  };
  img.src = src;
});

// 3. Gentle scroll reveal
var items = document.querySelectorAll('.gallery figure, .list li, .grid > div');
items.forEach(function (el) { el.classList.add('reveal'); });
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } });
  }, { threshold: 0.08 });
  items.forEach(function (el) { io.observe(el); });
} else { items.forEach(function (el) { el.classList.add('in'); }); }
