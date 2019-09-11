// create intial database of friends to start
let friends = [];
let newFriend = new Friend('Jimmy Jones', 'https://i.pravatar.cc/150?img=70', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
friends.push(newFriend);
newFriend = new Friend('Ronnie Wilson', 'https://i.pravatar.cc/150?img=65', 3, 3, 3, 3, 3, 3, 3, 3, 2, 2);
friends.push(newFriend);
newFriend = new Friend('Kate Banta', 'https://i.pravatar.cc/150?img=49', 2, 2, 2, 2, 2, 2, 2, 2, 2, 2);
friends.push(newFriend);
newFriend = new Friend('Larry Oswiler', 'https://i.pravatar.cc/150?img=66', 3, 3, 3, 3, 3, 3, 3, 3, 3, 3);
friends.push(newFriend);
newFriend = new Friend('Lisa Lurrington', 'https://i.pravatar.cc/150?img=44', 4, 4, 4, 4, 4, 4, 4, 4, 4, 4);
friends.push(newFriend);
newFriend = new Friend('Jessica Fischer', 'https://i.pravatar.cc/150?img=36', 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
friends.push(newFriend);
console.log(friends);

// constructor for creating new friend data based on user input
function Friend(name, image, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) {
  this.name = name;
  this.photo = image;
  this.score = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
};

// function that sums scores in friends objects
let sumArr = [];
const sumScore = () => {
  for (let i = 0; i < friends.length; i++) {
    let sum = 0;
    for (let j = 0; j < friends[i].score.length; j++) {
       sum += friends[i].score[j];
    }
    sumArr.push(sum);
  }
};
sumScore();
console.log(sumArr);

// function that produces match by 
let minDiff = 51;
let friendMatch;
const matchMaker = (friend) => {
  for (let i = 0; i < friends.length; i++) {
    if (friends[friend].name !== friends[i].name) {
      if (Math.abs(sumArr[friend] - sumArr[i]) < minDiff) {
        minDiff = Math.abs(sumArr[friend] - sumArr[i]);
        friendMatch = friends[i].name;
      }
    }
  }
  console.log(friends[friend].name + ', you have matched with ' + friendMatch + '!');
};
matchMaker(2);

// Friend constructor utilized on click of submit button; data stored and compared against current database; output produced for user
$("#submit-button").on('click', () => {

  let newName = $("#new-name").val();
  let newImage = $("#new-image").val();
  let a1 = parseInt($("#q-1").find(':selected').attr('value'));
  let a2 = parseInt($("#q-2").find(':selected').attr('value'));
  let a3 = parseInt($("#q-3").find(':selected').attr('value'));
  let a4 = parseInt($("#q-4").find(':selected').attr('value'));
  let a5 = parseInt($("#q-5").find(':selected').attr('value'));
  let a6 = parseInt($("#q-6").find(':selected').attr('value'));
  let a7 = parseInt($("#q-7").find(':selected').attr('value'));
  let a8 = parseInt($("#q-8").find(':selected').attr('value'));
  let a9 = parseInt($("#q-9").find(':selected').attr('value'));
  let a10 = parseInt($("#q-10").find(':selected').attr('value'));

  newFriend = new Friend(newName, newImage, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10);
  friends.push(newFriend);
  console.log(friends);



  $("#new-name").val('');
  $("#new-image").val('');
  $("#q-1").val('');
  $("#q-2").val('');
  $("#q-3").val('');
  $("#q-4").val('');
  $("#q-5").val('');
  $("#q-6").val('');
  $("#q-7").val('');
  $("#q-8").val('');
  $("#q-9").val('');
  $("#q-10").val('');

});