<i18n src="./CategoriesMenu.txt"></i18n>
<script src="./CategoriesMenu.js"></script>
<style lang="scss" src="./CategoriesMenu.scss"></style>
<template>
  <nav>
    <ul v-if="sortedCategories && sortedCategories.length">
      <li
        class="position-static"
        v-for="category1stLevel in sortedCategories"
        :key="category1stLevel.id"
        :class="category1stLevel.name"
        @mouseenter="hoverOnCategory(category1stLevel)"
        @mouseleave="hoverOffCategory()"
        data-test="category-1st-level"
      >
      
        <router-link
          :to="{
            name: 'products',
            params: { categorySlug: category1stLevel.slug },
          }"
          @click="clickOnCategory"
          :class="
            isActive(category1stLevel.name) ? 'active heading' : 'heading'
          "
          data-test="category-1st-level-link"
        >
          {{ category1stLevel.name.toUpperCase() }}
        </router-link>
        <ul
          v-if="category1stLevel.children.length"
          class="mega-menu"
          :class="
            category1stLevel.children.length === 2
              ? 'menu-2-col mega-menu-width3'
              : 'mega-menu-width3'
          "
          :style="
            category1stLevel.name == 'Business Solutions'
              ? 'width: 20%; left: 38%'
              : category1stLevel.name == 'Resources'
              ? 'width: 30%; left: 53%'
              : category1stLevel.name == 'About Us'
              ? 'width: 15%; left: 72%'
              : ''
          "
        >
          <span
            class="triangle"
            :style="
              category1stLevel.name == 'Business Solutions'
                ? 'left: 40%'
                : category1stLevel.name == 'Resources'
                ? 'left:60%'
                : category1stLevel.name == 'About Us'
                ? 'left: 70%'
                : ''
            "
          ></span>
          <li>
            <ul class="mega-menu-width4" :class="category1stLevel.name">
              <li class="all-products" v-if="category1stLevel.name == 'Products'">
                <div class="all-products">ALL PRODUCTS</div>
                <div class="pizza">
                  PIZZA
                </div>
                <div class="donut">
                  DONUTS
                </div>
              </li>
              <li
                class="cat-width"
                v-for="category2ndLevel in category1stLevel.name == 'Products' ?
                  category1stLevel.children.slice().reverse() : category1stLevel.children"
                :key="category2ndLevel.id"
                :style="
                  category1stLevel.name != 'Products'
                    ? 'display:block; float:none; width:100%;'
                    : ''
                "
              >
                <router-link
                  class="menu-title"
                  :to="{
                    name: 'products',
                    params: { categorySlug: category2ndLevel.slug },
                  }"
                  @click="clickOnCategory"
                  data-test="category-2nd-level-link"
                >
                  <span>{{ category2ndLevel.name }}</span>
                </router-link>
                 
                <ul> 
                <div class="our-brand-list" 
                  v-if="category1stLevel.name == 'Products' && category2ndLevel.name == 'Our Brands'">
                <li>
                  <img
                    src="https://www.richsusa.com/wp-content/uploads/2021/03/Christie-Cookie-Logo-Tagline_1-color.jpg" 
                    alt="Cookie" 
                  />
                </li>
                <li>
                <img
                  src="https://www.richsusa.com/wp-content/uploads/2021/03/Our-Specialty-Logo-200x200-1.jpg" 
                  alt="Specialty" 
                />
                </li>
                <li>
                <img
                src="https://www.richsusa.com/wp-content/uploads/2021/03/RICH-26428_RichsHome_Stacked_Logo_CMYK_200.jpg"
                  alt="RichsHome" 
                />
                </li>
                <li>
                <div class="overlay"></div>
                <a href="https://www.richsusa.com/our-brands/" class="full"></a>
                <a href="https://www.richsusa.com/our-brands/">View All Brands</a>
                </li>
                </div> 
                
                  <li
                    v-for="category3rdLevel in category2ndLevel.children"
                    :key="category3rdLevel.id"
                    :style="
                      category1stLevel.name != 'Products'
                        ? 'display: block; width: 100%'
                        : ''
                    "
                  >
                    <router-link
                      :to="{
                        name: 'products',
                        params: { categorySlug: category3rdLevel.slug },
                      }"
                      @click="clickOnCategory"
                      data-test="category-3rd-level-link"
                    >
                      <span>{{ category3rdLevel.name }}</span>
                    </router-link>
                    
                  </li> 
                                 
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
