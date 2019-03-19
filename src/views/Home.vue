<template>
  <div class="home">

    <!-- Page Header-->
        <section class="module-header full-height parallax bg-dark bg-gradient">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="h1">Welcome to Fred. </h1>
                <h3 class="h1 m-b15">Because sometimes all we need is a little kindness and a helping hand to stay motivated towards our goals.</h3><br>
                <p> In the spirt of our favorite 'good neighbor' - Fred connects you with a stranger to keep each other motivated.</p>
                <p><a class="btn btn-lg btn-outline btn-circle btn-white"><router-link to="/signup">Sign Up</router-link></a>
                <a class="btn btn-lg btn-outline btn-circle btn-white" data-toggle="modal" data-target="#modal-2">Log In</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <!-- Page Header end-->
        <!-- Testimonials-->
        <section class="module parallax bg-dark bg-dark-30">
          <div class="container">
            <div class="row">
              <div class="col-md-6 m-auto">
                <div class="tms-slides owl-carousel">
                  <div class="tms-item">
                    <div class="tms-icons">
                      <h2><span class="fa fa-comment-o"></span></h2>
                    </div>
                    <div class="tms-content">
                      <blockquote>
                        <p>“There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.”</p>
                      </blockquote>
                    </div>
                    <div class="tms-author"><span>Mr.Fred Rogers</span></div>
                  </div>
                  <div class="tms-item">
                    <div class="tms-icons">
                      <h2><span class="fa fa-comment-o"></span></h2>
                    </div>
                    <div class="tms-content">
                      <blockquote>
                        <p>“Anything that’s human is mentionable, and anything that is mentionable can be more manageable. When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary. The people we trust with that important talk can help us know that we are not alone.”</p>
                      </blockquote>
                    </div>
                    <div class="tms-author"><span>Mr.Fred Rogers</span></div>
                  </div>
                  <div class="tms-item">
                    <div class="tms-icons">
                      <h2><span class="fa fa-comment-o"></span></h2>
                    </div>
                    <div class="tms-content">
                      <blockquote>
                        <p>“I hope you’re proud of yourself for the times you’ve said ‘yes,’ when all it meant was extra work for you and was seemingly helpful only to somebody else.”</p>
                      </blockquote>
                    </div>
                    <div class="tms-author"><span>Mr.Fred Rogers</span></div>
                  </div>
                  <div class="tms-item">
                    <div class="tms-icons">
                      <h2><span class="fa fa-comment-o"></span></h2>
                    </div>
                    <div class="tms-content">
                      <blockquote>
                        <p>“If you could only sense how important you are to the lives of those you meet; how important you can be to the people you may never even dream of. There is something of yourself that you leave at every meeting with another person”</p>
                      </blockquote>
                    </div>
                    <div class="tms-author"><span>Mr.Fred Rogers</span></div>
                  </div>
                  <div class="tms-item">
                    <div class="tms-icons">
                      <h2><span class="fa fa-comment-o"></span></h2>
                    </div>
                    <div class="tms-content">
                      <blockquote>
                        <p>“Everyone longs to be loved. And the greatest thing we can do is to let people know that they are loved and capable of loving.”</p>
                      </blockquote>
                    </div>
                    <div class="tms-author"><span>Mr.Fred Rogers</span></div>
                  </div>
                  <div class="tms-item">
                    <div class="">
                      <h2><span class=""></span></h2>
                    </div>
                    <div class="tms-content">
                      <img alt="Mr. Rogers" src="https://media1.popsugar-assets.com/files/thumbor/-jQOxkw9aBhWmAOca0PCyVharhQ/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/03/20/670/n/24155406/tmp_7En3gd_d2302add74702f6e_TSDMIRO_EC002_1_.jpg">
                    </div>
                    <div class="tms-author"><span>Mr. Fred Rogers</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Testimonials end--> 
        <!-- Login Modal--> 
  <div class="modal fade" id="modal-2">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Log In</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
        </div>
        <div class="modal-body">
          <form v-on:submit.prevent="submitLogin()">
            
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
          </form>

          
        </div>

      </div>
    </div>
  </div>  
  <!-- Login Modal end-->  
    
  </div>
</template>
<style>
img {
  border-radius: 10%;
  
}
  
</style>

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
    },
  }
};
</script>