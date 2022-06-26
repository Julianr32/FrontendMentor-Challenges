//Set content.
const articleC = [{
        id: 1,
        img: "images/image-tanya.jpg",
        author: "Tanya Sinclair",
        testi: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
        prof: "UX Engineer",
    },
    {
        id: 2,
        img: "images/image-john.jpg",
        author: "John Tarkpor",
        testi: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        prof: "Junior Front-end Developer",
    }
]

//Get items.
const articleImg = document.getElementById("article-img");
const testimonial = document.getElementById("testimonial");
const author = document.getElementById("author");
const proffesion = document.getElementById("proffesion");
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")

//Set starter content.
let currentArticle = 0;
window.addEventListener("DOMContentLoaded", () => {
    changeArticle();
});

//Function that changes testimonial.
function changeArticle() {
    const article = articleC[currentArticle];
    articleImg.src = article.img;
    testimonial.textContent = article.testi;
    author.textContent = article.author;
    proffesion.textContent = article.prof;
}

//Next testimonial.
nextBtn.addEventListener("click", () => {
    currentArticle++;
    if (currentArticle > articleC.length - 1) {
        currentArticle = 0;
    }
    changeArticle();
});

//Previos testimonial.
prevBtn.addEventListener("click", () => {
    currentArticle--;
    if (currentArticle < 0) {
        currentArticle = articleC.length - 1;
    }
    changeArticle();
});