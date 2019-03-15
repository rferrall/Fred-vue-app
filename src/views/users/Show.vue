<template>
  <div class="users-show">

    <div v-if="!user.active_goal">
      <h1>Your Active Goal has ended.</h1>
      <h2>How'd you do? </h2>
      <h2>Ready to start a new goal?</h2>
    </div>

    <div v-else>
      <h3>Clicking on <router-link to='/conversations'>My Conversations</router-link>  (here or in the Navigation) will take you to all of your conversations.</h3>
      <h3>Clicking on <router-link to='/goals'>My Goals</router-link>  (here or in the Navigation) will take you to all of your goals.</h3>
    </div>
    <h1>My Profile</h1>
    <h2> Welcome to the neighborhood {{ user.name }}!</h2>
    <p>{{ user.email }}</p>
    <router-link v-bind:to="'/users/' + user.id + '/edit'">Edit My Info</router-link><br>
    <img :src="user.image" :alt="user.name">
    

    <div v-if="user.active_goal">
      <router-link v-bind:to="'/goals/' + $parent.user.active_goal.id"><h2>My Goal: {{user.active_goal.subject}}</h2></router-link>


      <h3> I want to: {{user.active_goal.goal}}</h3>
      <p>Contact me {{user.active_goal.frequency}} about it.</p>
      <p>Until: {{relativeDate(user.active_goal.end_date)}}</p>
    </div>
    <div v-else>
      <h2> To Start</h2>
      <router-link to='/goals/new'>Create a Goal</router-link><br>
      <router-link to='/goals'>Activate a Goal</router-link>
      
    </div>
    
 
  
  






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
    
    relativeDate: function(date) {
      return moment(date).format('L');
    },
    
    // passedDate: function(endDate) {
    //   var today = Date.now();
    //   var goalEnd = new Date(endDate);
    //   if (today > goalEnd) {
    //     return true;
    //   }

    // },

    // 

  }
};
</script>