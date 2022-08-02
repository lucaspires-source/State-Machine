export {}
/*
const RED:string = "RED"
const AMBER:string = "AMBER"
const GREEN:string = "GREEN"
*/

enum States {
    Red,
    Amber,
    Green
}

let state: States = States.Red
let light : string;
function changeLights(){
    switch(state){
        case(States.Red):
        light= "Red"
        state = States.Amber;
        break
        case(States.Amber):
        light = "Amber"
        state = States.Green;
        break
        case(States.Green):
        light ="Green"
        state = States.Red;
        break
    }

    console.log(light)
}

setInterval(changeLights, 1000)