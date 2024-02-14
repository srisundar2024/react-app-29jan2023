import React from "react";

class StatefullVariablePropsAndEvents extends React.Component
{
    constructor()
    {
        super();

        //State Full Variable
        this.state = {productName: "Iphone 9", productPrice: "50000"};
    }
    
    render()
    {
        //Normal Variable / State Less Variable
        var myProductName = "Samsung A20";
        var myProductPrice = 20000;

        myProductName = "Samsung A40";
        var productStyle = {color:'red', fontSize:"25px"};

        //<><></> - React Fragments

        return (<>
                    <h3 style={{color:'blue', fontSize:"25px"}}>Amazon.in</h3>
                    <h3 style={productStyle}>Amazon.in</h3>
                    <h3 className="myStyle">Amazon.in</h3>
                    
                    Product 1 (using Stateless Variable)(Inline CSS): 
                    <h3>{myProductName} : {myProductPrice}</h3>

                    Product 2 (using Statefull Variable)(Internal CSS): 
                    <h3>{this.state.productName} : {this.state.productPrice}</h3>

                    <button onClick={()=>this.ChangeProductName()}>Change Product Name</button>
                    <br></br>
                    <br></br>
                    Product 3 (using this.Props): 
                    <h3>{this.props.productName} : {this.props.productPrice}</h3>

                    Product 4 (using this.Props): 
                    <h3>{this.props.productName} : {this.props.productPrice}</h3>
                
                </>
        );
    }
   
    ChangeProductName()
    {
        this.setState(
            {
                productName:"Vivo",
                productPrice: 60000
            }
        );
    }
}

StatefullVariablePropsAndEvents.defaultProps = {
    productName:"Samsung 123",
    productPrice:"70000"
}

export default StatefullVariablePropsAndEvents;