import { Route, Routes, Link, NavLink, useParams, useNavigate } from 'react-router-dom';

//JSON - Javascript Object Notation
//Object Array / JSON Array

const products = [

    {id:1, name:'Samsung', model: 'S10', price:12000, url:'https://m.media-amazon.com/images/I/414iMwsAu6L._SY300_SX300_QL70_FMwebp_.jpg'},
    {id:2, name:'Vivo', model: 'V10', price:9000, url:'https://m.media-amazon.com/images/I/41KBGUyS3JL._SX300_SY300_QL70_FMwebp_.jpg'},
    {id:3, name:'Iphone', model: 'I10', price:40000, url:'https://m.media-amazon.com/images/I/31O8D6p7sfL._SY445_SX342_QL70_FMwebp_.jpg'},
    {id:4, name:'Redmi', model: 'I10', price:35000, url:'https://m.media-amazon.com/images/I/41sJ50FH9OL._SX300_SY300_QL70_FMwebp_.jpg'}

];

export default function ProductList()
{
    return <>
    
        <h3>Products List</h3>
        {
            //in real time, a API is called and we will get the list of products as response from API. 

            products.map((product) => (
                <h5 key={product.id}>
                    {/* Dynamic ROuting */}
                     
                    <Link to={"/product/" + product.id}> {product.name} </Link> 
                    <br/>
                    <img src={product.url} width="150px" height="150px"></img>
                    <br/>Model: {product.model} - Price: {product.price}
                    <br/><br/>
                    {/* {item.name} - {item.price} */}
                </h5>
            )
            )
        }
    
    </>
}