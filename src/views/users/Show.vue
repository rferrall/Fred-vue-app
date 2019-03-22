<template>

  <div class="users-show">
    <section class="module bg-gradient" v-if="!user.active_goal">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <h3>Oh no - you're missing an active goal.</h3>
              <h4>Did your goal end? How'd you do?</h4>
              <h4> Ready to start a new goal?</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="module bg-dark bg-gradient" v-else>
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h3 >How are you doing today? Do a self check-in...</h3>
            <button class="btn btn-circle btn-brand" type="button" data-toggle="modal" data-target="#modal-check-in">Check In</button>
          </div>
        </div>
      </div>
    </section>




          <!-- Login Modal--> 
    <div class="modal fade" id="modal-check-in">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">You Matter. Let's check in.</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
          </div>

          <div class="form-group row">
            <div class="col-md-8 m-auto">
              <div class="special-heading">
                <h4>Are you good and hydrated?</h4>
              </div>
              <div class="form-check">
                <label class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" ><span class="custom-control-indicator"></span><span class="custom-control-description">yep. on my way to 8 glasses.</span>
                </label>
                <label class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" ><span class="custom-control-indicator"></span><span class="custom-control-description">not really. chug-a-lug.</span>
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-8 m-auto">
              <div class="special-heading">
                <h4>Have you eaten a healthy variety and amount of food today?</h4>
              </div>
              <div class="form-check">
                <label class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" ><span class="custom-control-indicator"></span><span class="custom-control-description">yes. plenty of fruits and vegetables and my favorite proteins.</span>
                </label>
                <label class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" ><span class="custom-control-indicator"></span><span class="custom-control-description">not so much. I can do better.</span>
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-8 m-auto">
              <div class="special-heading">
                <h4>Have you moved, grooved, or hit the ground running today?</h4>
              </div>
              <div class="form-check">
                <label class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" ><span class="custom-control-indicator"></span><span class="custom-control-description">I put in some exercise today.</span>
                </label>
                <label class="custom-control custom-checkbox">
                  <input class="custom-control-input" type="checkbox" ><span class="custom-control-indicator"></span><span class="custom-control-description">I'll go do that right now - away from tech and screens</span>
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-8 m-auto">
              <div class="special-heading">
                <h4>Results</h4>
              </div>
              <div class="form-check">
                <p>Whatever your answers. Give yourself a pat on the back for showing up and taking steps to take care of yourself. The world needs all of us. Now go grab another glass of water and a walk outside if you need it. Your partner will be here when you get back. Have a wonderful day.</p>
              </div>
            </div>
          </div>



          

        </div>
      </div>
    </div>  
    <!-- Login Modal end-->  
      


    <!-- Page Header-->
      
        <section class="module-header full-height bg-dark bg-gradient">
          <div class="container">
            <div class="row">
              <div class="row m-b-200">
                <div class="col-md-6">
                  <p>
                    <img :src="user.image" :alt="user.name" width="500" height="281">
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="special-heading">
                    <h1>Welcome to the neighborhood {{ user.name }}!</h1>
                    <p>{{ user.email }}</p>
                  </div>
                 
                  <!-- <p>{{ user.email }}</p> -->

                  <div v-if="user.active_goal">
                    
                      <h2 class="h1"><router-link v-bind:to="'/goals/' + $parent.user.active_goal.id"><h2>My Goal: {{user.active_goal.subject}}</h2></router-link></h2>
                    
                    <div class="special-heading">
                      <h3> {{user.active_goal.goal}}</h3>
                    </div>

                    <h3>Contact me: {{user.active_goal.frequency}}</h3><br>
                    <h3>Until: {{relativeDate(user.active_goal.end_date)}}</h3>  
                  </div> 

                  <div v-else>
                    <h2> Let's get started with a goal:</h2>
                    <p><router-link to='/goals/new'>Click to Create a Goal</router-link></p><br>
                    <p><router-link to='/goals'>Click to Activate a Goal</router-link></p>
                  </div>                 
                </div>
              </div>
            </div>
          </div>
        </section>
      
        <!-- Page Header end-->

        <!-- Services-->
        <section class="module module-divider-bottom">
          <div class="container">
            <div class="row">
              <div class="col-md-4"><router-link v-bind:to="'/users/' + user.id + '/edit'">
                <div class="icon-box icon-box-left">
                  <div class="icon-box-icon"><span class="icon icon-basic-heart"></span></div>
                  <div class="icon-box-title">
                    <h6>Update Your Information</h6>
                  </div>
                  <div class="icon-box-content">
                    <p>Add a little personality if you'd like. It's your first impression for your partner when we match you with another member.</p>
                    <p>Select a new avatar photo. Update your contact email, or change up your name.</p>
                  </div>
                </div>
                </router-link>
              </div>
              <div class="col-md-4"><router-link to='/goals'>
                <div class="icon-box icon-box-left">
                  <div class="icon-box-icon"><span class="icon icon-basic-target"></span></div>
                  <div class="icon-box-title">
                    <h6>See and Set your goals</h6>
                  </div>
                  <div class="icon-box-content">
                    <p>One goal at a time. Set a goal and communicate with a new friend to help keep you on track and making progress. When one goal ends - start a new one and make a new friend. Click here to see all your goals, or activate a new goal.</p>
                  </div>
                </div>
                </router-link>
              </div>
              <div class="col-md-4"><router-link to="/conversations">
                <div class="icon-box icon-box-left">
                  <div class="icon-box-icon"><span class="icon icon-basic-paperplane"></span></div>
                  <div class="icon-box-title">
                    <h6>Conversations all in one place</h6>
                  </div>
                  <div class="icon-box-content">
                    <p>Keep motivated and offer motivation in one-on-one conversations. Get a new conversation with every new goal - but remember, only one goal at a time. Click to see your conversations.</p>
                  </div>
                </div>
                </router-link>
              </div>
            </div>
          </div>
        </section>

        <!-- Services end-->


  </div>
  
</template> -->

<style>

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