import { Route, Routes, Link, NavLink, useParams, useNavigate } from 'react-router-dom';

const products = [

    {id:1, name:'Samsung', model: 'S10', price:12000, url:'https://m.media-amazon.com/images/I/414iMwsAu6L._SY300_SX300_QL70_FMwebp_.jpg'},
    {id:2, name:'Vivo', model: 'V10', price:9000, url:'https://m.media-amazon.com/images/I/41KBGUyS3JL._SX300_SY300_QL70_FMwebp_.jpg'},
    {id:3, name:'Iphone', model: 'I10', price:40000, url:'https://m.media-amazon.com/images/I/31O8D6p7sfL._SY445_SX342_QL70_FMwebp_.jpg'},
    {id:4, name:'Redmi', model: 'I10', price:35000, url:'https://m.media-amazon.com/images/I/41sJ50FH9OL._SX300_SY300_QL70_FMwebp_.jpg'}

];

export const ProductDetail = () => {
    
    const navigate = useNavigate();//Hook
    
    //this productId name should match the exact name given in the Routing config
    const { productId } = useParams();//Hooks
    console.log(productId);
    
    //{id:2, name:'Vivo', model: 'V10', price:9000, url:'https://m.media-amazon.com/images/I/41KBGUyS3JL._SX300_SY300_QL70_FMwebp_.jpg'}
    var prod = products.find(p => p.id == productId);

    //in real time, a API is called and we will get the product details as response from API.

    //return <h1>This is ProductDetail Page {params.name}</h1>
    return (
        <>
        
        <h1>This is ProductDetail Page of product - {productId} - {products.find(p => p.id == productId).name}</h1>
        <p>
          <strong>Product ID: </strong>
          {productId}
        </p>
        <p>
          <strong>Product Name: </strong>
          {/* 3 == 3 = True - {id:2, name:'Vivo', model: 'V10', price:9000} */}
          {prod.name}
          {/* { products.filter(product => product.id == productId).name } */}
        </p>
        
        <img src={prod.url} width="150px" height="150px"></img>
        
        <br></br>
        <button className="btn" onClick={() => navigate('/productlist')}>
            back to Products
        </button>
       
        {/* <Link to="/product"> back to Products </Link> */}
       
        <button className="btn" onClick={() => navigate(-1)}>
            Go Back
        </button>
        
        <button onClick={() => navigate("/")}>Go Home</button>
      
      </>
    );
    
  };