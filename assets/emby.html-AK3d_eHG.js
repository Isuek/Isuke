import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as l,c,a as n,b as a,d as e,e as t}from"./app-fBMQTNGT.js";const p={},u=t('<p>Emby 为家庭提供了一个强大的媒体服务器，但在配置过程中，记得为你的媒体库目录授权“Everyone”，以确保 Emby 能够无障碍地访问它。为此，请打开共享文件夹的权限设置，选择对应的系统用户，并确保其具有读写权限。</p><p>使用 Emby 客户端播放视频需要 Emby Premiere。一次性购买终身会员的价格为 119 美元，但在黑五期间，通常可以以 99 美元的折扣价格获得。此外，Emby 对蓝光格式如 ISO 支持有限。</p><h2 id="使用-tips" tabindex="-1"><a class="header-anchor" href="#使用-tips" aria-hidden="true">#</a> 使用 tips</h2><h3 id="添加媒体库" tabindex="-1"><a class="header-anchor" href="#添加媒体库" aria-hidden="true">#</a> 添加媒体库</h3><p>设置媒体库时，中国按简称“PRC”排列，在字母 P 下寻找。</p><h3 id="刮取元数据" tabindex="-1"><a class="header-anchor" href="#刮取元数据" aria-hidden="true">#</a> 刮取元数据</h3>',6),r={href:"https://xiaoyaliu.notion.site/dc28a32c807d418691b83519fa523306",target:"_blank",rel:"noopener noreferrer"},d=n("h3",{id:"移除合集",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#移除合集","aria-hidden":"true"},"#"),a(" 移除合集")],-1),m=n("p",null,"如果你为家人设置了独立账户并设定了不同的媒体库权限，你会发现「合集」会自动显示在所有账户上。",-1),v=n("p",null,"登录相应的用户，在 Emby 设置界面选择「主屏幕」>「合集」，取消勾选「在主屏幕显示」。这样当前的账户就不会再显示合集信息了。然后在其他账户中也进行同样的操作，这样其他账户也不会再显示合集信息。尽管页面上会保留合集的菜单，但如果不想让敏感内容显示在合集中，可以在各自的账户中设置媒体文件夹权限。",-1),k=n("h3",{id:"安全地从外部访问",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安全地从外部访问","aria-hidden":"true"},"#"),a(" 安全地从外部访问")],-1),b={href:"https://www.bilibili.com/read/cv14814465/",target:"_blank",rel:"noopener noreferrer"},h=t(`<ol><li>确保你的家庭网络已设置了 DDNS（通常通过路由器完成）。</li><li>下载与你的域名匹配的 Tomcat 证书版本。</li><li>解压后，你会看到一个 pfx 文件和一个包含密码的 txt 文件。</li><li>将它们都放置在 config 目录的特定路径中。</li><li>接下来，在 Emby 的 <code>服务器 &gt; 网络</code> 设置中，输入你的公共端口和 DDNS 域名。</li><li>建议开启安全连接模式，这样可以更好地保护你的数据安全。</li></ol><figure><img src="https://img.newzone.top/2023-09-15-05-32-43.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="部署代码" tabindex="-1"><a class="header-anchor" href="#部署代码" aria-hidden="true">#</a> 部署代码</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># https://hub.docker.com/r/linuxserver/emby</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;2.1&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">emby</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> lscr.io/linuxserver/emby<span class="token punctuation">:</span>latest
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> emby
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> PUID=1026
      <span class="token punctuation">-</span> PGID=100
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /volume1/docker/emby/config<span class="token punctuation">:</span>/config
      <span class="token comment"># 媒体库映射</span>
      <span class="token punctuation">-</span> /volume1/tvshows<span class="token punctuation">:</span>/data/tvshows
      <span class="token punctuation">-</span> /volume4/movies<span class="token punctuation">:</span>/data/movies
      <span class="token punctuation">-</span> /volume3/Anime<span class="token punctuation">:</span>/data/anime
      <span class="token punctuation">-</span> /volume4/Documentary<span class="token punctuation">:</span>/data/documentary
      <span class="token punctuation">-</span> /volume4/Music/MV<span class="token punctuation">:</span>/data/MV
      <span class="token punctuation">-</span> /volume4/Music/Audio<span class="token punctuation">:</span>/data/Audio
      <span class="token comment">#- /opt/vc/lib:/opt/vc/lib #optional</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8096<span class="token punctuation">:</span><span class="token number">8096</span>
      <span class="token punctuation">-</span> 8920<span class="token punctuation">:</span><span class="token number">8920</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function y(_,f){const s=o("ExternalLinkIcon");return l(),c("div",null,[u,n("p",null,[a("建议用 tinyMediaManager 刮取影视元数据，具体设置参考小雅的"),n("a",r,[a("教程"),e(s)]),a("。统一刮取规则，便于将来更换管理器时无需重设。")]),d,m,v,k,n("p",null,[a("如果你计划从外部访问 Emby，请务必启用 HTTPS。具体步骤可以参考"),n("a",b,[a("这里"),e(s)]),a("。简单来说：")]),h])}const E=i(p,[["render",y],["__file","emby.html.vue"]]);export{E as default};