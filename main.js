const search = document.querySelector('.input');
const search__button = document.querySelector('.search__button');

search__button.onclick = function(){
    const url = "https://www.google.com/search?q="+search.value;
    window.open(url, '_self');
}
search.addEventListener("keydown", function(event) {
    if(event.key === "Enter")
     window.open("https://www.google.com/search?q="+search.value, '_self');
     
    
})

const lucky__button = document.querySelector('.lucky__button');

lucky__button.onclick = function(){
    const url = "https://www.google.com/doodles"
    window.open(url, '_self');
}