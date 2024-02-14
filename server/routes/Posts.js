const express = require("express");
const router = express.Router();
const { Posts, Likes } = require("../models");

// Get all posts with likes included
router.get("/", async (req, res) => {
  try {
    const listOfPosts = await Posts.findAll({ include: [Likes] });
    res.json(listOfPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get a post by its ID
router.get("/byId/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Posts.findByPk(id, { include: [Likes] });

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Create a new post
router.post("/", async (req, res) => {
  try {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a post by its ID
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Posts.findByPk(id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    await post.destroy();
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

