//                               *******ASSIGNMENT -1 ****
// (Build a backend server that  calculate the interest of principle  amount and interest rate on number of year holding the interest .)

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/calculate-interest', (req, res) => {
  const { principal, rate, years } = req.body;

  if (!principal || !rate || !years) {
    return res.status(400).json({ error: 'Missing input values' });
  }

  const interest = (principal * rate * years) / 100;
  res.json({ interest });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
