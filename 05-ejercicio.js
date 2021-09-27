const $body =document.querySelector("body");
const $selectColor = document.querySelector("#colors");

$selectColor.addEventListener("change",(e) =>{
    switch(e.target.value){
        case "red":
            $body.className="";
            $body.classList.add("red");
        break;

        case "blue":
            $body.className="";
            $body.classList.add("blue");
        break;

        case  "green":
            $body.className="";
            $body.classList.add("green");
        break;

    }
});