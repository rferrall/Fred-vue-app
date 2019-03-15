<template>
  <div class="conversations-index">
    
  <span v-if="conversations.length > 0">
    
  
    <div v-for="conversation in conversations">
      <router-link v-bind:to="'/conversations/' + conversation.id">
        <h2>My Conversation with {{conversation.partner.name}}. . . </h2>
        <img :src="conversation.partner.image" :alt="conversation.partner.name">
      </router-link>
  
    
    </div>

  </span>
  <span v-else>
    <h3>
      Set up a goal on the Goals tab to get started with a new conversation.
    </h3>
    <h3>
      Some things to think about as you're setting up your goal...
    </h3>
    <img src="https://i.pinimg.com/originals/01/9f/c8/019fc8eae63df340baa3ffa99d2bce09.png">


  </span>
    
  



  





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
