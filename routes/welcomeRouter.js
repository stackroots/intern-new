const router = require("express").Router();




router.get("/", async (req, res, next) => {
    try {
        console.log(req.query);
        let responsePayload = { message: `hello ${req.query.name} welcome to stackroots`, isError: false, data: {} };
        if (req.query.name) {
            res.status(200)
        } else {
            res.status(400)
        }
        res.header("Content-Type", "application/json")
        res.json(responsePayload);
    } catch (error) {
        next(error);
    }
})




router.post("/", async (req, res, next) => {
    try {
        console.log(req.body);
        let responsePayload = { message: `hello ${req.body.name} welcome to stackroots`, isError: false, data: {} };
        if (req.body.name) {
            res.status(200)
        } else {
            res.status(400)
        }
        res.header("Content-Type", "application/json")
        res.json(responsePayload);
    } catch (error) {
        next(error);
    }
})



module.exports = router;