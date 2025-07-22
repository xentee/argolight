const express = require('express');
const mongoose = require('mongoose');
const { PORT, MONGO_URI, JWT_SECRET } = require('./config');

const app = express();

app.use(express.json());

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connectée'))
  .catch(err => {
    console.error('Erreur connexion MongoDB :', err);
    process.exit(1);
  });

  app.get('/', (req, res) => {
  res.json({ message: 'API Argolight – OK' });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});