<template>
  <div class="goals-index">
    
    <div>
      <h3> <router-link to='/goals/new'>Create a New Goal</router-link> and make sure you set ONE goal to 'active'.<br> Once you do - we will match you up with a neighbor and the two of you will start your conversation.
        
      </h3>
    </div>






    <div v-for="goal in goals">
      <router-link v-bind:to="'/goals/' + goal.id">
        <h2>My Goal: {{goal.subject}}</h2>
      </router-link>
        <p>This is my active goal: {{goal.active}}</p>
        <h4>{{goal.goal}}</h4>
        <p>I want my partner to check in with me {{goal.frequency}}</p>
        <p>Stop the clock here: {{relativeDate(goal.end_date)}}</p>
    
    </div>
    


 
  

    <div v-if="$parent.user.active_goal">
      <h1>
        Ready to start a conversation about your active goal?
      </h1>
     
        <a v-for="error in errors">{{ error }}</a><br>
      
      <button v-on:click="createConversation()">Start</button><br>
    </div>




  





  </div>
</template>

<style>
  img {
    width: 300px;
  }
</style>

<script>
var axios = require("axios");
var moment = require("moment");

export default {

  data: function() {
    return {
      goals: [],
      user: {},
      errors: []

      
      
    };
  },
  created: function() {
    axios.get("/api/goals").then(response => {
      console.log(response.data);
      this.goals = response.data;
    });
  },
  methods: {
    createConversation: function() {
      axios
        .post("/api/conversations/")
        .then(response => {
          console.log("convo created", response.data);
          this.$router.push("/conversations");
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
    relativeDate: function(date) {
      return moment(date).format('L');
    }
  }
};
</script>
