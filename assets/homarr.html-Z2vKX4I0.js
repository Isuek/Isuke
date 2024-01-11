import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c,a as n,b as a,d as l,e as i}from"./app-LdWiqa9H.js";const p={},r={href:"https://github.com/ajnart/homarr",target:"_blank",rel:"noopener noreferrer"},u=i(`<p>比如 NAS 中内网和外网地址链接不同，你可以设置两套系统。</p><p>问题：</p><ul><li>无法直接添加 <code>chrome://extensions/</code> 等非标准链接。</li><li>图标会远程调用 Github 图库，速度会慢些。</li></ul><h2 id="部署代码" tabindex="-1"><a class="header-anchor" href="#部署代码" aria-hidden="true">#</a> 部署代码</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">homarr</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> homarr
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/ajnart/homarr<span class="token punctuation">:</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock <span class="token comment"># Optional, only if you want docker integration</span>
      <span class="token punctuation">-</span> /volume1/docker/homarr/configs<span class="token punctuation">:</span>/app/data/configs
      <span class="token punctuation">-</span> /volume1/docker/homarr/icons<span class="token punctuation">:</span>/app/public/icons
      <span class="token punctuation">-</span> /volume1/docker/homarr/data<span class="token punctuation">:</span>/data
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&#39;7575:7575&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function d(k,m){const s=t("ExternalLinkIcon");return o(),c("div",null,[n("p",null,[n("a",r,[a("Homarr"),l(s)]),a(" 可以作为网站书签导航页工具，也可以集成各类状态仪表板，让你可以在一个方便的位置访问和控制一切。")]),u])}const b=e(p,[["render",d],["__file","homarr.html.vue"]]);export{b as default};