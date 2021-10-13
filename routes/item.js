const router = require("express").Router();
const { catchErrors } = require("../handlers/errorHandlers");
const itemController = require("../controllers/itemController");




//router.get("/",  catchErrors(itemController.getAllList));
router.post("/create",  catchErrors(itemController.createItem));//items with thier HSN will be added o server

router.get("/",  catchErrors(itemController.home)) //home page

router.get("/item",  catchErrors(itemController.getItem));// anyone can details or item by entering HSN code

router.get("/discount",  catchErrors(itemController.getdisccount));// total disscount after filling details

router.post("/data",  catchErrors(itemController.data));//geting data from user
//---------------------------------------------------------------

module.exports = router;
