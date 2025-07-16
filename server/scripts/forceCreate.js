// scripts/forceCreate.js
const mongoose = require("mongoose");
require("dotenv").config();

const dbUrl = process.env.DATABASE_URL;

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("✅ Connexion réussie");

    await User.create({ email: "test@create.com", password: "123456" });

    console.log("✅ Insertion test réussie");
    await mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Erreur :", err);
  });
