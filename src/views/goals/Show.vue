<template>
  <div class="goals-show">
  
    


    <!-- needs a datepicker on the end_date -->



    <form v-on:submit.prevent="submit()">
        <h1>Edit This Goal</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Goal Subject:</label> 
          <input type="text" class="form-control" v-model="goal.subject">
        </div>
        <div class="form-group">
          <label>Goal:</label>
          <input type="text" class="form-control" v-model="goal.goal">
        </div>
        <div class="form-group">
          <label>Frequency:</label>
          <input type="text" class="form-control" v-model="goal.frequency">
        </div>
        <div class="form-group">
          <label>End Date</label>
          <input type="text" class="form-control" v-model="goal.end_date">
        </div>
        <div class="form-group">
          <label>Active</label>
          <input type="text" class="form-control" v-model="goal.active">
        </div>
        <input type="Submit" class="btn btn-primary" value="Submit Changes">
      </form>
  










  
  <router-link to='/goals'>Back to Goals</router-link><br>
  <button v-on:click="destroyGoal()">Delete Goal</button><br>
  </div>
  
</template> -->



<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      goal: {},
      errors: [],
     

      
      
    };
  },
  created: function() {
    axios.get("/api/goals/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.goal = response.data;
    });
    // .catch(error => {
    //   this.errors = error.response.data.errors;
    // });

  },
  methods: {
    submit: function() {
      var params = {
        subject: this.goal.subject,
        goal: this.goal.goal,
        frequency: this.goal.frequency,
        end_date: this.goal.end_date,
        active: this.goal.active,
      };
      axios
        .patch("/api/goals/" + this.goal.id, params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/goals");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
      destroyGoal: function() {
      axios
        .delete("/api/goals/" + this.goal.id)
        .then(response => {
          console.log("Making room for new goals.", response.data);
          this.$router.push("/goals");
        });
    }

  }
};
</script>