export {}

const RED:string = "RED"
const AMBER:string = "AMBER"
const GREEN:string = "GREEN"



let state: string = RED
let light : string;
function changeLights(){
    switch(state){
        case(RED):
        light= "Red"
        state = AMBER;
        break
        case(AMBER):
        light = "Amber"
        state = GREEN;
        break
        case(GREEN):
        light ="Green"
        state = RED;
        break
    }

    console.log(light)
}

setInterval(changeLights, 1000)