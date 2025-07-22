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
      coverUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Falcon_1_Flight_4_liftoff.jpg/500px-Falcon_1_Flight_4_liftoff.jpg'
    },
    {
      name: 'Falcon 9',
      active: true,
      firstFlight: new Date('2010-06-04'),
      country: 'USA',
      description: 'Workhorse rocket of SpaceX.',
      coverUrl: 'https://media.lematin.ch/4/image/2024/07/26/d7939754-21e3-4be1-9264-89bf79f2bbfb.jpeg?auto=format%2Ccompress%2Cenhance&fit=max&w=2001&h=2000&rect=0%2C0%2C3000%2C2000&s=71aeb47b9464b8484684419b898608f8'
    },
    {
      name: 'Falcon Heavy',
      active: true,
      firstFlight: new Date('2018-02-06'),
      country: 'USA',
      description: 'Most powerful operational rocket.',
      coverUrl: 'https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2018/02/falcon-heavy-spacex-1-e1553869592731.jpg?webp=1&key=d1622f49'
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