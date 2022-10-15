import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Carousel from "../Hero Section/Carousel"
import AuthService from "../Auth/auth.service";


function SignUp() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate('');

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('**Name is required'),
    username: Yup.string().required('**Username is required'),
    email: Yup.string().required('**Email is required'),
    password: Yup.string().required('**Password is required')
      .min(6, '**more than 6 characters is required'),
    confirmPassword: Yup.string().required('**Please confirm the password')
      .oneOf([Yup.ref('password'), null], '**confirm password does not match')
  });

  const onSubmit = async (data) => {
    console.log(JSON.stringify(data, null, 2))
    console.log({ role })
    try {
      await AuthService.signup(name, username, email, password, role).then((response) => {
        // console.log('succuessfully sign up', response);
        navigate('/signin')
        window.location.reload();
      },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  return (
    <div className=" max-w-[1250px] mx-auto z-10 overflow-hidden mt-11 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 m-3 pl-10 pr-5 h-fit shadow-lg shadow-purple-500 ">
      <div className="col-span-2 mt-10 mb-8 ">
        <Carousel />
      </div>

      <div className="w-full max-w-80% m-auto flex justify-start items-start ">
        <div className="w-full">
          <form className="bg-white shadow-md rounded px-6 pt-6 pb-1 mb-3" onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
              <input
                placeholder='name'
                name='name'
                type="text"
                {...register('name')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'text-red' : ''}`} />
              <div className='text-red-600 font-semibold'>{errors.name?.message}</div>
            </div>

            <div className='mb-4'>
              <input
                placeholder='Username'
                name='username'
                type="text"
                {...register('username')}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'text-red' : ''}`} />
              <div className='text-red-600 font-semibold'>{errors.username?.message}</div>
            </div>

            <div className=" mb-4">
              <input
                placeholder='Email'
                name="email"
                type="text"
                {...register('email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className="text-red-600 font-semibold">{errors.email?.message}</div>
            </div>

            <div className="mb-4">
              <input
                placeholder='Password'
                name="password"
                type="password"
                {...register('password')}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'is-invalid' : ''}`}
              />
              <div className="text-red-600 font-semibold">{errors.password?.message}</div>
            </div>

            <div className="mb-4">
              <input
                placeholder='Confirm Password'
                name="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.confirmPassword ? 'is-invalid' : ''
                  }`}
              />
              <div className="text-red-600 font-semibold">
                {errors.confirmPassword?.message}
              </div>
            </div>
            <div className="mb-4">
              <select
                placeholder='Select Role'
                name="role"
                type="text"
                {...register('role')}
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className={`shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.role ? 'is-invalid' : ''}`}
              ><option >Select Role</option>
                <option value={"learner"} className={"bg-white hover:bg-purple-900"} >Learner</option>
                <option value={"educator"} >Educator</option>
              </select>
              <div className="text-red-600 font-semibold">{errors.role?.message}</div>
            </div>

            <div className='form-group'>
              <button type='submit' className='btn bg-purple-900 text-white p-1 rounded-md shadow-md hover:bg-purple-500 hover:text-white hover:font-semibold shadow-purple-300 hover:shadow-purple-900 hover:shadow-md '>Sign Up</button>
            </div>
            <Link className="inline-block align-baseline text-sm text-purple-500 hover:text-purple-900" to="/SignIn" >
              Have an account?{" "}Sign In
            </Link>
          </form>

        </div>
      </div>

    </div>

  );
}

export default SignUp;
