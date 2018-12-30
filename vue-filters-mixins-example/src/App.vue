<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters and mixins</h1>
        <p>{{ text | toUppercase }}</p>
        <hr>
        <button @click="fruits.push('Lettuce')">Add new item - it is only added to this COPY of the mixin. VueJS copies the mixin.</button>
        <input v-model="filterText">
        <p>
          Using 'fruit in fruits | myFilter' is suboptimal. VueJs does not know when to run filters.
          It runs filters upon each DOM re-rendering. And because of this, 'computed' solution is better in these cases.
        </p>
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
        <hr>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
  import List from "./List";
  import { FruitMixin } from "./FruitMixin";

  export default {
    data() {
      return {
        text: 'Some text!'
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    components: {
      appList: List
    },

    /** VueJs is going to merge this with the other properties */
    mixins: [FruitMixin]
  }
</script>

<style>

</style>
