import {gsap} from "gsap";

const gasTL = gsap.timeline();

gsap.set(".gas",{transformOrigin: "center"});


export function gasAnimation(){
    gasTL//.from("#triangle-1-l",{duration:1, x:-100})
    
   
    .to("#triangle-13-l",{duration:1.2, x:-50}, "moveGauge")
    .to("#triangle-12-l",{duration:1.2, x:-50}, "moveGauge")
    .to("#triangle-11-l",{duration:1.2, x:-50}, "moveGauge")
    .to("#triangle-10-l",{duration:1.2, x:-50}, "moveGauge");

    return gasTL;

}