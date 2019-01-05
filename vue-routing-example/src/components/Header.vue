<template>
  <ul class="nav nav-pills">
    <p>'exact' means full match on path. So the tab is active only if the URL fully matches the 'to' property's value</p>
    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/user" tag="li" active-class="active"><a>User</a></router-link>
    <router-link to="/user_with_watcher/1" tag="li" active-class="active"><a>User With Watcher 1</a></router-link>
    <router-link to="/user_with_watcher/2" tag="li" active-class="active"><a>User With Watcher 2</a></router-link>
  </ul>
</template>

<script>
</script>

<style scoped>

</style>