const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const port = 3005;

app.use(express.json());
app.use(cors());

app.post("/search", async (req, res) => {
  const searchValue = req.body.searchValue;

  const responseOne = await axios.get(
    `https://api.hel.fi/linkedevents/v1/search/?format=json&q=${searchValue}`
  );

  const responseTwo = await axios.get(
    `https://api.finna.fi/api/v1/search?type=Title&field%5B%5D=title&field%5B%5D=images&field%5B%5D=urls&field%5B%5D=subjects&field%5B%5D=formats&lookfor=${searchValue}`
  );

  if (responseOne.status === 200 && responseTwo.status === 200) {
    let dataArray = [];

    for (let i = 0; i < Object.keys(responseOne.data.data).length; i++) {
      dataArray.push(responseOne.data.data[i].name.fi);
    }

    if (responseTwo.data.resultCount > 0) {
      for (let i = 0; i < Object.keys(responseTwo.data.records).length; i++) {
        dataArray.push(responseTwo.data.records[i].title);
      }
    }

    if (dataArray.length > 0) {
      res.send(dataArray);
    }
    else {
      res.send(['No data found'])
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
