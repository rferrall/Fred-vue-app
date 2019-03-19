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
