import {gsap} from "gsap";

const mapTL = gsap.timeline();

gsap.set("#map-move",{transformOrigin: "center"});


export function mapAnimation(){
    mapTL
    .to("#map-move",{duration:12,y:270})

    
    

    return mapTL;

}