import express from 'express'
import cors from 'cors'
import connectToDb from './config/db.js';
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';

const app=express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

connectToDb();

app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);
const PORT=process.env.PORT;
app.listen(PORT,()=>console.log(`Server running at port ${PORT}`));