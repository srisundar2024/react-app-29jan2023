import { Link, NavLink } from "react-router-dom";

function Menu()
{
    return <>
            <Link to="/">Home</Link>
            <br/>
                       
            <Link to="about">About</Link> 
            <br/> 

            <Link to="contact1">Contact</Link>
            <br/>
            
            <NavLink to="productlist" activeClassName="active">Product List</NavLink>
            <br/>
           
            <a href="https://www.google.com">Google</a>
            <a href="about.html">About</a>

        </>
}

export default Menu;