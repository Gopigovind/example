<template>
  <div class="breadcrumb-area breadcrumb-bg-1 bg-gray">
    <div class="container-fluid"></div>
    <div class="breadcrumb-content text-left">
      <ul v-if="currentCategory && currentCategory.ancestors" class="mb-20">
        <li>
          <router-link to="/" data-test="breadcrumb-home-link">{{
            $t("home")
          }}</router-link>
        </li>
        <li
          class="active"
          v-for="ancestor in currentCategory.ancestors"
          :key="ancestor.slug"
        >
          <router-link
            data-test="breadcrumb-ancestor-link"
            v-if="ancestor.name"
            :to="{ name: 'products', params: { categorySlug: ancestor.slug } }"
            class="active"
            >{{ ancestor.name }}</router-link
          >
        </li>
      </ul>
      <div
        v-if="currentCategory && currentCategory.name"
        class="breadcrumb-title"
        style="width: 760px"
      >
        <h2>{{ currentCategory.name }}</h2>
      </div>
      <div class="copy">
        <p style="font-size: 13px">
          From breakfast to happy hour, we offer a variety of delightful baked
          goods to complement your consumers’ meals — or drinks. Explore our
          biscuit dough and fully baked pretzels, and give your customers a
          nostalgic treat.
        </p>
      </div>
    </div>
  </div>
</template>
<i18n src="./Breadcrumb.txt"></i18n>
<style lang="scss" src="./Breadcrumb.scss"></style>
<script src="./Breadcrumb.js"></script>
