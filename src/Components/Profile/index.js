import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../Auth/auth.service';
import EducatorService from '../Auth/educator.service';

const Profile = () => {
    const [EducatorContent, setEducatorContent] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await EducatorService.getEducatorDashBoard();
                setEducatorContent(response.data.message);
                console.log('Profile',response )
                setLoading(false);
            } catch (err) {
                // console.log(err);
                if (err.response.data.message === "Unauthorized!") {
                    AuthService.logout();
                    navigate('/signin');
                    window.location.reload();
                }
            }
        }
        getData();
    }, [])

    return (
        <div>
            <h3 className='text-center mt-6 text-3xl font-bold underline-offset-2 underline text-purple-900 inline-block p-2 '>My Profile</h3>
        </div>
    )
}

export default Profile 