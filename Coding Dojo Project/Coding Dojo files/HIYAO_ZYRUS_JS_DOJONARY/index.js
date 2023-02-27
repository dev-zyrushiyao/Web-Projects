
// for code review getElementsByClasses is not working but works in get ID
let x = 0;
document.getElementById("js-btn").onclick = function() {
    
    x += 1; 

    console.log(x);

    if (x % 2 == 0){
        document.getElementById("js-btn").innerHTML = "Login";
    }else if (x % 2 == 1){
        document.getElementById("js-btn").innerHTML = "Logout";
    }

}

document.getElementById("add-defBtn").onclick = function(){
    document.getElementById("add-defBtn").style.opacity = 0;
}


let y = 0;
document.getElementById("like-btn-1").onclick = function(){
    y += 1;
    console.log(y);
    document.getElementById("like-btn-1").innerHTML = `${y} likes`;
    window.alert("Ninja was liked!");
}

let z = 0;
document.getElementById("like-btn-2").onclick = function(){
    z += 1;
    console.log(z);
    document.getElementById("like-btn-2").innerHTML = `${z} likes`;
    window.alert("Ninja was liked!");
}    