const myName = document.querySelector("#my-name"); 
myName.addEventListener('click', shuffleLetters);

function shuffleLetters(){
    let splitName = [];
    const name = myName.innerText;
    for (let letter = 0; letter < name.length; letter++) {
        splitName.push(name[letter]);   
    }
    console.log(splitName);
    let shuffledName = [];
    
    for (let i = 0; i < splitName.length; i++) {
        let randomNumber = Math.random(0, splitName.length);
        console.log(randomNumber);
    }

    /**
     * Have each Character jumbled up floating randomly on the parent container.
     * On page load all characthers slide into position.
     */
   
    
}