const buttons = document.querySelectorAll(".nav-item");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-target");
    console.log(target);

    const section = document.querySelector(target);
    window.scrollTo({
      top: section.offsetTop - 131,
      behavior: "smooth"
    })
  });
});

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

window.onload = () => {
    const homeSection = getScrowDistance("home");
    const sobreSection = getScrowDistance("sobre");
    const menuSection = getScrowDistance("menu");
    const contatoSection = getScrowDistance("contato");
  
    window.addEventListener("scroll", () => {
      const buttonHome = document.querySelector(`[data-target="#home"]`);
      const buttonCardapio = document.querySelector(`[data-target="#menu"]`);
      const buttonSobre = document.querySelector(`[data-target="#sobre"]`);
      const buttonContato = document.querySelector(`[data-target="#contato"]`);
    
      if (window.scrollY >= 0 && window.scrollY < sobreSection) {
        buttonHome.classList.add("active");
        buttonCardapio.classList.remove("active");
        buttonSobre.classList.remove("active");
        buttonContato.classList.remove("active");
      } else if(window.scrollY > sobreSection && window.scrollY < menuSection){ 
        buttonSobre.classList.add("active");
        buttonHome.classList.remove("active");
        buttonCardapio.classList.remove("active");
        buttonContato.classList.remove("active");
      }else if(window.scrollY > menuSection && window.scrollY < contatoSection){
        buttonCardapio.classList.add("active");
        buttonSobre.classList.remove("active");
        buttonHome.classList.remove("active");
        buttonContato.classList.remove("active");
      }else if(window.scrollY > contatoSection){
        buttonContato.classList.add("active");
        buttonCardapio.classList.remove("active");
        buttonSobre.classList.remove("active");
        buttonHome.classList.remove("active");
      }
    });
  };