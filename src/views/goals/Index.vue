<template>
  <div class="goals-index">
    
   




    <div v-for="goal in goals">
      <router-link v-bind:to="'/goals/' + goal.id">
        <h2>My Goal: {{goal.subject}}</h2>
      </router-link>
        <p>This is my active goal: {{goal.active}}</p>
        <h4>{{goal.goal}}</h4>
        <p>I want my partner to check in with me {{goal.frequency}}</p>
        <p>Stop the clock here: {{goal.end_date}}</p>
    
    </div>
    


  <router-link v-bind:to="'/users/' + user.id">Back to my Profile</router-link><br>
  <router-link to='/goals/new'>Create a New Goal</router-link><br>



  





  </div>
</template>

<style>
  img {
    width: 300px;
  }
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      goals: [],
      user: {}

      
      
    };
  },
  created: function() {
    axios.get("/api/goals").then(response => {
      console.log(response.data);
      this.goals = response.data;
    });
  },
  methods: {}
};
</script>
