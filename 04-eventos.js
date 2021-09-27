const $btn =document.querySelector("#btn");

$btn.addEventListener("click", () =>{
    console.log("Me precionaste");
});

const $inpText =document.querySelector("#text");

$inpText.addEventListener("keydown", (e) =>{
    console.log(e.target.value);
});