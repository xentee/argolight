const mongoose = require('mongoose');
const { MONGO_URI } = require('./src/config');
const Rocket = require('./src/models/Rocket');

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function seed() {
  await Rocket.deleteMany({});
  console.log('Collection Rocket tronquée');

  const rockets = [
    {
      name: 'Falcon 1',
      active: false,
      firstFlight: new Date('2006-03-24'),
      country: 'USA',
      description: 'First rocket developed by SpaceX.',
      coverUrl: 'https://example.com/falcon1.jpg'
    },
    {
      name: 'Falcon 9',
      active: true,
      firstFlight: new Date('2010-06-04'),
      country: 'USA',
      description: 'Workhorse rocket of SpaceX.',
      coverUrl: 'https://example.com/falcon9.jpg'
    },
    {
      name: 'Falcon Heavy',
      active: true,
      firstFlight: new Date('2018-02-06'),
      country: 'USA',
      description: 'Most powerful operational rocket.',
      coverUrl: 'https://example.com/falconheavy.jpg'
    }
  ];

  const created = await Rocket.insertMany(rockets);

  await mongoose.connection.close();
  console.log('Seed terminé');
}

seed().catch(err => {
  console.error('Erreur lors du seed :', err);
  process.exit(1);
});