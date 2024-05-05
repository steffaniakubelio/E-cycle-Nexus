const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discount: { type: Number, required: true },
  expiryDate: { type: Date, required: true },
  used: { type: Boolean, default: false }
});

module.exports = mongoose.model('voucher', voucherSchema);
