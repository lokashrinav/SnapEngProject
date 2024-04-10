/**
 * Data Catalog Project Starter Code - SEA Stage 2
*/

// This is an array of objects (Dinosaurs Information)

// All of my data is credited to "https://dinosaurpictures.org/"

let dinosaurList = [
    {
        Name: "Tyrannosaurus Rex",
        TimePeriod: "Jurassic",
        URL: "http://images.dinosaurpictures.org/dinosaurs-tyrannosaurus_00336745_13a8.jpg",
        Family: "Tyrannosauridae",
        Diet: "Carnivore"
    }, 
    {
        Name: "Triceratops",
        TimePeriod: "Cretaceous",
        URL: "http://images.dinosaurpictures.org/Triceratops_d6c1.jpg",
        Family: "Ceratopsidae",
        Diet: "Herbivore"
    }, 
    {
        Name: "Velociraptor",
        TimePeriod: "Cretaceous",
        URL: "http://images.dinosaurpictures.org/Velociraptor-dinosaurs-23564955-817-734_5c51.jpg",
        Family: "Dromaeosauridae",
        Diet: "Carnivore"
    },    
    {
        Name: "Brachiosaurus",
        TimePeriod: "Late Jurassic",
        URL: "http://images.dinosaurpictures.org/papo_brachiosaurus_2012_cf3f.jpg",
        Family: "Brachiosauridae",
        Diet: "Herbivore"
    },    
    {
        Name: "Allosaurus",
        TimePeriod: "Jurassic",
        URL: "http://images.dinosaurpictures.org/Allosaurus2_e7af.jpg",
        Family: "Allosauridae",
        Diet: "Carnivore"
    },    
    {
        Name: "Apatosaurus",
        TimePeriod: "Jurassic",
        URL: "http://images.dinosaurpictures.org/apatosaurus-9158_9d10.jpg",
        Family: "Diplodocidae",
        Diet: "Herbivore"
    },    
    {
        Name: "Dilophosaurus",
        TimePeriod: "Jurassic",
        URL: "http://images.dinosaurpictures.org/127544_Dilophosaurus_Pose_2_000.jpg0c59dae3-f8e3-48a4-a5d4-da8ff572cef3Original_eb0a.jpg",
        Family: "Dilophosauridae",
        Diet: "Carnivore"
    },    
    {
        Name: "Giganotosaurus",
        TimePeriod: "Cretaceous",
        URL: "http://images.dinosaurpictures.org/giganotosaurus_by_Gonzalezaurus_d03d.jpg",
        Family: "Carcharodontosauridae",
        Diet: "Carnivore"
    },    
    {
        Name: "Ankylosaurus",
        TimePeriod: "Cretaceous",
        URL: "http://images.dinosaurpictures.org/ankylosaurus_7663.jpg",
        Family: "Ankylosauridae",
        Diet: "Herbivore"
    },
    {
        Name: "Carnotaurus",
        TimePeriod: "Late Cretaceous",
        URL: "http://images.dinosaurpictures.org/carnotaurus_355f.jpg",
        Family: "Abelisauridae",
        Diet: "Carnivore"
    },
    {
        Name: "Diplodocus",
        TimePeriod: "Jurassic",
        URL: "http://images.dinosaurpictures.org/diplodocus-1_7fa2.jpg",
        Family: "Diplodocidae",
        Diet: "Herbivore"
    },
    {
        Name: "Iguanodon",
        TimePeriod: "Early Cretaceous",
        URL: "http://images.dinosaurpictures.org/iguanodon-1_e1e9.jpg",
        Family: "Iguanodontidae",
        Diet: "Herbivore"
    },
    {
        Name: "Pteranodon",
        TimePeriod: "Late Cretaceous",
        URL: "http://images.dinosaurpictures.org/ExPteranodonLongiceps1_179b.jpg",
        Family: "Pterosauria",
        Diet: "Carnivore"
    },
    {
        Name: "Troodon",
        TimePeriod: "Late Cretaceous",
        URL: "http://images.dinosaurpictures.org/troodon_by_haghani-d6re9g7_62af.jpg",
        Family: "Troodontidae",
        Diet: "Carnivore"
    },
    {
        Name: "Utahraptor",
        TimePeriod: "Early Cretaceous",
        URL: "http://images.dinosaurpictures.org/utahraptor_ostrommaysorum_by_teratophoneus-d4oq7xm_518f.jpg",
        Family: "Dromaeosauridae",
        Diet: "Carnivore"
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
    {
        Name: "Cryolophosaurus",
        TimePeriod: "Early Jurassic",
        URL: "http://images.dinosaurpictures.org/Cryolophosaurus4_ba17.jpg",
        Family: "Cryolophosauridae",
        Diet: "Carnivore"
    },

];

/* This is my variable originalOrder, which stores the original order of the array. 
This is used in the sorting function in case the user wants the original order of dinosaurs*/

let originalOrder = [...dinosaurList];

/*Line 210 serves as an event listener, such that when the user clicks away from the popup when the popup is open, 
it automatically closes the popup*/

document.addEventListener('click', handleDocumentClick);

// This function runs when a click event is done
function handleDocumentClick(event) {
    // popup is our popup
    let popup = document.querySelector('.popup-open');
    // If popup is Null due to any case, we don't run this code
    if (popup != NaN) {
        //Checks if the click wasn't on the popup and makes sure it doesn't activate when we click the add card button 
        if (!popup.contains(event.target) && event.target !== document.querySelector('.add')) {
        // Remove the "popup-open" class and add the "popup" class to remove display of the popup
            popup.classList.remove("popup-open");
            popup.classList.add("popup");
        }
    }
}

// Waits for the DOM content to be fully loaded before execution
document.addEventListener("DOMContentLoaded", function() {
    // Selects the popup element
    let popup = document.querySelector('.popup');

    // Adds an event listener to the "Add" button to open the popup when clicked

    document.querySelector('.add').addEventListener('click', function (event) {
        // Remove the "popup" class and add the "popup-open" class to display the popup
        popup.classList.remove("popup");
        popup.classList.add("popup-open");
    });
});

// This function handles the different types of sortion options
function handleSortChange(sortOption) {
    switch (sortOption) {
        // Call the function to revert to the original order
        case "original":
            original(); 
            break;
        // Call the function to sort alphabetically
        case "alphabetical":
            alphabeticalSort();
            break;
        // Call the function to sort by time period
        case "timeperiod":
            timePeriodSort(); 
            break;
        // Call the function to sort by family
        case "family":
            familySort(); 
            break;
        // Call the function to sort by diet
        case "diet":
            dietSort(); 
            break;
        // In case of an unidentifiable test case.
        default:
            break;
    }
}

// This runs when user clicks Original Order as a sorting option. 
function original() {
    // This sets dinosaurList to the original order from the beginning
    dinosaurList = [...originalOrder];
    // Shows cards after dinosaurList changes
    showCards();
}

function alphabeticalSort() {
    // Sorts based on Alphabetical Order
    dinosaurList.sort((a, b) => a.Name.localeCompare(b.Name)) 
    // Shows cards after dinosaurList changes
    showCards();
}

function timePeriodSort() {
    // Sorts based on Time Period
    dinosaurList.sort((a, b) => a.TimePeriod.localeCompare(b.TimePeriod))
    // Shows cards after dinosaurList changes
    showCards();

}

function familySort() {
    // Sorts based on family
    dinosaurList.sort((a, b) => a.Family.localeCompare(b.Family))
    // Shows cards after dinosaurList changes
    showCards();
}

function dietSort() {
    // Sorts based on diet
    dinosaurList.sort((a, b) => a.Diet.localeCompare(b.Diet))
    // Shows cards after dinosaurList changes
    showCards();
}


// Runs when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    //Selects search bar
    const form = document.querySelector(".search");
    const searchBar = document.querySelector(".search-input"); 
        // Ads an event listener for form submission
        form.addEventListener("submit", function(event) {

        // Prevents the default form submission and page from refreshing
        event.preventDefault(); 

        // Grabs the search term from the search bar input field
        const searchTerm = document.getElementsByClassName("search-input")[0].value.trim().toLowerCase();
        
        // Calls function to search for dinosaurs based on search bar input term
        searchDinosaurs(searchTerm);

        // Creates a "Go Back" button
         const goBackButton = document.createElement("button");
         goBackButton.textContent = "Go Back";
         goBackButton.classList.add("go-back");
         // Adds an event listener to the Go Back button
         goBackButton.addEventListener("click", function() {
            // Attempts to clear search bar - Need to fix
             searchBar.innerHTML = "";
            
             // Calls function to show all cards
             showCards();
            
             // Removes the Go Back button after clicking
             goBackButton.remove();
         });
         
         // Inserts Go Back button before search bar when enter is clicked 
         searchBar.insertAdjacentElement("beforebegin", goBackButton);
    });
});

// This function is used to search for a dinosaur
function searchDinosaurs(searchTerm) {
    // Retrives the card container
    const cardContainer = document.getElementById("card-container");
    // Retrieves all cards inside the card container
    const cards = cardContainer.getElementsByClassName("card");

    // Iterates through each card
    for (let card of cards) {
        // Extracts the title of the card and converting it to lowercase
        const title = card.querySelector("h2").textContent.toLowerCase();

        // Checks if the title includes the search term
        if (title.includes(searchTerm)) {
            // Displays the card if the search term matches
            card.style.display = "block";
        } else {
            // Hides the card if the search term does not match
            card.style.display = "none";
        }
    }
}

// This function adds cards the page to display the data in the array
function showCards() {
    // Retrieves the card container element
    const cardContainer = document.getElementById("card-container");
    // Clears the existing content inside the card container
    cardContainer.innerHTML = "";
    // Retrieves the template card element
    const templateCard = document.querySelector(".card");
    
    // Iterates through each dinosaur in the dinosaur list
    for (let i = 0; i < dinosaurList.length; i++) {
        let title = dinosaurList[i].Name;

        let imageURL = dinosaurList[i].URL;

        // Creates an array of bullet points for the dinosaur card
        let bulletPoints = [
            "Diet: " + dinosaurList[i].Diet,
            "Time Period: " + dinosaurList[i].TimePeriod,
            "family: " + dinosaurList[i].Family
        ];

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, bulletPoints); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

// This function updates the content of a card with new information from dinosaurList
function editCardContent(card, newTitle, newImageURL, bulletPoints) {
    // Sets the card to visible
    card.style.display = "block";

    // Updates title of the card
    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    // Updates image of the card
    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // Updates bullet points of the card
    const bulletList = card.querySelector("ul");
    bulletList.innerHTML = "";

    bulletPoints.forEach(point => {
        const bulletItem = document.createElement("li");
        bulletItem.textContent = point;
        bulletList.appendChild(bulletItem);
    });

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

// Runs when button "Get A Dinosaur Roar!" is clicked
function quoteAlert() {
    console.log("Button Clicked!")
    alert("Meow");
}

// 3uns when button "Remove Card" is clicked
function removeLastCard() {
    dinosaurList.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

// This function adds a new dinosaur card to the list
function addCards() {
    // Selects the popup element and resets its state
    let popup = document.querySelector('.popup-open');
    popup.classList.remove("popup-open");
    popup.classList.add("popup");

    // Retrieves values from input fields for the new dinosaur
    let dinosaurName = document.getElementById("id1").value;

    let timePeriod = document.getElementById("id2").value;

    let diet = document.getElementById("id3").value;

    let url = document.getElementById("id4").value;

    let family = document.getElementById("id5").value;

    // Creates a new dinosaur object and adding it to the beginning of the list
    dinosaurList.unshift({
        Name: dinosaurName,
        TimePeriod: timePeriod,
        URL: url,
        Family: family,
        Diet: diet,
    })

    // Calls a function to display all dinosaur cards
    showCards();

}
