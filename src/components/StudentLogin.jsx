import React from 'react'
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const StudentLogin = () => {
  return (
    <Box sx={{bgcolor:'#ededed', height:'100vh', alignItems:'center', justifyContent:'center', display:'flex'}}>
        <Box></Box>
        <Box sx={{bgcolor:'#065956', width:'30%', height:'70vh', boxShadow:5}}>


        </Box>
        <Box sx={{bgcolor:'rgb(12, 89, 6,0.5)', width:'30%', height:'70vh', p:4, boxShadow:5}}>
            <Typography sx={{mt:3, mb:5,color:'white'}}>STUDENT SIGN IN</Typography>
            <form className='form'>
                <label style={{marginBottom:10}}>UserName</label>
                <input
                className='form-control'
                style={{marginBottom:10}}
                />
                <label  style={{marginBottom:10}}>Password</label>
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
