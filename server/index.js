const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const port = 3005;

app.use(express.json());
app.use(cors());


app.post("/search", async (req, res) => {
  const searchValue = req.body.searchValue;

  const response = await axios.get(
    `https://api.hel.fi/linkedevents/v1/search/?format=json&q=${searchValue}`
  );
  
  res.send(response.data.data);
 
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
