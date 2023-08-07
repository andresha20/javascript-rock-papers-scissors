
let myObject = {
    computerOptions: {
        rock: "rock",
        scissors: "scissors",
        paper: "paper"
    },
    generatedIDs: [
        "rockComputer", "scissorsComputer", "paperComputer", "rockUser", "scissorsUser", "paperUser"
    ],
    computerPick: () => {
        let rightColumn = document.getElementById("rightside");
        let myKeys = Object.keys(myObject.computerOptions);
        let randomKey = myKeys[Math.floor(Math.random () * myKeys.length)];
        if (randomKey == "rock") {
            let rockImageComputer = document.createElement("img");
            rockImageComputer.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png";
            rockImageComputer.width = "150";
            rockImageComputer.height = "150";
            rockImageComputer.id = "rock";
            rightColumn.appendChild(rockImageComputer);
            myObject.score ();
        } else if (randomKey == "scissors") {
            let scissorsImageComputer = document.createElement("img");
            scissorsImageComputer.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400144/rock-paper-scissors/scissors.png";
            scissorsImageComputer.width = "150";
            scissorsImageComputer.height = "150";
            scissorsImageComputer.id = "scissors";
            rightColumn.appendChild(scissorsImageComputer);
            myObject.score ();
        } else if (randomKey == "paper") {
            let paperImageComputer = document.createElement("img");
            paperImageComputer.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400143/rock-paper-scissors/paper.png";
            paperImageComputer.width = "150";
            paperImageComputer.height = "150";
            paperImageComputer.id = "paper";
            rightColumn.appendChild(paperImageComputer);
            myObject.score ();
        }
    },

    playerClick: function (arg) {
        let middleColumn = document.getElementById("middle");
        let rightColumn = document.getElementById("rightside");
        if (arg.target && arg.target.id == "rock") {
        let rockImage = document.createElement("img");
        rockImage.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400140/rock-paper-scissors/rock.png";
        rockImage.width = "150";
        rockImage.height = "150";
        rockImage.id = "rock";
        middleColumn.appendChild(rockImage);
        setTimeout(myObject["computerPick"], 3000);
        let thinkingSpan = document.createElement("p");
        thinkingSpan.id = "NewP";
        let pText = document.createTextNode("Picking...");
        thinkingSpan.appendChild(pText);
        rightColumn.appendChild(thinkingSpan);
        setTimeout(() => {
            rightColumn.removeChild(thinkingSpan);
            myObject.score ();
            
        }, 2999)
        } else if (arg.target && arg.target.id == "scissors") {
        let scissorsImage = document.createElement("img");
        scissorsImage.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400144/rock-paper-scissors/scissors.png";
        scissorsImage.width = "150";
        scissorsImage.height = "150";
        scissorsImage.id = "scissors";
        middleColumn.appendChild(scissorsImage);
        setTimeout(myObject["computerPick"], 3000);
        let thinkingSpan = document.createElement("p");
        thinkingSpan.id = "NewP";
        let pText = document.createTextNode("Picking...");
        thinkingSpan.appendChild(pText);
        rightColumn.appendChild(thinkingSpan);
        setTimeout(() => {
            rightColumn.removeChild(thinkingSpan);
            myObject.score ();
        }, 2999)

        } else if (arg.target && arg.target.id == "paper") {
            let paperImage = document.createElement("img");
            paperImage.src = "https://res.cloudinary.com/itsellej/image/upload/v1533400143/rock-paper-scissors/paper.png";
            paperImage.width = "150";
            paperImage.height = "150";
            paperImage.id = "paper";
            middleColumn.appendChild(paperImage);
            setTimeout(myObject["computerPick"], 3000);
            let thinkingSpan = document.createElement("p");
            thinkingSpan.id = "NewP";
            let pText = document.createTextNode("Picking...");
            thinkingSpan.appendChild(pText);
            rightColumn.appendChild(thinkingSpan);
            setTimeout(() => {
                rightColumn.removeChild(thinkingSpan);
                myObject.score ();
                
            }, 2999)
        } 
        if (middleColumn.getElementsByTagName('img').length > 0) {
            removeEventListener("click", myObject["playerClick"]);
        }
    },

    clearFields: function(arg) {
        let middleColumn = document.getElementById("middle");
        let rightColumn = document.getElementById("rightside");
        if (arg.target && arg.target.id == "buttonOne") { 

            while (middleColumn.getElementsByTagName('img').length > 0 && rightColumn.getElementsByTagName('img').length > 0)
            {
                middleColumn.removeChild(middleColumn.lastChild);
                rightColumn.removeChild(rightColumn.lastChild);
            }
            addEventListener ("click", myObject["playerClick"]);
        } 
    },

    score: () => {

        let middleColumn = document.getElementById("middle");
        let rightColumn = document.getElementById("rightside");

        let resultMiddle = middleColumn.children[1];
        let one = resultMiddle.id;
        let resultRight = rightColumn.children[1];
        let two = resultRight.id;
        if (one == two) {
            console.log("TIED!");
        } else if (one == "scissors" && two == "paper") {
            console.log("YOU HAVE WON!");
        } else if (one == "scissors" && two == "rock") {
            console.log("YOU HAVE LOST!");
        } else if (one == "rock" && two == "scissors") {
            console.log("YOU HAVE WON!");
        } else if (one == "rock" && two == "paper") {
            console.log("YOU HAVE LOST!");
        } else if (one == "paper" && two == "scissors") {
            console.log("YOU HAVE LOST!");
        } else if (one == "paper" && two == "rock") {
            console.log("YOU HAVE WON!");
        }
    }
}

addEventListener ("click", myObject["playerClick"], false);
addEventListener ("click", myObject["clearFields"], false);
