let clocks;

window.addEventListener("load", function () {
  const clock_ids = ["jr-clock", "milano-metro-clock"];
  clocks = clock_ids.map((id) => ({
    id,
    svg: document.getElementById(id).contentDocument,
    pivot_point: getPivotPoint(id),
  }));
  updateAllClocks();
  this.setInterval(updateAllClocks, 100);
});

function updateAllClocks() {
  clocks.forEach((clock) => updateClock(clock));
}

function updateClock(clock) {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  const hours_hand = clock.svg.getElementById("hours_hand");
  const minutes_hand = clock.svg.getElementById("minutes_hand");

  const minutes_hand_sec = minutes * 60 + seconds + milliseconds / 1000;
  const hours_hand_sec = (hours % 12) * 60 * 60 + minutes_hand_sec;

  const twelve_hours_sec = 12 * 60 * 60;
  const hours_rot_angle = (hours_hand_sec / twelve_hours_sec) * 360;
  hours_hand.setAttribute(
    "transform",
    `rotate(${hours_rot_angle} ${clock.pivot_point})`
  );

  const one_hour_sec = 60 * 60;
  const mins_rot_angle = (minutes_hand_sec / one_hour_sec) * 360;
  minutes_hand.setAttribute(
    "transform",
    `rotate(${mins_rot_angle} ${clock.pivot_point})`
  );
}

function getPivotPoint(id) {
  const svg = document.getElementById(id).contentDocument;
  const background = svg.getElementById("background");
  const pivot_x = background.getBBox().width / 2;
  const pivot_y = background.getBBox().height / 2;
  return `${pivot_x} ${pivot_y}`;
}
