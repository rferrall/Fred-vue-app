<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="name">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <div>
          <input type="radio" v-model="image" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgG-jZ6slrco-2G5jIUswvxAjZyOPu2Ruta7zvaYNYtBklh4C"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgG-jZ6slrco-2G5jIUswvxAjZyOPu2Ruta7zvaYNYtBklh4C" alt=""><br>
          <input type="radio" v-model="image" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8AszipRTydyTDH7qBCpIpXNsegOsAjyjTKq7a90gykvOc8X7"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM8AszipRTydyTDH7qBCpIpXNsegOsAjyjTKq7a90gykvOc8X7" alt=""><br>
          <input type="radio" v-model="image" value="https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/rsDd1iYKirpypk6f/graphicstock-abstract-purple-hookah-smoke-on-a-black-background-photographed-using-a-gel-filter-the-concept-of-of-unhealthy_HwWwn5V_d-_thumb.jpg"> <img src="https://d1yn1kh78jj1rr.cloudfront.net/image/thumbnail/rsDd1iYKirpypk6f/graphicstock-abstract-purple-hookah-smoke-on-a-black-background-photographed-using-a-gel-filter-the-concept-of-of-unhealthy_HwWwn5V_d-_thumb.jpg" alt="">
          <input type="radio" v-model="image" value="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS76_KZC9xwpCBxotGOwbyea70ayLMUL3UhZN0bbdTWUyvaUwa"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS76_KZC9xwpCBxotGOwbyea70ayLMUL3UhZN0bbdTWUyvaUwa" alt="">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
      image: ""
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        image: this.image,
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>