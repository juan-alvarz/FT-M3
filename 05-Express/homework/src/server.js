// const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;
let nextId = 1;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];
const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests

//          POST's

server.post("/posts", (req, res) => {
  const { author, title, contents } = req.body;
  if (!author || !title || !contents) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  }
  const newPost = {
    id: nextId,
    //...req.body también es lo mismo que:
    author,
    title,
    contents,
  };
  posts.push(newPost);
  nextId++;
  res.json(newPost);
});

server.post("/posts/author/:author", (req, res) => {
  const { title, contents } = req.body;
  const { author } = req.params;
  if (!title || !contents || !author) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No se recibieron los parámetros necesarios para crear el Post",
    });
  }
  const newPost = {
    id: nextId,
    author,
    title,
    contents,
  };
});

//          GET's

//http:localhost:3000/posts?term=Author
server.get("/posts", (req, res) => {
  const { term } = req.query;
  if (term) {
    const filteredPosts = posts.filter(
      (p) => p.title.includes(term) || p.contents.includes(term)
    );
    return res.json(filteredPosts);
  }
  res.json(posts);
});

server.get("/posts/:author", (req, res) => {
  const { author } = req.params;
  const filteredPosts = posts.filter((p) => p.author === author);
  if (filteredPosts.length !== 0) {
    return res.json(filteredPosts);
  }
  res
    .status(STATUS_USER_ERROR)
    .json({ error: "No existe ningun post del autor indicado" });
});

/* server.get("/posts/:author/:title", (req, res) => {
  const { author, title } = req.params;
}); */

server.get("/posts/:author/:title", (req, res) => {
  const { author, title } = req.params;
  const filteredPosts = posts.filter(
    (p) => p.author === author && p.title === title
  );
  if (filteredPosts.length === 0) {
    return res.status(STATUS_USER_ERROR).json({
      error: "No existe ningun post con dicho titulo y autor indicado",
    });
  }
  res.json(filteredPosts);
});

//          PUT's

server.put("/posts", (req, res) => {
  const { id, title, contents } = req.body;
  if (!id || !title || !contents) {
    res.status(STATUS_USER_ERROR).json({
      error:
        "No se recibieron los parámetros necesarios para modificar el Post",
    });
  }
  const postFound = posts.find((p) => p.id === id);
  if (!postFound) {
    return res.status(STATUS_USER_ERROR).json({
      error: "El id no corresponde a ningun post",
    });
  }
  postFound.title = title;
  postFound.contents = contents;
  res.json(postFound);
});

//        DELETE's
server.delete("/posts", (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(STATUS_USER_ERROR).json({
      error: "ID no provisto",
    });
  }
  const postFound = posts.find((p) => p.id === id);
  if (!postFound) {
    return res
      .status(STATUS_USER_ERROR)
      .json({ error: "El id no corresponde a un post valido" });
  }

  posts = posts.filter((p) => p.id !== id);
  res.json({ success: true });
});

server.delete("/author", (req, res) => {
  const { author } = req.body;
  if (!author || auhtor !== posts.map((i) => i.author)) {
    return res.status(STATUS_USER_ERROR).json({ error: "Mensaje de error" });
  }
});

module.exports = { posts, server };
