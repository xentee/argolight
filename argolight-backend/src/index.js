const express = require('express');
const mongoose = require('mongoose');
const { PORT, MONGO_URI, JWT_SECRET } = require('./config');
const rocketRoutes = require('./routes/rocket');
const userRoutes = require('./routes/user');

const app = express();

app.use(express.json());
app.use('/rocket', rocketRoutes);
app.use('/user', userRoutes);

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