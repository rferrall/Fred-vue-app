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
          <input type="date" class="form-control" v-model="goal.end_date">
        </div>
        <div class="form-group">
          <label>Active</label>
          <input type="checkbox" class="form-control" v-model="goal.active" v-bind:true-value="true" v-bind:false-value="false">
        </div>
       <!--  {{$parent.user}} -->
        <div v-if="goal.active && $parent.user.active_goal.id != this.goal.id  ">
          You may only have ONE active goal. If you make this goal active then {{$parent.user.active_goal.subject}} will end.
        </div>
        <div>
          
        </div>
        <input type="Submit" class="btn btn-primary" value="Submit Changes">
      </form>
  










  
  
  <h3> Done with this goal?
    <button v-on:click="destroyGoal()">Delete Goal</button>
  </h3>
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
          if (response.data.active) {
            this.$parent.user.active_goal = response.data;
          } else {
            delete this.$parent.user.active_goal;
          }
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