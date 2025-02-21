document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  function updateCarousel() {
    
      const offset = -currentIndex * 100;
      document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;

      dots.forEach(dot => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
  }

  
  nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
  });

  prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
  });

  dots.forEach(dot => {
      dot.addEventListener("click", function () {
          currentIndex = parseInt(this.dataset.index);
          updateCarousel();
      });
  });


  setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
  }, 5000);
});

function performSearch() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput.trim() !== '') {
      alert(`Buscando: ${searchInput}`);
    } else {
      alert('Por favor, introduce un término para buscar.');
    }
  }
  document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Cita solicitada correctamente. Nos pondremos en contacto contigo.");
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  let offset = 0;
  setInterval(() => {
      offset -= 100 / 3;
      if (offset < -((100 / 3) * 4)) {
          offset = 0;
      }
      carousel.style.transform = `translateX(${offset}%)`;
  }, 3000);
});

  /*MAPA*/
  function initMap() {
    var location = { lat: -34.6037, lng: -58.3816 }; 
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location,
        styles: [
            {
                featureType: "all",
                elementType: "geometry",
                stylers: [{ color: "#202020" }]
            },
            {
                featureType: "all",
                elementType: "labels.text.fill",
                stylers: [{ color: "#ffffff" }]
            },
            {
                featureType: "poi",
                elementType: "labels.text",
                stylers: [{ visibility: "off" }]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Ubicación"
    });
}

var script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=[TU_API_KEY]&callback=initMap`;
script.async = true;
script.defer = true;
document.body.appendChild(script);

