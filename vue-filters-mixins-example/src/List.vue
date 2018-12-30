<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and mixins</h1>
        <input v-model="filterText">
        <p>
          Using 'fruit in fruits | myFilter' is suboptimal. VueJs does not know when to run filters.
          It runs filters upon each DOM re-rendering. And because of this, 'computed' solution is better in these cases.
        </p>
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { FruitMixin } from "./FruitMixin";

  export default {
    mixins: [FruitMixin]
  }
</script>

<style>

</style>
