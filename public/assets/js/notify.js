import { isLocal, botCheck, notify } from './notify-library.js';


const isLocalReq = isLocal();
if (!botCheck() && !isLocalReq) {
  setTimeout(notify, 2000);
}