import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-full h-auto bg-[#ca171b] flex items-center justify-between p-4'>
            <Link to='/'><img src="src/img/logo.svg" className='w-32' alt="Logo" /></Link>
            <div className='flex items-center relative'>
                <AiOutlineSearch size={25} className='absolute right-2 cursor-pointer' />
                <input className=' border-black rounded-xl h-[35px] w-[360px] p-4 bg-transparent text-white' type="text" placeholder='Enter Your Movies Here' />
            </div>
            <div className='flex items-center gap-8'>
                <Link to='/login'><p className='cursor-pointer text-white hover:text-red-400 duration-300 transition-all ease-in-out'>LogIn</p></Link>
                <Link to='/register'><p className='cursor-pointer text-white hover:text-red-400 duration-300 transition-all ease-in-out'>Register</p></Link>
            </div>
        </div>
    )
}

export default Header