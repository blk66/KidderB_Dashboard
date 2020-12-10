import {gsap} from "gsap";

const speedTL = gsap.timeline();

gsap.set("#Group-4",{transformOrigin: "center"});


export function speedAnimation(){
    speedTL

//    .from("#Group-4",{rotation:-90, duration:2})
    .to("#Group-4",{rotation:15, duration:4})
    .to("#Group-4",{rotation:-80, duration:5});
    

    return speedTL;

}