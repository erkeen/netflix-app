const router = require("express").Router();

const axios = require("axios");

router.get("/trending", async (req, res, next) => {
  try {
    const { data } = await axios.get(process.env.TRENDING);
    res.send(data.results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/netflixOriginals", async (req, res, next) => {
  try {
    const response = await axios.get(process.env.NETFLIX_ORIGINALS);
    res.send(response.data.results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/topRated", async (req, res, next) => {
  try {
    const response = await axios.get(process.env.TOP_RATED);
    res.send(response.data.results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/action", async (req, res, next) => {
  try {
    const response = await axios.get(process.env.ACTION);
    res.send(response.data.results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/comedy", async (req, res, next) => {
  try {
    const response = await axios.get(process.env.COMEDY);
    res.send(response.data.results);
  } catch (error) {
    console.log(error);
  }
});
router.get("/horror", async (req, res, next) => {
  try {
    const response = await axios.get(process.env.HORROR);
    res.send(response.data.results);
  } catch (error) {
    console.log(error);
  }
});
// router.get("/romance", async (req, res, next) => {
//   try {
//     const response = await axios.get(process.env.ROMANCE);
//     res.send(response);
//   } catch (error) {
//     console.log(error);
//   }
// });
router.get("/documentaries", async (req, res, next) => {
  try {
    const response = await axios.get(process.env.DOCUMENTARIES);
    res.send(response.data.results);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
