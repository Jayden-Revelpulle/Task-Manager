import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import path from 'path';
import tasks from './routes/tasks';
import connectDB from './db/connect';
import notFound from './middleware/not-found';
import errorHandlerMiddleware from './middleware/error-handler';

const app: any = express();
const corsOptions = {
    origin: process.env.CLIENT_URL || 'http://localhost:5173'
}

// middleware
app.use(cors(corsOptions))
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
    // Serve static files from the React app
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '../client/dist')));

    // Handle React routing, return all requests to React app
    app.get('*', (req: any, res: any) => {
        res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
    });
}

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