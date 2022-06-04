import React,{useEffect} from 'react';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import {server_address} from "../contant"
import ModalPopup from './ModalPopup';
const columns = [
  {
    title: 'TeacherId',
    dataIndex: 'TeacherId',
    key: 'TeacherId',
  },
  {
    title: 'Name',
    dataIndex: 'lastName',
    key: 'lastName',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'Age',
    key: 'Age',
  },
  {
    title: 'Address',
    dataIndex: 'Address',
    key: 'Address',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',   
  },
  
];
const data1 = [
  {
    // key: '1',
    StudentId: 2,
    FirstName: '',
    LastName:"",
    Age: 302,
    Address: 'New York No. 1 Lake Park',
    Email: "aaajhjkhjksd",
  },
  {
    key: '2',
    StudentId: 2,
    LastName: 'John Brown',
    Age: 32,
    Address: 'New York No. 1 Lake Park',
    Email: "aaajhjkhjksd",
  },
  {
    key: '3',
    StudentId: 2,
    LastName: 'John Brown',
    Age: 32,
    Address: 'New York No. 1 Lake Park',
    Email: "aaajhjkhjksd",
  },
  {
    key: '4',
    StudentId: 2,
    LastName: 'John Brown',
    Age: 32,
    Address: 'New York No. 1 Lake Park',
    Email: "aaajhjkhjksd",
  },
  {
    key: '5',
    StudentId: 2,
    LastName: 'John Brown',
    Age: 32,
    Address: 'New York No. 1 Lake Park',
    Email: "aaajhjkhjksd",
  },
  {
    key: '6',
    StudentId: 2,
    LastName: 'John Brown',
    Age: 32,
    Address: 'New York No. 1 Lake Park',
    Email: "aaajhjkhjksd",
  },
  {
    key: '7',
    StudentId: 2,
    LastName: 'John Brown',
    Age: 32,
    Address: 'New York No. 1 Lake Park',
    Email: "aaajhjkhjksd",
  },
  {
    key: '8',
    StudentId: 2,
    LastName: 'John Brown',
    Age: 32,
    Address: 'New York No. 1 Lake Park',
    Email: "aaajhjkhjksd",
  },
  {
    key: '9',
    StudentId: 2,
    LastName: 'John Brown',
    Age: 32,
    Address: 'New York No. 1 Lake Park',
    Email: "aaajhjkhjksd",
  },
];

const TeacherTable = () => {
  const [data,setData]=React.useState([])
  const [modal,setModal]=React.useState({open:false})
  const [teacher,setTeacher]=React.useState({});
  const inputHandler=(e)=>{
    setTeacher({
      ...teacher,
      [e.target.name]:e.target.value
    })
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    await axios.post(`${server_address}/addTeaches`,teacher)
    .then((res)=>{
      console.log(res);
      Data();
      setModal({open:false})
  
    })
    .catch((error)=>{
      console.log(error);
    })

  }
  useEffect(() => {
    Data();
  }, [])
  const Data = async() => {
  await axios.get(`${server_address}/teachers`)
      .then((res) => {
        setData(res.data)
        // data1 = res.data;
      })
      .catch((error)=>{

      })
    }
    console.log("table", data);
  return (
    <>
   <div className='py-7 text-2xl font-semibold w-11/12 mx-auto justify-between items-center flex flex-row'>
   <h1 className=''>All Teachers</h1>
   <div className='text-xl bg-gradient-to-r from-sky-500 to-indigo-500 py-2 px-4 rounded-lg text-white cursor-pointer' onClick={()=>setModal({open:true})} >Add Teacher</div>
   </div>
    <div className='px-[70px]'>
    <Table columns={columns} dataSource={data && data.data} />
    </div>
    <ModalPopup setModal={setModal} modal={modal}>
      <form onSubmit={submitHandler} className='flex flex-col h-full gap-5 p-4'>
        <h2 className='text-2xl font-semibold text-center'>ADD STUDENTS</h2>
        <div className='flex flex-row gap-4 w-full text-lg '>
        <input placeholder='Enter First Name' name='FirstName' onChange={inputHandler} className='w-1/2 bg-[#f5f6f8] rounded-md  h-[40px] px-3'/>
        <input placeholder='Enter Last Name' name='LastName' onChange={inputHandler} className='w-1/2 bg-[#f5f6f8] rounded-md h-[40px] px-3'/>
        </div>
        <div className='flex flex-row gap-4 w-full text-lg '>
        <input placeholder='Enter Age' name='Age' onChange={inputHandler} className='w-1/2 bg-[#f5f6f8] rounded-md  h-[40px] px-3'/>
        <input placeholder='Enter Address' name='Address' onChange={inputHandler} className='w-1/2 bg-[#f5f6f8] rounded-md h-[40px] px-3'/>
        </div>
        <input placeholder='Enter Email' name='Email' onChange={inputHandler} className='w-[49%]  bg-[#f5f6f8] rounded-md h-[40px] px-3'/>
        <button className='bg-gradient-to-r from-sky-500 to-indigo-500 text-2xl font-medium text-center w-1/4 py-1 rounded-xl text-white mx-auto'>
          Submit
        </button>

      </form>
    </ModalPopup>
    </>
  )
};

export default TeacherTable;