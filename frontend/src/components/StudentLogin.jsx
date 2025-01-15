import React from 'react'
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const StudentLogin = () => {
  return (
    <Box sx={{bgcolor:'#ededed', height:'100vh', alignItems:'center', justifyContent:'center', display:'flex'}}>
        <Box sx={{bgcolor:'#065956', width:'30%', height:'70vh', boxShadow:5, overflow:'hidden'}}>

        <img
    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    style={{
      // width: '100%', // Ensures the image scales to the width of the Box
      height: '100%', // Ensures the image scales to the height of the Box
      objectFit: 'contain', // Makes the image fit within the Box without cropping
    }}
  />
        </Box>
        <Box sx={{bgcolor:'#384a43', width:'30%', height:'70vh', p:4, boxShadow:5}}>
            <Typography sx={{mt:3, mb:5,color:'white'}}>STUDENT SIGN IN</Typography>
            <form className='form'>
                <label style={{marginBottom:10}}><Typography sx={{color:'#ccdbd5'}}>UserName</Typography></label>
                <input
                className='form-control'
                style={{marginBottom:10}}
                />
                <label  style={{marginBottom:10}}><Typography sx={{color:'#ccdbd5'}}>Password</Typography></label>
                <input
                 className='form-control'
                />
                <Button sx={{bgcolor:'#0477BF', color:'white', mt:5, width:'35%',ml:'8%', borderRadius:5}} component={Link} to="/studentdashboard">Login</Button>
                <Button sx={{bgcolor:'#038C4C', color:'white', mt:5, width:'35%', borderRadius:5, ml:2}} component={Link} to="/">Role</Button>
            </form>
            
        </Box>
    </Box>
  )
}
