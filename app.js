
function tellFortune() {

    let favColor = document.getElementById("favColor").value;
    let career;

    if(favColor === "red") {
        career = "You will be a pilot";
    } else if (favColor === "blue"){ 
        career = "You will be a police";
    }else if ( favColor === "green"){
        career = " You will be a software developer";
    }else {
        "Try another color";
    }
    document.getElementById("fort").innerHTML = career;
}



