import React, { useEffect } from "react";
import { Table, Tag, Space } from "antd";
import axios from "axios";
import { server_address } from "../contant";
import ModalPopup from "./ModalPopup";
const columns = [
  {
    title: "TeacherId",
    dataIndex: "TeacherId",
    key: "TeacherId",
  },
  {
    title: "Name",
    dataIndex: "LastName",
    key: "LastName",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "Age",
    key: "Age",
  },
  {
    title: "Address",
    dataIndex: "Address",
    key: "Address",
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
  },
  {
    title: "Subject Name",
    dataIndex: "subjectName",
    key: "subjectName",
  },
  {
    title: "Class Name",
    dataIndex: "className",
    key: "className",
  },
];
const data1 = [
  {
    key: '1',
    StudentId: 2,
    FirstName: "",
    LastName: "",
    Age: 302,
    Address: "New York No. 1 Lake Park",
    Email: "aaajhjkhjksd",
    subjectName: "English",
    className:9,
  },
  {
    key: "2",
    StudentId: 2,
    LastName: "John Brown",
    Age: 32,
    Address: "New York No. 1 Lake Park",
    Email: "aaajhjkhjksd",
    subjectName: "English",
    className:10,
  },
  {
    key: "3",
    StudentId: 2,
    LastName: "John Brown",
    Age: 32,
    Address: "New York No. 1 Lake Park",
    Email: "aaajhjkhjksd",
    subjectName: "English",
    className:10,
  },
  {
    key: "4",
    StudentId: 2,
    LastName: "John Brown",
    Age: 32,
    Address: "New York No. 1 Lake Park",
    Email: "aaajhjkhjksd",
    subjectName: "English",
    className:11,
  },
  {
    key: "5",
    StudentId: 2,
    LastName: "John Brown",
    Age: 32,
    Address: "New York No. 1 Lake Park",
    Email: "aaajhjkhjksd",
    subjectName: "English",
    className:11,
  },
  {
    key: "6",
    StudentId: 2,
    LastName: "John Brown",
    Age: 32,
    Address: "New York No. 1 Lake Park",
    Email: "aaajhjkhjksd",
    subjectName: "English",
    className:11,
  },
  {
    key: "7",
    StudentId: 2,
    LastName: "John Brown",
    Age: 32,
    Address: "New York No. 1 Lake Park",
    Email: "aaajhjkhjksd",
    subjectName: "English",
    className:12,
  },
  {
    key: "8",
    StudentId: 2,
    LastName: "John Brown",
    Age: 32,
    Address: "New York No. 1 Lake Park",
    Email: "aaajhjkhjksd",
    subjectName: "English",
    className:12,
  },
  {
    key: "9",
    StudentId: 2,
    LastName: "John Brown",
    Age: 32,
    Address: "New York No. 1 Lake Park",
    Email: "aaajhjkhjksd",
    subjectName: "English",
    className:12,
  },
];

const TeacherClass = () => {
  const [data, setData] = React.useState([]);
  const inputHandler = async(e) => {
      e.preventDefault();
      await axios
      .get(`${server_address}/teacherClasses`, {className:e.target.value})
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="py-7 text-2xl font-semibold w-11/12 mx-auto gap-3 items-center flex flex-row">
          <h2>Select CLass</h2>
        <select className="text-lg lg:text-xl font-medium bg-gray-200 border-none outline-none "  onChange={inputHandler} >
        <option value='' className="text-lg  font-medium">Select Class</option> 
          <option value='9'  className="text-lg  font-medium">
            9
          </option>
          <option value='10' className="text-lg  font-medium">10</option>
          <option value='11' className="text-lg  font-medium">11</option>
          <option value='12' className="text-lg  font-medium">12</option>
        </select>
      </div>
      <div className="px-[70px]">
        <Table columns={columns} dataSource={data && data.data} />
      </div>
    </>
  );
};

export default TeacherClass;
