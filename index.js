// const express = require('express');
// const app = express();

// app.use(express.json());

// let lastData = {};

// app.post("/rssi", (req, res) => {
//     console.log("📡 Data from ESP32:", req.body);
//     lastData = req.body;
//     res.json({ status: "received" });
// });

// app.get("/", (req, res) => {
//     res.json({
//         msg: "ESP32 Server Online on Render",
//         lastData: lastData
//     });
// });

// // Render assigns the port automatically
// const PORT = process.env.PORT || 8800;
// app.listen(PORT, () => {
//     console.log(`Server running on PORT ${PORT}`);
// });



const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello World! Server is running.");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});