const express = require("express");
const router = express.Router()
const {getAllProducts, printData} = require("../controller/testController")
router.route("/test").get(getAllProducts);
router.route('/print').post(printData);

module.exports = router