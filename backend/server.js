
require('dotenv').config()
const express = require('express')
const app = express('')
const cors = require('cors')
const mysql = require('mysql2')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(express.json())
app.use(cors())

const salt = 10

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'school',
    password:'kasibante'
})

// get all courses credentials ------------------------------------------------

app.get('/courses', (req,res)=>{
    const sql = 'select * from courses;'
    db.query(sql, (err,data)=>{
        if(err)return res.json(err)
        res.json(data)
    })
})

// getting courses taught by specific teachers ------------------------------------------------

app.get('/teachercourse',authenticateUser, (req,res)=>{
    const sql = 'select t.f_name, c.name, c.id from teachers as t join courseteacher as ct on ct.teacher_id = t.id join courses as c on c.id = ct.course_id having f_name = ?'
    db.query(sql,[req.user_auth.name] ,(err,data)=>{
        if(err)return res.json(err)
        res.json(data)
    })
})

// get student credentials ------------------------------------------------

app.get('/students',  (req,res)=>{
    const sql = 'select * from students'
    db.query(sql, (err, data)=>{
        if(err)return res.json(err)
        res.json(data)
    })
})

//------------------------------------------------------------------------------------------------------------------------------------------------------    
                // student login
//------------------------------------------------------------------------------------------------------------------------------------------------------

// get username and password from fe
// verify if user is in the database
// Status ok if match // Unauthorized of no match
//---------------------------------------------------

app.get('/studentlogin', async (req,res)=>{
    
    try{
    // const hash_password = await bcrypt.hash(req.body.password, salt)
    const user = {
        username : req.body.name,
        password : req.body.password    // will implement the bcrypt later 
    }

    if(user == null){
        res.send(401).json('Nothing input')
    }
//--------------------------------------------------------------------------------------
    // check username
    const sql = 'select f_name, password from students where f_name = ? && id is not null '
    db.query(sql, [user.username], (err, data)=>{
        if(err)return res.json(err)
        if(data == 0) return res.status(403).json('User not found')
        const aa = data[0].password
        // check password
        if(user.password == aa){
            res.json("Login Successful")
        } 
        else{
            res.sendStatus(403)
        }
    })
}
    catch{
        res.send(500).json('Somethings wrong')
    }
})
// -------------- add params to it then just call it with the cuurent implementation above
// async function checkpassword() {
//     try{
//     if(await bcrypt.compare(user.password, data.password) ){
//         res.json(data)
//     }
//     else{
//         res.status(403)
//     }
// }
// catch{
//     res.send(500).json('Somethings wrong')

// }
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------    
                // student login end
//------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------------------------------------    
                // teacher login
//------------------------------------------------------------------------------------------------------------------------------------------------------

app.post('/teacherlogin', async (req,res)=>{
    
    try{
    // const hash_password = await bcrypt.hash(req.body.password, salt)
    const user = {
        username : req.body.name,
        password : req.body.password    // will implement the bcrypt later 
    }

    if(user == null){
        res.send(401).json('Nothing input')
    }
//--------------------------------------------------------------------------------------
    // check username
    const sql = 'select f_name, password from teachers where f_name = ? && id is not null '
    db.query(sql, [user.username], (err, data)=>{
        if(err)return res.json(err)
        if(data == 0) return res.status(401).json('User not found')
        const aa = data[0].password
        // check password
        if(user.password == aa){
            req.user = user    // added this to authorize teacher 
            // res.json("Login Successful")

            // authorization -----------------

             const username = req.body.name

             const user_auth = {name:username}

             const accessToken = jwt.sign(user_auth, process.env.ACCESS_TOKEN_SECRET, {expiresIn:'30m'})

            res.json({accessToken : accessToken})

        } 
        else{
            res.sendStatus(403)
        }
    })
}
    catch{
        res.send(500).json('Somethings wrong')
    }





})

//------------------------------------------------------------------------------------------------------------------------------------------------------    
                // teacher login end
//------------------------------------------------------------------------------------------------------------------------------------------------------



// teacher details

app.get('/teacherdetails',authenticateUser, (req,res)=>{
    const sql = 'select * from teachers where f_name = ?'
    db.query(sql,[req.user_auth.name],(err,data)=>{
        if(err){
            return res.json(err)
        }
        res.json(data)
    })
})




app.put('/teacherdetails_update',authenticateUser, (req,res)=>{
    const username = req.user_auth.name;
    const sql = `update teachers set 
                    f_name = '?',
                    l_name = '?',
                    gender = '?',
                    password = '?'
                    where f_name = ?;`
    db.query(sql,[username],(err,data)=>{
        if(err){
            return res.json(err)
        }
        res.json(data)
    })
})









function authenticateUser(req,res,next){

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(token == null) return res.sendStatus(403)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user_auth)=>{
        if(err){
            return res.sendStatus(403)
        }
        req.user_auth = user_auth
        next()
    })
}



app.listen(8089, ()=>{
    console.log('Server Listening')
})