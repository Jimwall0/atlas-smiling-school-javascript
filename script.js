//Change a static quote into a dynamic one.
$(document).ready(function () {
    $('#quotesCarousel').html(`<div class='loader'></div>`);
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
                        src="${quote.pic_url}"
                        class="d-block align-self-center"
                        alt="Photo of ${quote.name}, ${quote.title}"
                        />
                    </div>
                    <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                        <div class="quote-text">
                        <p class="text-white">« ${quote.text}</p>
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

//Replace static video cards by dynamic loading
$(document).read(function () {
    $('#tutorialsCarousel').html(`<div class="loader"></div>`);
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            let carouselContent = '';

            data.forEach((key, index) => {
                carouselContent += `
                <div class="carousel-item active">
                <div class="row align-items-center mx-auto">
                  <div
                    class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center"
                  >
                    <div class="card">
                      <img
                        src="images/thumbnail_4.jpg"
                        class="card-img-top"
                        alt="Video thumbnail"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">
                          Diagonal Smile
                        </h5>
                        <p class="card-text text-muted">
                          Lorem ipsum dolor sit amet, consect adipiscing elit,
                          sed do eiusmod.
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="images/profile_1.jpg"
                            alt="Creator of
                            Video"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_off.png"
                              alt="star on"
                              width="15px"
                            />
                          </div>
                          <span class="main-color">8 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-sm-6 col-md-6 col-lg-3 d-none d-sm-flex justify-content-md-start justify-content-lg-center"
                  >
                    <div class="card">
                      <img
                        src="images/thumbnail_3.jpg"
                        class="card-img-top"
                        alt="Video thumbnail"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">Sad Smile</h5>
                        <p class="card-text text-muted">
                          Lorem ipsum dolor sit amet, consect adipiscing elit,
                          sed do eiusmod.
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="images/profile_1.jpg"
                            alt="Creator of
                            Video"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_off.png"
                              alt="star on"
                              width="15px"
                            />
                          </div>
                          <span class="main-color">8 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 d-none d-lg-flex justify-content-center">
                    <div class="card">
                      <img
                        src="images/thumbnail_1.jpg"
                        class="card-img-top"
                        alt="Video thumbnail"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">
                          Natural Smile
                        </h5>
                        <p class="card-text text-muted">
                          Lorem ipsum dolor sit amet, consect adipiscing elit,
                          sed do eiusmod.
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="images/profile_1.jpg"
                            alt="Creator of
                            Video"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_off.png"
                              alt="star on"
                              width="15px"
                            />
                          </div>
                          <span class="main-color">8 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 d-none d-lg-flex justify-content-center">
                    <div class="card">
                      <img
                        src="images/thumbnail_2.jpg"
                        class="card-img-top"
                        alt="Video thumbnail"
                      />
                      <div class="card-img-overlay text-center">
                        <img
                          src="images/play.png"
                          alt="Play"
                          width="64px"
                          class="align-self-center play-overlay"
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title font-weight-bold">Happy Smile</h5>
                        <p class="card-text text-muted">
                          Lorem ipsum dolor sit amet, consect adipiscing elit,
                          sed do eiusmod.
                        </p>
                        <div class="creator d-flex align-items-center">
                          <img
                            src="images/profile_1.jpg"
                            alt="Creator of
                            Video"
                            width="30px"
                            class="rounded-circle"
                          />
                          <h6 class="pl-3 m-0 main-color">Phillip Massey</h6>
                        </div>
                        <div class="info pt-3 d-flex justify-content-between">
                          <div class="rating">
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_on.png"
                              alt="star on"
                              width="15px"
                            />
                            <img
                              src="images/star_off.png"
                              alt="star on"
                              width="15px"
                            />
                          </div>
                          <span class="main-color">8 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                `
            });
        }
    }
})