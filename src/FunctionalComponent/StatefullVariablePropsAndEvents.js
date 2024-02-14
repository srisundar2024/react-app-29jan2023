import { useState } from "react";

function StatefullVariablePropsAndEvents(prop)
{
    //Normal Variables / State Less variable
    var productName1 = "Iphone";
    var productModel1 = "10";
    var productPrice1 = "55000";

     //Create statefull variables - useState() hook
     var [productName, changeProductName] = useState('Vivo');
     var [productModel, changeProductModel] = useState('M30s');
     var [productPrice, changeProductPrice] = useState(12000);

    return <div>
           <h2>Normal Variables</h2>
           <h3>Product Name: {productName1}</h3> 
           <h3>Product Model: {productModel1}</h3> 
           <h3>Product Price: {productPrice1}</h3> 

           <h2>Statefull Variables</h2>
           
           <h3>Product Name: {productName}</h3>
           <h3>Product Model: {productModel}</h3> 
           <h3>Product Price: {productPrice}</h3> 

            {/* productName = "Red Mi"; //Wrong way to change a Statefull variable */}
            <button onClick={() => changeProductName('Red Mi')}>Change Product Name</button>

            <h2>using Props in FC</h2> 
            <h3>Product Name: {prop.productName3}</h3>
            <h3>Product Model: {prop.productModel3}</h3> 
            <h3>Product Price: {prop.productPrice3}</h3> 

        </div>
}

StatefullVariablePropsAndEvents.defaultProps = {
    productName3:"Oppo",
    productPrice3:"70000",
    productModel3:"777"
}

export default StatefullVariablePropsAndEvents;