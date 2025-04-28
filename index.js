// index.js
import express from 'express';
import cors from 'cors';
import taskRoutes from './src/routes/taskRoutes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', taskRoutes);

app.get('/', (req, res) => {
    res.send('API is working!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
