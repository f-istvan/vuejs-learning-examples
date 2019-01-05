<template>
    <div>
      <h3>Edit the User</h3>
      <p>User to edit with id: {{ $route.params.id }}</p>
      <p>Locale: {{ $route.query.locale }}</p>
      <p>Q: {{ $route.query.q }}</p>
      <hr>
      <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
      <div style="height: 700px"></div>
      <p id="mydata">Some data</p>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        confirmed: false
      }
    },
    beforeRouteLeave(to, from, next) {
      if (this.confirmed) {
        next();
      } else {
        if (confirm('Are you sure?')) {
          next();
        } else {
          next(false);
        }
      }
    }
  }
</script>