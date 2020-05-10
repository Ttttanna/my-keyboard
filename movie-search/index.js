const renderSlide = (item) => `

<div class="slider__item">
 <h3 class="card-title">${item['Title']}</h3>
 <div class="image-container">
   <img src=${item.Poster}>
 </div>
 <span class="card-year">${item.Year}</span>
 <span></span> 
</div>`;

let mySlider = document.querySelector('.slider-container');
const button = document.querySelector('button');
const input = document.querySelector('input');
let search = input.value;


// Rendering movie
async function getData(word) {
  let response = await fetch(`https://www.omdbapi.com/?s=${word}&apikey=cdbeeb38`);
  let data = await response.json();
  mySlider.innerHTML = '';
  mySlider.innerHTML = renderSlider(data.Search);
  //return data.Search 
}

getData('love');

function renderSlider(cards) {  
  let slides = cards.map(item =>renderSlide(item)).join("");
  let result = `<div class="slider">
    <div class="slider__wrapper">
      <div class="slider__items">      
        ${slides}
      </div>  
    </div>    
    <a class="slider__control slider__control_left" href="#" role="button"> < </a>
    <a class="slider__control slider__control_right" href="#" role="button"> > </a>
</div>`
return result
}


button.addEventListener('click', (e) => {
  e.preventDefault();
})

// Render page based on input
/*input.onchange = () => {
  search = input.value;
  renderSlider(getData(search));
}*/

/*let mySwiper = new Swiper ('.swiper-container',{
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  updateOnWindowResize: true,
  spaceBetween: 5,
  slidesPerView: 3,
  loopedSlides: 3,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
  },
  

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  
})






*/
