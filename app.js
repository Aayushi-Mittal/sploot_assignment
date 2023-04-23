const express = require('express')
const mongoose = require("mongoose");
const app = express()

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const articleRoute = require("./routes/articles");
const port = 3000;

mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
    });


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/articles", articleRoute);


app.listen(port, () => {
    console.log(`listening on port ${port}!`);
});