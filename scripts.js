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

// This is an array of strings (TV show titles)
let titles = [
  player1.name,
  player2.name,
  player3.name,
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = LIONEL_MESS_URL;
    } else if (i == 1) {
      imageURL = XAVI_URL;
    } else if (i == 2) {
      imageURL = CRISTIANO_RONALDO_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
