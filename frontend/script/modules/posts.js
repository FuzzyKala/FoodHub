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
      const response = await fetch(`${this.#backendUrl}${this.#restUrl}`);
      if (response.ok) {
        const json = await response.json();
        this.#readJson(json);
        return this.#posts;
      } else {
        throw new Error("Failed to fetch posts");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  };

  #readJson = (json) => {
    this.#posts = json.map(
      (post) =>
        new Post(
          post.post_id,
          post.username,
          post.title,
          post.description,
          post.category,
          post.photo_data,
          post.rate,
          post.comment_num,
          post.date
        )
    );
  };
}

export { posts };
