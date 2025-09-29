// Basic server setup
import express from 'express'

const app = express()
const router = express.Router();

const PORT = 3000;

// HTTP method handling
app.get('/', (req, res) => {
    res.send('Hello Express!');
});

router.get('/user', (req, res) => {
    res.send('This is GET user...')
})

app.use(router)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});