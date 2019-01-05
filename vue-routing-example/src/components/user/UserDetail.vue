<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded with id: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      :to="link"
      class="btn btn-primary">Edit User</router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEditName',
          params: {
            id: this.$route.params.id
          },
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#mydata'
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      /**
       * This function is a lifecycle hook.
       * Component properties like 'this.link' wont work because at this point the component is not created yet.
       * This makes sense because this is a guarded component and the user might not have access to it.
       */
      let userIsAuthenticated = true;
      if (userIsAuthenticated) {
        next();
      }
      next(false);
    }
  }
</script>