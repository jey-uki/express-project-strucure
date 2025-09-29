// Basic server setup
import express from 'express'

const app = express()
const PORT = 3000;

// HTTP method handling
app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.route('/book')
    .get((req, res) => {
        res.send('Get a random book')
    })
    .post((req, res) => {
        res.send('Add a book')
    })
    .put((req, res) => {
        res.send('Update the book')
    })

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});