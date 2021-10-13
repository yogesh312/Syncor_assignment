const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    HSN: {
      type: Number,
      required: true,
      unique: true
    },
    
    name: {
      type: String,
      required: [true, "name of item"],
      trim:true,
      unique: true,
      maxlength: 25,
      
    },
    rate_percentage: {
      type: Number,
      required: [true, "description is required!!!"],
    },
    UQC: {
        type: String,
    }, 

    cap_UQC: {
      type: Number,
    }
  },
  {
    timestamps: true,
  }

);
module.exports = mongoose.model("Item", itemSchema);
