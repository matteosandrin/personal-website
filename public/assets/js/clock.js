window.addEventListener("load", function () {
    updateClock();
    this.setInterval(updateClock, 1000);
});

function updateClock() {
    var svg = document.getElementById('jr-clock').contentDocument;

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hours_hand = svg.getElementById("hours_hand");
    const minutes_hand = svg.getElementById("minutes_hand");

    const pivot_point = getPivotPoint(svg);

    const minutes_hand_sec = minutes * 60 + seconds;
    const hours_hand_sec = (hours % 12) * 60 * 60 + minutes_hand_sec;
    
    const twelve_hours_sec = 12 * 60 * 60;
    const hours_rot_angle = hours_hand_sec / twelve_hours_sec * 360;
    hours_hand.setAttribute("transform", "rotate(" + hours_rot_angle + " " + pivot_point +")");
    
    const one_hour_sec = 60 * 60;
    const mins_rot_angle = minutes_hand_sec / one_hour_sec * 360;
    minutes_hand.setAttribute("transform", "rotate(" + mins_rot_angle + " " + pivot_point +")");
}

function getPivotPoint(svg) {
    const background = svg.getElementById("background");
    const pivot_x = background.getBBox().width / 2;
    const pivot_y = background.getBBox().height / 2;
    const pivot_point = pivot_x.toString() + " " + pivot_y.toString();
    return pivot_point;
}