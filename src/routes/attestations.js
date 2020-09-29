import { Router } from 'express';
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const router = Router();


router.get('/getAttestationRequestFee', (req, res) => {

    return res.send({ done: 'done' });
});

router.get('/requestAttestation', (req, res) => {
    return res.send({ done: 'done' });
});


router.post('/isAccountVerified', (req, res) => {

    return res.send({ done: 'done' });

});



export default router;