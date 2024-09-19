const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT, () =>
  console.log(`Server is running successfully on ${process.env.PORT}`)
);
