<style src="./TheHeader.scss" lang="scss"></style>
<i18n src="./TheHeader.txt"></i18n>
<script src="./TheHeader.js"></script>

<template>
  <header class="header-area">
    <div class="main-header-wrap bg-gray">
      <div class="custom-container">
        <div class="header-top">
          <div class="row align-items-center" style="margin-right: 10px;margin-left:10px;">
            <div class="col-sm-6">
              <div class="header-info header-info-inc">
                <router-link
                  :to="{ name: 'stores' }"
                  data-test="stores-link"
                >
                  {{ $t('stores') }}
                </router-link>
                <a href="#">{{$t('help')}}</a>
              </div>
            </div>
            <div class="col-sm-6 d-flex justify-content-end">
              <div class="curr-lang-wrap curr-lang-inc">
                <ul>
                  <LocationSelector
                    v-bind:values="$sunrise.countries"
                    title="location"
                    data-test="country-selector-dropdown"
                  />
                  <LocationSelector
                    v-bind:values="$sunrise.languages"
                    title="language"
                    data-test="language-selector-dropdown"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site-header-outer" style="height: 100px;">
        <div class="intelligent-header bg-white header-transform">
          <div class="header-middle header-transform">
            <div class="custom-container">
              <div class="row align-items-center" style="margin-right: 15px;margin-left: 15px;">
                <div class="col-xl-1 col-lg-3">
                  <div class="logo">
                    <router-link to="/">
                      <img
                        src="https://www.richsusa.com/wp-content/uploads/2020/02/logo.png"
                        alt="SUNRISE"
                        class="img-responsive sunrise-logo"
                      />
                    </router-link>
                  </div>
                </div>
                <div class="col-xl-11 col-lg-9 position-static">
                  <div class="main-menu menu-lh-3 main-menu-blod main-menu-center" style="margin: 0;">
                    <CategoriesMenu />
                    <div style="margin-left:40px;" class="custom-center">
                    <LoginButton />
                    </div>
                    <div class="cart-wrap component-same ml-20 custom-center">
                      <a
                        href
                        @click.prevent="openMiniCart"
                        data-test="mini-cart-open-button"
                        class="cart-active"
                      >
                        <i class="dl-icon-cart1"></i>
                        <span class="count-style">{{ totalCartItems }} </span>
                      </a>
                    </div>
                  </div>

                  <div class="header-component-wrap">
                    <!-- <div class="header-search-2 component-same">
                      <a
                        href
                        @click.prevent="toggleSearch"
                        class="search-active"
                      >
                        <i class="dl-icon-search10"></i>
                      </a>
                    </div> -->
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-small-mobile">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6">
            <div class="mobile-logo logo-width">
              <a href="index.html">
                <img alt="" src="https://www.richsusa.com/wp-content/uploads/2020/02/logo.png" />
              </a>
            </div>
          </div>
          <div class="col-6">
            <div class="mobile-header-right-wrap">
              <div class="same-style cart-wrap">
                <a href="#" class="cart-active">
                  <i class="dl-icon-cart1 "></i>
                  <span class="count-style">02</span>
                </a>
              </div>
              <div class="mobile-off-canvas">
                <a class="mobile-aside-button" href="#"
                  ><i class="dl-icon-menu2"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="search-content-wrap main-search-active"
      :class="{ 'search-visible': searchOpen }"
    >
      <a @click="toggleSearch" class="search-close"
        ><i class="dl-icon-close"></i
      ></a>
      <div class="search-content">
        <form class="search-form">
          <input
            name="q"
            type="text"
            v-model="searchText"
            placeholder="Search entire store…"
          />
          <button @click="search" class="button-search">
            <i class="dl-icon-search10"></i>
          </button>
        </form>
      </div>
    </div>
  </header>
</template>
