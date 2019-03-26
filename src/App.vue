<template>
  <div id="app">
    
    <!-- Header-->
    <header class="header header-center undefined">
      <div class="container-fluid">
        <!-- Logos-->
          <div class="inner-header"><a class="inner-brand" href="/">
              <!-- Or simple text-->
              Fred</a></div>
        <!-- Navigation-->
        <div class="inner-navigation collapse">
          <div class="inner-navigation-inline">
            <div class="inner-nav">
              <ul>
                <!-- Profile-->
                
                <li class="menu-item-has-children menu-item-has-mega-menu" v-if="isLoggedIn()"><router-link to="/users/me">Profile</router-link>
                  <div class="mega-menu">
                    <ul class="sub-menu mega-menu-row">
                      <!-- Column 1-->
                      <li class="menu-item-has-children mega-menu-col">
                        <ul class="sub-menu">
                          <li><router-link v-bind:to="'/users/me/edit'">Update Your Info</router-link></li>
                          <li><router-link to="/goals">Your Goals</router-link></li>
                          <router-link to="/conversations">Your Conversations</router-link>
                          <li><router-link to="/logout">Log Out</router-link></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="menu-item-has-children menu-item-has-mega-menu" v-else><a >Get Started</a>
                    <div class="mega-menu">
                      <ul class="sub-menu mega-menu-row">
                        <!-- Column 1-->
                        <li class="menu-item-has-children mega-menu-col">
                          <ul class="sub-menu">
                            <li><a data-toggle="modal" data-target="#modal-2">Log In</a></li>
                            <li><router-link to="/signup">Sign Up</router-link></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                
                <!-- Home end-->
                
                
    
                
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Mobile menu-->
        <div class="nav-toggle"><a href="#" data-toggle="collapse" data-target=".inner-navigation"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></a></div>
      </div>
    </header>
    <!-- Header end-->

    <!-- Wrapper-->
    <div class="wrapper"> 

      <router-view/>
    </div>
    <!-- Wrapper end-->


    <!-- Footer-->
    <footer class="footer">
      <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text-center"><span>If you are in a life threatening situation, do NOT use this site.<br>
                  Call the 24-hr National Suicide Prevention Lifeline at 1.800.273.8255.
                  Your call will be routed to the crisis center near you. <br>
                  If your issue is an emergency, call 911 or go to your nearest emergency room.<br>
                  If you are struggling with depression - <a href="https://nndc.org/resource-links/"> you have resources</a></span>
               </div>
            </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-center"><span class="copyright">© 2017 Core, All Rights Reserved. Design with love by <a href="http://2the.me/">2the.me</a></span></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer end-->

  </div>
</template>

<style>

</style>
<script>
import axios from 'axios';


export default {
  data: function() {
    return {
      user: {},
      
     

      
      
    };
  },
  created: function() {
    axios.get("/api/users/me").then(response => {
      console.log(response.data);
      this.user = response.data;
    });
    // .catch(error => {
    //   this.errors = error.response.data.errors;
    // });

  },
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem('jwt');
    },
  },
};
</script>
