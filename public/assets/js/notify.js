function botCheck() {
  var botPattern =
    "(bot|crawler|spider|crawling|googlebot/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
  var re = new RegExp(botPattern, "i");
  var userAgent = navigator.userAgent;
  if (re.test(userAgent)) {
    return true;
  } else {
    return false;
  }
}

async function isLocal() {
  const data = window.localStorage.getItem("isLocal");
  if (data == null) {
    return false;
  }
  const hash = await digestMessage(data);
  if (
    hash == "b5ac86e24933b6b0bab07f52c5d34bf4a4aef61f8e79f2fd879b5c750fe10987"
  ) {
    return true;
  }
  return false;
}

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

function encodeMessage(message) {
  var params = new Object();
  params.token = Base64.decode("YXQxbnR0anJ2ZDEzNnQ4OHRha2YycGVoamdjNmNo");
  params.user = Base64.decode("dXhjb2pmM3JqcWVuMXNrcnphajFiNTE3NXdnOWYz");
  params.message =
    Base64.decode("TmV3IHZpc2l0IGZyb20g") +
    message +
    Base64.decode("IG9uIA==") +
    window.location.pathname;

  let urlEncodedDataPairs = [];
  for (let name in params) {
    urlEncodedDataPairs.push(
      encodeURIComponent(name) + "=" + encodeURIComponent(params[name])
    );
  }
  return urlEncodedDataPairs.join("&");
}

function notify() {
  var urlA = Base64.decode(
    "aHR0cHM6Ly9hcGkuaXBkYXRhLmNvP2FwaS1rZXk9NmNhZTZkMmQ0YzgxMDY5NmE0YTM4Mzk2NWU1Y2E5MjFhY2EzNTQwYjBmNThiYmFiMWZlYmUyMDg="
  );
  var reqA = new XMLHttpRequest();
  reqA.onreadystatechange = function () {
    if (this.readyState == 4) {
      // request finished and response is ready
      reqB = new XMLHttpRequest();
      var urlB = "https://api.pushover.net/1/messages.json";
      var content = "";
      if (this.status == 200) {
        var data = JSON.parse(this.responseText);
        content =
          data.city +
          ", " +
          data.region +
          ", " +
          data.country_name +
          " " +
          data.emoji_flag;
      }
      reqB.open("POST", urlB, true); // true for asynchronous request
      reqB.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      reqB.send(encodeMessage(content));
    }
  };
  reqA.open("GET", urlA, true);
  reqA.send();
}

(async function () {
  const isLocalReq = await isLocal();
  if (!botCheck() && !isLocalReq) {
    setTimeout(notify, 2000);
  }
})();
