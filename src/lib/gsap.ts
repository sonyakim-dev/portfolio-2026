import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Plugins are registered once, here; components import GSAP from this module.
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);
// Don't recalculate (and jump) when a phone's address bar shows/hides.
ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger, useGSAP };
