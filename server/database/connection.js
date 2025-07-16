require("dotenv").config();
const mongoose = require("mongoose");
const databaseUrl = process.env.DATABASE_URL;

console.log("🚀 Connexion à MongoDB avec cette URL:", databaseUrl);

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database successfully connected");
  } catch (error) {
    console.error(`❌ Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};
