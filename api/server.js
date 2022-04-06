const express = require('express');

const server = express();
server.use(express.json());

// const AuthRouter = require('./auth/auth-router');
// server.use('/api/auth', AuthRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server;


