import { useMemo, useState, useCallback } from "react";

const UseMemoAndUseCallbackHook = () => {

    //const ordinaryVariable = "hello";
    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(1);
    const [inc, setInc] = useState(0);

    //const power = powerOf(number);
    const power1 = useMemo(() => powerOf(number1), [number1]);

    const power2 = useCallback(() => powerOf(number2), [number2]);

    const onChange1 = event => {
        setNumber1(Number(event.target.value));
    };

    const onChange2 = event => {
        setNumber2(Number(event.target.value));
    };

    const onClick = () => setInc(i => i + 1);
    
    return (
        <div>               
            (useMemo() Hook) Power of 
            <input type="text" value={number1} onChange={onChange1} />
            is {power1}
            
            <br></br>
            
            (useCallback() Hook) Power of 
            <input type="text" value={number2} onChange={onChange2} />
            is {power2}
            
            <br></br>

            <button onClick={onClick}>Re-render</button>{inc}
        </div>
    );  
};

function powerOf(n){
    console.log('powerOf(' + n + ') called!');
    return n * n;
}

export default UseMemoAndUseCallbackHook;