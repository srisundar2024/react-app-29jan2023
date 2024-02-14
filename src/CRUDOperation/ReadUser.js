import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ReadUsers() {

    var [APIData, changeAPIData] = useState([]);
    var [loadPage, reloadPage] = useState(false);

    //Hook - useEffect() - this hook is used to find whether the component loads / updates in FC
    useEffect(() => {
        console.log("useEffect hook called");

        //axios is a adavanced React Library for performing API calls
        //axios is similar to fetch() method in JS
        //https://www.npmjs.com/
        //npm i axios
        
        //Promise
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((response) => {
                console.log(response);
                changeAPIData(response.data);//Assign the API response to the statefull variable - APIData
            })
            .catch((response) => console.log("Error:" + response))

        //getData();

    }, [loadPage]);

    const setData = (data) => {
        //{id: "51", firstName: "Gomathi", lastName: "P", checkbox: true}
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)

        console.log(localStorage.getItem("First Name"));
    }

    const onDelete = (id) => {
        //id = 51
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();           
        })
    }

    function getData()
    {
         //Promise
         axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
         .then((response) => {
             console.log(response);
             changeAPIData(response.data);//Assign the API response to the statefull variable - APIData
         })
         .catch((response) => console.log("Error:" + response))

    }

    return <>
        <button onClick={() => reloadPage(false)} >Reload Page</button>
        <table>            
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Checkbox Value</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            {APIData.map((user) => {
                return (
                    <tr>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.checkbox}</td>
                        <td>
                            <Link to='/UpdateUser'>
                                <input type='button' onClick={() => setData(user)} value='Update'></input>
                            </Link>
                        </td>
                        <td>
                            <input type='button' onClick={() => onDelete(user.id)} value='Delete'></input>
                            {/* <Button onClick={() => onDelete(getData)}>Delete</Button> */}
                        </td>
                    </tr>
                )
            })}            
        </table>
    </>

}