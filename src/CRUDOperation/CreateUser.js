import React, { useState } from 'react';
import axios from 'axios';
//import useHistory from "react-router-dom"; 

export default function CreateUser() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, 
        {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            //history.push('/read')
        })
    }

    return (
        <div>
            <form className="create-form">
                <div>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} required/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <input type='checkbox' onChange={(e) => setCheckbox(!checkbox)} />
                    <label>I agree to the Terms and Conditions</label>
                </div>
                <input onClick={() => postData()} type='button' value='Register'></input>
            </form>
        </div>
    )
}