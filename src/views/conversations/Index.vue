<template>
  <div class="conversations-index">
    

    <div v-for="conversation in conversations">
      <router-link v-bind:to="'/conversations/' + conversation.id">
        <h2>My Conversation with {{conversation.partner.name}}. . . </h2>
        <img :src="conversation.partner.image" :alt="conversation.partner.name">
      </router-link>
  
    
    </div>
    
  



  





  </div>
</template>



<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data: function() {
    return {
      conversations: [],
      user: {}

      
      
    };
  },
  created: function() {
    axios.get("/api/conversations").then(response => {
      console.log(response.data);
      this.conversations = response.data;
    });
  },
  methods: {}
};
</script>
