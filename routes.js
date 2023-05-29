const router = require("express").Router();
const path = require("path");
const view = __dirname + "/views/";

router.get("/", (req, res) => {
    res.sendFile(path.join(view + "home.html"));
});
router.get("/about", (req, res) => {
    res.sendFile(path.join(view + "about.html"));
});
router.get("/skill", (req, res) => {
    res.sendFile(path.join(view + "skill.html"));
});

module.exports = router;
