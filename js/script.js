// Mobile navigation

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuToggle) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}



// Close mobile menu after clicking a link

const links = document.querySelectorAll(".nav-links a");


links.forEach(function(link){

    link.addEventListener("click", function(){

        navLinks.classList.remove("active");

    });

});




// Scroll to top button

const scrollButton = document.getElementById("scrollTop");


window.addEventListener("scroll", function(){

    if(window.scrollY > 400){

        scrollButton.style.display = "block";

    }

    else {

        scrollButton.style.display = "none";

    }

});



if(scrollButton){

    scrollButton.addEventListener("click", function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}




// Contact form message

const contactForm = document.querySelector(".contact-form");


if(contactForm){

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();


        alert("Thank you for contacting Drive KKTC. We will get back to you soon.");


        contactForm.reset();

    });

}

// Share route button

// Share Route
// Share Route

const shareButtons = document.querySelectorAll(".share-button");

shareButtons.forEach(button => {

    button.addEventListener("click", async () => {

        const url = window.location.href;

        // If running locally, just copy the link
        if(location.protocol === "file:"){

            try{

                await navigator.clipboard.writeText(url);

                alert("Sharing works after the website is published. For now, the page link has been copied.");

            }

            catch{

                prompt("Copy this link:", url);

            }

            return;

        }

        // Published website
        if(navigator.share){

            try{

                await navigator.share({

                    title:"Drive KKTC",

                    text:"Discover this scenic driving route around Lefke.",

                    url:url

                });

            }

            catch(e){

                console.log("Share cancelled.");

            }

        }

        else{

            try{

                await navigator.clipboard.writeText(url);

                alert("The route link has been copied to your clipboard.");

            }

            catch{

                prompt("Copy this link:", url);

            }

        }

    });

});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("current");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("current");

        }

    });

});

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});