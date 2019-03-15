<template>
  <div class="users-edit">
    <h1> Hi {{ user.name }}!</h1>
    
    <img :src="user.image" :alt="user.name">
  <form v-on:submit.prevent="submit()">
        <h1>Edit My Info</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Call Me:</label> 
          <input type="text" class="form-control" v-model="user.name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="user.email">
        </div>
        <div class="form-group">
          <input type="radio" class="form-control" v-model="image" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgG-jZ6slrco-2G5jIUswvxAjZyOPu2Ruta7zvaYNYtBklh4C"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgG-jZ6slrco-2G5jIUswvxAjZyOPu2Ruta7zvaYNYtBklh4C" alt=""><br>
          <input type="radio" class="form-control" v-model="image" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8AszipRTydyTDH7qBCpIpXNsegOsAjyjTKq7a90gykvOc8X7"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8AszipRTydyTDH7qBCpIpXNsegOsAjyjTKq7a90gykvOc8X7" alt=""><br>
          <input type="radio" class="form-control" v-model="image" value="https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/rsDd1iYKirpypk6f/graphicstock-abstract-purple-hookah-smoke-on-a-black-background-photographed-using-a-gel-filter-the-concept-of-of-unhealthy_HwWwn5V_d-_thumb.jpg"> <img src="https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/rsDd1iYKirpypk6f/graphicstock-abstract-purple-hookah-smoke-on-a-black-background-photographed-using-a-gel-filter-the-concept-of-of-unhealthy_HwWwn5V_d-_thumb.jpg" alt="">
          <input type="radio" class="form-control" v-model="image" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS76_KZC9xwpCBxotGOwbyea70ayLMUL3UhZN0bbdTWUyvaUwa"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS76_KZC9xwpCBxotGOwbyea70ayLMUL3UhZN0bbdTWUyvaUwa" alt="">
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
      goal: {},
      image: ""

      
      
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
        image: this.image
      };
      console.log(params);
      axios
        .patch("/api/users/" + this.user.id, params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/users/me");
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