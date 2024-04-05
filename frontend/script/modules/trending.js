import { Post } from "./post.js";
class Trending {
  #posts = [];
  #backendUrl = "";

  constructor(url) {
    this.#backendUrl = url;
  }

  // getPosts = async () => {
  //   try {
  //   } catch (error) {}
  //   return new Promise(async (resolve, reject) => {
  //     fetch(this.#backendUrl + "/posts/trending")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then(
  //         (json) => {
  //           this.#readJson(json);
  //           resolve(this.#posts);
  //         },
  //         (err) => {
  //           reject(err);
  //         }
  //       );
  //   });
  // };
  getPosts = async () => {
    try {
      const response = await fetch(this.#backendUrl + "/posts/trending");
      if (!response.ok) {
        throw new Error(
          `Failed to fetch trending posts: ${response.statusText}`
        );
      }
      const json = await response.json();
      this.#readJson(json);
      return this.#posts;
    } catch (error) {
      console.error("Error fetching trending posts:", error);
      return [];
    }
  };

  //   #readJson = (json) => {
  //     this.#posts = [];
  //     json.forEach((post) => {
  //       const newPost = new Post(
  //         post.post_id,
  //         post.username,
  //         post.description,
  //         post.photo_data,
  //         post.rate,
  //         post.comment_num,
  //         post.date
  //       );
  //       this.#posts.push(newPost);
  //     });
  //   };
  // }

  #readJson = (json) => {
    console.log("Received JSON data:", json); // Log received JSON data
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
      console.log("Created Post:", newPost); // Log created Post object
      this.#posts.push(newPost);
    });
  };
}

export { Trending };
