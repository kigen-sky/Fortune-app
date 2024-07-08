
function tellFortune() {

    let favcolor = document.getElementById("favColor").Value;
    let career;

    if(favcolor === "red") {
        career = "You will be a pilot";
    } else if (favcolor === "blue"){ 
        career = "You will be a police";
    }else if ( favcolor === "green"){
        career = " You will be a software developer";
    }else {
        "Try another color"
    }

}



