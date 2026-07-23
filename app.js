(async function () {
  const params = new URLSearchParams(location.search);
  const marketId = params.get("market_id");
  const root = document.getElementById("root");

  if (!marketId) {
    root.textContent = "market_id가 필요합니다";
    return;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatUnitAmount(amount) {
    return amount === null || amount === undefined ? "" : `${amount}`;
  }

  function formatPrice(price) {
    return `${Number(price).toLocaleString("ko-KR")}원`;
  }

  function renderProductCard(product) {
    const imageUrl = product.image_url;
    const imageStyle = imageUrl ? `background-image:url('${escapeHtml(imageUrl)}')` : "";
    const imageClass = imageUrl ? "product-image" : "product-image product-image--empty";

    return `
      <div class="product">
        <div class="${imageClass}" style="${imageStyle}"></div>
        <div class="product-info">
          <div class="product-name">${escapeHtml(product.display_name)}</div>
          <div class="product-meta">${escapeHtml(formatUnitAmount(product.unit_amount))}${escapeHtml(product.unit_type)} · ${escapeHtml(product.origin)}</div>
        </div>
        <div class="product-price">${escapeHtml(formatPrice(product.price))}</div>
      </div>`;
  }

  try {
    const response = await fetch(
      `${CONFIG.SUPABASE_URL}/functions/v1/flyer?market_id=${encodeURIComponent(marketId)}`,
      { headers: { apikey: CONFIG.SUPABASE_ANON_KEY } },
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "전단지를 불러오지 못했습니다");
    }

    const templateNo = TEMPLATES[data.flyer.template_no] ? data.flyer.template_no : 1;
    const theme = TEMPLATES[templateNo];

    document.getElementById("theme-style").textContent = theme.css;
    document.title = `${data.market.name} ${theme.titleSuffix}`;

    const productsHtml = data.products.length > 0
      ? data.products.map(renderProductCard).join("\n")
      : `<div class="products-empty">오늘 등록된 상품이 없습니다</div>`;

    root.innerHTML = `
      <div class="flyer">
        <header class="header">
          <div class="market-name">${escapeHtml(data.market.name)}</div>
          <h1 class="title">${escapeHtml(data.flyer.title)}</h1>
          <p class="message">${escapeHtml(data.flyer.message)}</p>
        </header>
        <main class="products">
          ${productsHtml}
        </main>
        <footer class="footer">
          <span class="date">${escapeHtml(data.date)} ${escapeHtml(theme.dateLabel)}</span>
          <span class="address">${escapeHtml(data.market.address)}</span>
        </footer>
      </div>`;
  } catch (err) {
    root.textContent = err.message || "전단지를 불러오지 못했습니다";
  }
})();
