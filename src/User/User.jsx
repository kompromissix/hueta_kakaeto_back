import './User.css'
import makaka from './User-assets/funny-klev-club-d91w-p-smeshnie-kartinki-obezyana-za-kompyuterom-8.jpg'
import Header from '../Header/Header'
import axios from 'axios';
import React, { useState, useEffect,texts} from 'react'


export default function User(){
    const [data, setdata] = useState([]);
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then(response => {
                setdata(response.data)
            })
            .catch(error => {
                console.error("Ошибка", error)
            })
    }, [])
    const aaa = Array.from(data)
    console.log(aaa[0])
    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token'); // Предполагаем, что вы сохраняете токен в localStorage
            localStorage.setItem('token', response.data.token);
            if (!token) {
                setError('Unauthorized');
                return;
            }

            try {
                const response = await fetch('http://localhost:3000/users', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await response.json();
                setUserData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUserData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userData) {
        return <div>Loading...</div>;
    }
    
    return(
        <>
            <Header/>
            <main>
                <section>
                    <div>
                        <div>
                            <img src={makaka} alt="" />
                            <div>
                                <input type='text' placeholder={aaa[0] == undefined ? null : aaa[0].name_user}/>
                                <input type='text' placeholder={aaa[0] == undefined ? null : aaa[0].age_user}/>
                                <input type='text' placeholder={aaa[0] == undefined ? null : aaa[0].mail_user}/>
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder={aaa[0] == undefined ? null : aaa[0].nick_user}/>
                            <input type="text" placeholder={aaa[0] == undefined ? null : aaa[0].number}/>
                            <button type="button">SAVE</button>
                            <p><strong>Имя пользователя:</strong> {userData.name_user}</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}