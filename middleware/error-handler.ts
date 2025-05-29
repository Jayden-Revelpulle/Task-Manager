import { Request, Response, NextFunction } from 'express';
import { CustomAPIError } from '../errors/custom-error';

const errorHandlerMiddleware = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
): Response => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }
    return res.status(500).json({ msg: 'Something went wrong, please try again' });
};

export default errorHandlerMiddleware; 