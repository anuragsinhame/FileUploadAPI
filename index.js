import express from "express";


import upload from './controller/upload.js';

const app = express();
const port = 3400;


app.post("/api/uploadFile", upload, (req, res, next) => {
  console.log("Testing");
  res.send("Server Responded");
});

app.listen(port, () => {
  console.log(`Server is started at ${port}`);
});
