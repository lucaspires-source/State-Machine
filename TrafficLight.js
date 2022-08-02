"use strict";
exports.__esModule = true;
/*
const RED:string = "RED"
const AMBER:string = "AMBER"
const GREEN:string = "GREEN"
*/
var States;
(function (States) {
    States[States["Red"] = 0] = "Red";
    States[States["Amber"] = 1] = "Amber";
    States[States["Green"] = 2] = "Green";
})(States || (States = {}));
var state = States.Red;
var light;
function changeLights() {
    switch (state) {
        case (States.Red):
            light = "Red";
            state = States.Amber;
            break;
        case (States.Amber):
            light = "Amber";
            state = States.Green;
            break;
        case (States.Green):
            light = "Green";
            state = States.Red;
            break;
    }
    console.log(light);
}
setInterval(changeLights, 1000);
