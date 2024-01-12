const express = require('express');
const http = require('http');

const app = express();

let totalReqCount = 0;

app.use((req, res, next) => {
    totalReqCount++;
    next();
});

app.get('/api/totalReqCount', (req, res) => {
    res.json({ totalReqCount });
    totalReqCount = 0; 
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
