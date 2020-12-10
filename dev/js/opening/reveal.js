import {gsap} from "gsap";


const revealTL = gsap.timeline();



export function revealAnimation(){
    revealTL
    .from("#speed-gauge",{alpha:0, duration:2},"reveal")
    .from("#temp",{alpha:0, duration:2},"reveal")
    .from("#music",{alpha:0, duration:2},"reveal")
    .from("#gas-gauge",{alpha:0, duration:2},"reveal")
    .from("#map",{alpha:0, duration:2},"reveal")
    .from("#miles",{alpha:0, duration:2},"reveal")
    .from("#radar",{alpha:0, duration:2},"reveal")
    .from("#time",{alpha:0, duration:2},"reveal")
    .from("#blinkers",{alpha:0, duration:2},"reveal")


    return revealTL;

}