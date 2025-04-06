import express from "express";
import { setupApp } from "./setup-app";

// создание приложения
const app = express();
setupApp(app);

// порт приложения
const PORT = process.env.PORT || 3004;

// запуск приложения
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;   //невозможно удалить, т.к. verсel выдает 500 ошибку после билда
                        // export const app = express(); не работает с vercel