import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import tasks from './routes/tasks';
import connectDB from './db/connect';
import notFound from './middleware/not-found';
import errorHandlerMiddleware from './middleware/error-handler';

const app: any = express();
const corsOptions = {
    origin: 'http://localhost:5173'
}

// middleware
app.use(express.static('./public'));
app.use(cors(corsOptions))
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const start = async (): Promise<void> => {
    try {
        await connectDB(process.env.MONGO_URI as string);
        app.listen(port, () => console.log(`server is listening on port ${port}...`));
    } catch (err: any) {
        console.log(err);
    }
};

config();
start(); 