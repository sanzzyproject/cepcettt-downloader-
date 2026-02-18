const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/download', async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'URL tidak boleh kosong' });

    try {
        const response = await axios.get(`https://chocomilk.amira.us.kg/v1/download/capcut?url=${encodeURIComponent(url)}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data dari server' });
    }
});

module.exports = app;
