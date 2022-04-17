class TwiterUser {
  constructor(name, nickname, age) {
    this.name = name;
    this.nickname = nickname;
    this.age = age;
  }
}

class FacebookUser {
  constructor(name, friend_count, posts) {
    this.name = name;
    this.friend_count = friend_count;
    this.posts = posts;
  }
}

class UberUser {
  constructor(name, age, stars) {
    this.name = stars;
    this.age = age;
    this.stars = name;
  }
}

const fbUser = new FacebookUser("Mauro", 50, [
  {
    date: "2022-04-17",
    body: "some body",
  },
]);

console.log(fbUser);
