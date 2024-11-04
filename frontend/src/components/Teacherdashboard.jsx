import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export const Teacherdashboard = () => {

    const token = localStorage.getItem('token');


    const [teacherdetails, setTeacherdetails] = useState([])
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


  return (
    <>
    {/* ---------------------------------------------------------------------- */}
    <Box>
        <Stack direction="row">
            <Box sx=
        {{
              width:"30%", m:2, 
            height:"100vh",
            borderRadius:2

        }}>
            <Box sx={{}}>
                <Avatar sx={{width:'120px',height:"120px"}}></Avatar>
            </Box>
        <Box sx=
        {{
            bgcolor:'#edf3fc', border:'0px solid lightblue', width:"100%", 
            height:"72vh",
            borderRadius:2,
            p:2,
            boxShadow:5,
            mt:2

        }}>
            
               <Typography sx={{ fontSize:30}}>Teacher Details</Typography>
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
                <Button sx={{ bgcolor:'#0481cf', color:'white'}}>Edit details</Button>
            
        </Box>
        </Box>

        <Box sx={{bgcolor:'white', height:"100vh", width:"30%"}}>
            <Stack>
                <Box sx={{bgcolor:'#edf3fc', mt:2, borderRadius:2, height:"50vh", p:2, boxShadow:2}}>
                    <Typography>Courses</Typography>
                    <Divider sx={{bgcolor:'black'}}/>
                </Box>
                <Box sx={{bgcolor:'#edf3fc', mt:2, borderRadius:2, height:"40vh", p:2, boxShadow:2}}>
                <Typography>Semester</Typography>
                <Divider sx={{bgcolor:'black'}}/>
                </Box>
            </Stack>
        </Box>
        {/* -------------------------------- 3rd column --------------------------------------------------  */}

        <Box sx={{bgcolor:'white', height:"100vh", width:"36%", ml:2}}>
            <Box sx={{bgcolor:'#165745', mt:2, borderRadius:2, height:"10vh", p:2, boxShadow:1, color:'white'}}>
                    <Typography>Signed In : { teacherdetails.length > 0 && teacherdetails[0].l_name} </Typography>
                    {/* <Divider sx={{bgcolor:'black'}}/> */}
                </Box>
                <Box sx={{bgcolor:'#edf3fc', mt:2, borderRadius:2, height:"30vh", p:2, boxShadow:2}}>
                    <Typography>Assignments</Typography>
                    <Divider sx={{bgcolor:'black'}}/>
                </Box>
                <Box sx={{bgcolor:'#edf3fc', mt:2, borderRadius:2, height:"30vh", p:2, boxShadow:2}}>
                    <Typography>Academic Calendar</Typography>
                    <Divider sx={{bgcolor:'black'}}/>
                </Box>
        </Box>
        </Stack>
    </Box>
    </>
  )
}
