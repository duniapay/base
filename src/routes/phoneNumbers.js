import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const router = Router();







router.get('/', (req, res) => {
    // TODO get transactions list from database
    return res.send(Object.values(req.context.models.transactions));
});

router.get('/:transactionId', (req, res) => {
    // TODO get transactions from id
    return res.send(req.context.models.transactions[req.params.transactionId]);
});




router.post('/collect', (req, res) => {
    const id = uuidv4();
    const transaction = {
        id,
        params: req.body,
        status: 'pending',
        tx_type: 'debit',
        subtype: 'collection',
        created: Date.now(),
    };
    req.context.models.collection = transaction;
    return res.send(transaction);

});


router.post('/deposit', (req, res) => {
    const id = uuidv4();
    const transaction = {
        id,
        text: req.body,
        status: 'pending',
        tx_type: 'credit',
        subtype: 'deposit',
        created: Date.now(),
    };
    req.context.models.topup = transaction;
    return res.send(transaction);
});



router.post('/payout', (req, res) => {
    const id = uuidv4();
    const transaction = {
        id,
        text: req.body,
        status: 'pending',
        tx_type: 'debit',
        subtype: 'payout',
        created: Date.now(),
    };
    req.context.models.payout = transaction;
    return res.send(transaction);
});




export default router;