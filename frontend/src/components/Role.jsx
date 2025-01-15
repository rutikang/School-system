import React from 'react'
import Box from '@mui/material/Box';
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Role = () => {
  return (
    <Box sx={{bgcolor:'#ededed', height:'100vh', alignItems:'center', justifyContent:'center', display:'flex', width:'100%'}}>
        
        <Box sx={{bgcolor:'#065956', width:'30%', height:'70vh', boxShadow:5, overflow:'hidden',}}>
        
        <img
    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    style={{
      // width: '100%', // Ensures the image scales to the width of the Box
      height: '100%', // Ensures the image scales to the height of the Box
      objectFit: 'contain', // Makes the image fit within the Box without cropping
    }}
  />
        </Box>


        <Box 
        sx={{bgcolor:'#384a43', width:'30%', height:'70vh', p:4, boxShadow:5}}
        >
            <Typography sx={{mt:3,color:'white',mb:10}}>CHOOSE ROLE</Typography>
            <Stack>
            <Button sx={{bgcolor:'#0477BF', mb:1, color:'white', borderRadius:5}} component={Link} to="/studentlogin" >Student</Button>
            <Button sx={{bgcolor:'#0477BF', mb:1, color:'white',borderRadius:5}}component={Link} to="/teacherlogin" >Teacher</Button>
            {/* <Button sx={{bgcolor:'#0477BF', mb:1, color:'white',borderRadius:5}}>Admin</Button> */}
            </Stack>
        </Box>
    </Box>
  )
}
