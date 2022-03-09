import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import back from '../assets/login.jpg';
const login = () => {
  return <div className='flex justify-start items-center flex-col h-screen'>
    <div className='relative w-full h-full' style={{backgroundImage : "..assets/login.png"}}>
      Last done till 41:00 (https://youtu.be/1RHDhtbqo94)
    </div>
  </div>;
};

export default login;
