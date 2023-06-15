var express = require("express");
var router = express.Router();

const mfpController = require("../controllers/mfpController");

router.get("/", mfpController.showMfp);
router.get("/caridata/mf", mfpController.cariNomor);

module.exports = router;
