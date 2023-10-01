const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
});


app.get('/stream', (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    send(res);
});

let i = 0

function send(res) {
    res.write(`data: ${i++}\n\n`);
    setTimeout(() => send(res), 1000);
}

app.listen(5000, () => console.log("App is dropped on 5000"));