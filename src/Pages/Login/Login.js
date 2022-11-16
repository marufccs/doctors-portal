import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogIn = (data) => {
    console.log(data)
  }
    return (
      <div className='h-[600px] flex justify-center items-center'>
      <form className='w-72' onSubmit={handleSubmit(handleLogIn)}>
      <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Your Email</span>
  </label>
  <input  {...register("email")} type="email" placeholder="Type here" className="input input-bordered w-full " />
</div>
      <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Your Password</span>
  </label>
  <input  {...register("password")} type="password" placeholder="Your Password" className="input input-bordered w-full " />
</div>
<span className="label-text">Forgot Password?</span>
      <input className='btn btn-outline w-full mt-6' type="submit" />
      <div>
        <p className='label-text'>New to Doctor's Portal? <Link className='text-secondary' to='/signup'>Create new account here</Link> </p>
      </div>
      <div className="divider">OR</div>
      <input className='btn btn-outline w-full mt-6' value="Log in with Google" />
    </form>
    </div>
    );
};

export default Login;