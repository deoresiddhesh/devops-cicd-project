const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps CI/CD Project</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 70px 20px;
            background: #f0f7ff;
          }
          h1 { color: #1456a0; }
          p { font-size: 18px; }
        </style>
      </head>
      <body>
        <h1>CI/CD Pipeline Successfully Implemented!</h1>
        <p>My web application is running.</p>
        <p>Built using Node.js, Express and GitHub Actions.</p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}
