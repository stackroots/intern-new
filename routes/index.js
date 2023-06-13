module.exports = (app) => {
    app.use("/welcome", require("./welcomeRouter"));
}

