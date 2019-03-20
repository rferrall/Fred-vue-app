<template>
  <div class="conversations-index">


   <!--  <span v-if="conversations.length > 0">
      
    
      <div v-for="conversation in conversations">
        <router-link v-bind:to="'/conversations/' + conversation.id">
          <h2>My Conversation with {{conversation.partner.name}}. . . </h2>
          <img :src="conversation.partner.image" :alt="conversation.partner.name">
        </router-link>
    
      
      </div>

    </span> -->

    <!-- Blog-->
    <section class="module p-0" v-if="conversations.length > 0">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="timeline">
              <ul>
                <li>
                  <div v-for="conversation in conversations">
                    <router-link v-bind:to="'/conversations/' + conversation.id">
                      <article class="post">
                        <div class="post-preview"><img :src="conversation.partner.image" :alt="conversation.partner.name"></div>
                        <div class="post-wrapper">
                          <div class="post-header">
                            <h2 class="post-title"><a></a></h2>
                            <ul class="post-meta h5">
                              <li>{{relativeDate(conversation.created_at)}}</li>
                            </ul>
                          </div>
                          <div class="post-content">
                            <p>My Conversation with {{conversation.partner.name}} . . . </p>
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
                      <div class="post-preview"><a href="#"><img src="https://images.unsplash.com/photo-1541890538547-6b1a7617ec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="empty bench"></a></div>
                      <div class="post-wrapper">
                        <div class="post-header">
                          <h2 class="post-title"><a>Goal #1</a></h2>
                          <ul class="post-meta h5">
                            <li>Today</li>
                          </ul>
                        </div>
                        <div class="post-content">
                          <p>Set up a goal on the Goals tab to get started with a new conversation.</p>
                        </div>
                        <div class="post-more"><router-link to='/goals'>My Goals→</router-link></div>
                      </div>
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

    <!-- Pagination-->
    <section class="module-sm module-gray">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <nav>
              <ul class="pagination h4">
                <li class="page-item next"><a class="page-link" href="#"><span class="arrows arrows-arrows-slim-right"></span></a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">5</a></li>
                <li class="page-item prev"><a class="page-link" href="#"><span class="arrows arrows-arrows-slim-left"></span></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <!-- Pagination end-->














    
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
  methods: {
    relativeDate: function(date) {
      return moment(date).format('L');
    }
  }
};
</script>
