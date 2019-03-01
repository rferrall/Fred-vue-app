<template>
  <div class="goals-index">
    
   <div>
     <h1>
       Ready to start a conversation?
     </h1>
     <button v-on:click="createConversation()">Start</button><br>
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
var moment = require("moment");

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
  methods: {
    createConversation: function() {
      axios
        .post("/api/conversations/")
        .then(response => {
          console.log("convo created", response.data);
          // this.$router.push("/");
        });
    },
    relativeDate: function(date) {
      return moment(date).format('L');
    }
  }
};
</script>
