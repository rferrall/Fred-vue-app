<template>
  <div class="users-show">
    <h1>My Profile</h1>
    <h2>Hi {{ user.name }}. Welcome to the neighborhood!</h2>
    <p>{{ user.email }}</p>
    <img :src="user.image" :alt="user.name">
    

    <div v-if= user.active_goal>
      <h2>My Goal: {{user.active_goal.subject}}</h2>

      <h3>{{user.active_goal.goal}}</h3>
      <p>Contact me {{user.active_goal.frequency}} about it.</p>
      <p>End Date: {{user.active_goal.end_date}}</p>
    </div>
    <div v-else>
      
      <router-link to='/goals/new'>Start a Goal</router-link><br>
      
    </div>
    
    <!-- need to write logic for if goal doesn't exist yet
    <h3>Start a Goal!</h3> -->
  
  










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
import moment from 'moment';

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
    // .catch(error => {
    //   this.errors = error.response.data.errors;
    // });

  },
  methods: {
    destroyUser: function() {
      axios
        .delete("/api/users/" + this.user.id)
        .then(response => {
          console.log("Sorry to see you go.", response.data);
          this.$router.push("/");
        });
    },
    relativeDate: function(date) {
      return moment(date).format('L');
    },

  }
};
</script>