import { Post } from "./post.js";
class Trending {
  #posts = [];
  #backendUrl = "";

  constructor(url) {
    this.#backendUrl = url;
  }

  getPosts = async () => {
    try {
    } catch (error) {}
    return new Promise(async (resolve, reject) => {
      fetch(this.#backendUrl + "/posts/trending")
        .then((res) => {
          return res.json();
        })
        .then(
          (json) => {
            this.#readJson(json);
            resolve(this.#posts);
          },
          (err) => {
            reject(err);
          }
        );
    });
  };

  #readJson = (json) => {
    this.#posts = [];
    json.forEach((post) => {
      const newPost = new Post(
        post.post_id,
        post.username,
        post.description,
        post.photo_data,
        post.rate,
        post.comment_num,
        post.date
      );
      this.#posts.push(newPost);
    });
  };
}

export { Trending };
