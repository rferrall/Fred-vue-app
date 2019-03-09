<template>
  <div id="app">
    <div id="nav">
      
      <span v-if= "isLoggedIn()">
      <router-link to="/users/me">Profile</router-link> |
      <router-link to="/conversations">My Conversations</router-link> |
      <router-link to="/goals">My Goals</router-link> |
      <router-link to="/logout">Log Out</router-link> |
      </span>
      <span v-else>
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Sign Up</router-link> |
      <router-link to="/login">Log In</router-link> |
      </span>



    </div>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
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
