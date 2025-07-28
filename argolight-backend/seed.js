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
      description: 'Première fusée développée par SpaceX.',
      coverUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Falcon_1_Flight_4_liftoff.jpg/500px-Falcon_1_Flight_4_liftoff.jpg',
      height: 22.25,
      diameter: 1.68,
      mass: 30146,
      payloadCapacity: 670,
      stages: 2,
      wikipedia: 'https://fr.wikipedia.org/wiki/Falcon_1'
    },
    {
      name: 'Falcon 9',
      active: true,
      firstFlight: new Date('2010-06-04'),
      country: 'USA',
      description: 'Fusée de travail polyvalente de SpaceX.',
      coverUrl: 'https://media.lematin.ch/4/image/2024/07/26/d7939754-21e3-4be1-9264-89bf79f2bbfb.jpeg?auto=format%2Ccompress%2Cenhance&fit=max&w=2001&h=2000&rect=0%2C0%2C3000%2C2000&s=71aeb47b9464b8484684419b898608f8',
      height: 70,
      diameter: 3.7,
      mass: 549054,
      payloadCapacity: 22800,
      stages: 2,
      wikipedia: 'https://fr.wikipedia.org/wiki/Falcon_9'
    },
    {
      name: 'Falcon Heavy',
      active: true,
      firstFlight: new Date('2018-02-06'),
      country: 'USA',
      description: 'Fusée opérationnelle la plus puissante du monde.',
      coverUrl: 'https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2018/02/falcon-heavy-spacex-1-e1553869592731.jpg?webp=1&key=d1622f49',
      height: 70,
      diameter: 12.2,
      mass: 1420788,
      payloadCapacity: 63800,
      stages: 2,
      wikipedia: 'https://fr.wikipedia.org/wiki/Falcon_Heavy'
    },
    {
      name: 'Falcon 9 Block 5',
      active: true,
      firstFlight: new Date('2018-05-11'),
      country: 'USA',
      description: 'Version finale optimisée du Falcon 9.',
      coverUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/SpaceX_Demo-2_Launch_%28NHQ202005300044%29_%28cropped%29.jpg/250px-SpaceX_Demo-2_Launch_%28NHQ202005300044%29_%28cropped%29.jpg',
      height: 70,
      diameter: 3.7,
      mass: 549054,
      payloadCapacity: 22800,
      stages: 2,
      wikipedia: 'https://fr.wikipedia.org/wiki/Falcon_9'
    },
    {
      name: 'Starship',
      active: false,
      firstFlight: new Date('2023-03-30'),
      country: 'USA',
      description: 'Véhicule de lancement super lourd de nouvelle génération, entièrement réutilisable.',
      coverUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/SpaceX_Starship_ignition_during_IFT-5.jpg/250px-SpaceX_Starship_ignition_during_IFT-5.jpg',
      height: 120,
      diameter: 9,
      mass: 5000000,
      payloadCapacity: 100000,
      stages: 2,
      wikipedia: 'https://fr.wikipedia.org/wiki/SpaceX_Starship'
    },
    {
      name: 'Dragon',
      active: true,
      firstFlight: new Date('2010-12-08'),
      country: 'USA',
      description: 'Module spatial habitable et cargo développé par SpaceX.',
      coverUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/COTS2Dragon.2..jpg/330px-COTS2Dragon.2..jpg',
      height: 7.2,
      diameter: 3.7,
      mass: 4200,
      payloadCapacity: 6000,
      stages: 1,
      wikipedia: 'https://fr.wikipedia.org/wiki/SpaceX_Dragon'
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