//Change a static quote into a dynamic one.
$(document).ready(function () {
    $('#quotesCarousel').HTML = `<div id='loader'></div>`;
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            let carouselContent = '';

            data.forEach((quote, index) => {
                carouselContent += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <div class="row mx-auto align-items-center">
                    <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                        <img
                        src="${quote.image}"
                        class="d-block align-self-center"
                        alt="Photo of ${quote.name}, ${quote.title}"
                        />
                    </div>
                    <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                        <div class="quote-text">
                        <p class="text-white">« ${quote.quote}</p>
                        <h4 class="text-white font-weight-bold">${quote.name}</h4>
                        <span class="text-white">${quote.title}</span>
                        </div>
                    </div>
                    </div>
                </div>
                `;
        });
        $('#quotesCarousel').html(carouselContent);
        }
    };
    xhr.open('GET', "https://smileschool-api.hbtn.info/quotes", true);
    xhr.send();
})