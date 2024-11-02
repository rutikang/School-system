import React from 'react'
import Box from '@mui/material/Box';
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Role = () => {
  return (
    <Box sx={{bgcolor:'#ededed', height:'100vh', alignItems:'center', justifyContent:'center', display:'flex'}}>
        <Box></Box>
        <Box sx={{bgcolor:'#065956', width:'30%', height:'70vh', boxShadow:5}}>


        </Box>
        <Box sx={{bgcolor:'rgb(12, 89, 6,0.5)', width:'30%', height:'70vh', p:4, boxShadow:5}}>
            <Typography sx={{mt:3,color:'white',mb:10}}>CHOOSE ROLE</Typography>
            <Stack>
            <Button sx={{bgcolor:'#4E5927', mb:1, color:'white'}} component={Link} to="/studentlogin" >Student</Button>
            <Button sx={{bgcolor:'#4E5927', mb:1, color:'white'}}component={Link} to="/teacherlogin" >Teacher</Button>
            <Button sx={{bgcolor:'#4E5927', mb:1, color:'white'}}>Admin</Button>
            </Stack>
        </Box>
    </Box>
  )
}
