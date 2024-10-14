const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('../server');
const serverless = require('serverless-http')
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// app.use('', router);
// export const handler = serverless(app);
module.exports.handler = serverless(app);