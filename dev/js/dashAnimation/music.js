import {gsap} from "gsap";

const musicTL = gsap.timeline();



export function musicAnimation(){
    musicTL

    .to("#TryMe",{duration:5, x:-90})
           .to("#TryMe",{duration:5, x:0})
          .from("#TryMe",{duration:5, x:-90});

    return musicTL;

}