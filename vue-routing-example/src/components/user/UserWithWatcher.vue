<template>
    <div>
      <h1>The User Page</h1>
      <hr>
      <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
      <p>Loaded ID: {{ id_to_reload }}</p>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          /**
           * the id_to_reload wont change if we navigate to the same page but with different parameter
           * because the component is not recreated
           */
          id_to_reload: this.$route.params.id_to_reload
        }
      },
      /**
       * Solution:
       * the route changes so we can reflect the changes with a watcher. We can update the id_to_reload property here
       */
      watch: {
        '$route'(to, from) {
          this.id_to_reload = to.params.id_to_reload;
        }
      },
      methods: {
        navigateToHome() {
          this.$router.push({ name: 'homePageName' })

          /** this also works if you dont specify the name property in the routing */
          // this.$router.push('/')
        }
      }
    }
</script>