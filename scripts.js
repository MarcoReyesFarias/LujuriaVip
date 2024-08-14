document.addEventListener('DOMContentLoaded', function() {
    const regionSelect = document.getElementById('region');
    const citySelect = document.getElementById('city');
    const comunaSelect = document.getElementById('comuna');
    const searchBtn = document.getElementById('search-btn');
    const ageWarning = document.getElementById('age-warning');
    const homeContent = document.getElementById('home-content');
    const acceptBtn = document.getElementById('accept-btn');
    const declineBtn = document.getElementById('decline-btn');

    // Mostrar u ocultar campos según la región y ciudad seleccionada
    regionSelect.addEventListener('change', function() {
        const selectedRegion = regionSelect.value;
        citySelect.style.display = 'none';
        comunaSelect.style.display = 'none';
        citySelect.value = "";
        comunaSelect.value = "";

        const cityOptions = citySelect.querySelectorAll('option');
        cityOptions.forEach(option => {
            option.style.display = 'none';
            if (option.dataset.region === selectedRegion) {
                option.style.display = 'block';
            }
        });

        if (selectedRegion) {
            citySelect.style.display = 'inline-block';
        }
    });

    citySelect.addEventListener('change', function() {
        const selectedCity = citySelect.value;
        comunaSelect.style.display = 'none';
        comunaSelect.value = "";

        if (selectedCity === 'santiago') {
            const comunaOptions = comunaSelect.querySelectorAll('option');
            comunaOptions.forEach(option => {
                if (option.dataset.city === selectedCity) {
                    comunaSelect.style.display = 'inline-block';
                }
            });
        }
    });

    // Redirigir al index.html después de seleccionar la ubicación
    searchBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Manejar el pop-up de advertencia
    acceptBtn.addEventListener('click', function() {
        ageWarning.style.display = 'none';
        homeContent.style.display = 'block';
    });

    declineBtn.addEventListener('click', function() {
        window.location.href = 'https://www.google.com';
    });

    // Mostrar el contenido de la página después de aceptar
    homeContent.style.display = 'none';
    ageWarning.style.display = 'flex';
});
