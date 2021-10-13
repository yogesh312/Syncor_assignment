const mongoose = require("mongoose");
//const user = require("../models/user");
const Item = mongoose.model("Item");

exports.createItem = async (req, res) => {
  const { HSN,name, rate_percentage, UQC, cap_UQC} = req.body;
  const itemExist = await Item.findOne({ HSN });
  if (itemExist) throw "this HSN id already exist";
  const item = new Item({
    HSN,
    name,
    rate_percentage,
    UQC,
    cap_UQC
  });
  await item.save();
  res.json({message: "item created!",
  });
};


exports.home =async (req, res) => {
    res.render('./home',{
      title:"home"
    });
}







exports.getList = async (req, res) => {
    const id = req.params.id;
    let item = await Item.findById(id);
    res.json(item);
    
};
