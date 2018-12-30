<template>
 <div>
   <textarea v-model="quote"></textarea>
   <button v-on:click="addQuote">Add Quote</button>
 </div>
</template>

<script>
export default {
  data: function () {
    return {
      quote: ''
    }
  },
  methods: {
    addQuote: function () {
      this.$emit('new-quote', this.quote);
      this.quote = '';
    }
  }
}
</script>

<style scoped>

</style>
