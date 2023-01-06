const express = require("express");
const app = express();
const cors = require("cors");
app.use(
    cors({
        origin: "*",
    }));

app.get("/", (req, res) => {
    res.send('Hello, I am the Server!')
    res.json({ name: "Moeez", favouriteFood: "Rice" });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});