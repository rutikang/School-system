
import 'bootstrap/dist/css/bootstrap.min.css'
import { StudentLogin } from './components/StudentLogin';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Role } from './components/Role';
import { TeacherLogin } from './components/TeacherLogin';
import { Students } from './components/Students';
import { Teacherdashboard } from './components/Teacherdashboard';
import { Studentdashboard } from './components/Studentdashboard';
import { Teacherdetailsupdate } from './components/Teacherdetailsupdate';
import { Courseedit } from './components/Courseedit';
import { Studentedit } from './components/Studentedit';
function App() {
  return (
    <>
  {/* <BrowserRouter> */}
  <Routes>
    <Route path='/studentlogin' element={<StudentLogin/>}></Route>
    <Route path='/' element={<Role/>}></Route>
    <Route path='/teacherlogin' element={<TeacherLogin/>}></Route>
    <Route path='/students' element={<Students/>}></Route>
    <Route path='/teacherdashboard' element={<Teacherdashboard/>}></Route>
    <Route path='/studentdashboard' element={<Studentdashboard/>}></Route>
    <Route path='/teacherdetailsupdate' element={<Teacherdetailsupdate/>}></Route>
    <Route path='/courseedit' element={<Courseedit/>}></Route>
    <Route path='/studentedit' element={<Studentedit/>}></Route>


    
  </Routes>
  
  {/* </BrowserRouter> */}

    </>
  );
}

export default App;
