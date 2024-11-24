const { json } = require("express");
const Post = require("../models/Post");

const PostController = {
  create: async (req, res) => {
    try {
      // const { id } = req.params;
      // const idUser = await User.findById(id);
      const { title, content, rating, movieTitle, director } = req.body;
      const post = await Post.create({
        title,
        content,
        rating,
        movieTitle,
        // user: idUser._id,
      });
      return res.status(200).json({
        msg: "Post Created ;D",
        post,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const posts = await Post.find();
      return res.status(200).json({
        msg: "All Posts",
        posts,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error ://",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const postfound = await Post.findById(id);
      if (!postfound) {
        return res.status(404).json({
          msg: "Post not found :(",
        });
      }

      return res.status(200).json({
        msg: "Post found",
        postfound,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);

      if (!post) {
        return res.status(404).json({
          msg: "Post not found :(",
        });
      }

      const deletePost = await Post.findByIdAndDelete(id);
      return res.status(200).json({
        msg: "Post deleted !!",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },
};
module.exports = PostController;
