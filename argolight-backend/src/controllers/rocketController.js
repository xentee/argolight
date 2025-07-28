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

exports.getRocketById = async (req, res) => {
  try {
    const rocket = await Rocket.findById(req.params.id);
    if (!rocket) return res.status(404).json({ error: 'Fusée non trouvée' });
    res.json(rocket);
  } catch (err) {
    console.error('Erreur dans getRocketById :', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};