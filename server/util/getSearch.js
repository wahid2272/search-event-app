const axios = require("axios");

const getSearch = async (req, res) => {
  const searchValue = req.body.searchValue; // searchValue catches the search input that was sent from frontend

  const responseOne = await axios.get(
    `https://api.hel.fi/linkedevents/v1/search/?format=json&q=${searchValue}`
  );

  const responseTwo = await axios.get(
    `https://api.finna.fi/api/v1/search?type=Title&field%5B%5D=title&field%5B%5D=images&field%5B%5D=urls&field%5B%5D=subjects&field%5B%5D=formats&lookfor=${searchValue}`
  );

  if (responseOne.status === 200 && responseTwo.status === 200) {
    let dataArray = []; // API response to be sent as an array to the front end

    // The Object.keys() method returns an array of a given object
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
    } else {
      res.send(["No data found with this search value!"]);
    }
  }
};

module.exports = getSearch;
