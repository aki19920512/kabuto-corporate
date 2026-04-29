/* Shared header + footer + nav scroll behavior across all 3 pages */
(function () {
  const header = (active) => `
    <header class="site-header" id="siteHeader">
      <div class="container nav">
        <a href="index.html" class="brand" aria-label="KABUTO">
          <span class="brand-mark">KABUTO</span>
          <span class="brand-jp">株式会社</span>
        </a>
        <nav class="nav-links" aria-label="Primary">
          <a href="index.html"           class="${active==='home'?'is-active':''}">Home<small>トップ</small></a>
          <a href="yorisoi.html"         class="${active==='yorisoi'?'is-active':''}">Yorisoi<small>プロダクト</small></a>
          <a href="representative.html"  class="${active==='ceo'?'is-active':''}">Message<small>代表挨拶</small></a>
          <a href="index.html#company"   class="${active==='company'?'is-active':''}">Company<small>会社情報</small></a>
        </nav>
        <a href="index.html#contact" class="nav-cta">Contact</a>
      </div>
    </header>
  `;

  const footer = () => `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="brand">
              <span class="brand-mark">KABUTO</span>
              <span class="brand-jp">株式会社</span>
            </div>
            <p>対人支援の現場に、テクノロジーで余白を。<br/>長崎から、ケアする人を支える仕組みをつくります。</p>
          </div>
          <div class="footer-col">
            <h5>Sitemap</h5>
            <ul>
              <li><a href="index.html">トップ</a></li>
              <li><a href="yorisoi.html">YORISOI</a></li>
              <li><a href="representative.html">代表挨拶</a></li>
              <li><a href="index.html#company">会社情報</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="tokusho.html">特定商取引法に基づく表記</a></li>
              <li><a href="privacy.html">プライバシーポリシー</a></li>
              <li><a href="terms.html">利用規約</a></li>
              <li><a href="refund.html">返金ポリシー</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>長崎県長崎市</li>
              <li><a href="mailto:kabuto.co.ltd@gmail.com">kabuto.co.ltd@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2024 KABUTO Inc.</span>
          <span>Nagasaki, Japan</span>
        </div>
      </div>
    </footer>
  `;

  window.KABUTO = {
    mountChrome(active) {
      document.body.insertAdjacentHTML('afterbegin', header(active));
      document.body.insertAdjacentHTML('beforeend', footer());
      const h = document.getElementById('siteHeader');
      const onScroll = () => {
        if (window.scrollY > 8) h.classList.add('is-scrolled');
        else h.classList.remove('is-scrolled');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  };
})();
