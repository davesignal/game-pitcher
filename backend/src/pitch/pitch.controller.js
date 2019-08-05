const PitchController = {};

PitchController.test = (req, res) => {
  return res.send('PitchController');
}

PitchController.generate = (req, res) => {
  return res.send('Generate');
}

export default PitchController;