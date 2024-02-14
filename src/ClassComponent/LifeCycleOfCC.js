import React from "react";

class LifeCycleOfCC extends React.Component
{
    constructor()
    {
        super();

        //State Full Variable - Creation
        //Property
        this.state = 
            {
                productName: "Iphone 9", 
                productPrice: "50000"
            };
    }

    render()
    {
        //return <h1>Life Cycle of CC</h1>

        return (<div>
                    <h1>Life Cycle of CC</h1>

                    Product 2 (using Statefull Variable)(Internal CSS):
                    {/* State Full Variable - Accessing  */}
                    <h3>{this.state.productName} : {this.state.productPrice}</h3>

                    <button onClick={()=>this.ChangeProduct()}>Change Product</button>
                
                </div>
            );
    }
    
    ChangeProduct()
    {
        //Method/function
        this.setState(
            {
                productName:"Vivo",
                productPrice: 60000
            }
        );

        // this.myProductName = "Vivo X20";
        // console.log(this.myProductName);
    }

    componentWillMount()
    {
        //alert("Component Will Mount Event is called");
    }

    componentDidMount()
    {
        //alert("Component Did Mount Event is called");
    }

    componentWillUpdate()
    {
        alert("Component Will Update Event is called");
    }

    componentDidUpdate()
    {
        alert("Component Did Update Event is called");
    }

    shouldComponentUpdate()
    {
        return false;
    }
}

export default LifeCycleOfCC;