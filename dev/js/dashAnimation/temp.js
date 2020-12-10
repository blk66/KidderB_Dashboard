import {gsap} from "gsap";

const tempTL = gsap.timeline();

gsap.set("#temp-needle",{transformOrigin: "center"});


export function tempAnimation(){
    tempTL
    .from("#temp-needle",{rotation:180, duration:5})
    .to("#temp-needle",{rotation:180, duration:10});
    

    return tempTL;

}