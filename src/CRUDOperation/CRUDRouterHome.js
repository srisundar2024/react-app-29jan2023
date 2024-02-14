import { Route, Routes, Link, NavLink, useParams, useNavigate } from 'react-router-dom';
import CrudHome from "./CRUDHome";
//import { Update } from './CRUDOperation/Update';
import ReadUsers from "./ReadUser";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";

export default function CRUDRouterHome()
{
    return <div>
        <Routes>
            <Route path="/" element={ <CrudHome></CrudHome> }></Route>
            <Route path="/ReadUsers" element={ <ReadUsers/> }></Route>
            <Route path="/CreateUser" element={ <CreateUser></CreateUser> }></Route>
            <Route path="/UpdateUser" element={ <UpdateUser></UpdateUser> }></Route>
        </Routes>
    </div>
}