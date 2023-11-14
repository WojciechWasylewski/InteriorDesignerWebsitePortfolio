// typing animation script
var typed = new Typed(".typing", {
    strings: ["Projektantką Wnętrz", "Fotografem", "Sprzedawcą", "Freelancerką", "Sports Lover"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// skills/expirience/education bookmarks script
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// script for mobile navbar
var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0"; 
}

function closemenu(){
    sidemenu.style.right = "-200px"; 
}
  