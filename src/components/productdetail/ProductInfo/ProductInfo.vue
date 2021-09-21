<style src="./ProductInfo.scss" lang="scss" scoped></style>
<i18n src="./ProductInfo.txt"></i18n>
<script src="./ProductInfo.js"></script>

<template>
  <div class="row" v-if="product">
    <div class="col-lg-7">
      <div class="product-details-tab">
        <ProductGallery :sku="sku" />
      </div>
    </div>
    <div class="col-lg-5">
      <div
        class="product-details-content product-details-ptb"
        data-test="product-data"
      >
        <h2 data-test="product-name">
          {{ currentProduct.name }}
        </h2>
        <h3>
          <BasePrice :price="currentProduct.price" />
        </h3>
        <h4>
         {{ $t("description") }}
        </h4>
        <VariantSelector :sku="sku" />
        <div v-if="availableQ">
          {{ $t("available") }}: {{ availableQuantity }}
        </div>
        <AddToCartForm
          :sku="sku"
          :isOnStock="isOnStock"
          :availableQuantity="availableQuantity"
        />
       <div class="actions">
                  <div class="action">
                    <i class="fas fa-print"></i>
                    <div class="name">Print Specs</div>
                    <a
                      href="?rpc-action=factsheet&amp;product_code=80036"
                      target="_blank"
                      class="full"
                      ></a
                    >
                  </div>
                  <div class="action">
                    <i class="fas fa-envelope"></i>
                    <div class="name">Email</div>
                    <a
                      href="#"
                      data-remodal-target="email-product-modal"
                      class="full"
                      ></a
                    >
                  </div>
                  <div class="action">
                    <i class="fas fa-user"></i>
                    <div class="name">Contact Us</div>
                    <a href="/contact-us" class="full"></a>
                  </div>
                </div>
      </div>
    </div>
    <div class="row accordian-plp">
      <div class="col-12">
     <DetailsSection :sku="sku" />
    </div>
      <div class="col-4"></div>
    </div>
     <div class="shop-top-bar pb-15 pt-15 mb-30">
          <div class="shop-top-bar-right">
            <div data-v-66beace8="" class="row mb-20">Recommemded for you</div>
          </div>
        </div>
        <div class="row">
          <div
            class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
            data-test="product-list"
          >
            <div class="product-wrap mb-10">
              <div class="product-img mb-25">
                <a
                  href="/product/handi-split-biscuit-dough-round/M0E20000000E4DN"
                  class=""
                  ><img
                    src="https://images.onerichs.com/CIP/preview/thumbnail/uscm/12845"
                    alt=""
                    class="default-img"
                  /><!----></a
                >
                <div class="product-action dn dn">
                  <a href=""
                    ><i class="dl-icon-view"></i> <span>Quick Shop</span></a
                  ><a
                    data-toggle="tooltip"
                    title="Add to Cart"
                    href="#"
                    class="ml-a"
                    ><i class="dl-icon-cart29"></i><span>Add to Bag</span></a
                  >
                </div>
              </div>
              <div class="product-content text-left mt-15">
                <h3>
                  <a
                    href="/product/handi-split-biscuit-dough-round/M0E20000000E4DN"
                    class=""
                    data-test="product-thumbnail-name"
                    >HANDI-SPLIT BISCUIT DOUGH ROUND
                  </a>
                </h3>
                <div class="product-price">
                  <span data-v-41744c66=""
                    ><span data-v-41744c66=""
                      ><span
                        data-v-41744c66=""
                        data-test="product-original-price"
                      >
                        USD$ 15.00
                      </span></span
                    ></span
                  >
                </div>
                <div class="description">
                  A flaky, soft, moist, handi-split freezer-to-oven biscuit
                  dough made withwhite wheat flour and 1.5 OZ grain EQ
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
            data-test="product-list"
          >
            <div class="product-wrap mb-10">
              <div class="product-img mb-25">
                <a
                  href="/product/southern-handi-split-biscuit/M0E20000000DSB9"
                  class=""
                  ><img
                    src="https://images.onerichs.com/CIP/preview/thumbnail/uscm/38015"
                    alt=""
                    class="default-img"
                  /><!----></a
                >
                <div class="product-action dn">
                  <a href=""
                    ><i class="dl-icon-view"></i> <span>Quick Shop</span></a
                  ><a
                    data-toggle="tooltip"
                    title="Add to Cart"
                    href="#"
                    class="ml-a"
                    ><i class="dl-icon-cart29"></i><span>Add to Bag</span></a
                  >
                </div>
              </div>
              <div class="product-content text-left mt-15">
                <h3>
                  <a
                    href="/product/southern-handi-split-biscuit/M0E20000000DSB9"
                    class=""
                    data-test="product-thumbnail-name"
                    >SOUTHERN STYLE HANDI-SPLIT BISCUIT DOUGH ROUND
                  </a>
                </h3>
                <div class="product-price">
                  <span data-v-41744c66=""
                    ><span data-v-41744c66=""
                      ><span
                        data-v-41744c66=""
                        data-test="product-original-price"
                      >
                        USD$ 13.00
                      </span></span
                    ></span
                  >
                </div>
                <div class="description">
                  A flaky, soft, moist, handi-split freezer-to-oven biscuit
                  dough made withwhite wheat flour and 1.5 OZ grain EQ
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
            data-test="product-list"
          >
            <div class="product-wrap mb-10">
              <div class="product-img mb-25">
                <a
                  href="/product/biscuit-dough-made-with-whole-grain51-handi-split/M0E20000000E4DI"
                  class=""
                  ><img
                    src="https://images.onerichs.com/CIP/preview/thumbnail/uscm/38051"
                    alt=""
                    class="default-img"
                  /><!----></a
                >
                <div class="product-action dn">
                  <a href=""
                    ><i class="dl-icon-view"></i> <span>Quick Shop</span></a
                  ><a
                    data-toggle="tooltip"
                    title="Add to Cart"
                    href="#"
                    class="ml-a"
                    ><i class="dl-icon-cart29"></i><span>Add to Bag</span></a
                  >
                </div>
              </div>
              <div class="product-content text-left mt-15">
                <h3>
                  <a
                    href="/product/biscuit-dough-made-with-whole-grain51-handi-split/M0E20000000E4DI"
                    class=""
                    data-test="product-thumbnail-name"
                    >BISCUIT DOUGH MADE WITH WHOLE GRAIN/51% HANDI-SPLIT
                  </a>
                </h3>
                <div class="product-price">
                  <span data-v-41744c66=""
                    ><span data-v-41744c66=""
                      ><span
                        data-v-41744c66=""
                        data-test="product-original-price"
                      >
                        USD$ 12.00
                      </span></span
                    ></span
                  >
                </div>
                <div class="description">
                  A flaky, soft, moist, handi-split freezer-to-oven biscuit
                  dough made withwhite wheat flour and 1.5 OZ grain EQ
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-xl-3 col-lg-4 col-md-6 col-sm-6"
            data-test="product-list"
          >
            <div class="product-wrap mb-10">
              <div class="product-img mb-25">
                <a
                  href="/product/southern-style-biscuit-round-handi-split/M0E20000000DSB0"
                  class=""
                  ><img
                    src="https://images.onerichs.com/CIP/preview/thumbnail/uscm/49484"
                    alt=""
                    class="default-img"
                  /><!----></a
                >
                <div class="product-action dn">
                  <a href=""
                    ><i class="dl-icon-view"></i> <span>Quick Shop</span></a
                  ><a
                    data-toggle="tooltip"
                    title="Add to Cart"
                    href="#"
                    class="ml-a"
                    ><i class="dl-icon-cart29"></i><span>Add to Bag</span></a
                  >
                </div>
              </div>
              <div class="product-content text-left mt-15">
                <h3>
                  <a
                    href="/product/southern-style-biscuit-round-handi-split/M0E20000000DSB0"
                    class=""
                    data-test="product-thumbnail-name"
                    >SOUTHERN STYLE BISCUIT ROUND - HANDI-SPLIT
                  </a>
                </h3>
                <div class="product-price">
                  <span data-v-41744c66=""
                    ><span data-v-41744c66=""
                      ><span
                        data-v-41744c66=""
                        data-test="product-original-price"
                      >
                       USD$ 11.00
                      </span></span
                    ></span
                  >
                </div>
                <div class="description">
                  A flaky, soft, moist, handi-split freezer-to-oven biscuit
                  dough made withwhite wheat flour and 1.5 OZ grain EQ
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>
