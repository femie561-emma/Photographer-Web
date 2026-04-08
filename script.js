const nav = document.querySelector(".nav-links");
const ham = document.querySelector(".hamburger");
const links = document.querySelectorAll(".nav-links a");
ham.addEventListener("click",() =>{
    nav.classList.toggle("active");
    
links.forEach(link => {
    link.addEventListener("click",() =>{
     nav.classList.remove("active");   
    });
});

});

const faders = document.querySelectorAll(".fade-in");

window.addEventListener('scroll', () =>{
    faders.forEach(el =>{
        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            el.classList.add('show');
        }
    });
});


// FORM 

document.getElementById("contact-form").addEventListener("submit",function(e){
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let phone = "2347015027995";


  let text = `✋Hello My Name is ${name}.
                       📧 Email: ${email} 
                       ✂️ Service: ${message}`;

 let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(text);

 window.open(url, "_blank");

});


// BACK TO TOP
const btn = document.getElementById("backToTop");

window.onscroll = function(){
    console.log("you scrolled");

    if(scrollY > 100){
        console.log("how far scroll");
        btn.style.display = "block";
    } else{
        btn.style.display = "none";
    }

    btn.onclick = function(){
     window.scrollTo({
        top:0, behavior: "smooth"
     });
    }
    
}
