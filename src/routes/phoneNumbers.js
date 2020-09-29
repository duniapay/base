import { Router } from 'express';
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const router = Router();


router.post('/hash', (req, res) => {
    // TODO get transactions list from database
    return res.send({ done: 'done' });
});


export default router;