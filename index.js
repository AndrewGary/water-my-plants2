require('dotenv').config();
const express = require('express');

const server = express();
server.use(express.json());


server.get('/', (req, res, next) => {
    res.status(200).json({ message: 'PLease work' })
})


const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})