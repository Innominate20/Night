import React from "react";
import { useRef, useEffect} from "react";

function Wave(props){
    
const canvRef = useRef(null);
const Cont = useRef(null);
 
 
useEffect(()=>{
   
  const canvas = canvRef.current;
  canvas.width = 800;
  canvas.height = 500
  const context = canvas.getContext('2d'); 
  Cont.current = context;
  wave();
},[]);
    
const amplitude = 10; 
const frequency = 0.1;  
var phase = 0;
function wave() {
  
Cont.current.clearRect(0, 0, 700, 700)
 
Cont.current.beginPath();
Cont.current.moveTo(0, 473);
for (let x = 0; x < 300; x += 10) {
  const y = 900 / 2 + amplitude * Math.sin(frequency * x + phase) + 22;
  Cont.current.lineTo(x, y);
}
   
Cont.current.strokeStyle = '#CFCFD0';
Cont.current.lineWidth = 2;
Cont.current.stroke();
phase += 0.035;

requestAnimationFrame(wave);
}
  return(
    
    <canvas ref={canvRef} className={props.class}> </canvas>

  )
}
export default Wave;