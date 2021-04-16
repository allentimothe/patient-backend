//Require model
const Patient = require('../models/patient')

async function index(req, res) {
// Index action
    try {
      const patients = await Patient.find({ uid: req.query.uid }).sort('-level');
      res.status(200).json(patients); //  send JSON data as an HTTP response
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: 'something went wrong' });
    }
    }


    async function create(req, res) {
      try {
          const patient = await Patient.create(req.body);
          req.query.uid = patient.uid;
          index(req, res);
      } catch (error) {
          res.status(401).json({ error: 'something went wrong' });
      }
  }

  async function deletePatient(req, res) {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        req.query.uid = deletedPatient.uid;
        index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}

async function update(req, res) {
  try {
      const updatedPatient = await Patient.findByIdAndUpdate(
          req.params.id, req.body, { new: true }
          );
          req.query.uid = updatedPatient.uid;
          index(req, res);
      } catch (error) {
          res.status(401).json({ error: 'something went wrong' });
  }
}


module.exports = {
  index,
  create,
  delete: deletePatient,
  update
};