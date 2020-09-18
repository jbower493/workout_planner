const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
  name: String
});

const Shoe = mongoose.model('Shoe', ShoeSchema);

module.exports = Shoe;