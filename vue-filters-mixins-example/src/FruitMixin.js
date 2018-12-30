export const FruitMixin = {
  data() {
    return {
      fruits: ['Banana', 'Apple', 'Melon', 'Mango'],
      filterText: ''
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((fruit) => {
        return fruit.match(this.filterText);
      });
    }
  },
  created() {
    console.log('This is a mixin lifecycle hook')
  }
};