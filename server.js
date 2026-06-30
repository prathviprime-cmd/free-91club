const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/game-result', (req, res) => {
    const results = ['Red', 'Green', 'Violet'];
    const finalResult = results[Math.floor(Math.random() * results.length)];
    res.json({ result: finalResult });
});

app.listen(PORT, () => {
    console.log(`सर्वर पोर्ट ${PORT} पर लाइव है...`);
});
