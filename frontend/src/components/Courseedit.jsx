import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import {ArrowBack} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const Courseedit = () => {
  return (
   <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}}>
    <Box sx={{width:'500px', height:'600px', border:'1px solid black', borderRadius:5, boxShadow:10, p:2, pl:7, pt:5}}>

        <form>
            <Box sx={{display:'flex', gap:8}}>
                <Link to='/teacherdashboard'>
            <ArrowBack/>
            </Link>
            <Typography>Add Course</Typography>
            </Box>
           
            <Divider sx={{mt:2, mb:5,}}/>
            <label >Course Name</label>       
            <input 
                style={{width:'90%', height:'40px'}}
                
            />     
             <label>Course ID</label>       
            <input 
                style={{width:'90%', height:'40px'}}
                
            />   
            

            <Button sx={{mt:10, width:'80%', bgcolor:'#298a41', color:'white', ml:'20px'}}>Submit</Button>
        </form>
    </Box>

   </Box>
  )
}
