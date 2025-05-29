"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getTask = exports.createTask = exports.getAllTasks = void 0;
const Task_1 = __importDefault(require("../models/Task"));
const async_1 = __importDefault(require("../middleware/async"));
const custom_error_1 = require("../errors/custom-error");
const getAllTasks = (0, async_1.default)(async (req, res) => {
    const tasks = await Task_1.default.find({});
    res.status(200).json({ tasks });
});
exports.getAllTasks = getAllTasks;
const createTask = (0, async_1.default)(async (req, res) => {
    const task = await Task_1.default.create(req.body);
    res.status(201).json({ task });
});
exports.createTask = createTask;
const getTask = (0, async_1.default)(async (req, res, next) => {
    const taskID = req.params.id.trim();
    const task = await Task_1.default.findOne({ _id: taskID });
    if (!task) {
        return next((0, custom_error_1.createCustomError)(`No task with id: ${taskID}`, 404));
    }
    res.status(200).json({ task });
});
exports.getTask = getTask;
const updateTask = (0, async_1.default)(async (req, res, next) => {
    const taskID = req.params.id.trim();
    const task = await Task_1.default.findOneAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return next((0, custom_error_1.createCustomError)(`No task with id: ${taskID}`, 404));
    }
    res.status(200).json({ task });
});
exports.updateTask = updateTask;
const deleteTask = (0, async_1.default)(async (req, res, next) => {
    const taskID = req.params.id.trim();
    const task = await Task_1.default.findOneAndDelete({ _id: taskID });
    if (!task) {
        return next((0, custom_error_1.createCustomError)(`No task with id: ${taskID}`, 404));
    }
    res.status(200).json({ task });
});
exports.deleteTask = deleteTask;
//# sourceMappingURL=tasks.js.map