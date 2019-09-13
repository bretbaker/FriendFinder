// intial "database" of friends to start
let friends = [];

function Friend(name, image, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  this.name = name;
  this.photo = image;
  this.score = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
  this.scoreSum = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10;
};

let newFriend = new Friend('Jimmy Jones', 'https://i.pravatar.cc/150?img=70', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
friends.push(newFriend);
newFriend = new Friend('Lisa Lurrington', 'https://i.pravatar.cc/150?img=44', 4, 4, 4, 4, 4, 4, 4, 4, 4, 4);
friends.push(newFriend);
newFriend = new Friend('Ronnie Wilson', 'https://i.pravatar.cc/150?img=65', 3, 3, 3, 3, 3, 3, 3, 3, 2, 2);
friends.push(newFriend);
newFriend = new Friend('Jessica Fischer', 'https://i.pravatar.cc/150?img=36', 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
friends.push(newFriend);
newFriend = new Friend('Kate Banta', 'https://i.pravatar.cc/150?img=49', 2, 2, 2, 2, 2, 2, 2, 2, 2, 2);
friends.push(newFriend);
newFriend = new Friend('Larry Oswiler', 'https://i.pravatar.cc/150?img=66', 3, 3, 3, 3, 3, 3, 3, 3, 3, 3);
friends.push(newFriend);

// console.log(friends);

module.exports = friends;