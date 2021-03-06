const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButtons = document.querySelectorAll(".plan button");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");



for(let i = 0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener("click", () => {
        modal.classList.add("open");
        backdrop.style.display = "block";
        setTimeout(() => {
            backdrop.classList.add("open");
        }, 10);
    })
}

backdrop.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
    if(modal){
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
    setTimeout(() => {
        backdrop.style.display = "none";
    }, 200);
    
}

toggleButton.addEventListener("click", () => {
    mobileNav.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(() => {
        backdrop.classList.add("open");
    }, 10);
})

