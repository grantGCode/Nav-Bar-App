
alert("working")

//toggle drop down Buger//
const toggleBtn = document.getElementById("nav-bruger-toggle");
const menuItems = document.querySelector(".menu-items");

function openCloseToggle(){
   console.log(document.getElementById("icon").getAttribute('class')
   ) 
   if (document.getElementById("icon").getAttribute('class') === "fa-solid fa-bars"){

       document.getElementById("icon").setAttribute('class', "fa-solid fa-x")
    } else {
      document.getElementById("icon").setAttribute('class', "fa-solid fa-bars");
    };

};

toggleBtn.addEventListener( "click", () =>{
menuItems.classList.toggle("show-menu-items")
openCloseToggle();
})
