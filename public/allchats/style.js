
let searchVisibility = false

const searchConDiv = document.getElementById('search-container')
const searchDiv = document.getElementById('search')
const cutBtn = document.getElementById('cutBtn')
const searcher = document.getElementById('searcher')

const showSearch = () => {
    if (!searchVisibility) {
        searchConDiv.classList.add('search-container-visible');
        searchDiv.classList.add('search-visible');
        searcher.classList.add('show-esc')
        searcher.disabled = false
        const span = document.createElement('span')
        span.innerText = 'ESC'
        span.id = 'escText'
        // span.style.padding = '3px'
        span.style.fontWeight = 'bold'
        searchDiv.appendChild(span)
        searchVisibility = true
    }
    
};
const hideSearch = () => {
    if (searchVisibility) {
        searchConDiv.classList.remove('search-container-visible');
        searchDiv.classList.remove('search-visible');
        searchDiv.removeChild(document.getElementById('escText'))
        searcher.classList.remove('show-esc')
        searcher.disabled = true
        searchVisibility = false
    }
};

console.log(gsap)

const handleEscapeKey = (event) => {
    if (event.key === 'Escape' || event.key === 'Esc') {
        hideSearch();
    }
};

document.addEventListener('keydown', handleEscapeKey);
searchDiv.addEventListener('click', showSearch);

document.addEventListener('DOMContentLoaded' , () => {
    const tl = gsap.timeline
    gsap.from('.chat', {x : -2000 , stagger : 0.2 })
    gsap.from('#search-container' , {y : -200})
    gsap.from('#chats-area' , {x : 1000})
})