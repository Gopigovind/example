<script src="./PageHome.js"></script>
<style src="./PageHome.scss" lang="scss"></style>

<template>
  <span>
    <Banner />

    <div class="banner-area pt-30">
      <div class="custom-container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-xs-12">
            <div
              class="banner-wrap mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="banner-img banner-hover banner-zoom">
                <router-link
                  :to="{
                    name: 'products',
                    params: { categorySlug: 'products' },
                  }"
                >
                  <img src="assets/img/smallBanner1.png" alt="banner" />
                  <div class="banner-content">
                    <!-- <h3>WOMEN JEANS</h3> -->
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12">
            <div
              class="banner-wrap mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="banner-img banner-hover banner-zoom">
                <router-link
                  :to="{
                    name: 'products',
                    params: { categorySlug: 'products' },
                  }"
                >
                  <img src="assets/img/smallBanner2.png" alt="banner" />
                  <div class="banner-content">
                    <!-- <h3>WOMEN JEANS</h3> -->
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12">
            <div
              class="banner-wrap mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="banner-img banner-hover banner-zoom">
                <router-link
                  :to="{
                    name: 'products',
                    params: { categorySlug: 'products' },
                  }"
                >
                  <img src="assets/img/smallBanner3.png" alt="banner" />
                  <div class="banner-content">
                    <!-- <h3>WOMEN JEANS</h3> -->
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-xs-12">
            <div
              class="banner-wrap mb-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div class="banner-img banner-hover banner-zoom">
                <router-link
                  :to="{
                    name: 'products',
                    params: { categorySlug: 'products' },
                  }"
                >
                  <img src="assets/img/smallBanner4.png" alt="banner" />
                  <div class="banner-content">
                    <!-- <h3>BATHING SUITS</h3> -->
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="taste-info">
      <h2>SAVOR THE TASTIER SIDE OF NATURE.</h2>
      <p>
        From pizza to rolls, dessert to beverages, our plant-based portfolio
        helps you grow to meet consumer demand, deliciously.
      </p>
      <button>LEARN MORE</button>
    </div>
    <div
      class="
        single-slider
        bg-img
        slider-height-2
        align-items-center
        custom-d-flex
      "
      style="
        background-image: url(https://www.richsusa.com/wp-content/uploads/2020/08/ISB-LP-Banner.jpg);
      "
    >
      <div class="container">
        <div class="row height-100-percent align-items-center">
          <div class="col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="slider-content-9 slider-animated-1">
              <h1>{{ $t("BUSINESS SOLUTIONS. TAILORED TO YOU.") }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row bucket-wrap">
      <div class="col-lg-3 col-md-3 col-xs-12">
        <div class="content-bucket">
          <div class="image-container">
            <img
              src="https://www.richsusa.com/wp-content/uploads/2020/08/lightbulb-icon.png"
              alt="bulb"
            />
          </div>
          <h2>Inspiring <br> Innovations</h2>
          <p>
            Explore our latest innovations created to solve your everyday
            challenges.
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-xs-12">
        <div class="content-bucket">
          <div class="image-container">
            <img
              src="https://www.richsusa.com/wp-content/uploads/2020/08/search-con-red.png"
              alt="search"
            />
          </div>
          <h2>Nutrition <br> Finder</h2>
          <p>
            Find the information you need on the products you love.
          </p>
          <button>Explore</button>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-xs-12">
        <div class="content-bucket">
          <div class="image-container">
            <img
              src="https://www.richsusa.com/wp-content/uploads/2020/08/document-icon-red.png"
              alt="document"
            />
          </div>
          <h2>DIGITAL <br> TOOLKITS</h2>
          <p>
            Drive demand with Rich’s Digital Toolkits, 
            focused on Takeaway Solutions, DIY Meal Kits, 
            Food Safety, and more.
          </p>
          <button>LEARN MORE</button>
        </div>
      </div>
    </div>

    <div class="row card-gallery">
      <div class="col-lg-4 col-md-4 col-xs-12 p-0">
        <div class="row">
          <div class="content">
            <h2>ENDLESS <br> POSSIBILITIES</h2>
            <p>Give your inspiration room to roam. Break a few eggs. Bring in a color, 
              a flavor no one ever through to try before.</p>
            <button>DISCOVER OUR RECIPE</button>
          </div>
        </div>
        <div class="row">
          <div class="col p-0">
            <img src="https://www.richsusa.com/wp-content/uploads/2020/08/bruschetta.jpg" alt="dish" />
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-xs-12 p-0">
        <img src="https://www.richsusa.com/wp-content/uploads/2020/08/smores.jpg" alt="cokkies" />
      </div>
      <div class="col-lg-4 col-md-4 col-xs-12 p-0">
        <div class="row">
          <div class="col p-0">
          <img src="https://www.richsusa.com/wp-content/uploads/2020/05/Parfaits-that-Amaze.jpg" alt="shake" />
          </div>
        </div>
        <div class="row">
          <div class="col p-0">
            <img class="potato-crust" style="width: 46vw !important;"
              src="https://www.richsusa.com/wp-content/uploads/2020/08/Mediterranean-Pizza-Sweet-potato-crust.jpg" 
              alt="pizza" 
            />
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <img
            src="assets/img/ourbrands.png"
            alt="brands"
            style="height: 100%; width: 100%"
          />
        </div>
      </div>
    </div>
  </span>
</template>
