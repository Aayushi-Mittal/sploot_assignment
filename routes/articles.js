const router = require("express").Router();
const User = require("../models/User");
const Article = require("../models/Article");

//Create Article
router.post("/new", async (req, res) => {
  const newArticle = new Article(req.body);
  try {
    const savedArticle = await newArticle.save();
    res.status(200).json(savedArticle);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Articles
router.put("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article.username === req.body.username) {
      try {
        const updatedArticle = await Article.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedArticle);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your article!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Articles
router.delete("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (article.username === req.body.username) {
      try {
        await article.delete();
        res.status(200).json("Articles has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your articles!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


//Get all Articles
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    let article;
    if (username) {
      article = await Article.find({ username });
    } else {
      article = await Article.findAll();
    }
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get Articles
router.get("/:id", async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json(article);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;