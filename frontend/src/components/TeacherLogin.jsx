import React, {  useState } from 'react'
import Box from '@mui/material/Box';
import { Alert, Button, Snackbar, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios'

export const TeacherLogin = () => {

    const [name, setUsername] = useState()
    const [password, setPassword] = useState()

    const [alertseverity, setAlertseverity] = useState("")
    const [alertmessage, setAlertmessage] = useState("")
    const [open, setOpen] = useState(false);

    const navigate = useNavigate()


    // simple alert -----------------------------------------
    const [alert, setAlert] = useState(false)

// -----------


    const handleSubmit = (e) =>{
        e.preventDefault()

       
            axios.post('http://localhost:8089/teacherlogin', {name, password})
                .then(res=>
                    {
                        // console.log(res.data)
                        setAlertseverity("success")
                        setAlertmessage("Login successfull")
                        setOpen(true);
                    setTimeout(() => {
                    navigate('/teacherdashboard');
                }, 1000); // Navigate after 1 seconds 
                    localStorage.setItem('token',res.data.accessToken)   // set user auth token 
                    console.log("************")

                    })
                .catch(err=>
                    {
                    setAlertseverity('error');
                    setAlertmessage('Username or password incorrect.');
                    setOpen(true);
                    setAlert(true)
                        console.log('--'+err)

                    })
        

    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return; // Prevent closing if the user clicks outside the alert
        }
        setOpen(false);
    };


  return (
    <Box sx={{bgcolor:'#ededed', height:'100vh', alignItems:'center', justifyContent:'center', display:'flex'}}>
        <Box></Box>
        <Box sx={{bgcolor:'#065956', width:'30%', height:'70vh', boxShadow:5}}>

             {/* -------------------------------Alert------------------------------------------- */}
        <Snackbar
                open={open}
                autoHideDuration={3000} // Duration in milliseconds (5 seconds)
                onClose={handleClose}
            >
                <Alert onClose={handleClose} severity={alertseverity}  sx={{ width: '100%', backgroundColor: alertseverity === 'success' ? '#4caf50' : '#f44336' }}>
                    {alertmessage}
                </Alert>
            </Snackbar>
            {/* -------------------------------------------------------------------------- */}

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
            <Typography sx={{mt:3, mb:5,color:'white'}}>TEACHER SIGN IN</Typography>
              {/* Simple alert */}
              {alert ? (<Alert sx={{mb:2}} variant="filled" severity="error">
                    Username or password is incorrect
                  </Alert>) : null }
                    
            {/* end simple alert */}
            <form className='form' onSubmit={handleSubmit}>
                <label style={{marginBottom:10}}><Typography sx={{color:'#ccdbd5'}}>UserName</Typography></label>
                <input
                className='form-control'
                style={{marginBottom:10}}
                onChange={e=>setUsername(e.target.value)}
                />
                <label  style={{marginBottom:10}}><Typography sx={{color:'#ccdbd5'}}>Password</Typography></label>
                <input
                 className='form-control'
                 onChange={e=>setPassword(e.target.value)}
                 type='password'

                />
                <Button sx={{bgcolor:'#0477BF', color:'white', mt:5, width:'35%',ml:'8%', borderRadius:5}} type='submit'>Login</Button>
                <Button sx={{bgcolor:'#038C4C', color:'white', mt:5, width:'35%', borderRadius:5, ml:2}} component={Link} to="/">Role</Button>
            </form>
            
        </Box>
    </Box>
  )
}
