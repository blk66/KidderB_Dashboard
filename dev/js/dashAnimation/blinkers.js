import {gsap} from "gsap";

const blinkersTL = gsap.timeline();



export function blinkersAnimation(){
    
    blinkersTL 
        .to("#blinker-left",{duration:0.5, alpha:0,repeat:4,ease:"none"},"blink1")
        .to("#blinker-right",{duration:0.5, alpha:0,repeat:4,ease:"none"},"blink1")
        .from("#blinker-left",{duration:0.5, alpha:0,repeat:4,ease:"none"},"blink2")
        .from("#blinker-right",{duration:0.5, alpha:0,repeat:4,ease:"none"},"blink2")
        // .to("#blinker-left",{duration:0.5, alpha:0},"blink3")
        // .to("#blinker-right",{duration:0.5, alpha:0},"blink3")
        // .from("#blinker-left",{duration:0.5, alpha:0},"blink4")
        // .from("#blinker-right",{duration:0.5, alpha:0},"blink4")

    return blinkersTL;
}