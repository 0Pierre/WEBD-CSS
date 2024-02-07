const paragraphs = document.querySelectorAll(".section__paragraph");

document.addEventListener("scroll", function(){
    paragraphs.forEach(paragraph =>{
        if (isInView(paragraph)){
            paragraph.classList.add("section__paragraph--visable");
        }
    });
});

function isInView (elment){
    const rect = elment.getBoundingClientRect();
    return (rect.bottom > 0 && rect.top < 
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150));
}

var productLink = document.getElementById('products').querySelector('a');
productLink.textContent = productLink.textContent.replace("Product", "Interests");
productLink.innerHTML = '<i class="bi bi-basket"></i>' + productLink.innerHTML;