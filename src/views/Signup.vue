<template>
  <div class="signup">
    <div class="container">


      <section class="module module-divider-bottom">
        <div class="container">
          <!---->
          <div class="row m-b-100">
            <div class="col-md-6">
              <form v-on:submit.prevent="submitSignup()">
                <h1>Sign Up</h1>
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
                <div><label>Pick an avatar:</label><br>
                  <input type="radio" v-model="image" value="https://images.pexels.com/photos/38012/pexels-photo-38012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"> <img src="https://images.pexels.com/photos/38012/pexels-photo-38012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""><br>
                  <input type="radio" v-model="image" value="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"> <img src="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""><br>
                  <input type="radio" v-model="image" value="https://images.pexels.com/photos/1083617/pexels-photo-1083617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"> <img src="https://images.pexels.com/photos/1083617/pexels-photo-1083617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                  <input type="radio" v-model="image" value="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"> <img src="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                </div>
                <input type="submit" class="btn btn-primary" value="Submit">
              </form>
            </div>
            <div class="col-md-6">
              <div class="special-heading">
                <h4>Welcome to Fred</h4>
              </div>
              <h3>We're glad you're here.</h3>
              <p>The truth is that we could all use a little help sometimes. Do you have a goal in mind? Need to take better care of yourself? Striving to make a career change? Travel?</p>
              <p> We want you to find a connection through Fred that will help you to stay on track, to stay motivated and to take those next steps. In turn, your help could be invaluable to someone else. We can all be each others' heroes.</p>
              <blockquote>
                <p>"We live in a world in which we need to share responsibility. It's easy to say, 'It's not my child, not my community, not my world, not my problem.' Then there are those who see the need and respond. I consider those people my heroes."</p>
                <city>- Mr. Fred Rogers</city>
              </blockquote>
            </div>
          </div>

          <!---->

        
        </div>
      </section>


      
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
    submitSignup: function() {
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