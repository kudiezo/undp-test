document.addEventListener("DOMContentLoaded", () => {
    //########## MENU HAMBURGUER ################################
    const hamburger = document.querySelector("#hamburguer")
    const hamburgerLines = document.querySelectorAll(".line")
    const navMenu = document.querySelectorAll(".menu")
    
    hamburger.addEventListener("click", () => {
        navMenu.forEach(element => {
            element.classList.toggle("active")
        })
        hamburgerLines.forEach(element => {
            element.classList.toggle("active")
        })
    })

    //############## CLICK EVENT ############################
    const btnsExplore = document.querySelectorAll(".btn-explore")
    btnsExplore.forEach(element => {
        element.addEventListener("click", () => {
            element.parentElement.innerHTML += `<div style="color: red; margin-top: 20px;">You clicked ${element.dataset.service}</div>`
        })
    })
})




