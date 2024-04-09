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


const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let dinosaurList = [
    {
        Name: "Riojasaurus",
        TimePeriod: "Triassac",
        URL: "http://images.dinosaurpictures.org/Riojasaurus_sketch1_1535.jpg",
        Family: "Sauropodomorph",
        Diet: "Herbivore"
    }, 
    {
        Name: "Sauroposeidon",
        TimePeriod: "Cretaceous",
        URL: "http://images.dinosaurpictures.org/Sauroposeidon4_d2cf.jpg",
        Family: "Sauropod",
        Diet: "Herbivore"
    }, 
    {
        Name: "Stegosaurus",
        TimePeriod: "Jurassic",
        URL: "http://images.dinosaurpictures.org/stegosaurus_5bf6.jpg",
        Family: "Stegosauridae",
        Diet: "Herbivore",
    }, 
    {
        Name: "Qantassaurus",
        TimePeriod: "Cretaceous",
        URL: "http://images.dinosaurpictures.org/Qantassaurus-home.alphalink_8929.jpg",
        Family: "Hypsilophodontidae",
        Diet: "Herbivore",
    },
    {
        Name: "Qianzhousaurus",
        TimePeriod: "Cretaceous", 
        URL: "http://images.dinosaurpictures.org/image_1907_1e-Qianzhousaurus-sinensis_bd20.jpg",
        Family: "Tyrannosauridae",
        Diet: "Carnivore"
    },  
    {
        Name: "Raptorex",
        TimePeriod: "Cretaceous",
        URL: "http://images.dinosaurpictures.org/raptorex_color1a_web_b864.jpg",
        Family: "Tyrannosauridae",
        Diet: "Carnivore"
    },  
    {
        Name: "Rhabdodon",
        TimePeriod: "Cretaceous",
        URL: "http://images.dinosaurpictures.org/Rhabdodon-hyrotrioskjan_436c.jpg",
        Family: "Rhabdodontidae",
        Diet: "Herbivore"
    },   
    {
        Name: "Saurornitholestes",
        TimePeriod: "Triassic",
        URL: "http://images.dinosaurpictures.org/Saurornitholestes_d219.jpg",
        Family: "Dromaeosauridae",
        Diet: "Carnivore"
    },  
    {
        Name: "Sinovenator",
        TimePeriod: "Cretaceous",
        URL: "http://images.dinosaurpictures.org/sinovenator_changii_by_antresoll-d4eql0k_01fb.jpg",
        Family: "Dromaeosauridae",
        Diet: "Carnivore",
    }, 
    {
        Name: "Spinosaurus",
        TimePeriod: "Cretaceous",
        URL: "http://images.dinosaurpictures.org/spinosaurus_1_118f.jpg",
        Family: "Spinosauridae",
        Diet: "Carnivore",
    },  
    {
        Name: "Stygimoloch",
        TimePeriod: "Cretaceous",
        URL: "http://images.dinosaurpictures.org/Stygimoloch3_812e.jpg",
        Family: "Pachycephalosauridae",
        Diet: "Herbivore",
    }, 
    {
        Name: "Styracosaurus",
        TimePeriod: "Cretaceous",
        URL: "http://images.dinosaurpictures.org/2000103-styracosaurus-010_8926.jpg",
        Family: "Ceratopsidae",
        Diet: "Herbivore",
    },
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < dinosaurList.length; i++) {
        let title = dinosaurList[i].Name;

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = dinosaurList[i].URL;

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
    console.log("Button Clicked!")
    alert("Roar!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
