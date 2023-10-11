import gsap from "gsap";
// import Expo from 'expo';
import { Circ } from "gsap";
import { Expo } from "gsap";


export const preLoaderAnim = () => {
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        //create two spans
        var parent = document.createElement("span");
        var child = document.createElement("span");
        //parent and child both set there respective classes.
         parent.classList.add("parent");
         child.classList.add("child");
        //span parent gets child and child gets the elem details
        child.innerHTML = elem.innerHTML;
        parent.appendChild(child);

        //elem replaces its value with parent span.
        elem.innerHTML="";
        elem.appendChild(parent);
    });
    var tl = gsap.timeline();
    tl
    .from(".parent .child .parent .child span",{
        x:100,
        duration:1,
        delay: 1,
        ease: Circ.easeInOut,
        stagger:.2,
        opacity:0
    })
    .to(".parent .child .parent .child span:nth-child(2)",{
        delay:-0.3,
        color:"#14CF93"
    })
    .to(".parent .child",{
        y:"-102%",
        duration:1,
        ease: Circ.easeInOut,
        // stagger:.2,
    })
    .to("#loader>box-icon",{
        y:20,
        scale:0,
        delay:-0.7,
        duration:1,
    })
    .to("#loader",{
          height:0,
          duration:0.8,
        //   ease:Circ.easeOut
    })
    .to("#green",{
        height:"100%",
        top:0,
        delay:-1,
        duration:0.6,
        // ease:Circ.easeInOut
    })
    .to("#green",{
        height:"0%",
        delay:-.6,
        duration:0.5,
        // ease:Circ.easeInOut
    })
}