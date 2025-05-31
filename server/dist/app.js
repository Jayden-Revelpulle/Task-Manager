"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const tasks_1 = __importDefault(require("./routes/tasks"));
const connect_1 = __importDefault(require("./db/connect"));
const not_found_1 = __importDefault(require("./middleware/not-found"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.static('./public'));
app.use(express_1.default.json());
// routes
app.use('/api/v1/tasks', tasks_1.default);
app.use(not_found_1.default);
app.use(error_handler_1.default);
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const start = async () => {
    try {
        await (0, connect_1.default)(process.env.MONGO_URI);
        app.listen(port, () => console.log(`server is listening on port ${port}...`));
    }
    catch (err) {
        console.log(err);
    }
};
(0, dotenv_1.config)();
start();
//# sourceMappingURL=app.js.map