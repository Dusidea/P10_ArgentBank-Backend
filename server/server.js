const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");
const swaggerDocs = yaml.load("./swagger.yaml");
const dbConnection = require("./database/connection");

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware (CORS, JSON)
app.use(
  cors({
    origin: ["https://dusidea.github.io", "http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/user", require("./routes/userRoutes"));

if (process.env.NODE_ENV !== "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}

app.get("/", (req, res) => {
  res.json({ message: "Backend Argent Bank opérationnel !" });
});

// Démarre la connexion à la DB et ensuite le serveur
(async () => {
  try {
    await dbConnection();
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
      console.log("✅ Database connected successfully");
    });
  } catch (error) {
    console.error("❌ Failed to connect to database:", error);
  }
})();

console.log("URL MongoDB:", process.env.DATABASE_URL);
