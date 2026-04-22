/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

//images for the soccer players. For the players I couldnt find the card for I entered an old photo.
const LIONEL_MESS_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNA8hvl4uoLJZw1lYkO6oOCXG9fu3d1Vz89w&s";
const XAVI_URL =
  "https://www.dexerto.com/cdn-image/wp-content/uploads/2021/10/21/32.jpg?width=1200&quality=75&format=auto";
const CRISTIANO_RONALDO_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoaw-Br5Qi8Nb4YdS2s6cxJ3fX53bbM8TSDw&s";

const INIESTA_URL = 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0A6gBc0xB3s_qbXxa8ncbOewW172KYyDaJg&s";

const ANDREI_URL = 
  "https://www.fifauteam.com/pt/wp-content/uploads/2012/07/A028-1.jpg";

const BENZEMA_URL = 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmHQhLr2Q2tBRh_NgnpoqwrPxJi4I--8z3lg&s";

const RONALDINHO_URL = 
  "https://www.futwiz.com/assets/img/fifa12/faces/28130.png";

const PEPE_URL = 
  "https://cdn.futbin.com/content/fifa12/img/players/120533.png?v=23";

const Pedro_URL = 
  "https://www.futwiz.com/assets/img/fifa12/faces/189505.png";

const NEYMAR_URL = 
  "https://i.ytimg.com/vi/WBzvIWiDAz8/oar2.jpg?sqp=-oaymwEYCJUDENAFSFqQAgHyq4qpAwcIARUAAIhC&rs=AOn4CLAL_Y90ioAzU11VJAoLREfgba_EVg&usqp=CCk";

const DANI_URL = 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMixhKi6hXFb10miMKnYxDIN5i6eStj-mw&s"

const DAVID_URL = 
  "https://www.futwiz.com/assets/img/fifa12/faces/168542.png";

const ROONEY_URL = 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlhjKISpr70gkr8wocpPjS6cGIsLTT_2R38g&s";

const PIQUE_URL = 
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExCyVkhKHV0Nna50Qn1klC7fHZHPcy4b9Zw&s";

const ZLATAN_URL = 
  "https://www.fifauteam.com/pt/wp-content/uploads/2012/07/A028-12.jpg";

//player details name, pacing, dribble, shooting, defense, passing, physicality
function Player(name, height, pos, rating, PAC, DRI, SHO, DEF, PAS, PHY){
  this.name = name;
  this.height = height;
  this.pos = pos;
  this.rating = rating;
  this.PAC = PAC;
  this.DRI = DRI;
  this.SHO = SHO;
  this.DEF = DEF;
  this.PAS = PAS;
  this.PHY = PHY;
}

const player1 = new Player("Lionel Messi", "5'7", "CF", 94, 93, 97, 87, 46, 82, 67);
const player2 = new Player("Xavier Hernández Creus", "5'7", "CM", 92, 93, 97, 87, 46, 82, 67);
const player3 = new Player("Cristiano Ronaldo", "6'1", "CF", 92, 92, 93, 90, 59, 79, 89);
const player4 = new Player("Andrés Iniesta Luján", "5'7", "CAM", 91, 78, 91, 72, 65, 90, 55);
const player5 = new Player("Andrei Arshavin", "5'8", "LW", 86, 88, 91, 83, 55, 87, 55);
const player6 = new Player("Karim Benzema", "6'0", "ST", 84, 87, 85, 80, 52, 65, 72);
const player7 = new Player("Ronaldinho", "6'0", "CAM", 84, 63, 89, 79, 49, 82, 58);
const player8 = new Player("Pepe", "6'2", "CB", 85, 75, 60, 48, 84, 62, 83);
const player9 = new Player("Pedro", "5'7", "LW", 85, 86, 84, 76, 53, 78, 62);
const player10 = new Player("Neymar Jr", "5'8", "CF", 84, 89, 90, 78, 43, 75, 59);
const player11 = new Player("Dani Alves", "5'7", "RB", 86, 93, 83, 75, 80, 84, 76);
const player12 = new Player("David Silva", "5'7", "RW", 89, 82, 91, 84, 55, 90, 61);
const player13 = new Player("Rooney", "5'9", "ST", 90, 83, 84, 88, 71, 79, 81);
const player14 = new Player("Pique", "6'4", "CB", 88, 66, 65, 52, 86, 74, 81);
const player15 = new Player("Zlatan Ibrahimovic", "6'5", "ST", 91, 83, 91, 96, 65, 87, 88);

// This is an array of objects containing what I want attatched to each player
let players = [
  {//player 1
    playerName: player1.name,
    imageURL: LIONEL_MESS_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player1.height, player1.pos, player1.rating, player1.PAC, player1.DRI, player1.SHO, player1.DEF, player1.PAS, player1.PHY]
  },
  {//player 2
    playerName: player2.name,
    imageURL: XAVI_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player2.height, player2.pos, player2.rating, player2.PAC, player2.DRI, player2.SHO, player2.DEF, player2.PAS, player2.PHY]
  },
  {//player 3
    playerName: player3.name,
    imageURL: CRISTIANO_RONALDO_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player3.height, player3.pos, player3.rating, player3.PAC, player3.DRI, player3.SHO, player3.DEF, player3.PAS, player3.PHY]
  },
  {//player 4
    playerName: player4.name,
    imageURL: INIESTA_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player4.height, player4.pos, player4.rating, player4.PAC, player4.DRI, player4.SHO, player4.DEF, player4.PAS, player4.PHY]
  },
  {
    playerName: player5.name,
    imageURL: ANDREI_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player5.height, player5.pos, player5.rating, player5.PAC, player5.DRI, player5.SHO, player5.DEF, player5.PAS, player5.PHY]
  },
  {
    playerName: player6.name,
    imageURL: BENZEMA_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player6.height, player6.pos, player6.rating, player6.PAC, player6.DRI, player6.SHO, player6.DEF, player6.PAS, player6.PHY]
  },
  {
    playerName: player7.name,
    imageURL: RONALDINHO_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player7.height, player7.pos, player7.rating, player7.PAC, player7.DRI, player7.SHO, player7.DEF, player7.PAS, player7.PHY]
  },
  {
    playerName: player8.name,
    imageURL: PEPE_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player8.height, player8.pos, player8.rating, player8.PAC, player8.DRI, player8.SHO, player8.DEF, player8.PAS, player8.PHY]
  },
  {
    playerName: player9.name,
    imageURL: Pedro_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player9.height, player9.pos, player9.rating, player9.PAC, player9.DRI, player9.SHO, player9.DEF, player9.PAS, player9.PHY]
  },
  {
    playerName: player10.name,
    imageURL: NEYMAR_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player10.height, player10.pos, player10.rating, player10.PAC, player10.DRI, player10.SHO, player10.DEF, player10.PAS, player10.PHY]
  },
  {
    playerName: player11.name,
    imageURL: DANI_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player11.height, player11.pos, player11.rating, player11.PAC, player11.DRI, player11.SHO, player11.DEF, player11.PAS, player11.PHY]
  },
  {
    playerName: player12.name,
    imageURL: DAVID_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player12.height, player12.pos, player12.rating, player12.PAC, player12.DRI, player12.SHO, player12.DEF, player12.PAS, player12.PHY]
  },
  {
    playerName: player13.name,
    imageURL: ROONEY_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player13.height, player13.pos, player13.rating, player13.PAC, player13.DRI, player13.SHO, player13.DEF, player13.PAS, player13.PHY]
  },
  {
    playerName: player14.name,
    imageURL: PIQUE_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player14.height, player14.pos, player14.rating, player14.PAC, player14.DRI, player14.SHO, player14.DEF, player14.PAS, player14.PHY]
  },
  {
    playerName: player15.name,
    imageURL: ZLATAN_URL,
    //array of what I want shown in that 9 bullet list in the HTML DOC
    bulletPoints: [player15.height, player15.pos, player15.rating, player15.PAC, player15.DRI, player15.SHO, player15.DEF, player15.PAS, player15.PHY]
  }
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.


let indexOfPlayers = 0;

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  const currentPlayer = players[indexOfPlayers];

  const nextCard = templateCard.cloneNode(true); // Copy the template card
  editCardContent(nextCard, currentPlayer); // instead of sending in just the title we are sending in all of data attached to each player to edit the card
  cardContainer.appendChild(nextCard); // Add new card to the container

  const previewPlayer = templateCard.cloneNode(true);

}

function editCardContent(card, player) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = player.playerName;

  const cardImage = card.querySelector("img");
  cardImage.src = player.imageURL;
  cardImage.alt = player.playerName + " Poster";


  const bullets = card.querySelector("ul");//find the unordered list
  bullets.innerHTML = "";//clear them like before. just the inside this class

  //go into the bullet point list like a reagular array and fill them with the attributes
  for(let i = 0; i < player.bulletPoints.length; i++){

    const point = document.createElement("li"); //here we create the bullet point that we just cleared
    
    //following the template i have in the HTML based on the index I crated the specific bullet point text
    if(i == 0){
      point.textContent = "Height: " + player.bulletPoints[i];
    }else if(i == 1){
      point.textContent = "Position: " + player.bulletPoints[i];
    }else if(i == 2){
      point.textContent = "Rating: " + player.bulletPoints[i];
    }else if(i == 3){
      point.textContent =  "Pacing: " + player.bulletPoints[i];
    }else if(i == 4){
      point.textContent =  "Dribbling: " + player.bulletPoints[i];
    }else if(i == 5){
      point.textContent =  "Shooting: " + player.bulletPoints[i];
    }else if(i == 6){
      point.textContent =  "Defense: " + player.bulletPoints[i];
    }else if(i == 7){
      point.textContent =  "Passing: " + player.bulletPoints[i];
    }else{
      point.textContent =  "Physicality: " + player.bulletPoints[i];
    }
    bullets.appendChild(point);//we append the  point to the ul class like we did with the card
  }
  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", player.playerName, "- html: ", card);
}

//now we want to be able to go from one card to the next so we have
function goToNext(){
  indexOfPlayers++;

  //This is what we do in order to make the selection go in a circle
  if(indexOfPlayers >= players.length){
    indexOfPlayers = 0;
  }

  //now we show the new card
  showCards();
}

function goBack(){
  indexOfPlayers--;

  //same concept as gotonect
  if(indexOfPlayers < 0){
    indexOfPlayers = players.length - 1;
  }

  //show the card
  showCards();
}


//search for a certain player
function searchForPlayer(){
  const searchInput = document.getElementById("search-input").value.toLowerCase();//tell javascript to look for that specific class
  //we are gonna go through the total number of player names and search for it
  for(let i = 0; i < players.length; i++){
    //.includes(word) allows for a search that contains those letters
    if(players[i].playerName.toLowerCase().includes(searchInput)){
      //set the current card index to this ith Position
      indexOfPlayers = i;
      showCards();
    }
  }
}



function sortAlpha(){

  //sorting the players array and the two parameters in function() are the player names of those objects
  players.sort(function(name1, name2){
    //compare the strings
    return name1.playerName.localeCompare(name2.playerName);
  });

  //set that current value to the front
  indexOfPlayers = 0;
  //show the cards
  showCards();
}

function sortRating(){
  players.sort(function(rating1, rating2){
    //compare the ratings
    return rating2.bulletPoints[2] - rating1.bulletPoints[2];
  })

  //same as sortAlpha
  indexOfPlayers = 0;
  showCards();
}

function removeCard(){
  players.pop();
  //consider that the index might be larger than the total amount of characters
  if(indexOfPlayers >= players.length){
    //reset the index
    indexOfPlayers = 0;
  }
  //show the cards
  showCards();
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);
