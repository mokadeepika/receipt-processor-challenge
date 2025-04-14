// index.js
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { calculatePoints } from './receiptService.js';

const app = express();
const PORT = 3000;

app.use(express.json());

const receiptData = new Map();

app.post('/receipts/process', (req, res) => {
  const receipt = req.body;
  const id = uuidv4();
  const points = calculatePoints(receipt);
//   console.log("points calculated", points);
  receiptData.set(id, points);
  res.status(200).json({ id });
});

app.get('/receipts/:id/points', (req, res) => {
  const id = req.params.id;
  const points = receiptData.get(id);
  if (!points) return res.status(404).json({ error: 'Receipt not found' });
  res.status(200).json({ points });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//http://localhost:3000/receipts/process