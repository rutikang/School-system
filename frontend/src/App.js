
import 'bootstrap/dist/css/bootstrap.min.css'
import { StudentLogin } from './components/StudentLogin';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Role } from './components/Role';
import { TeacherLogin } from './components/TeacherLogin';
import { Students } from './components/Students';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/studentlogin' element={<StudentLogin/>}></Route>
    <Route path='/role' element={<Role/>}></Route>
    <Route path='/teacherlogin' element={<TeacherLogin/>}></Route>
    <Route path='/students' element={<Students/>}></Route>

    
  </Routes>
  
  </BrowserRouter>

    </>
  );
}

export default App;
