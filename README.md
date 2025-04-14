# Receipt Processor Challenge, Backend Take Home (Fetch Rewards)
This project implements a Dockerized Node.js web service that scores receipts according to rules provided by Fetch.
---

## Tech Stack

This project implements the receipt processor challenge using Node.js and Express. It exposes two endpoints:

- `POST /receipts/process`: Processes a receipt and returns a unique ID
- `GET /receipts/:id/points`: Returns the reward points for that receipt

## Run with Docker
Docker is installed and running on your system.
```bash
# Build the Docker image
docker build -t receipt-processor-challenge .

# Run the container
docker run -p 3000:3000 receipt-processor-challenge
```
## Run Locally

```bash
npm install
npm start
```