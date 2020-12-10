import {gsap} from "gsap";

const milesTL = gsap.timeline();

gsap.set("#scroll",{transformOrigin: "center"});


export function milesAnimation(){
    milesTL

    .to("#scroll",{y:-25, duration:4});
    
    

    return milesTL;

}