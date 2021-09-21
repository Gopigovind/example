<script src="./Banner.js"></script>
<i18n src="./Banner.txt"></i18n>
<style src="./Banner.scss" lang="scss"></style>

<template>
  <div class="slider-area">
    <carousel
      animateIn="fadeIn"
      animateOut="fadeOut"
      :autoplayHoverPause="false"
      :nav="false"
      :autoplay="true"
      :items="1"
      class="slider-active-1 nav-style-2"
    >
      <!-- <div
        class="single-slider bg-img slider-height-2 align-items-center custom-d-flex"
        style="background-image:url(https://www.richsusa.com/wp-content/uploads/2020/08/Hero2-uncompressed.png);"
      >
        <div class="container">
          <div class="row height-100-percent align-items-center">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
              <div class="slider-content-8 slider-animated-1 text-center">
                <h3 class="animated">{{$t("midSeasonSale")}}</h3>
                <h1 class="animated">{{$t("up50")}}</h1>
                <div class="slider-btn-1">
                  <router-link
                    :to="{ name: 'products', params: { categorySlug: 'sale' } }"
                    class="animated"
                    >{{$t("shopNow")}}</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div
        class="
          single-slider
          bg-img
          slider-height-2
          align-items-center
          custom-d-flex
        "
        style="
          background-image: url(https://www.richsusa.com/wp-content/uploads/2020/02/Hero-uncompressed.png);
        "
      >
        <div class="container">
          <div class="row height-100-percent align-items-center">
            <div class="col-lg-8 col-md-8 col-sm-12 col-12">
              <div class="slider-content-9 slider-animated-1">
                <h1 class="animated">{{ $t("WELCOME TO RICH'S USA") }}</h1>
                <h1 class="animated">{{ $t("INSPIRATION STARTS HERE.") }}</h1>
                <!-- <div class="slider-btn-1 text-center">
                  <router-link
                    :to="{ name: 'products', params: { categorySlug: 'new' } }"
                    class="animated"
                    >{{$t("shopNow")}}</router-link
                  >
                </div> -->
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-12">
              <div class="subscribe-form">
                <h2>STAY IN THE KNOW</h2>
                <p>
                  Be the first to receive product updates, offers, and the
                  latest trends & insights for your business.
                </p>
                <form>
                  <label for="email">EMAIL</label>
                  <input type="text" v-model.trim="email" />
                  <label for="segment">SEGMENT</label>
                  <select v-model="segment">
                    <option value="QSR">QSR</option>
                    <option value="Fast Casual">Fast Casual</option>
                    <option value="Food Truck">Food Truck</option>
                    <option value="Mid-Scale/Family">Mid-Scale/Family</option>
                    <option value="Casual Dining">Casual Dining</option>
                    <option value="Fine Dining">Fine Dining</option>
                    <option value="Bars, Pubs and Clubs">
                      Bars, Pubs &amp; Clubs
                    </option>
                    <option value="C-Store">Convenience Store</option>
                    <option value="Prepared Food at Retail">
                      Prepared Food at Retail
                    </option>
                    <option value="Catering">Catering</option>
                    <option value="Eatertainment">Eatertainment</option>
                    <option value="Comm Other">Comm Other</option>
                    <option value="Ghost Kitchen">Ghost Kitchen</option>
                    <option value="Hospitals">Hospitals</option>
                    <option value="Assisted/Senior Living">
                      Assisted/Senior Living
                    </option>
                    <option value="Other Healthcare">Other Healthcare</option>
                    <option value="C and U">College &amp; University</option>
                    <option value="K-12">K-12 Schools</option>
                    <option value="Preschool/Daycare">Preschool/Daycare</option>
                    <option value="Other Education/K-12 Camps">
                      Other Education/K-12 Camps
                    </option>
                    <option value="Country Club/Golf Course">
                      Country Club/Golf Course
                    </option>
                    <option value="Stadium/Arenas">Stadiums/Arenas</option>
                    <option value="Casino">Casino</option>
                    <option value="Other Recreation">Other Recreation</option>
                    <option value="Theme Parks">Theme Parks</option>
                    <option value="Airlines &amp; Trains">
                      Airlines &amp; Trains
                    </option>
                    <option value="Cruise Lines">Cruise Lines</option>
                    <option value="Camps">Camps</option>
                    <option value="Lodging">Lodging</option>
                    <option value="B and I">Business &amp; Industry</option>
                    <option value="Military">Military</option>
                    <option value="Corrections">Corrections</option>
                    <option value="Vending">Vending</option>
                    <option value="Other Non-Comm">Other Non-Comm</option>
                    <option value="Other Foodservice">Other Foodservice</option>
                    <option value="LSR">LSR</option>
                    <option value="FSR">FSR</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Cake Decorating/Supply Store">
                      Cake Decorating/Supply Store
                    </option>
                    <option value="Conventional Club">Conventional Club</option>
                    <option value="Conventional Mass Merch">
                      Conventional Mass Merch
                    </option>
                    <option value="Ethnic Market">Ethnic Market</option>
                    <option value="Internet Retailer">Internet Retailer</option>
                    <option value="Liquor Super Store">
                      Liquor Super Store
                    </option>
                    <option value="Other Retail">Other Retail</option>
                    <option value="Small Grocery">Small Grocery</option>
                    <option value="Supercenter">Supercenter</option>
                    <option value="Superette">Superette</option>
                    <option value="Supermarket-Conventional">
                      Supermarket-Conventional
                    </option>
                    <option value="Supermarket-Limited Assortment">
                      Supermarket-Limited Assortment
                    </option>
                    <option value="Supermarket-Natural/Gourmet Foods">
                      Supermarket-Natural/Gourmet Foods
                    </option>
                    <option value="Warehouse Grocery">Warehouse Grocery</option>
                    <option value="Dollar Store">Dollar Store</option>
                    <option value="Wholesale Club">Wholesale Club</option>
                  </select>
                  <div class="text-right">
                    <button @click.prevent="onSubmit">SUBMIT <span>></span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </carousel>
  </div>
</template>
