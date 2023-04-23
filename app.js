const express = require('express')
const app = express()
const port = 3000

// app.post('/api/signup', (req, res) => {
//     res.json({ message: 'signup api' });
// });

// app.post('/api/login', (req, res) => {
//     res.json({ message: 'Login api' });
// });

// app.post('/api/users/:userId/articles', (req, res) => {
//     const userId = req.params.id;
//     res.json({ message: `create an Article for user with ${userId}` });
// });

app.get('/api/articles', (req, res) => {
    res.json({ message: `Get all articles` });
});

// app.put('api/users/:userId', (req, res) => {
//     const userId = req.params.id;
//     res.json({ message: `Update user with ${userId}` });
// });


app.listen(port, () => {
    console.log(`listening on port ${port}!`);
});