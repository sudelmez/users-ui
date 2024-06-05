import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home_page.css'
function HomePage() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const getUsers = async () => {
        try {
            const response = await fetch('http://localhost:5273/WeatherForecast', {
                method: 'GET', headers: {
                    "accept": "text/plain"
                },
            });
            if (response.status === 200) {
                const res = await response.json();
                console.log("res");
                console.log(res);
                if (res) {
                    setUsers(res);
                    return res;
                }
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        getUsers();
    })
    return (
        <div className='Home'>
            {users.map((user) =>
                <h2 onClick={() => {
                    navigate('/user', { state: { user } });
                }} className="item">
                    {user.name + " " + user.lastName}
                </h2>
            )}
        </div>

    );
}

export default HomePage;