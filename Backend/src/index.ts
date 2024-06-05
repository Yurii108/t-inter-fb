import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const a = 4; //For checking eslint

const app = express();
const port = 5000;

const apiKey = process.env.VITE_COINMARKETCAP_KEY;

app.use(cors());

app.listen(port, () => console.log(`Server is running on ${port}`));

app.get('/', async (req, res) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            headers: {
                'X-CMC_PRO_API_KEY': apiKey,
            },
        };

        const response = await axios.request(options);
        res.json(response.data);
        console.log('success');

    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
