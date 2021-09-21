<style src="./DetailsSection.scss" lang="scss" scoped></style>
<i18n src="./DetailsSection.txt"></i18n>
<script src="./DetailsSection.js"></script>

<template>
  <div class="description-review-wrapper row" v-if="product">
    <div class="panel-group col-8" id="accordion1">
      <div class="panel pro-dec-accordion">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a href="#"
              @click.prevent="toggle(0)"
              :class="{collapsed:!expanded[0]}"
              data-test="product-attributes-accordion"
            >
              Ingredients
            </a>
          </h4>
        </div>
        <div data-parent="#accordion1" id="pro-dec-accordion1"
          class="product-description-wrapper panel-collapse collapse"
          :class="{show:expanded[0]}"
        >
          <div class="panel-body">
            
MILK, CORN SYRUP, SUGAR, CREAM, SKIM MILK,
 WATER, NATURAL AND ARTIFICIAL VANILLA FLAVORS,
  MONO AND DIGLYCERIDES, GUAR GUM, CARRAGEENAN. 
  CONTAINS MILK MY CONTAIN TRACES OF PEANUTS, 
  TREE NUTS, SOY, WHEAT, OR EGGS FROM MANUFACTURING
   AND BLENDING. DERIVED FROM BIOENGINEERING. 
          </div>
        </div>
      </div>
      <div class="panel pro-dec-accordion">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a href="#"
              @click.prevent="toggle(1)"
              :class="{collapsed:!expanded[1]}"
            >
              More Specifications
            </a>
          </h4>
        </div>
        <div data-parent="#accordion1" id="pro-dec-accordion2"
          class="product-description-wrapper panel-collapse collapse"
          :class="{show:expanded[1]}"
        >
          <div class="panel-body">
            <ul class="product-features-list">
              <li v-for="attribute in productAttributes"
                  data-test="product-attributes-list"
                  :key="attribute.name">
                <span class="attribute-name">
                  {{ attribute.name }}:
                </span>
                <span>
                  {{ attribute.label || attribute.value }}
                </span>
              </li>
            </ul>
        </div>
        </div>
      </div>
       <div class="panel pro-dec-accordion">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a href="#"
              @click.prevent="toggle(2)"
              :class="{collapsed:!expanded[2]}"
            >
             Nutrition Facts
            </a>
          </h4>
        </div>
        <div data-parent="#accordion1" id="pro-dec-accordion2"
          class="product-description-wrapper panel-collapse collapse"
          :class="{show:expanded[2]}"
        >
          <div class="panel-body">
<img src="https://www.richsusa.com?rpc_action=nutritionpanel&amp;product_code=80036&amp;type=nutritionalStandard" 
            alt="80036 standard nutritional panel">
        </div>
        </div>
      </div>
       <div class="panel pro-dec-accordion">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a href="#"
              @click.prevent="toggle(3)"
              :class="{collapsed:!expanded[3]}"
            >
              100G Nutrition Facts
            </a>
          </h4>
        </div>
        <div data-parent="#accordion1" id="pro-dec-accordion2"
          class="product-description-wrapper panel-collapse collapse"
          :class="{show:expanded[3]}"
        >
          <div class="panel-body">
<img src="https://www.richsusa.com?rpc_action=nutritionpanel&amp;product_code=80036&amp;type=nutritionalHundredGram"
            alt="80036 hundred gram nutritional panel">
        </div>
        </div>
      </div>
       <div class="panel pro-dec-accordion">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a href="#"
              @click.prevent="toggle(4)"
              :class="{collapsed:!expanded[4]}"
            >
              Tips & Handling
            </a>
          </h4>
        </div>
        <div data-parent="#accordion1" id="pro-dec-accordion2"
          class="product-description-wrapper panel-collapse collapse"
          :class="{show:expanded[4]}"
        >
          <div class="panel-body">
            
Storage: Product is frozen and must be warehoused at or below 0° F/-17.8C. 
        </div>
        </div>
      </div>
       <div class="panel pro-dec-accordion">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a href="#"
              @click.prevent="toggle(5)"
              :class="{collapsed:!expanded[5]}"
            >
              Storage
            </a>
          </h4>
        </div>
        <div data-parent="#accordion1" id="pro-dec-accordion2"
          class="product-description-wrapper panel-collapse collapse"
          :class="{show:expanded[5]}"
        >
          <div class="panel-body">
            <ul>
              <li>Frozen: 
                <strong class="number-label">547 DAYS</strong>
                </li> 
                <li>Refrigerated: <strong class="number-label">0 DAYS</strong></li> 
                <li>Ambient: <strong class="number-label">0 DAYS</strong></li>
                </ul>
        </div>
        </div>
      </div>
       <div class="panel pro-dec-accordion">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a href="#"
              @click.prevent="toggle(6)"
              :class="{collapsed:!expanded[6]}"
            >
             Allergens
            </a>
          </h4>
        </div>
        <div data-parent="#accordion1" id="pro-dec-accordion2"
          class="product-description-wrapper panel-collapse collapse"
          :class="{show:expanded[6]}"
        >
          <div class="panel-body">
            <!-- <ul>
              <li>Frozen: 
                <strong class="number-label">547 DAYS</strong>
                </li> 
                <li>Refrigerated: <strong class="number-label">0 DAYS</strong></li> 
                <li>Ambient: <strong class="number-label">0 DAYS</strong></li>
                </ul> -->
        </div>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="key-desp">Key Specifications</div>
       <ul class="product-features-list">
              <li v-for="attribute in productAttributes"
                  data-test="product-attributes-list"
                  :key="attribute.name">
                <span class="attribute-name">
                  {{ attribute.name }}:
                </span>
                <span>
                  {{ attribute.label || attribute.value }}
                </span>
              </li>
            </ul>
    </div>
  </div>

</template>
