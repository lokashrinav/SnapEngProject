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
    dinosaurList.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}
