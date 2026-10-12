"use client";

import { useEffect, useState } from "react";
import {
  type IpData,
  getIpData,
  isBot,
  isTrackingOff,
  setTrackingOff,
} from "@/lib/notify";

const tableClass =
  "my-4 min-w-[300px] border-2 border-black [&_:is(th,td)]:max-w-[350px] [&_:is(th,td)]:break-words [&_:is(th,td)]:border-2 [&_:is(th,td)]:border-black [&_:is(th,td)]:p-[5px]";

export function ConfigDebug() {
  const [ip, setIp] = useState<IpData>();
  const [tracking, setTracking] = useState<boolean>();

  useEffect(() => {
    setTracking(!isTrackingOff());
    getIpData().then(setIp);
  }, []);

  const toggleTracking = () => {
    setTrackingOff(Boolean(tracking));
    setTracking(!tracking);
  };

  const info = [
    ["Current IP", ip?.ip],
    ["isBot", ip && String(isBot())],
    ["Country", ip && `${ip.country_name} ${ip.emoji_flag}`],
    ["Region", ip?.region],
    ["City", ip?.city],
    ["ISP", ip?.asn.name],
  ];

  return (
    <>
      <table className={tableClass}>
        <thead>
          <tr>
            <th colSpan={2}>Debug info</th>
          </tr>
        </thead>
        <tbody>
          {info.map(([label, value]) => (
            <tr key={label}>
              <td>{label}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className={tableClass}>
        <thead>
          <tr>
            <th colSpan={3}>Debug settings</th>
          </tr>
          <tr>
            <th>Service</th>
            <th>Status</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Page visit tracking</td>
            <td>{tracking === undefined ? "" : tracking ? "on" : "off"}</td>
            <td>
              <button
                className="border border-black px-2"
                onClick={toggleTracking}>
                Toggle
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
