<template>
 <div>
  <quote-widget v-for="q in quotes" :key="q" v-bind:quote="q"></quote-widget>
 </div>
</template>

<script>
import QuoteWidget from "./QuoteWidget";

export default {
  props: ['quotes'],
  components: {
    'quote-widget': QuoteWidget
  }
}
</script>

<style scoped>

</style>
