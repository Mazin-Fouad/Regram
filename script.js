let posts = [
  {
    author: 'jenni.88',
    profile: 'imgs/story1.jpg',
    location: 'Schwarzwald',
    image: 'imgs/img2.jpg',
    description: 'Jogging Time yeeeah 🔥🔥',
    users: ['nadine.jk'],
    comments: ['Enjoy your tieme ❤️❤️❤️'],
  },

  {
    author: 'max.90',
    profile: 'imgs/story3.jpg',
    location: 'Power Gym',
    image: 'imgs/img3.jpg',
    description: 'another day in the office 😝',
    users: [],
    comments: [],
  },

  {
    author: 'mero.89',
    profile: 'imgs/story2.jpg',
    location: 'Maldives',
    image: 'imgs/img4.jpg',
    description: 'Finaly vacation 😍😍😍 ',
    users: ['Sally.45'],
    comments: ['I miss you so much sweetie 😘'],
  },

  {
    author: 'james.65',
    profile: 'imgs/story7.jpg',
    location: 'Los Angelos Mountains',
    image: 'imgs/img5.jpg',
    description: 'Nowhere to stop 🏃‍♂️',
    users: ['josep.ln'],
    comments: ['Hey, take me with you 👌'],
  },
];

function renderPosts() {
  let content = getContentContainer();
  content.innerHTML = '';
  for (let i = 0; i < posts.length; i++) {
    let post = posts[i];
    content.innerHTML += generateCardHTML(post, i);
  }
}

function getContentContainer() {
  return document.getElementById('posts-container');
}

function renderCommentsForPost(i) {
  let commentsContainer = document.getElementById(`comments-field${i}`);
  for (let j = 0; j < post['comments'].length; j++) {
    const userComment = post['comments'][j];
    const userName = post['users'][j];
    commentsContainer.innerHTML += generateCommentContainer(userName, userComment);
  }
}

function generateCardHTML(post, i) {
  return /*html*/ `
  <div class="post-cards">
      <div class="profile-container">
          <img src="${post['profile']}" class= "profile-img"> 
          <span class= "author">${post['author']}</span>
          <img src="icons/more.png" class="more-icon">
        </div>
        <span class="location">${post['location']}</span>
        <img class="post-img" src="${post['image']}" class="post-img">
        <span class="description">${post['description']}</span>
      <div id="comments-field${i}"></div>
      <form class="inputs-container" onsubmit="addNewComment(${i})">
        <input type="text" id="name-input${i}" placeholder="Name" required class="name-input">
        <input type="text" id= "comment-input${i}" placeholder="Enter your comment.." required class="comment-input" >
        <button class="send-comment">Post</button>
      </form>

</div>`;
}

function generateCommentContainer(userName, userComment) {
  return /*html*/ `
  <div class="added-comments">
      <span><b>${userName}:</b></span>
      <span>${userComment}</span>
  </div>`;
}

function addNewComment(index) {
  let nameInput = document.getElementById(`name-input${index}`);
  posts[index]['users'].push(nameInput.value);
  let commentInput = document.getElementById(`comment-input${index}`);
  posts[index]['comments'].push(commentInput.value);
  nameInput.value = '';
  commentInput.value = '';
  renderPosts();
}

function hideSearchIcon() {
  document.getElementById('search-icon').style = 'display: none';
}

function showSearchIcon() {
  document.getElementById('search-icon').style = '';
}
