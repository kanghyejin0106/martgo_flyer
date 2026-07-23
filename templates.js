const TEMPLATES = {
  1: {
    titleSuffix: "오늘의 전단지",
    dateLabel: "기준 오늘의 가격",
    css: `
  body {
    background: #eef7ee;
    color: #1b2b1e;
  }
  .flyer { max-width: 640px; margin: 0 auto; padding-bottom: 32px; }
  .header {
    background: linear-gradient(135deg, #2f9e44, #66bb6a);
    color: #fff;
    padding: 32px 20px 28px;
    text-align: center;
    border-radius: 0 0 24px 24px;
  }
  .market-name { font-size: 14px; letter-spacing: 0.08em; opacity: 0.9; margin-bottom: 6px; }
  .title { font-size: 26px; font-weight: 800; margin: 4px 0; }
  .title:empty, .message:empty { display: none; margin: 0; }
  .message { font-size: 15px; opacity: 0.95; margin: 6px 0 0; white-space: pre-wrap; }
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px 8px;
    padding: 20px 16px 0;
  }
  .product {
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(47, 158, 68, 0.12);
    display: flex;
    flex-direction: column;
  }
  .product-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-size: cover;
    background-position: center;
    background-color: #dff2e0;
  }
  .product-image--empty::after {
    content: "🥬";
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 32px;
  }
  .product-info { padding: 8px 8px 0; flex: 1; }
  .product-name { font-size: 11px; font-weight: 700; margin-bottom: 3px; }
  .product-meta { font-size: 10px; color: #5b6b5d; }
  .product-price {
    font-size: 13px;
    font-weight: 800;
    color: #2f9e44;
    padding: 4px 8px 10px;
  }
  .products-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: 32px 0;
    color: #6b7d6d;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0;
    font-size: 12px;
    color: #5b6b5d;
  }
`,
  },
  2: {
    titleSuffix: "오늘의 특가",
    dateLabel: "기준 오늘의 가격",
    css: `
  body {
    background: #1a1210;
    color: #fff;
  }
  .flyer { max-width: 640px; margin: 0 auto; padding-bottom: 32px; }
  .header {
    background: radial-gradient(circle at top, #ff6b35, #e8420c 70%);
    padding: 36px 20px 30px;
    text-align: center;
  }
  .market-name {
    display: inline-block;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    background: rgba(0,0,0,0.2);
    padding: 4px 12px;
    border-radius: 999px;
    margin-bottom: 10px;
  }
  .title {
    font-size: 30px;
    font-weight: 900;
    margin: 6px 0;
    text-shadow: 0 2px 6px rgba(0,0,0,0.25);
  }
  .title:empty, .message:empty { display: none; margin: 0; }
  .message { font-size: 15px; margin: 8px 0 0; opacity: 0.95; white-space: pre-wrap; }
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px 6px;
    padding: 22px 16px 0;
  }
  .product {
    background: #2a1e1a;
    border: 1px solid #4a352c;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .product-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-size: cover;
    background-position: center;
    background-color: #3a2a24;
  }
  .product-image--empty::after {
    content: "🔥";
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 30px;
  }
  .product-info { padding: 8px 6px 0; flex: 1; }
  .product-name { font-size: 11px; font-weight: 700; margin-bottom: 3px; }
  .product-meta { font-size: 10px; color: #d8b9a8; }
  .product-price {
    font-size: 13px;
    font-weight: 900;
    color: #ffcf3f;
    padding: 3px 6px 10px;
  }
  .products-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: 32px 0;
    color: #cfa898;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 22px 20px 0;
    font-size: 12px;
    color: #cfa898;
  }
`,
  },
  3: {
    titleSuffix: "전단지",
    dateLabel: "기준",
    css: `
  body {
    font-family: Georgia, "Nanum Myeongjo", "Apple SD Gothic Neo", "Noto Serif KR", serif;
    background: #fbfaf7;
    color: #22201c;
  }
  .flyer { max-width: 640px; margin: 0 auto; padding: 32px 20px; }
  .header {
    text-align: center;
    border-bottom: 2px solid #22201c;
    padding-bottom: 20px;
    margin-bottom: 24px;
  }
  .market-name {
    font-size: 13px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #6b6559;
    margin-bottom: 10px;
  }
  .title { font-size: 28px; font-weight: 700; margin: 4px 0; letter-spacing: 0.02em; }
  .title:empty, .message:empty { display: none; margin: 0; }
  .message {
    font-size: 14px;
    color: #4a4437;
    margin: 10px 0 0;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif;
    white-space: pre-wrap;
  }
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px 10px;
  }
  .product { display: flex; flex-direction: column; }
  .product-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-size: cover;
    background-position: center;
    background-color: #ece8de;
    border: 1px solid #d8d2c2;
  }
  .product-image--empty::after {
    content: "—";
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 24px;
    color: #a39d8c;
  }
  .product-info {
    padding-top: 6px;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif;
  }
  .product-name { font-size: 11px; font-weight: 600; margin-bottom: 2px; }
  .product-meta { font-size: 10px; color: #8a8474; }
  .product-price {
    font-size: 12px;
    font-weight: 700;
    padding-top: 3px;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif;
  }
  .products-empty {
    grid-column: 1 / -1;
    text-align: center;
    padding: 32px 0;
    color: #8a8474;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #d8d2c2;
    margin-top: 28px;
    padding-top: 14px;
    font-size: 11px;
    color: #8a8474;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", sans-serif;
  }
`,
  },
};
