<template xmlns:v-highlight="http://www.w3.org/1999/xhtml" xmlns:v-local-highlight="http://www.w3.org/1999/xhtml">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some bold text</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-local-highlight:background="{ mainColor: 'red' }">Color this</p>
        <p v-local-highlight:background.delayed="{ mainColor: 'yellow' }">Color this</p>
        <p v-local-highlight:background.delayed.blink="{ mainColor: 'green', secondColor: 'purple', blinkdelay: 500 }">Color this</p>
        <p v-local-highlight:font.delayed="{ font: '38px' }">Color this</p>
        <p v-local-highlight="{ mainColor: 'red' }">Color this</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    directives: {
      'local-highlight': {
        /** bind is a directive life cycle hook **/
        bind(el, binding, vnode) {
          let delay = 0;
          if (binding.modifiers['delayed']) {
            delay = 3000;
          }
          if (binding.modifiers['blink']) {
            let mainColor = binding.value.mainColor;
            let secondColor = binding.value.secondColor;
            let currentColor = mainColor;
            setTimeout(() => {
              setInterval(() => {
                currentColor === secondColor ? currentColor = mainColor : currentColor = secondColor;
                if (binding.arg === 'background') {
                  el.style.backgroundColor = currentColor;
                } else if (binding.arg === 'font') {
                  el.style.fontSize = binding.value.font;
                } else {
                  el.style.color = currentColor;
                }
              }, binding.value.blinkdelay);
            }, delay);
          } else {
            setTimeout(() => {
              if (binding.arg === 'background') {
                el.style.backgroundColor = binding.value.mainColor;
              } else if (binding.arg === 'font') {
                el.style.fontSize = binding.value.font;
              } else {
                el.style.color = binding.value.mainColor;
              }
            }, delay);
          }
        }
      }
    }
  }
</script>

<style>

</style>
