import {gsap} from "gsap";

const radarTL = gsap.timeline();

gsap.set("#line",{transformOrigin: "center"});
gsap.set("#dot-blip",{transformOrigin: "center"});


export function radarAnimation(){
    radarTL
    .from("#line",{rotation:360, duration:2, repeat:6, ease:"none"},"moveDot")
    .from("#dot-blip",{scale:0, duration:2, repeat:6, ease:"none"},"moveDot","-=3")
    .to("#dot-blip",{alpha:0, duration:2, repeat:6, ease:"none"},"moveDot","-=3");
    

    return radarTL;

}