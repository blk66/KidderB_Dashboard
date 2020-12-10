import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import {radarAnimation} from "./dashAnimation/radar.js";
import {gasAnimation} from "./dashAnimation/gas.js";
import {speedAnimation} from "./dashAnimation/speed.js";
import {gearAnimation} from "./dashAnimation/gear.js";
import {milesAnimation} from "./dashAnimation/miles.js";
import {blinkersAnimation} from "./dashAnimation/blinkers.js";
import {musicAnimation} from "./dashAnimation/music.js";
import {tempAnimation} from "./dashAnimation/temp.js";
import {timeAnimation} from "./dashAnimation/time.js";
import {mapAnimation} from "./dashAnimation/map.js";
import {logoAnimation} from "./opening/logo.js";
import {revealAnimation} from "./opening/reveal.js";

const mainTL = gsap.timeline()
mainTL.add(logoAnimation())

mainTL.add(revealAnimation())

mainTL.add(gasAnimation(),"startGears")

mainTL.add(mapAnimation(),"startAnimation") 


mainTL.add(gearAnimation(),"startGears")
mainTL.add(milesAnimation(),"startAnimation")
mainTL.add(timeAnimation())
mainTL.add(blinkersAnimation())



mainTL.add(speedAnimation(),"startAnimation")
mainTL.add(musicAnimation(),"startAnimation")
mainTL.add(radarAnimation(),"startAnimation")
mainTL.add(tempAnimation(),"startGears")

GSDevTools.create();