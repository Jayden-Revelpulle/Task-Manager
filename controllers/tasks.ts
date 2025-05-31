import { Request, Response, NextFunction } from 'express';
import Task from '../models/Task';
import asyncWrapper from '../middleware/async';
import { createCustomError } from '../errors/custom-error';

const getAllTasks = asyncWrapper(async (req: Request, res: Response): Promise<void> => {
    const tasks = await Task.find({}).exec();
    res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req: Request, res: Response): Promise<void> => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const taskID: string = req.params.id.trim();
    const task = await Task.findById(taskID).exec();

    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404));
    }
    res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const taskID: string = req.params.id.trim();
    const task = await Task.findByIdAndUpdate(
        taskID,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    ).exec();

    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404));
    }

    res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const taskID: string = req.params.id.trim();
    const task = await Task.findByIdAndDelete(taskID).exec();
    
    if (!task) {
        return next(createCustomError(`No task with id: ${taskID}`, 404));
    }
    res.status(200).json({ task });
});

export {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}; 