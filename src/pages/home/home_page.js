import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home_page.css'
function HomePage() {
    const [users, setUsers] = useState([]);
    const [backusers, setbackUsers] = useState([]);
    const navigate = useNavigate();
    const [pop, setPop] = useState(false);

    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:5273/UserList/get', {
                method: 'GET', headers: {
                    "accept": "text/plain"
                },
            });
            if (response.status === 200) {
                const res = await response.json();
                if (res) {
                    setUsers(res);
                    setbackUsers(res);
                    return res;
                }
            }
        } catch (error) {

        }
    }
    const delItem = (user) => {
        try {
            const response = fetch('http://localhost:5273/UserList/delete',
                {
                    method: 'POST', headers: {
                        "Content-Type": " application/json",
                        "accept": "text/plain"
                    },
                    body: JSON.stringify(user)
                });
            console.log(response);
            setbackUsers(users);
        } catch (error) {
            console.log(error);
        }
    }

    const getBack = () => {
        try {
            const response = fetch('http://localhost:5273/WeatherForecast/update',
                {
                    method: 'POST', headers: {
                        "Content-Type": " application/json",
                        "accept": "text/plain"
                    },
                    body: JSON.stringify(backusers)
                });

        } catch (error) {

        }
    }
    useEffect(() => {
        getUsers();
    })
    return (

        <div className='Home'>
            {/* <button onClick={getBack}>get back</button> */}
            {users.map((user) =>
                <div key={user.id} className='comp'> <h2 onClick={() => {
                    navigate('/user', { state: { user } });
                }} className="item">
                    {user.name + " " + user.lastName}
                </h2>
                    <button onClick={() => { delItem(user); }}>delete</button>
                </div>

            )}
        </div>

    );
}

export default HomePage;