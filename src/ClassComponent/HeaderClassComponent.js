//Step 1: Import React Library
import React from "react";

//Step 2: Create a Class Component
//extends = inheritance
class HeaderClassComponent extends React.Component
{
    //Step 3: Initialize this class component using COnsructor
    //Constructor is used to initialize this Class Component
    //Initialization Phase
    constructor()
    {
        //Super() will calls Parent Component constructor & initialize the parent class
        super();
    }

    //Step 4: call the render() function/method, to return some output from this COmponent
    render()
    {
        return <h1>Flipkart.com</h1>
    }
}

//Step 5: Export this class Component
export default HeaderClassComponent;