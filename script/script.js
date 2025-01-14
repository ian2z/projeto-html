const mobileToggle = document.getElementById("bt-mobile")
mobileToggle.addEventListener("click", ()=> {
    const mobileMenu = document.getElementById("mobile-menu")
    if (mobileMenu.classList.contains("active")){
        mobileMenu.classList.remove("active")
    }else{
        mobileMenu.classList.add("active")
    }
})

const navButtons = document.querySelectorAll(".nav-item");

function updateNavbar(){
    const hashAtual = window.location.hash
    navButtons.forEach(button=>{
        button.addEventListener("click", ()=>{
            console.log(getScrowDistance("menu"))
            const target = button.getAttribute("data-target")
            if(target==hashAtual){
                button.classList.add("active")
            }else{
                button.classList.remove("active")
            }
        })
    })
}

window.addEventListener("hashchange", updateNavbar)

function getScrowDistance(id){
    const section = document.getElementById(id);
    if(section){
        const rect = section.getBoundingClientRect()
        return rect.top + window.scrollY;
    }else{
        console.log("Section não encontrada")
        return null
    }
}

window.onload = ()=>{
    console.log(getScrowDistance("menu"))
}

const buttonHome = document.querySelector(`[data-target="#home"]`);
const buttonCardapio = document.querySelector(`[data-target="#menu"]`);
const buttonSobre = document.querySelector(`[data-target="#sobre"]`);
const buttonContato = document.querySelector(`[data-target="#contato"]`);
