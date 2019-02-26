<template>
  <div class="users-show">
    <h1>{{ user.name }}</h1>
    <p>{{ user.email }}</p>
    <img :src="user.image" :alt="user.name">
    


        <h2>My Goal: {{user.active_goal.subject}}</h2>
  
        <h3>{{user.active_goal.goal}}</h3>
        <p>Contact me {{user.active_goal.frequency}} about it.</p>
        <p>End Date: {{user.active_goal.end_date}}</p>
  










  <router-link v-bind:to="'/users/' + user.id + '/edit'">Edit My Info</router-link><br>
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
     

      
      
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
  //   submit: function() {
  //     var params = {
  //       name: this.user.name,
  //       email: this.user.email,
  //       image: this.user.image
  //     };
  //     axios
  //       .patch("/api/users/" + this.post.id, params)
  //       .then(response => {
  //         console.log(response.data);
  //         $('#exampleModal').modal('hide');
  //       })
  //       .catch(error => {
  //         this.errors = error.response.data.errors;
  //       });
  //   },
      destroyUser: function() {
      axios
        .delete("/api/users/" + this.user.id)
        .then(response => {
          console.log("Sorry to see you go.", response.data);
          this.$router.push("/");
        });
    }

  }
};
</script>