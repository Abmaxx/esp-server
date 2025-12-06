const express = require('express');
const app = express();

app.use(express.json());

let lastData = {};

app.post("/rssi", (req, res) => {
    console.log("📡 Data from ESP32:", req.body);
    lastData = req.body;
    res.json({ status: "received" });
});

app.get("/", (req, res) => {
    res.json({
        msg: "ESP32 Server Online on Render",
        lastData: lastData
    });
});

// Render assigns the port automatically
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
