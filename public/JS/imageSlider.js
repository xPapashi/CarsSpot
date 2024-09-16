
const data = {
  personnal: [
    {
      src: "../public/img/car1.png",
      alt: "Samochód 1",
    },
    {
      src: "../public/img/car2.png",
      alt: "Samochód 2",
    },
    {
      src: "../public/img/car3.png",
      alt: "Samochód 3",
    },
  ],
  business: [
    {
      src: "../public/img/van2.png",
      alt: "Samochód Dostawczy 1",
    },
    {
      src: "../public/img/van3.png",
      alt: "Samochód Dostawczy 2",
    },
    {
      src: "../public/img/van1.png",
      alt: "Samochód Dostawczy 3",
    },
  ],
};

function loadGallery(option) {
    const sliderWrapper = document.getElementById("slider-wrapper");
    sliderWrapper.innerHTML = "";

    data[option].forEach((image) => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.innerHTML = `<img src='${image.src}' alt='${image.alt}' class='object-contain w-[600px] cursor-grab'/>`;
        sliderWrapper.appendChild(slide);
    });

    slider.update();
}

const slider = new Swiper('.swiper-container', {
    loop: false,
    slidesPerView: 2.1,
    spaceBetween: 60,
    pagination: {
        el: '.swiper-pagination-custom',
        clickable: true,
        bulletClass: 'swiper-pagination-bullet-custom',
        bulletActiveClass: 'swiper-pagination-bullet-active',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 2.2,
            spaceBetween: 60,
        },
    },
});

document.getElementById('personnal-car').addEventListener('click', (e) => {
    e.preventDefault();
    loadGallery("personnal");

    e.target.classList.add('text-outline', 'underline', 'underline-offset-4', 'font-semibold');

    document.getElementById('business-car').classList.remove('text-outline', 'underline', 'underline-offset-4', 'font-semibold');
});

document.getElementById('business-car').addEventListener('click', (e) => {
    e.preventDefault();
    loadGallery("business");

    e.target.classList.add('text-outline', 'underline', 'underline-offset-4', 'font-semibold');

    document.getElementById('personnal-car').classList.remove('text-outline', 'underline', 'underline-offset-4', 'font-semibold');
});


window.onload = () => {
    loadGallery("personnal");
}
