"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const usersRoutes_1 = __importDefault(require("./router/usersRoutes"));
const toursRoutes_1 = __importDefault(require("./router/toursRoutes"));
const app = (0, express_1.default)();
//1)Middlewares
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
//2) Route Handlers
//3) Routes
app.use('/api/v1/users', usersRoutes_1.default);
app.use('/api/v1/tours', toursRoutes_1.default);
//4) Server
const port = 4010;
app.listen(port, () => {
    console.log(`Server running on Port:${port} 15`);
});
exports.default = app;
//# sourceMappingURL=app.js.map