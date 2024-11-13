import { isLocal, togglePageVisitTracking } from '/assets/js/notify-library.js';

document.getElementById("pageVisitTrackingButton").addEventListener("click", togglePageVisitTracking);

const isLocalReq = await isLocal();
if (isLocalReq) {
  document.getElementById("pageVisitTrackingLabel").textContent = "off"
} else {
  document.getElementById("pageVisitTrackingLabel").textContent = "on"
}