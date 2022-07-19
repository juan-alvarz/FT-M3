// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;
let nextId = 1;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];
var id = 1;
const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests

server.post("/posts", (req, res) => {
  //req.body = {title,author,contents}
  const { title, author, contents } = req.body;

  if (!title || !author || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error: "No se recivieron los parámetros necesarios para crear el post",
    });
  } else {
    let post = { title, author, contents, id: id++ };
    posts.push(post);

    res.json(post);
  }
});

server.post("/posts/author/:author", (req, res) => {
  let { title, contents } = req.body;
  let { author } = req.params;
  if (!title || !author || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el post",
    });
  } else {
    let post = { title, author, contents };
  }
});

server.get("/posts", (req, res) => {
  //chequear si me llega term por query
  // /posts?term=algo
  let { term } = req.query;

  //caso contrario devolver todos los posts
  if (!term) {
    res.json(posts);
  } else {
    let filtered = posts.filter(
      (post) => post.title.includes(term) || post.contents.includes(term)
    );
    res.json(filtered);
  }
  // posts que contengan ese term en title o en contents
});

server.get("/posts/:author", (req, res) => {
  let { author } = req.params;
  author = author.replace("%20", " ").toLowerCase();
  if (!author) {
    //devuelve error
    res.status(STATUS_USER_ERROR).json({ error });
  } else {
    let postsFromAuthor = posts.filter((p) => p.author === author);

    if (postsFromAuthor.length) {
      res
        .status(STATUS_USER_ERROR)
        .json({ error: "No existe ningun post del autor indicado" });
    } else {
      res.json(postsFromAuthor);
    }
  }
});

server.get("/posts/:author/:title", (req, res) => {
  let { author, title } = req.params;
  if (author && title) {
    let result = posts.filter((p) => p.author === author && p.title === title);

    if (result.length) {
      res.json(result);
    } else {
      res
        .status(STATUS_USER_ERROR)
        .json({ error: "No existe ningun post con dicho titulo y autor" });
    }
  } else {
    res
      .status(STATUS_USER_ERROR)
      .json({ error: "No se recibio author ni title" });
  }
});

server.put("/posts", (req, res) => {
  let { id, title, contents } = req.body;
  id = parseInt(id);

  if (!id || !title || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error:
        "No se recibieron los parámetros necesarios para modificar el post",
    });
  } else {
    let post = posts.find((p) => p.id === id);
    if (!post) {
      res.status(STATUS_USER_ERROR).json({ error: "" });
    } else {
      (post.title = title), (post.contents = contents);
      res.json(post);
    }
  }
});

server.delete("/posts", (req, res) => {
  let { id } = req.body;
  //verificar el tipo de dato que es el id
  id = parseInt(id);

  if (isNaN(id)) {
    //error
  } else {
    let post = posts.find((post) => post.id === id);

    if (!id || !post.length) {
      res.status(STATUS_USER_ERROR).json({ error: "Mensaje de error" });
    } else {
      // eliminar y devolver un json
      posts = post.filter((p) => p.id !== id);
      res.json({ success: true });
    }
  }
});

server.delete("/author", (req, res) => {
  let { author } = req.body;

  let deletedPosts = posts.filter((p) => p.author === author);

  if (!author || !deletedPosts.length) {
    res.status(STATUS_USER_ERROR).json({ error: "Mensaje de error" });
  } else {
    posts = posts.filter((p) => p.author !== author);
    res.json(deletePosts);
  }
});

module.exports = { posts, server };
