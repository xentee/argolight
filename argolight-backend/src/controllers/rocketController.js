const Rocket = require('../models/Rocket');

exports.getRockets = async (req, res) => {
  try {
    const rockets = await Rocket.find();
    
    return res.json(rockets);
  } catch (err) {
    return res.status(500).json({
      error: 'Impossible de récupérer la liste des fusées'
    });
  }
};