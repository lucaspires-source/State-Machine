"use strict";
exports.__esModule = true;
var RED = "RED";
var AMBER = "AMBER";
var GREEN = "GREEN";
var state = RED;
var light;
function changeLights() {
    switch (state) {
        case (RED):
            light = "Red";
            state = AMBER;
            break;
        case (AMBER):
            light = "Amber";
            state = GREEN;
            break;
        case (GREEN):
            light = "Green";
            state = RED;
            break;
    }
    console.log(light);
}
setInterval(changeLights, 1000);
