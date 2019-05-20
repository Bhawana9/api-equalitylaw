const express =require('express')
const dotenv =require( 'dotenv')

const profileRouter =require('./routers/api/profile') 
const usersRouter =require('./routers/api/users') 
const authRouter =require('./routers/api/auth') 
const connectDB=require('./config/mongoose');


dotenv.config();
const app = express();


//Coonect database
connectDB();

//Init Middleware
app.use(express.json({extended:false}));
app.use(express.static('public'));


//Define Routers
app.use('/api/users',usersRouter)
app.use('/api/profile',profileRouter)
app.use('/api/auth',authRouter)


module.exports=app