import express, { Application, NextFunction, Request, Response } from 'express';
import { UserRoutes } from './routes/user.routes';
import { UserService } from './services/UserService';

const app: Application = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const userRoutes = new UserRoutes().getRoutes();

app.use('/users', userRoutes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            messege: err.message,
        });
    }

    return response.status(500).json({
        messege: 'Internal Server Error',
    });
});

app.listen(3000, () => console.log('Server is running...'));