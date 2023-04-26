const express = require('express')
const mongoose = require("mongoose");
const app = express()
app.use(express.json())

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const articleRoute = require("./routes/articles");
const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://aayushimittal088:4G1AeVwsczl5WtXs@cluster0.711phjg.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
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