<template>
  <div class="goals-index">


    <!-- Page Header-->
    <section class="module-page-title bg-light">
      <div class="container">
        <div class="row-page-title">
          <router-link to='/goals/new'>
          <div class="row">
             <div class="col-md-1 text-center icon-box-icon">
                  <span class="icon icon-basic-target"></span> 
            </div>
            <div class="col-md-11 m-t-10">
              <a>Create a new goal <router-link to='/goals/new'>HERE</router-link> and make sure you set ONE goal to 'active'. Once you do - we will match you up with a neighbor and the two of you will start your conversation.</a>
            </div>
          </div>
          </router-link>
        </div>
      </div>
    </section>
    <!-- Page Header end-->
    






    <!-- <div v-for="goal in goals">
      <router-link v-bind:to="'/goals/' + goal.id">
        <h2>My Goal: {{goal.subject}}</h2>
      </router-link>
        <p>This is my active goal: {{goal.active}}</p>
        <h4>{{goal.goal}}</h4>
        <p>I want my partner to check in with me {{goal.frequency}}</p>
        <p>Stop the clock here: {{relativeDate(goal.end_date)}}</p>
    
    </div> -->
    


 
  

    <!-- <div v-if="$parent.user.active_goal">
      <h1>
        Ready to start a conversation about your active goal?
      </h1>
     
        <a v-for="error in errors">{{ error }}</a><br>
      
      <button v-on:click="createConversation()">Start</button><br>
    </div> -->


<!-- Blog-->
    <section class="module p-0 bg-dark bg-gradient" v-if="goals.length > 0">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="timeline">
              <ul>
                <li v-for="goal in goals">
                  <div>
                    <router-link v-bind:to="'/goals/' + goal.id">
                      <article class="post">
                        <div class="post-preview"><img src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"></div>
                        <div class="post-wrapper">
                          <div class="post-header">
                            <h2 class="post-title"><a>{{goal.subject}}</a></h2>
                            <ul class="post-meta h5">
                              <li>end date:{{relativeDate(goal.end_date)}}</li>
                              <li>active:{{(goal.active)}}</li>
                            </ul>
                          </div>
                          <div class="post-content">
                            <p>{{goal.goal}}.</p>
                            <h4 class="post-footer">Update your Goal</h4>
                          </div>
                        </div>
                      </article>
                    </router-link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="module p-0" v-else>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="timeline">
              <ul>
                <li>
                  <div>
                    <article class="post">
                      <router-link to='/goals/new'>
                        <div class="post-preview"><a><img src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="sign you've been waiting for"></a></div>
                        <div class="post-wrapper">
                          <div class="post-header">
                            <h2 class="post-title"><a>Goal #1</a></h2>
                            <ul class="post-meta h5">
                              <li>Today</li>
                            </ul>
                          </div>
                          <div class="post-content">
                            <p>Set up a goal HERE to get started, then we will match you, and start a new conversation.</p>
                          </div>
                          <div class="post-more"><router-link to='/goals'>My Goals→</router-link></div>
                        </div>
                      </router-link>
                    </article>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog end-->



    <section class="module-sm module-gray">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <div v-if="$parent.user.active_goal">
              <h1>
                Ready to start a conversation about your active goal?
              </h1>
             
                <a v-for="error in errors">{{ error }}</a>
              
              <div class="m-b-10"><button class="btn btn-circle btn-brand" v-on:click="createConversation()">Start</button></div><br>
            </div>
            
          </div>
        </div>
      </div>
    </section>



  <!-- About Setting Great Goals-->
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
  <!-- About Setting Great Goals end-->


  





  </div>
</template>

<style>

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
          this.$router.push("/conversations/" + response.data.id);
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
