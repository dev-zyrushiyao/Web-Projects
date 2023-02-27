// adding a onlick for the button
document.querySelector(".like-btn").onclick = counterClick;


let count = 0;
function counterClick () {
    count +=1;
// selecting like-counter class
let likeCounter = document.querySelector(".like-counter");

// converting the counter[int] to a [string] and use concatination
let NumToString = count.toString();
    // updating the text of the like-counter class text using the converted number to string + concatination "Like (s)"
let updatedText = NumToString.concat(" like(s)");
    likeCounter.innerText = updatedText;

    if(count == 40) {
        window.alert("Thank you for supporting me on my programming journey");
    }
}