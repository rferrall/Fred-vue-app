<template>
  <div class="goals-new">
 <!-- needs a datepicker on the end_date -->

    <form v-on:submit.prevent="submit()">
        <h1>New Goal</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Goal Subject:</label> 
          <input type="text" class="form-control" v-model="subject">
        </div>
        <div class="form-group">
          <label>Goal:</label>
          <input type="text" class="form-control" v-model="goal">
        </div>
        <div class="form-group">
          <label>Frequency:</label>
          <input type="text" class="form-control" v-model="frequency">
        </div>
        <div class="form-group">
          <label>End Date</label>
          <input type="text" class="form-control"  v-model="end_date">
        </div>
        <div class="form-group">
          <label>Active</label>
          <input type="checkbox" class="form-control" v-model="active" v-bind:true-value="true" v-bind:false-value="false">
        </div>
        {{$parent.user}}
        <div v-if="$parent.user.active_goal && active">
          You may only have ONE active goal.
        </div>
    
        <input type="Submit" class="btn btn-primary" value="Submit">
      </form>
  










  
  <router-link to='/goals'>See All My Goals</router-link><br>
  
  </div>
  
</template> 



<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      subject: "",
      goal: "",
      frequency: "",
      end_date: "",
      active: "",
      errors: []
     

      
      
    };
  },

  methods: {
    submit: function() {
      var params = {
        subject: this.subject,
        goal: this.goal,
        frequency: this.frequency,
        end_date: this.end_date,
        active: this.active,
      };
      axios
        .post("/api/goals", params)
        .then(response => {
          console.log(response.data);
          if (response.data.active) {
            this.$parent.user.active_goal = response.data;
          }
          this.$router.push("/goals");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },

  }
};
</script>