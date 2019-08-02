import Express from 'express';
import Dotenv from 'dotenv';

const path = require('path');

Dotenv.config();

const port = process.env.PORT || 4500;
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({extended: false}));

// Facilitates access to frontend client
app.use(Express.static(path.join(__dirname, "../../frontend/build")))

// Serves React client
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/build", "index.html"));
});

app.listen(port, 'localhost');

console.log(`Server running on ${port}...`);