import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header({setInfo}) {
  const navigate=useNavigate()
  const LogoutHandler=()=>{
    navigate('/login');
    localStorage.removeItem('userInfo')
    setInfo(false)
  }
  const inputHandler=(e)=>{
    let value=e.target.value;
    if(value=='teacher'){
      navigate('/teacherClass')
    }
    else if(value=='student'){
      navigate('/student/class')
    }
    else{

    }
  }
  return (
    <div className=' fixed top-0  w-full overflow-hidden bg-gradient-to-r from-sky-500 to-indigo-500'>
        <div className='w-10/12  mx-auto flex items-center flex-row justify-between text-lg lg:text-xl text-white font-medium p-4'>
            <div>Coaching Management System</div>
            <div className='flex flex-row gap-4 items-center'>
                <div className='cursor-pointer' onClick={()=>navigate('/students')}>Student</div>
                <div className='cursor-pointer'  onClick={()=>navigate('/teachers')}>Teacher</div>
                <select className='text-lg lg:text-xl font-medium bg-transparent border-none outline-none  ' onChange={inputHandler}>
                    <option className='text-lg bg-blue-700 font-medium'>Select option</option>
                    <option value="teacher" className='text-lg bg-blue-700 font-medium'>Teacher</option>
                    <option value="student"  className='text-lg bg-blue-700 font-medium'>Student</option>
                </select>
                <div onClick={LogoutHandler} className='bg-pink-500 py-2 px-5 rounded-xl cursor-pointer'>Logout</div>
            </div>
        </div>
    </div>
  )
}

export default Header