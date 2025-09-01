const input = document.getElementById("markdown-input");
const preview = document.getElementById("preview");
const saveBtn = document.getElementById("save-btn");
const postList = document.getElementById("post-list");

input.addEventListener("input", () => {
  preview.innerHTML = marked.parse(input.value);
});
saveBtn.addEventListener("click", () => {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(input.value);             
  localStorage.setItem("posts", JSON.stringify(posts));
  loadPosts();                         
  input.value = "";                     
  preview.innerHTML = "";
});
function loadPosts() {
  postList.innerHTML = "";              
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  
  posts.forEach((post, index) => {
    let li = document.createElement("li");
    li.textContent = `Post ${index + 1}`;
    li.addEventListener("click", () => {
      input.value = post;
      preview.innerHTML = marked.parse(post);
    });

    postList.appendChild(li);
  });
}
loadPosts();