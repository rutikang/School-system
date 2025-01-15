import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import {ArrowBack} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const token = localStorage.getItem('token');

export const Teacherdetailsupdate = () => {
const navigate = useNavigate()


const [f_name , setF_name] = useState("")
const [l_name , setL_name] = useState("")
const [gender , setGender] = useState("")
const [password , setPassword] = useState("")


const handleSubmit = (e) =>{

    e.preventDefault();


    axios.put('http://localhost:8089/teacherdetails_update', {f_name, l_name, gender, password}, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then( res => {
        console.log(res);
        navigate('/teacherdashboard')
    })
    .catch(
        err => {
            console.log("Error is " , err);
            alert("Error ", err.data);
        }
    )
}










  return (
   <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
    <Box sx={{width:'500px', height:'600px', border:'1px solid black', borderRadius:5, boxShadow:10, p:2, pl:7, pt:5}}>

        <form onSubmit={handleSubmit}>
            <Box sx={{display:'flex', gap:8}}>
                <Link to='/teacherdashboard'>
            <ArrowBack/>
            </Link>
            <Typography>Edit Personal Information</Typography>
            </Box>
           
            <Divider sx={{mt:2, mb:5,}}/>
            <label >First name</label>       
            <input 
                style={{width:'90%', height:'40px'}}
                onChange={e=>setF_name(e.target.value)}
            />     
             <label>Last name</label>       
            <input 
                style={{width:'90%', height:'40px'}}
                onChange={e=>setL_name(e.target.value)}
            />   
             <label>Gender</label>       
            <input 
                style={{width:'90%', height:'40px'}}
                onChange={e=>setGender(e.target.value)}
            />   
             <label>Password</label>       
            <input 
                style={{width:'90%', height:'40px'}}
                type='password'
                onChange={e=>setPassword(e.target.value)}
            />   

            <Button sx={{mt:10, width:'80%', bgcolor:'#298a41', color:'white', ml:'20px'}} type='submit'>Submit</Button>
        </form>
    </Box>

   </Box>
  )
}
