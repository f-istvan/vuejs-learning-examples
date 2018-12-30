<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>HTTP</h1>
        <div>
          <label>Username</label>
          <input type="text" v-model="user.username">
        </div>
        <div>
          <label>Mail</label>
          <input type="text" v-model="user.email">
        </div>
        <button @click="submit">Submit</button>
        <hr>
        <input type="text" v-model="node">
        <br><br>
        <button @click="getData">Get Data</button>
        <ul>
          <li v-for="u in users">{{ u.username }} - {{ u.email }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          email: ''
        },
        users: [],
        resource: {},
        node: 'data'
      }
    },
    methods: {
      submit() {
        this.resource.customSave({node: this.node}, this.user);
      },
      getData() {
        this.resource.getData({node: this.node})
          .then(response => {
            return response.json();
          })
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.users = resultArray;
          });
      }
    },
    created() {
      const customActions = {
        customSave: { method: 'POST', url: '{node}.json' },
        getData: { method: 'GET' }
      };
      this.resource = this.$resource('{node}.json', {}, customActions);
    }
  }
</script>

<style>

</style>
