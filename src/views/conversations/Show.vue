<template>
  <div class="conversations-show">
  
    
      
  
    
      <h2>
        Conversation between You and 
          <span v-if='$parent.user.id == conversation.recipient.id'>
            {{conversation.sender.name}}
          </span>
          <span v-else>
            {{conversation.recipient.name}}
          </span>
      </h2>
      <span v-if='$parent.user.id == conversation.recipient.id'>
        <img :src="conversation.sender.image" :alt="conversation.sender.name">
      </span>
      <span v-else>
        <img :src="conversation.recipient.image" :alt="conversation.recipient.name">
      </span>
      <span v-if="conversation.sender.goal && conversation.recipient.goal">
        <h2>
          They want to: 
            <span v-if='$parent.user.id == conversation.recipient.id'>
              {{conversation.sender.goal.goal}}
            </span>
            <span v-else>
              {{conversation.recipient.goal.goal}}
            </span>
        </h2>
        <h2> 
          Contact them:
            <span v-if='$parent.user.id == conversation.recipient.id'>
            {{conversation.sender.goal.frequency}}
            </span>
            <span v-else>
              {{conversation.recipient.goal.frequency}}
            </span> 
          until
            <span v-if='$parent.user.id == conversation.recipient.id'>
              {{conversation.sender.goal.end_date}}
            </span>
            <span v-else>
              {{relativeDate(conversation.recipient.goal.end_date)}}
            </span>
        </h2>
      </span>
      <span v-else>
        <h2> Continue the conversation. Check in.</h2>
      </span>

      <div v-for="message in conversation.messages">
        <p>Sent By {{message.user}}</p>
        <p>{{message.body}}</p>
      </div>
   
   
    

    



    <form v-on:submit.prevent="send()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Message:</label> 
          <input type="text" class="form-control" v-model="newMessageBody">
        </div>
       
        <input type="Submit" class="btn btn-primary" value="Send">
      </form>
  










  
  </div>
  
</template> -->



<script>
import axios from 'axios';
import moment from 'moment';

export default {
  data: function() {
    return {
      conversation: {},
      errors: [],
      recipient: {},
      sender: {},
      messages: [],
      newMessageBody: "",
     

      
      
    };
  },
  created: function() {
    axios.get("/api/conversations/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.conversation = response.data;
    });


  },
  methods: {
    send: function() {
      var params = {
        body: this.newMessageBody,
        conversation_id: this.conversation.id
        
      };
      axios
        .post("/api/messages/", params)
        .then(response => {
          console.log(response.data);
          this.conversation.messages.push(response.data);

        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    relativeDate: function(date) {
      return moment(date).format('L');
    },
  }
};
</script>