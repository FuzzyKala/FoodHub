class Post {
  #post_id;
  #username;
  #title;
  #description;
  #category;
  #photo_data;
  #rate;
  #comment_num;
  #date;
  constructor(
    post_id,
    username,
    title,
    description,
    category,
    photo_data,
    rate,
    comment_num,
    date
  ) {
    this.#post_id = post_id;
    this.#username = username;
    this.#title = title;
    this.#description = description;
    this.#category = category;
    this.#photo_data = photo_data;
    this.#rate = rate;
    this.#comment_num = comment_num;
    this.#date = date;
  }
  getPostId() {
    return this.#post_id;
  }
  getUsername() {
    return this.#username;
  }
  getTitle() {
    return this.#title;
  }
  getDescription() {
    return this.#description;
  }
  getCategory() {
    return this.#category;
  }
  getPhotoData() {
    return this.#photo_data;
  }
  getRate() {
    return this.#rate;
  }
  getCommentNum() {
    return this.#comment_num;
  }
  getDate() {
    return this.#date;
  }
}
export { Post };
