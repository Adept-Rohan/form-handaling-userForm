import React from 'react';
import { useForm } from 'react-hook-form';



const Register = () => {

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const formSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='w-full h-[150vh] flex items-center'>
            <div
                style={{ backgroundImage: 'url(src/images/login.jpeg)' }}
                className='w-[50%] h-full flex items-center justify-center bg-white'
            >
                <div className='w-[80%] h-[80%] bg-black text-white'>
                    <div className='flex flex-col items-center mt-12 '>
                        <img src='src/img/logo.svg' alt='Logo' className='w-32 object-cover' />
                        <p className='font-bold mt-3'>Cinemaniac</p>
                        <p className='font-bold'>New Here !!! Register</p>
                    </div>
                    <form onSubmit={handleSubmit(formSubmit)}>
                        <div className='flex flex-col items-center mt-12'>
                            <input
                                {...register('name', { required: true })}
                                name='name'
                                className='w-[453px] h-[43px] rounded-xl p-5 text-black'
                                type='name'
                                placeholder='Enter Your Full Name'
                            />
                            {errors.name?.type === 'required' && "Name is Required"}

                            <input
                                {...register('number', { required: true, minLength: 10, maxLength: 10 })}
                                name='number'
                                className='w-[453px] h-[43px] rounded-xl p-5 text-black appearance-none mt-5'
                                type='number'
                                placeholder='Enter Your Contact Number'
                            />
                            {errors.number?.type === 'required' && "Number is Required"}
                            {errors.number?.type === 'minLength' && "Number Must Be 10 digit."}
                            {errors.number?.type === 'maxLength' && "Number must be 10 digit"}

                            <input
                                {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}
                                name='email'
                                className='w-[453px] h-[43px] rounded-xl p-5 text-black mt-5'
                                type='email'
                                placeholder='Enter Your Email'
                            />
                            {errors.email?.type === 'required' && "Email is Required"}
                            {errors.email?.type === 'pattern' && "Must be a Valid Email"}

                            <input
                                {...register('password', { required: true, minLength: 8, maxLength: 20 })}
                                name='password'
                                className='w-[453px] h-[43px] rounded-xl p-5 mt-5 text-black'
                                type='password'
                                placeholder='Enter Your Password'
                            />
                            {errors.password?.type === 'required' && "Password is Required"}

                            {/* <input
                                {...register('confirmPassword', { required: true, })}
                                name='confirm_password'
                                className='w-[453px] h-[43px] rounded-xl p-5 mt-5 text-black'
                                type='password'
                                placeholder='Confirm Password'
                            />
                            {errors.name?.type === 'required' && "Name is Required"} */}

                            <button
                                type='submit'
                                className='w-[453px] h-[43px] rounded-xl border-2 border-black bg-red-800 text-white mt-5 hover:bg-red-500'
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    <div className='flex flex-col items-center mt-12'>
                        <p>Start Your Exciting Movie's Journey Here</p>
                    </div>
                </div>
            </div>

            <div className='w-[50%] h-full'>
                <img className='w-full h-full object-cover' src='src/img/movies.jpg' alt='Movie Poster' />
            </div>
        </div>
    );
};

export default Register;
