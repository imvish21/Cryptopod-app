const express = require("express");
const {getDashboard,getTrade} = require("../controllers/cryptocontroller");
const router = express.Router();


router.route("/").get(getDashboard);
// router.route("/coins/:id").get();
router.route("/trade").get(getTrade);
// router.route("/wallet").get();
// router.route("/settings").get();

module.exports = router;