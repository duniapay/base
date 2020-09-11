import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import models from './models';
import routes from './routes';



const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});






// * Routes * //

app.use('/transactions', routes.transactions);
app.use('/users', routes.user);




// * Start * //

app.listen(process.env.PORT, () =>
    console.log(`Server listening on port ${process.env.PORT}!`),

);