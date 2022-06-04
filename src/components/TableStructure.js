import React,{useEffect} from 'react';
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'StudentId',
    dataIndex: 'StudentId',
    key: 'StudentId',
  },
  {
    title: 'Name',
    dataIndex: 'LastName',
    key: 'LastName',
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
    dataIndex: 'Email',
    key: 'Email',   
  },
  
];
const data = [
  {
    key: '1',
    StudentId: 2,
    LastName: 'John Brown',
    Age: 32,
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

const App = () => <Table columns={columns} dataSource={data} />;

export default App;