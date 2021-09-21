<style src="./AddToCartForm.scss" lang="scss"></style>
<i18n src="./AddToCartForm.txt"></i18n>
<script src="./AddToCartForm.js"></script>

<template>
  <div class="product-dec-action-wrap pro-dec-action-2">
    <form v-if="isOnStock" ref="form" v-on:submit.prevent="addLineItem">
      <div class="quality-cart-wrap">
        <div class="quality-wrap">
          <!-- <input
            class="input-text qty"
            type="number"
            min="1"
            name="qty"
            maxlength="12"
            v-model="quantity"
            data-test="add-to-cart-amount"
            title="Qty"
          /> -->
          <select class="form-select"  v-model="quantity" aria-label="Default select example">
  <!-- <option selected >select quantity</option> -->
  <option selected value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
    <option  value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
    <option  value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
   <option value="10">10</option>
</select>
        </div>
        <div class="quality-wrap">
          <!-- <a
            href="#" 
            @click.prevent="submitForm"
            data-test="add-to-cart-button"
          >
            {{$t('addToCart')}}
          </a> -->
          <input
            data-test="add-to-cart-button"
            type="submit"
            :value="$t('addToCart')"
          />
        </div>
      </div>
      <div class="mt-2" style="color: red" v-if="showQuantityError">
        {{ $t("quantityError", { quantity: availableQuantity }) }}
      </div>
    </form>

    <div v-else>
      <div class="pro-cart-wrap">
        {{ $t("notInStock") }}
      </div>
    </div>
  </div>
</template>
