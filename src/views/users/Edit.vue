<template>
  <div class="users-edit">
    <h1> Hi {{ user.name }}</h1>
    
    <img :src="user.image" :alt="user.name">
  <form v-on:submit.prevent="submit()">
        <h1>Edit My Info</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="user.name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="user.email">
        </div>
        <div class="form-group">
          <label>Image:</label>
          <input type="text" class="form-control" v-model="user.image">
        </div>
        
        
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>








  
  <button v-on:click="destroyUser()">Delete Account</button><br>
  </div>
  
</template> -->

<style>
img {
  width: 400px;
  height: 450px;
}
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      user: {},
      errors: [],
      goals: [],
      goal: {}

      
      
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.user.name,
        email: this.user.email,
        image: this.user.image
      };
      axios
        .patch("/api/users/" + this.user.id, params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/users/" + this.user.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    destroyUser: function() {
      axios
        .delete("/api/users/" + this.user.id)
        .then(response => {
          console.log("Sorry to see you go.", response.data);
          this.$router.push("/");
        });
    },
  }
};
</script>