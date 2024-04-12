import { Post } from "./post.js";
class posts {
  #posts = [];
  #backendUrl = "";
  #restUrl = "";

  constructor(url, restUrl) {
    this.#backendUrl = url;
    this.#restUrl = restUrl;
  }

  getPosts = async () => {
    try {
    } catch (error) {}
    return new Promise(async (resolve, reject) => {
      fetch(this.#backendUrl + this.#restUrl)
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
        post.title,
        post.description,
        post.category,
        post.photo_data,
        post.rate,
        post.comment_num,
        post.date
      );
      this.#posts.push(newPost);
    });
  };
}

export { posts };
