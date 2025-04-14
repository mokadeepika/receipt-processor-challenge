# Receipt Processor Challenge, Backend Take Home (Fetch Rewards)

This project implements the receipt processor challenge using Node.js and Express. It exposes two endpoints:

- `POST /receipts/process`: Processes a receipt and returns a unique ID
- `GET /receipts/:id/points`: Returns the reward points for that receipt

## Run Locally

```bash
npm install
npm start
```