import React, { useEffect, useState, useRef } from "react";

export default function UseRefHook(){

    //var paraStyle1 = {color:'violet'};
    var [paraStyle1, setparaStyle1] = useState({color:'violet'});
    var paraStyle2 = useRef({color:'orange'});

    //useEffect(() => {
        //console.log("Paragraph Style: " + paraStyle1.current);
        //console.log("Paragraph Style: " + paraStyle2);
    //});

    useEffect(() => {
        console.log("Parastyle 1 changed - " + paraStyle1);
    }, [paraStyle1]);

    useEffect(() => {
        console.log("Parastyle 2 changed - " + paraStyle2);
    }, [paraStyle2]);

    const changeParaColor = () => {
        //paraStyle1 = {color:'red'};
        setparaStyle1({color:'blue'});

        //current is the inbuilt property of useRef() hook.
        //This property stores the actual value of the variable
        paraStyle2.current.style.color = "red";
    }

    return <>
            <p style={paraStyle1}>Amazon.com (without using useRef() hook)</p>

            <p ref={paraStyle2}>Amazon.com (using useRef() hook)</p>

            <button onClick={()=> changeParaColor()}>change Color</button>
        </>    
}