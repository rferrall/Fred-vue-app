<template>
  <div class="users-edit">

    <div class="container">


      <section class="module module-divider-bottom">
        <div class="container">
          <!---->
          <div class="row">
            <div class="col-md-12">
              <form justify-content-center v-on:submit.prevent="submit()">
                <h3> Hi {{ user.name }}!</h3>
                <h3>Want to make some updates?</h3>
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
                <div class="container">
                  <div class="row">
                    <div class="col-md-2">
                      <div class="special-heading">
                        <label>Pick an avatar:</label>
                      </div>
                    <label class="custom-control custom-radio">
                    <input type="radio" v-model="image" value="https://images.pexels.com/photos/38012/pexels-photo-38012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"> <img class="default-avatar" src="https://images.pexels.com/photos/38012/pexels-photo-38012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""><br>
                    <input type="radio" v-model="image" value="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"> <img class="default-avatar" src="https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""><br>
                    <input type="radio" v-model="image" value="https://images.pexels.com/photos/1083617/pexels-photo-1083617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"> <img class="default-avatar" src="https://images.pexels.com/photos/1083617/pexels-photo-1083617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
                    <input type="radio" v-model="image" value="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"> <img class="default-avatar" src="https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""> 
                    </label>
                    </div>
                  </div>
                 </div> 
                <input type="submit" class="btn btn-block btn-round btn-lg btn-brand" value="Submit">
              </form>
            </div>
            
          </div>

          <!---->

        
        </div>
      </section>


      
    </div>

    <section class="module bg-gradient">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <h3>If you haven't found your community on Fred and you want to delete your account - we understand.</h3> 
              <h4>We wish you luck on your journey.</h4>
              <div class="m-b-10"><a class="btn btn-circle btn-xs btn-gray" v-on:click="destroyUser()">Delete Account</a></div>
              
            </div>
          </div>
        </div>
      </div>

    </section>

  </div>
  
</template> -->

<style>
  .default-avatar {
    width: 150px;
    height: 100px;
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