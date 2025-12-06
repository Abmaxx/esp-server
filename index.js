console.log("RUNNING FILE PATH:", __filename);

const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

let lastRSSI = {};   // store latest data

app.post("/rssi", (req, res) => {
    console.log("📡 Data received:", req.body);
    lastRSSI = req.body;
    res.json({ status: "ok" });
});

// Show data in browser
app.get("/", (req, res) => {
    res.json({
        message: "Last ESP32 Data:",
        data: lastRSSI
    });
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
