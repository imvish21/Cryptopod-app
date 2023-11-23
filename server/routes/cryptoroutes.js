const express = require("express");
const {getDashboard,getTrade,getWallet,getSettings,getCoinPage,getErrorPage,getAllRoutes} = require("../controllers/cryptocontroller");
const router = express.Router();


router.route("/").get(getDashboard);
router.route("/coins/:id").get(getCoinPage);
router.route("/trade").get(getTrade);
router.route("/wallet").get(getWallet);
router.route("/settings").get(getSettings);
router.route("*").get(getAllRoutes);
module.exports = router;