import React from "react"; 
import { useRef } from "react";
import { useEffect } from "react";

function Canva(){

const canvaRef = useRef(null);
const Cont = useRef(null);
 

useEffect(()=>{
   
   const canvas = canvaRef.current;
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   const context = canvas.getContext('2d'); 
   Cont.current = context;
   Sky();
   Star();
   Moon();
   Spots();
}, []);

function Cir(x, y,rad, color){
    Cont.current.beginPath();
    this.x = x; this.y = y; this.color = color;
    this.rad = rad;
    Cont.current.arc(this.x, this.y, this.rad, Math.PI*2, false);
    Cont.current.fillStyle = this.color;
    Cont.current.fill();

}

function Rec(x, y, w, h, color){
    Cont.current.beginPath();
    this.x = x;  this.y = y; this.w = w; this.h = h;
    this.color = color;
    Cont.current.fillStyle = color;
    Cont.current.fillRect(this.x, this.y, this.w, this.h);
 
}


function Moon(){ 
    Cont.current.beginPath();
    Cont.current.arc(180,145,55, Math.PI *2,false);
    Cont.current.fillStyle = '#F2E8E8'
    Cont.current.fill();
    Cont.current.lineWidth = 4.6;
    Cont.current.strokeStyle = '#fff';
    Cont.current.stroke();
    
}

function Sky(){
    Cont.current.beginPath();
    Cont.current.fillStyle = '#171616';
    Cont.current.fillRect(0,0,window.innerWidth,340);
    
}
function Spots(){
    new Cir(190, 190, 5.7, '#B4ACAC');
    new Cir(190, 191, 2.3, '#696269');
    new Cir(170, 120, 1.2, '#B4ACbf');
    new Rec(170, 120, 10, 10, '#7D7F87')
    new Cir(150, 120, 4, '#918D8D');
    new Rec(142, 118, 8,6, '#9C9C9C')
    new Cir(172, 125, 4.4, '#7D7F87');
    new Cir(177, 125, 4.4, '#AB9D9D');
    new Cir(181, 125, 4.3, '#A09C9C')

    
}

function Star(){
    for(let i = 0; i<50; i++){
        let y = Math.random() * 280 + 1.5;
        let x = Math.random() * 1100 + 230;
        new Cir(x,y, 1.2, "#fff")
    }
}
 
return (<canvas   ref={canvaRef} className="canvas"></canvas>)

}
export default Canva;