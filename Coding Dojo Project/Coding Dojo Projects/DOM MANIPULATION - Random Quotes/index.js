

const myArr = {
                quoteArr: ["To see is to believe",
                "I believe I can fly",
                "Tomorrow is another day",
                "Be happy when you are happy",
                "When was the last time you smile? its today",
                "Sleep is for the weak",
                "Annie are you okay?"] ,

                personArr: ["Zyrus" , "Albert Einstein" , "Bing Bong Dantes" , "Mario" , "Luigi" , "Goku" , "Micheal Jackson"]
};
            
const counterArr = [1 , 2 , 3 , 4 , 5 , 6];


document.querySelector("#btn-1").addEventListener("click", updateQuote);

pageloadQuote(); /* creates quote element and label elements + display the array element according to the generated number */

function refreshQuote () {
    const words = document.querySelector("#quote");
        words.remove();
    const person_paragraph = document.querySelector("#person-quote");
        person_paragraph.remove();
}

function pageloadQuote() {
    let x = generatedNumber();
    // console.log(myArr.quoteArr[x] + " " + myArr.personArr[x]);

    const words = document.querySelector("#phrases");
    const newQuote = document.createElement("q");
        newQuote.setAttribute("id","quote");
        newQuote.innerText = myArr.quoteArr[x];
        words.appendChild(newQuote);

    const personBox = document.querySelector("#person-box");
    const newPerson = document.createElement("label");
        newPerson.setAttribute("id","person-quote");
        newPerson.innerText = "- " + myArr.personArr[x];
        personBox.appendChild(newPerson);
}



function updateQuote() {
    let x = generatedNumber();

    const updateWords = document.querySelector("#quote");
        updateWords.innerHTML = myArr.quoteArr[x];

    const updateAuthor = document.querySelector("#person-quote");
        updateAuthor.innerText = "- " + myArr.personArr[x];

}


function generatedNumber () {
    return Math.floor(Math.random() * (counterArr.length+1)) 
}

