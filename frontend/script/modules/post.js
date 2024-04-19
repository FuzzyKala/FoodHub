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
    console.log("this.#date", this.#date);
    const databaseTimestamp = this.#date;
    console.log("databaseTimestamp", databaseTimestamp);
    const dbDate = new Date(databaseTimestamp);
    const currentDate = new Date();
    const timeDifference = Math.abs(currentDate - dbDate); // Absolute difference in milliseconds
    const secondsDifference = Math.floor(timeDifference / 1000); // Convert milliseconds to seconds

    if (secondsDifference < 60) {
      return "Just now";
    } else if (secondsDifference < 3600) {
      const minutesDifference = Math.floor(secondsDifference / 60);
      const timeDifferenceText = `${minutesDifference} mins ago`;
      return timeDifferenceText;
    } else if (secondsDifference < 86400) {
      const hoursDifference = Math.floor(secondsDifference / 3600);
      const timeDifferenceText = `${hoursDifference} hours ago`;
      return timeDifferenceText;
    } else {
      const daysDifference = Math.floor(secondsDifference / 86400);
      const timeDifferenceText = `${daysDifference} days ago`;
      return timeDifferenceText;
    }
  }
}
export { Post };
