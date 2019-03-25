<template>
  <div class="goals-new">
 <!-- needs a datepicker on the end_date -->




 <div class="container">



  <!-- Forms-->
  <section class="module module-divider-bottom">
    <div class="container">
      <form justify-content-center v-on:submit.prevent="submit()">
        <div class="row m-b-50">
          <div class="col-md-8 m-auto">
            <h2>Start a New Goal</h2>
            <div class="form-group row">
              <div class="special-heading">
                <h4>Goal Subject</h4>
              </div>
              <div class="col-10">
                <input class="form-control" type="text" placeholder="ex: workworkworkworkwork" v-model="subject">
              </div>
            </div>
            <div class="form-group">
              <div class="special-heading">
                <h4>Describe your goal:</h4>
              </div>
              <textarea class="form-control" id="exampleTextarea" rows="5" placeholder="ex: I've been unhappy at my job for awhile and I would like support as start applying and interviewing. Articles, peptalks...anything to help with this brutal process! I'm shooting for 3 applications a day." v-model="goal"></textarea>
            </div>


            <div class="form-group row">
              <!-- <div class="col-md-8 m-auto"> -->
                <div class="special-heading">
                  <h4>End Date: (somewhere between 1 month and 3 months is optimal)</h4>
                </div>
                <div class="col-8">
                  <input class="form-control" type="date" v-model="end_date">
                </div>
              <!-- </div> -->
            </div>
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-8 m-auto">
            <div class="special-heading">
              <h4>Frequency of Check-Ins:</h4>
            </div>
            <select class="form-control m-b-10" v-model="frequency">
              <option>twice a week</option>
              <option>weekly</option>
              <option>every two weeks</option>           
              <option>a few times a month</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-md-8 m-auto">
            <div class="special-heading">
              <h4>Active:(remember only ONE active goal at a time)</h4>
            </div>
            <div class="form-check">
              <label class="custom-control custom-checkbox">
                <input class="custom-control-input" type="checkbox" v-model="active" v-bind:true-value="true" v-bind:false-value="false"><span class="custom-control-indicator"></span><span class="custom-control-description">Active</span>
              </label>
            </div>
          </div>
        </div>
        <div v-if="$parent.user.active_goal && active">
          You may only have ONE active goal.
        </div>
        <input type="submit" class="btn btn-block btn-round btn-lg btn-brand" value="Submit">
      </form>
    </div>
  </section>
  <!-- Forms end-->

  <!-- Services-->
  <section class="module module-divider-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="icon-box icon-box-left">
            <div class="icon-box-icon"><span class="icon icon-basic-webpage-multiple"></span></div>
            <div class="icon-box-title">
              <h6>SMART GOALS</h6>
            </div>
            <div class="icon-box-content">
              <ul>
                <li>Specific</li>
                <li>Measurable</li>
                <li>Attainable</li>
                <li>Relevant</li>
                <li>Time Bound</li>
                <router-link to="https://www.mindtools.com/pages/article/newHTE_90.htm">more about setting SMART goals</router-link>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box icon-box-left">
            <div class="icon-box-icon"><span class="icon icon-basic-target"></span></div>
            <div class="icon-box-title">
              <h6>Get Engaged In Your Own Happiness</h6>
            </div>
            <div class="icon-box-content">
              <p>Goals give "us a sense of meaning and purpose, points us in the direction we want to go and gets us interested and engaged, all of which are good for our overall happiness."</p>
              <router-link to=https://www.actionforhappiness.org/take-action/set-your-goals-and-make-them-happen>more about the 'why' behind goals</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="icon-box icon-box-left">
            <div class="icon-box-icon"><span class="icon icon-basic-cards-diamonds"></span></div>
            <div class="icon-box-title">
              <h6>Career to Health to Wealth</h6>
            </div>
            <div class="icon-box-content">
              <p>There are many kinds of goals. No matter what type you pick, we are positive that finding a partner to keep you motivated and on-track will help make those steps towards your goal easier.</p>
              <router-link to="https://www.developgoodhabits.com/types-of-goals/">more about goal setting types</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Services end-->


  

  </div>

  
  
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