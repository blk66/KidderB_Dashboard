import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const logoTL = gsap.timeline();

gsap.set("#mazda-logo",{transformOrigin: "center"});
gsap.set("#mazda-right-fill",{transformOrigin: "center"});
gsap.set("#mazda-left-fill",{transformOrigin: "center"});
gsap.set("#z-clip",{transformOrigin: "center"});


export function logoAnimation(){
    logoTL
    .from("#z-clip",{duration:.8,x:-100,y:100})
    .from("#mazda-right",{duration:.7, drawSVG:"0%"},"startLogo")
    .from("#mazda-left",{duration:.7, drawSVG:"0%"},"startLogo")
    .from("#mazda-right-fill",{alpha:0, duration:1.7},"startLogo")
    .from("#mazda-left-fill",{alpha:0, duration:1.7},"startLogo")
    .from("#mazda-outside",{duration:1,alpha:0},"-=1")
    .to("#mazda-words",{duration:.3,alpha:0})
    .from("#mazda-logo",{duration:1, scale:3 },"startMove","-=1")
    .from("#mazda-logo",{duration:1, y:300 },"startMove","-=1")


    return logoTL;

}