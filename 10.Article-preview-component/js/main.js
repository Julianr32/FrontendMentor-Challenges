const articleBtn = document.querySelector(".article-btn");
const share = document.querySelector(".article-share");
const mediaLink = document.querySelectorAll(".media-link");

articleBtn.addEventListener("click", ()=>{
    share.classList.toggle("show");
    articleBtn.classList.toggle("change");
});

//Remove tooltip if click outside or a link.
articleBtn.addEventListener("blur", ()=>{
    share.classList.remove("show");
    articleBtn.classList.remove("change");
})