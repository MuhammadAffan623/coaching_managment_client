import Header from './components/Header';
import './index.css';
import Login from './pages/Login';
import TableStructure from "./components/TableStructure";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TeacherTable from './components/TeacherTable';
import TeacherClass from './components/StudentClass';
import StudentClass from './components/StudentClass';
function App() {
  const [Info,setInfo]=useState(false)
  // console.log('userInfo',userInfo);
  let userInfo=JSON.parse(localStorage.getItem('userInfo'));
  useEffect(()=>{
     
},[])
  return (
    <>
    <BrowserRouter>
    {
      Info &&<Header setInfo={setInfo}/>
    }
    <Routes>
      {
        Info?(
          
          <>
          <Route path='/students' element={<TableStructure/>}/> 
          <Route path='/teachers' element={<TeacherTable/>}/>
          <Route path='/teacherClass' element={<TeacherClass/>}/>
          <Route path='/student/class' element={<StudentClass/>}/>
           </>
          )
          :
          (
            <Route path='/login' element={<Login setInfo={setInfo}/>}/>
        )
      }
    </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
