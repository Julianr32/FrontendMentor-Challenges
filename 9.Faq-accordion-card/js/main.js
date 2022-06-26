const questions = document.querySelectorAll(".card-question");

questions.forEach((question) =>{
    const questionBtn = question.querySelector(".question-btn");
    const title = question.querySelector(".title");
    questionBtn.classList.toggle("rotate");

    //Event listener for the questions.
    title.addEventListener("click", ()=>{
        showAnswer();
    })

    //Event listener for the buttons.
    questionBtn.addEventListener("click", ()=>{
        showAnswer();
    });

    function showAnswer(){ 
        questions.forEach((item)=>{
            if (item != question){
                item.classList.remove("show");
            }
        });
        question.classList.toggle("show");
    };
});
