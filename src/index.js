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
import {classData} from "./Data.js"

const root = ReactDOM.createRoot(document.getElementById('root'));

const allClasses = []


classData.forEach((item) => {
  const scp = "/"+ item.classID + "/class-page/student";
  const sas = "/"+ item.classID + "/assignments/student";
  const sgb = "/"+ item.classID + "/gradebook/student";
  const spe = "/"+ item.classID + "/people/student";
  const tcp = "/"+ item.classID + "/class-page/teacher";
  const tas = "/"+ item.classID + "/assignments/teacher";
  const tgb = "/"+ item.classID + "/gradebook/teacher";
  const tpe = "/"+ item.classID + "/people/teacher";
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

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><NavBar /><Welcome /></>}/>
        <Route path="/signup" element={<><NavBar /><SignUp /></>}/>
        <Route path="/signin" element={<><NavBar /><SignIn /></>}/>

        <Route path="/home/student" element={<><SClassOverviewNavBar /><ClassBox /></>}/>
        
        {allClasses}

        <Route path="/home/teacher" element={<><TClassOverviewNavBar /><ClassBox /></>}/>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
