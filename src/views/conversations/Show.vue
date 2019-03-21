<template>
  <div class="conversations-show">

    <!-- Page Header-->
    <section class="module-page-title bg-dark bg-gradient">
      <div class="container">
        <div class="row-page-title">
          <div class="page-title-captions">
            <h1 class="h5">my conversation with 
              <span v-if='$parent.user.id == conversation.recipient.id'>
                {{conversation.sender.name}}
              </span>
              <span v-else>
                {{conversation.recipient.name}}
              </span>
            </h1>
          </div>
          <div class="page-title-secondary">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a>started {{relativeDate(conversation.created_at)}} </a></li>
              <li class="breadcrumb-item"><router-link to="/conversations">return to all conversations</router-link></li>
              
            </ol>
          </div>
        </div>
      </div>
    </section>
    <!-- Page Header end-->
  



    <!-- Blog-->
    <section class="module">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <!-- Post-->
            <article class="post">
              <div class="post-preview">
                <span v-if='$parent.user.id == conversation.recipient.id'>
                  <img :src="conversation.sender.image" :alt="conversation.sender.name">
                </span>
                <span v-else>
                  <img :src="conversation.recipient.image" :alt="conversation.recipient.name">
                </span>
              </div>
              <div class="post-header">
                <h1 class="post-title">Introducing 
                  <span v-if='$parent.user.id == conversation.recipient.id'>
                    {{conversation.sender.name}}
                  </span>
                  <span v-else>
                    {{conversation.recipient.name}}
                  </span>
                </h1>
              </div>
              <div class="post-content">
                <p><span v-if='$parent.user.id == conversation.recipient.id'>
                    {{conversation.sender.name}}
                  </span>
                  <span v-else>
                    {{conversation.recipient.name}}
                  </span>
                  's goal:
                  <span v-if="conversation.sender.goal && conversation.recipient.goal">
                    <p>
                        <span v-if='$parent.user.id == conversation.recipient.id'>
                          {{conversation.sender.goal.goal}}
                        </span>
                        <span v-else>
                          {{conversation.recipient.goal.goal}}
                        </span>
                    </p><br>
                    <p> 
                      Wants contact
                        <span v-if='$parent.user.id == conversation.recipient.id'>
                        {{conversation.sender.goal.frequency}}
                        </span>
                        <span v-else>
                          {{conversation.recipient.goal.frequency}}
                        </span> 
                      until
                        <span v-if='$parent.user.id == conversation.recipient.id'>
                          {{relativeDate(conversation.sender.goal.end_date)}}
                        </span>
                        <span v-else>
                          {{relativeDate(conversation.recipient.goal.end_date)}}
                        </span>
                    </p>
                  </span>
                  <span v-else>
                    <h2> Continue the conversation. Check in.</h2>
                  </span>


                </p>
              </div>
              <div class="post-footer">
                <div class="post-tags"><a>
                  <span v-if='$parent.user.id == conversation.recipient.id'>
                    <a>{{conversation.sender.goal.subject}}</a>
                  </span>
                  <span v-else>
                    <a>{{conversation.recipient.goal.subject}}</a>
                  </span>
                </a></div>
              </div>
            </article>
            <!-- Post end-->

            <!-- Comments area-->
            <div class="comments-area">
              <h5 class="comments-title"></h5>
              <div class="comment-list">
                <!-- Comment-->
                <div class="comment" v-for="message in conversation.messages">
                  <div class="comment-author" v-if='message.user_id == conversation.recipient.id'>
                      <img :src="conversation.recipient.image" :alt="conversation.recipient.name">
                    </div>
                    <div class="comment-author" v-else>
                      <img :src="conversation.sender.image" :alt="conversation.sender.name">
                    </div>
                  <div class="comment-body">
                    <div class="comment-meta">
                      <div class="comment-meta-author h5"><a>{{message.user}}</a></div>
                      <div class="comment-meta-date"><a>
                          {{relativeDate(message.created_at)}}</a></div>
                    </div>
                    <div class="comment-content">
                      <p>{{message.body}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="comment-respond">
                <h5 class="comment-reply-title">Send a message!</h5>
                <form class="comment-form row" v-on:submit.prevent="send()">
                  <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>
                  <div class="form-group col-sm-12">
                    <textarea class="form-control" rows="8" placeholder="Message" v-model="newMessageBody"></textarea>
                  </div>
                  <div class="form-submit col-sm-12">
                    <input class="btn btn-block btn-lg btn-round btn-brand" type="submit" value="Send">
                  </div>
                </form>
              </div>
            </div>
            <!-- Comments area end-->
          </div>
        </div>
      </div>
    </section>
    <!-- Blog end-->
    
      
  






  
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