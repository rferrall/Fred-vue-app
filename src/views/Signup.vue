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
                  <input type="text" class="form-control" placeholder="ex: Fred Rogers or Superman" v-model="name">
                </div>
                <div class="form-group">
                  <label>Email:</label>
                  <input type="email" class="form-control" placeholder="ex: superman@gmail.com" v-model="email">
                </div>
                <div class="form-group">
                  <label>Telephone: (to receive text notifications that you have a new message - will not be shared or public)</label>
                    <input class="form-control" type="tel" placeholder="ex: +17635556123" v-model="phone_number">
                </div>
                <div class="form-group">
                  <label>Password:</label>
                  <input type="password" placeholder="ex: **********" class="form-control" v-model="password">
                </div>
                <div class="form-group">
                  <label>Password confirmation:</label>
                  <input type="password" class="form-control" v-model="passwordConfirmation">
                </div>
                <div class="form-group">
                <label>Pick an avatar:</label>
                  <div class="row">
                    <div class="col-sm-3 col-xs-4">
                      <input type="radio" v-model="image" value="https://images.pexels.com/photos/38012/pexels-photo-38012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"> 
                      <img class="default-avatar" src="https://images.pexels.com/photos/38012/pexels-photo-38012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                    </div>
                    <div class="col-sm-3 col-xs-4">
                      <input type="radio" v-model="image" value="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"> <img class="default-avatar" src="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                    </div>
                      
                    <div class="col-sm-3 col-xs-4">
                      <input type="radio" v-model="image" value="https://images.pexels.com/photos/1083617/pexels-photo-1083617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"> <img class="default-avatar" src="https://images.pexels.com/photos/1083617/pexels-photo-1083617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                    </div>
                      
                    <div class="col-sm-3 col-xs-4">
                      <input type="radio" v-model="image" value="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"> <img class="default-avatar" src="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""> 
                    </div>
                      
                    <div class="col-sm-3 col-xs-4">
                      <input type="radio" v-model="image" value="https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"> <img class="default-avatar" src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="sunflowers">
                    </div>
                      
                    <div class="col-sm-3 col-xs-4">
                      <input type="radio" v-model="image" value="https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"> <img class="default-avatar" src="https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="balloons in the sky">
                    </div>
                    
                    <div class="col-sm-3 col-xs-4">
                      <input type="radio" v-model="image" value="https://images.unsplash.com/photo-1472698938026-79bed881e5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"> <img class="default-avatar" src="https://images.unsplash.com/photo-1472698938026-79bed881e5b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="dog in a party hat">
                    </div>
                      
                    <div class="col-sm-3 col-xs-4">
                      <input type="radio" v-model="image" value="https://images.unsplash.com/photo-1454438992604-4a8e59768a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"> <img class="default-avatar" src="https://images.unsplash.com/photo-1454438992604-4a8e59768a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="tea/coffee cup">
                    </div>

                  </div>
                </div>
                <input type="submit" class="btn btn-block btn-lg btn-round btn-brand" value="Submit">
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
<style>
.default-avatar {
    width: 150px;
    height: 100px;
  }

  .col-sm-3 {
    padding: 2px;
  }
</style>
<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      phone_number: "",
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
        phone_number: this.phone_number,
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