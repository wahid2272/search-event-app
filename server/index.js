const express = require("express");
const cors = require("cors");
const getSearch = require('./util/getSearch')

const app = express();

const {port,host} = require('./util/config.json');

app.use(express.json());
app.use(cors());

app.post("/search", getSearch);

app.listen(port, host, () => {
  console.log(`Server ${host} is running on port ${port}.`);
});
