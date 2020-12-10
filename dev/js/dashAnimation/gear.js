import {gsap} from "gsap";

const gearTL = gsap.timeline();

gsap.set("#needle-gear",{transformOrigin: "center"});


export function gearAnimation(){
    gearTL
   
    .from("#needle-gear",{rotation:90, duration:2})
    .to("#needle-gear",{rotation:15, duration:.4})
    .to("#needle-gear",{rotation:-50, duration:.7});
    

    return gearTL;

}