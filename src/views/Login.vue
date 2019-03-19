<template>
  <div class="login">
    <div class="container">

  
    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-md-4 m-auto">
            <div class="up-logo">
              <ul>
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
            </div>
            <div class="up-form">
              <h1>Log In</h1>
              <form v-on:submit.prevent="submitLogin()">
                <div class="form-group">
                  <input class="form-control form-control-lg" type="email" placeholder="Email" v-model="email">
                </div>
                <div class="form-group">
                  <input class="form-control form-control-lg" type="password" placeholder="Password" v-model="password">
                </div>
                <div class="form-group">
                  <button class="btn btn-block btn-lg btn-round btn-brand" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>






     <!--  <form v-on:submit.prevent="submitLogin()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submitLogin: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/users/me");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>