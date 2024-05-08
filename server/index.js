import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT, mongodbUrl } from './config.js'
import booksRoute from './routes/booksRoute.js'

const app = express();

// MIDDLEWARE FOR PARSING REQUEST BODY

// ALLOW ORIGINS WITH DEFAULT SETTING OF CORS PACKAGE
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(234).send('Welcome to MERN Stack Bookstore2');
})

// ROUTES FOR BACKEND
app.use('/books', booksRoute);

// MONGO DB CONNECTION AND PORT USED
mongoose.connect(mongodbUrl)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })


