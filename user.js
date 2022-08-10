const postList = document.querySelector(".post-list");
let id = localStorage.getItem('userId');

async function registerPosts(id) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const postsData = await posts.json();

  postList.innerHTML = postsData.map((post) => postHTML(post)).join("");
}

function userSearch(event){
    id = event.target.value;
    registerPosts(id);
}

function postHTML(post) {
    return `<div class="post">
                <div class="post__title">
                    ${post.title}
                </div>
                <p class="post__body">
                    ${post.body}
                </p>
            </div>`;
}

registerPosts(id);
