import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material'
import {Add, Delete, Edit, ExitToApp, Label} from '@mui/icons-material';
import { LineChart } from '@mui/x-charts/LineChart';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export const Studentdashboard = () => {

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
              width:"20%", m:2, 
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
            height:"69vh",
            borderRadius:2,
            p:2,
            boxShadow:10,
            mt:2,
            overflow: 'auto'

        }}>
            
               <Typography sx={{ fontSize:25}}>Student Details</Typography>
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
                <Button endIcon={<Edit/>} sx={{ bgcolor:'#0481cf', color:'white'}}>Edit details</Button>
            
        </Box>
        </Box>

        <Box sx={{bgcolor:'#f0faff', height:"100vh", width:"50%"}}>
            <Stack>
                <Box sx={{bgcolor:'white', mt:2, borderRadius:2, height:"95vh", p:2, boxShadow:5, overflow: 'auto'}}>
                    <Typography>Courses</Typography>
                    <Divider sx={{bgcolor:'black', mb:2}}/>
                    {/* ---------------------------------------------courses --------------------------------------------------------------------------------------- */}

                    <Stack direction='row' sx={{flexWrap:'wrap', gap:1}} >
                    <Card sx={{ width: 200 , maxheight:300 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Intro to ML
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Introductory course
                        </Typography>
                    </CardContent>
                   {/* --------------------------------------------------------------------------------------------------------------------- */}
                    </Card>
                    <Card sx={{ width: 200 , height:240  }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        System Design
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Introductory course
                        </Typography>
                    </CardContent>
                   
                    </Card>
                    {/* --------------------------------------------------------------------------------------------------------------------- */}

                    
                    
                    <Card sx={{ width: 200 , height:240 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Calculus I
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Introductory course
                        </Typography>
                    </CardContent>
                   
                    </Card>

                    <Card sx={{ width: 200 , height:240 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="https://images.pexels.com/photos/267582/pexels-photo-267582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Discrete Maths
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Introductory course
                        </Typography>
                    </CardContent>
                   
                    </Card>
                    </Stack>

                </Box>
                {/* <Box sx={{bgcolor:'white', mt:2, borderRadius:2, height:"20vh", p:2, boxShadow:5}}>
                <Typography>Semester</Typography>
                <Divider sx={{bgcolor:'black'}}/>
                </Box> */}
            </Stack>
        </Box>
        {/* -------------------------------- 3rd column --------------------------------------------------  */}

        <Box sx={{bgcolor:'#f0faff', height:"100vh", width:"26%", ml:2}}>
            <Box sx={{bgcolor:'#065956', mt:2, borderRadius:2, height:"10vh", p:2, boxShadow:5, color:'white',  overflow:'fixed'}}>
                <Stack direction='row'>
                    <Typography sx={{flex:3}}>Welcome <bold>{ teacherdetails.length > 0 && teacherdetails[0].l_name} </bold></Typography>
                    <Button endIcon={<ExitToApp/>} variant='outlined' color='#edf3fc' sx={{ flex:1}}>signout</Button>
                    </Stack>
                </Box>
                <Box sx={{bgcolor:'white', mt:2, borderRadius:2, height:"35vh", p:1, boxShadow:5}}>
                    <Typography>CGPA graph</Typography>
                    <Divider sx={{bgcolor:'black', mb:1}}/>
                    <LineChart 
                        
                        xAxis={[{ data: [1, 2, 3 ,4,5,6],label:'semester' }]}
                        series={[
                            {
                            data: [1, 2, 2,4,1,1],label:'GPA' 
                            },
                        ]}
                        width={330}
                        height={160}
                        grid={{horizontal: true}}
                        sx={{bgcolor:'#419c8d', borderRadius:2}}
                        />
                </Box>
                <Box sx={{bgcolor:'white', height:50,mt:2, borderRadius:1,p:1.5, boxShadow:5}}>
                        <Stack direction='row'>
                        <Typography>CGPA : </Typography> <Typography sx={{color:'#1a4f46'}}> 4.5 </Typography> 
                        </Stack>
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
