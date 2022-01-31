import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import back from '../assets/logi';
const login = () => {
  return <div className='flex justify-start items-center flex-col h-screen'>
    <div className='relative w-full h-full'>
      <image src={back} className= 'w-full h-full object-cover'/>
      hello
    </div>
  </div>;
};

export default login;
