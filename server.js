const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Adrian', lastName: 'Beria'},
    {id: 2, firstName: 'Isreal', lastName: 'Kasix'},
    {id: 3, firstName: 'Maria', lastName: 'Suarez'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);