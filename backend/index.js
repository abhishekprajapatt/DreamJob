import express from "express";

const app = express();

const PORT = 8081 || 3000;
app.listen(PORT, () => {
    console.log(`Server running at : ${PORT}`);
})