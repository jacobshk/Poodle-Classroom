import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './NavBar';
import SClassOverviewNavBar from './student/SClassOverviewNavBar';
import TClassOverviewNavBar from './teacher/TClassOverviewNavBar';
import SignUp from './SignUp'
import SignIn from './SignIn'
import ClassBox from './ClassBox'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import SGradebook from './student/SGradebook';
import SAssignment from './student/SAssignment';
import SClass from './student/SClass';
import SPeople from './student/SPeople';
import TClass from './teacher/TClass';
import TAssignment from './teacher/TAssignment';
import TGradebook from './teacher/TGradebook';
import TPeople from './teacher/TPeople';
import Welcome from './Welcome'

const root = ReactDOM.createRoot(document.getElementById('root'));
const classArray = [ 
  ['class1', 'teacherName1','classID1'], 
  ['class2', 'teacherName2','classID2'],
  ['class3', 'teacherName3','classID3']
]

const allClasses = []
/*
classArray.forEach((item) => {
  const scp = "/"+ item[2] + "/class-page/student";
  const sas = "/"+ item[2] + "/assignments/student";
  const sgb = "/"+ item[2] + "/gradebook/student";
  const spe = "/"+ item[2] + "/people/student";
  const tcp = "/"+ item[2] + "/class-page/teacher";
  const tas = "/"+ item[2] + "/assignments/teacher";
  const tgb = "/"+ item[2] + "/gradebook/teacher";
  const tpe = "/"+ item[2] + "/people/teacher";
  allClasses.push(<>
    <Route path={scp} element={<><SClass /></>}/>
    <Route path={sas} element={<><SAssignment /></>}/>
    <Route path={sgb} element={<><SGradebook /></>}/>
    <Route path={spe} element={<><SPeople /></>}/> 

    <Route path={tcp} element={<><TClass /></>}/>
    <Route path={tas} element={<><TAssignment /></>}/>
    <Route path={tgb} element={<><TGradebook /></>}/>
    <Route path={tpe} element={<><TPeople /></>}/>
    </>
  );
});
*/

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><NavBar /><Welcome /></>}/>
        <Route path="/signup" element={<><NavBar /><SignUp /></>}/>
        <Route path="/signin" element={<><NavBar /><SignIn /></>}/>

        <Route path="/home/student" element={<><SClassOverviewNavBar /><ClassBox /></>}/>
    <Route path={"/class-page/student"} element={<><SClass /></>}/>
    <Route path={"/assignments/student"} element={<><SAssignment /></>}/>
    <Route path={"/gradebook/student"} element={<><SGradebook /></>}/>
    <Route path={ "/people/student"} element={<><SPeople /></>}/> 

    <Route path={ "/class-page/teacher"} element={<><TClass /></>}/>
    <Route path={"/assignments/teacher"} element={<><TAssignment /></>}/>
    <Route path={"/gradebook/teacher"} element={<><TGradebook /></>}/>
    <Route path={"/people/teacher"} element={<><TPeople /></>}/>
        <Route path="/home/teacher" element={<><TClassOverviewNavBar /><ClassBox /></>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
