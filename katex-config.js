// katex-config.js
// 載入 KaTeX 的 CSS 和 JS

function loadKatex() {

    // 載入 CSS
    /*
    用 JavaScript 動態建立一個 <link> 標籤
    rel="stylesheet" 表示這是一個 CSS 樣式表
    href 指向 KaTeX 的 CSS 檔案（在 CDN 上）
    最後將這個 <link> 加入到 <head> 中
    */

    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css';
    document.head.appendChild(cssLink);
    
    // 載入 KaTeX 核心
    /*
    動態建立 <script> 標籤，載入 KaTeX 的主要 JavaScript 檔案
    重要：onload 是一個事件處理器，會在外部 script 載入完成後自動執行
    因為 KaTeX 核心必須先存在，才能使用它提供的功能（如 renderMathInElement）
    */ 

    const katexScript = document.createElement('script');

    /*
    動態建立 <script> 標籤，載入 KaTeX 的主要 JavaScript 檔案
    重要：onload 是一個事件處理器，會在外部 script 載入完成後自動執行
    因為 KaTeX 核心必須先存在，才能使用它提供的功能（如 renderMathInElement)
    */

    katexScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.js';
    katexScript.onload = function() {
        // KaTeX 載入完成後，再載入 auto-render 擴充
        const renderScript = document.createElement('script');
        renderScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/contrib/auto-render.min.js';
        renderScript.onload = function() {
            // 初始化渲染器
            renderMathInElement(document.body, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},   // 獨立公式
                    {left: '$', right: '$', display: false},     // 行內公式
                    {left: '\\(', right: '\\)', display: false}, // 也支援 MathJax 語法
                    {left: '\\[', right: '\\]', display: true}
                ]
            });
        };
        document.head.appendChild(renderScript);
    };
    document.head.appendChild(katexScript);
}

// 等待 DOM 載入完成後再執行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadKatex);
} else {
    loadKatex();
}