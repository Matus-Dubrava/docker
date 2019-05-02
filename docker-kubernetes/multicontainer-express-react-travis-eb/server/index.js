const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

const Post = require('./models/posts');

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`);
    next();
});

app.get('/', (req, res) => {
    return res.json(Post.list());
});

app.post('/', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(422).send('invalid form data');
    }

    const status = Post.add(text);
    res.json({ status });
});

app.delete('/', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(422).send('invalid form data');
    }

    const status = Post.remove(text);
    res.json({ status });
});

app.listen(port, () => {
    console.log(`server started listening on port ${port}`);
});
