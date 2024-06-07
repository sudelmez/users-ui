import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home_page.css'
import AlertShow from '../../components/alert';
function HomePage() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const [pop, setPop] = useState(false);
    const [selectedUser, setselectedUser] = useState({});

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
                        "Content-Type": "application/json",
                        "accept": "text/plain"
                    },
                    body: JSON.stringify(user)
                });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    const showAlert = () => {
        setPop(true);
    }
    const onClickYes = () => {
        delItem(selectedUser);
        setPop(false);
    }
    const onClickNo = () => {
        setPop(false);
    }
    useEffect(() => {
        getUsers();
    })
    return (
        <div className='Home'>
            {pop ? (<>
                <AlertShow onClickedYes={onClickYes} onClickedNo={onClickNo} ></AlertShow>
            </>) : (null)}
            {users.map((user) =>
                <div key={user.id} className='comp'> <h2 onClick={() => {
                    navigate('/user', { state: { user } });
                }} className="item">
                    {user.name + " " + user.lastName}
                </h2>
                    <button onClick={() => {
                        showAlert();
                        setselectedUser(user);
                    }}>delete</button>
                </div>

            )}
        </div>

    );
}

export default HomePage;