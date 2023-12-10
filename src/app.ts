import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
