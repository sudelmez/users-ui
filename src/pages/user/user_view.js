import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './user_view.css'
function Userpage() {
    // const [user, setUser] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const { user } = location.state || {};

    // const getUsers = async () => {
    //     try {
    //         const response = await fetch('http://localhost:5273/WeatherForecast/' + { id }, {
    //             method: 'POST', headers: {
    //                 "Content-Type": "application/json"
    //             },
    //         });
    //         if (response.status === 200) {
    //             const res = await response.json();
    //             console.log("res");
    //             console.log(res);
    //             if (res) {
    //                 setUser(res);
    //                 return res;
    //             }
    //         }
    //     } catch (error) {

    //     }
    // }
    // useEffect(() => {
    //     getUsers();
    // })
    return (
        <div className='User' >
            <h1>{user.name}</h1>
            <h1>{user.lastName}</h1>
            <h1>{user.client}</h1>
        </div>

    );
}

export default Userpage;