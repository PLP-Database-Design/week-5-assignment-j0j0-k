//install dependencies
const express = require('express');
const app = express()
const mysql=require('mysql2')
const dotenv=require('dotenv')

//configure environment variables

dotenv.config();

//create a connection object
const db=mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USERNAME,
    password : process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})
//TEST THE CONNECTION
db.connect((err)=>{
    //connection is not successful
    if(err){
         return console.log('Error connecting to the database.',err)
    }
    //connection is successful
    console.log('Successfully connected to mysql:', db.threadId)
})
//to make it readable like arranged
/*app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//question one
//retrieve all patients
app.get('',(req,res)=>{
    const getPatients= 'SELECT patient_id,first_name,last_name, date_of_birth FROM patients'
    db.query(getPatients,(err,data)=>{
        //if i have an error
        if(err){
            return res.status(400).send('Failed to get patients',err)
        }
        res.status(200).render('data',{data})
        //res.status(200).send(data)- makes it not to be arranged
 })
})*/
//question two
//retrieve all providers
/*app.get('',(req,res)=>{
    const getProviders='SELECT first_name,last_name,provider_specialty FROM providers'
    db.query(getProviders,(err,data)=>{
        if(err){
            return res.status(400).send('Failed to get providers',err)
        }
        res.status(200).send(data)
    })
})*/
//question three
//filter patients
/*app.get('',(req,res)=>{
    const getPatients='SELECT first_name FROM patients'
    db.query(getPatients,(err,data)=>{
        if (err){
            return res.status(400).send('Failed')
        }
        res.status(200).send(data)
    })
})*/
//question four
app.get('',(req,res)=>{
    const getProviders='SELECT first_name,last_name,provider_specialty FROM providers'
    db.query(getProviders,(err,data)=>{
        if(err){
            return res.status(400).send('Failed')
        }
        res.status(200).send(data)
    })
})
//start and listen to the server
app.listen(3300,()=>{
    console.log('Server is running on port 3300')
})