function handlePosts(req, res, postBank, render) {
  posts = postBank.list();

  res.send(render(posts));
}

function handleSinglePost(req, res, postBank, render) {
  const id = req.params.id;
  const post = postBank.find(id);
  console.log(post);
  if (!post.id) {
    throw Error("Uh oh");
  }
  res.send(render(post));
}
module.exports = {
  handlePosts,
  handleSinglePost,
};
