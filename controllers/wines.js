//TODO: require model
const Wine = require('../models/wine')

async function index(req, res) {
// TODO: finish index action
  try {  
    const wines = await Wine.find({});
    res.status(200).json(wines); // send JSON data as an HTTP response
  } catch (error) {
    console.log(error);
    res.status(400).json({error: 'something went wrong'}); 
  }
}



async function create(req, res) {
  try {
      const wine = await Wine.create(req.body);
      res.status(201).json(wine);
      // index(req, res);
  } catch (error) {
      res.status(401).json({ error: 'something went wrong' });
  }
}

module.exports = {
  index,
  create,
}