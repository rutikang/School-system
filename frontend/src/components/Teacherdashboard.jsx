import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material'
import {Add, Delete, Edit, ExitToApp} from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export const Teacherdashboard = () => {

    const token = localStorage.getItem('token');
    const [teacherdetails, setTeacherdetails] = useState([])
    const [taughtcourses,setTaughtCourses] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8089/teacherdetails/', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }, [])
            .then( res => 
                {
                    setTeacherdetails(res.data)
                   console.log("------1_",res.data) 
                  
                })
            .catch(err => 
            {
            console.log({Error : err.message})
             
            
            })
            
    }, [])
    useEffect(()=>{
        axios.get('http://localhost:8089/teachercourse', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }, [])
            .then( res => 
                {
                    setTaughtCourses(res.data)
                   console.log(res.data) 
                  
                })
            .catch(err => 
            {
            console.log({Error : err.message})
             
            
            })
            
    }, [])


  return (
    <>
    {/* ---------------------------------------------------------------------- */}
    <Box sx={{bgcolor:'#f0faff'}}>
        <Stack direction="row">
            <Box sx=
        {{
              width:"25%", m:2, 
            height:"100vh",
            borderRadius:2,
            

        }}>
            <Box sx=
            {{  bgcolor:'cyan', p:2,
                borderRadius:5,
                alignItems:'center',
                justifyContent:'center',
                display:'flex',
                boxShadow:5,
                bgcolor:'#065956'

            }}>
                <Avatar sx={{width:'120px',height:"120px", bgcolor:'tomato'}}></Avatar>
            </Box>
        <Box sx=
        {{
            bgcolor:'white', border:'0px solid lightblue', width:"100%", 
            height:"70vh",
            borderRadius:2,
            p:2,
            boxShadow:10,
            mt:2,
            overflow: 'auto'

        }}>
            
               <Typography sx={{ fontSize:25}}>Teacher Details</Typography>
               <Divider sx={{bgcolor:"black", mb:2}}/>
                
                <Typography>First Name :</Typography> 
                <Box sx={{border:"1px solid lightblue",p:1, mb:2}}>
                { teacherdetails.length > 0 && teacherdetails[0].f_name}
                </Box>
                <Typography>Last Name :</Typography> 
                <Box sx={{border:"1px solid lightblue",p:1,mb:2}}>
                { teacherdetails.length > 0 && teacherdetails[0].l_name}
                </Box>
                <Typography>Gender :</Typography> 
                <Box sx={{border:"1px solid lightblue",p:1,mb:2}}>
                { teacherdetails.length > 0 && teacherdetails[0].gender}
                </Box>
                <Typography>ID number :</Typography> 
                <Box sx={{border:"1px solid lightblue",p:1,mb:2}}>
                { teacherdetails.length > 0 && teacherdetails[0].id}
                </Box>
                <Link to='/teacherdetailsupdate'>
                <Button endIcon={<Edit/>} sx={{ bgcolor:'#0481cf', color:'white'}}>Edit details</Button>
                </Link>
        </Box>
        </Box>

        <Box sx={{bgcolor:'#f0faff', height:"100vh", width:"40%"}}>
            <Stack>
                <Box sx={{bgcolor:'white', mt:2, borderRadius:2, height:"60vh", p:2, boxShadow:5, overflow: 'auto', pl:5}}>
                    <Typography>Courses</Typography>
                    <Divider sx={{bgcolor:'black', mb:2}}/>
                    <table className='table'>
                        <thead>
                            <tr>
                                <td >Course ID</td>
                                <td >Course Name</td>
                                <td >Action</td>

                               

                            </tr>
                        </thead>
                    {
                        taughtcourses.map((data,i)=>(
                            <tr key={i}>
                                <td style={{}}>{data.id}  </td> 
                                <td>{data.name}  </td> 
                                {/* <td><Button startIcon={<Delete/>} sx={{mt:1, }}></Button></td> */}
                               <td> 
                                {/* <Link to='/courseedit'>
                                 <button className='btn m-2' style={{backgroundColor:'#0481cf', color:'white', width:'80px'}}>Edit</button>
                                 </Link> */}
                                 <button className='btn m-2' style=
                                {{backgroundColor:'#9c4c48', color:'white', width:'80px'}}>Delete</button>
                                 </td>
                            </tr>
                        ))
                    }
                    </table>
                    <Link to='/courseedit'>
                    <Button endIcon={<Add/>} sx={{ bgcolor:'#038C4C', color:'white',mt:3, mr:1}}>Add Course</Button>
                    </Link>
                    {/* <Button endIcon={<Edit/>} sx={{ bgcolor:'#0481cf', color:'white',mt:3}}>Edit Courses</Button> */}

                </Box>
                <Box sx={{bgcolor:'white', mt:2, borderRadius:2, height:"30vh", p:2, boxShadow:5}}>
                <Typography>Semester</Typography>
                <Divider sx={{bgcolor:'black'}}/>
                </Box>
            </Stack>
        </Box>
        {/* -------------------------------- 3rd column --------------------------------------------------  */}

        <Box sx={{bgcolor:'#f0faff', height:"100vh", width:"30%", ml:2}}>
            <Box sx={{bgcolor:'#065956', mt:2, borderRadius:2, height:"10vh", p:2, boxShadow:5, color:'white'}}>
                <Stack direction='row'>
                    <Typography sx={{flex:3}}>Welcome <bold>{ teacherdetails.length > 0 && teacherdetails[0].l_name} </bold></Typography>
                    <Link to="/teacherlogin" style={{textDecoration:'none'}}>
                    <Button endIcon={<ExitToApp/>}  color='#edf3fc' sx={{ flex:1, bgcolor:'#aabfb7'}} >Sign out</Button>
                    </Link>
                    </Stack>
                </Box>
                <Box sx={{bgcolor:'white', mt:2, borderRadius:2, height:"30vh", p:2, boxShadow:5}}>
                    <Typography>Assignments</Typography>
                    <Divider sx={{bgcolor:'black'}}/>
                </Box>
                <Box sx={{bgcolor:'white', mt:2, borderRadius:2, height:"30vh", p:2, boxShadow:5}}>
                    <Typography>Academic Calendar</Typography>
                    <Divider sx={{bgcolor:'black'}}/>
                </Box>
        </Box>
        </Stack>
    </Box>
    </>
  )
}
