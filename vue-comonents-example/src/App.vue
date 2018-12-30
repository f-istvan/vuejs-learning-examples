<template>
  <div>
    <p>Parent</p>
    <status-bar v-bind:quotes="quotes"></status-bar>
    <quote-input @new-quote="handleNewQuoteAddition($event)"></quote-input>
    <quote-container v-bind:quotes="quotes"></quote-container>
  </div>
</template>

<script>
import StatusBar from "./components/StatusBar";
import QuoteInput from "./components/QuoteInput";
import QuoteContainer from "./components/QuoteContainer";

export default {
  components: {
    'status-bar': StatusBar,
    'quote-input': QuoteInput,
    'quote-container': QuoteContainer
  },
  data: function () {
    return {
      quotes: []
    }
  },
  methods: {
    handleNewQuoteAddition: function (q) {
      this.quotes.push(q);
    }
  }
}
</script>

<style>
</style>
