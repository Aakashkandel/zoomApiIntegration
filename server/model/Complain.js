const mongoose = require('mongoose');

const complain = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User',  
      required: true, 
    },
    type: {
      type: String,
      required: true,
    },
    uploadfile: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    advice: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
  }
);

const Complain = mongoose.model('complains', complain); 

module.exports = Complain;
