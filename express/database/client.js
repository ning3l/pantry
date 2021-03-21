const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection established"))
  .catch((err) => console.log(err.message));

const client = mongoose.connection;
client.on("err", (err) => console.log(err.message));

module.exports = client;
