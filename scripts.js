/**
 * Data Catalog Project Starter Code - SEA Stage 2
*/

// This is an array of objects (Dinosaur names)

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

let originalOrder = [...dinosaurList];

document.addEventListener('click', handleDocumentClick);

function handleDocumentClick(event) {
    let pop = document.querySelector('.popup-open');
    if (pop != NaN) {
        if (!pop.contains(event.target) && event.target !== document.querySelector('.add')) {
            pop.classList.remove("popup-open");
            pop.classList.add("popup");
        }
    }
}


document.addEventListener("DOMContentLoaded", function() {
    let pop = document.querySelector('.popup');

    document.querySelector('.add').addEventListener('click', function (event) {
        pop.classList.remove("popup");
        pop.classList.add("popup-open");
    });
});

function handleSortChange(sortOption) {
    switch (sortOption) {
        case "original":
            original();
            break;
        case "alphabetical":
            alphabeticalSort();
            break;
        case "timeperiod":
            timePeriodSort();
            break;
        case "family":
            familySort();
            break;
        case "diet":
            dietSort();
            break;
        default:
            break;
    }
}

function original() {
    dinosaurList = [...originalOrder];
    showCards();
}

function alphabeticalSort() {
    dinosaurList.sort((a, b) => a.Name.localeCompare(b.Name)) 
    showCards();
}

function timePeriodSort() {
    dinosaurList.sort((a, b) => a.TimePeriod.localeCompare(b.TimePeriod))
    showCards();

}

function familySort() {
    dinosaurList.sort((a, b) => a.Family.localeCompare(b.Family))
    showCards();
}

function dietSort() {
    dinosaurList.sort((a, b) => a.Diet.localeCompare(b.Diet))
    showCards();
}



document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".search");
    const searchBar = document.querySelector(".search-input"); 
        form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const searchTerm = document.getElementsByClassName("search-input")[0].value.trim().toLowerCase();
        searchDinosaurs(searchTerm);

         const goBackButton = document.createElement("button");
         goBackButton.textContent = "Go Back";
         goBackButton.classList.add("go-back");
         goBackButton.addEventListener("click", function() {
             searchBar.innerHTML = "";
 
             showCards();
 
             goBackButton.remove();
         });
 
         searchBar.insertAdjacentElement("beforebegin", goBackButton);
    });
});

function searchDinosaurs(searchTerm) {
    const cardContainer = document.getElementById("card-container");
    const cards = cardContainer.getElementsByClassName("card");

    for (let card of cards) {
        const title = card.querySelector("h2").textContent.toLowerCase();

        if (title.includes(searchTerm)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < dinosaurList.length; i++) {
        let title = dinosaurList[i].Name;

        let imageURL = dinosaurList[i].URL;

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

function editCardContent(card, newTitle, newImageURL, bulletPoints) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

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

function quoteAlert() {
    console.log("Button Clicked!")
    alert("Meow");
}

function removeLastCard() {
    dinosaurList.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

function addCards() {
    let pop = document.querySelector('.popup-open');

    pop.classList.remove("popup-open");
    pop.classList.add("popup");

    let dinosaurName = document.getElementById("id1").value;

    let timePeriod = document.getElementById("id2").value;

    let diet = document.getElementById("id3").value;

    let url = document.getElementById("id4").value;

    let family = document.getElementById("id5").value;


    dinosaurList.unshift({
        Name: dinosaurName,
        TimePeriod: timePeriod,
        URL: url,
        Family: family,
        Diet: diet,
    })

    showCards();

}
