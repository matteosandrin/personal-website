// Sends a push notification for each page visit, unless the visitor is a bot
// or has turned off tracking on /config.

const BOT_PATTERN = new RegExp(
  "(bot|crawler|spider|crawling|googlebot/|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)",
  "i",
);

// Set in localStorage when this browser has turned off tracking. The name is
// old, but changing it would turn tracking back on for those browsers.
const TRACKING_OFF_KEY = "isLocal";

export type IpData = {
  ip: string;
  city: string;
  region: string;
  country_name: string;
  emoji_flag: string;
  asn: { name: string };
};

export function isBot() {
  return BOT_PATTERN.test(navigator.userAgent);
}

export function isTrackingOff() {
  return window.localStorage.getItem(TRACKING_OFF_KEY) != null;
}

export function setTrackingOff(off: boolean) {
  if (off) {
    window.localStorage.setItem(TRACKING_OFF_KEY, "true");
  } else {
    window.localStorage.removeItem(TRACKING_OFF_KEY);
  }
}

export async function getIpData(): Promise<IpData> {
  const url = atob(
    "aHR0cHM6Ly9hcGkuaXBkYXRhLmNvP2FwaS1rZXk9NmNhZTZkMmQ0YzgxMDY5NmE0YTM4Mzk2NWU1Y2E5MjFhY2EzNTQwYjBmNThiYmFiMWZlYmUyMDg=",
  );
  const res = await fetch(url);
  return res.json();
}

function getReferrer() {
  const ref = document.referrer;
  if (!ref || ref.includes("sandr.in") || ref.includes("sandrin.dev")) {
    return null;
  }
  return ref;
}

function buildMessage(geo: IpData, path: string, referrer: string | null) {
  let message =
    `Location: ${geo.emoji_flag} ${geo.city}, ${geo.region}, ${geo.country_name}\n` +
    `Path: ${path}\n` +
    `ISP: ${geo.asn.name}\n`;
  if (referrer != null) {
    message += `Referrer: ${referrer}\n`;
  }
  return message;
}

export async function notify(path: string) {
  const geo = await getIpData();
  await fetch("https://api.pushover.net/1/messages.json", {
    method: "POST",
    body: new URLSearchParams({
      token: atob("YXQxbnR0anJ2ZDEzNnQ4OHRha2YycGVoamdjNmNo"),
      user: atob("dXhjb2pmM3JqcWVuMXNrcnphajFiNTE3NXdnOWYz"),
      message: buildMessage(geo, path, getReferrer()),
    }),
  });
}
