import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const LogIn = () => {

    const { handleSubmit, register, formState: { errors } } = useForm()

    const logSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='w-full h-[150vh] flex items-center'>
            <div className='w-[50%] h-full flex items-center justify-center bg-white'>
                <div className='w-[80%] h-[80%] bg-black text-white'>
                    <div className='flex flex-col items-center mt-12 '>
                        <img src="src/img/logo.svg" alt="Logo" className='w-32 object-cover' />
                        <p className='font-bold mt-3'>Cinemaniac</p>
                        <p className='font-bold'>Already A Member? Log In</p>
                    </div>
                    <form onSubmit={handleSubmit(logSubmit)} >
                        <div className='flex flex-col items-center mt-12'>
                            <input
                                {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
                                name='email' className='w-[453px] h-[43px] rounded-xl p-5 text-black' type="email" placeholder='Enter Your Email' />

                            {errors.email?.type === 'required' && "Email is Required"}
                            {errors.email?.type === 'pattern' && "Must be a Valid Email"}

                            <input  {...register('password', { required: true, minLength: 8, maxLength: 20 })} name='password' className='w-[453px] h-[43px] rounded-xl p-5 mt-5 text-black' type="password" placeholder='Enter Your Password' />

                            {errors.password?.type === 'required' && "Password is Required"}

                            <button className='w-[453px] h-[43px] rounded-xl border-2 border-black bg-red-800 text-white mt-5 hover:bg-red-500'>Log In</button>
                        </div>
                    </form>

                    <div className='flex flex-col items-center mt-12'>
                        <p>Don't have An Account ? <Link to='/register'><span className='cursor-pointer text-bold text-green-700'>Register</span></Link> </p>
                        <p className='text-bold cursor-pointer mt-2'>Forgot Password?</p>
                    </div>

                </div>

            </div>

            <div className='w-[50%] h-full'>
                <img className='w-full h-full object-cover' src="src/img/movies.jpg" alt="Movie Poster" />
            </div>
        </div>
    )
}

export default LogIn