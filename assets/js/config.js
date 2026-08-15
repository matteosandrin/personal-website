import {
  isLocal,
  togglePageVisitTracking,
  getIpData,
  botCheck,
} from "/assets/js/notify-library.js";

document
  .getElementById("pageVisitTrackingButton")
  .addEventListener("click", togglePageVisitTracking);

const isLocalReq = await isLocal();
if (isLocalReq) {
  document.getElementById("pageVisitTrackingLabel").textContent = "off";
} else {
  document.getElementById("pageVisitTrackingLabel").textContent = "on";
}

getIpData((data) => {
  document.getElementById("ipAddressCell").textContent = data.ip;
  document.getElementById("isBotCell").textContent = botCheck();
  document.getElementById("geoCountryCell").textContent =
    data.country_name + " " + data.emoji_flag;
  document.getElementById("geoRegionCell").textContent = data.region;
  document.getElementById("geoCityCell").textContent = data.city;
  document.getElementById("geoIspCell").textContent = data.asn.name;
});
