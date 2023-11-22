const express = require("express");
const {getDashboard,getTrade,getWallet,getSettings} = require("../controllers/cryptocontroller");
const router = express.Router();


router.route("/").get(getDashboard);
// router.route("/coins/:id").get();
router.route("/trade").get(getTrade);
router.route("/wallet").get(getWallet);
router.route("/settings").get(getSettings);

module.exports = router;