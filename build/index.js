"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//middleware transforma req.body (lo que enviamos a la endpoint) a json
app.use(express_1.default.json());
const PORT = 3000;
//ignorando parametros : _
app.get('/ping', (_, res) => {
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
