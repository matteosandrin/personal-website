import Script from "next/script";

const GA_ID = "UA-122674032-1";

export function Analytics() {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <Script id="gtag">
        {`window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag("js", new Date());
gtag("config", "${GA_ID}");`}
      </Script>
      <Script src="https://linklytics.co/api/notify-4b30e4de-6180-46ae-b741-7b6aa4f648e9.js" />
    </>
  );
}
