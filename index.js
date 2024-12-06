const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware to parse JSON bodies
app.use(express.json());


// Serve the login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
