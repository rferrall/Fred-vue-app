<template>
  <div class="conversations-index">


   <!-- Blog-->
        <!-- <section class="module p-0 bg-dark bg-gradient">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="timeline">
                  <ul>
                    <li v-for="conversation in conversations">
                      <div>
                        <article class="post">
                          <div class="post-preview"><a href="#"><img src="assets/images/blog/1.jpg" alt=""></a></div>
                          <div class="post-wrapper">
                            <div class="post-header">
                              <h2 class="post-title"><a href="blog-single.html">{{ conversation.partner.name }}</a></h2>
                              <ul class="post-meta h5">
                                <li>August 18, 2016</li>
                              </ul>
                            </div>
                            <div class="post-content">
                              <p>Map where your photos were taken and discover local points of interest. Map where your photos.</p>
                            </div>
                            <div class="post-more"><a href="#">Read More →</a></div>
                          </div>
                        </article>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> -->
        <!-- Blog end-->


    <!-- Blog-->
    <section class="module p-0 bg-dark bg-gradient" v-if="conversations.length > 0">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="timeline">
              <ul>
                <li v-for="conversation in conversations">
                  <div>
                    <router-link v-bind:to="'/conversations/' + conversation.id">
                      <article class="post">
                        <div class="post-preview"><img :src="conversation.partner.image" :alt="conversation.partner.name"></div>
                        <div class="post-wrapper">
                          <div class="post-header">
                            <h2 class="post-title"><a></a></h2>
                            <ul class="post-meta h5">
                              <li>started:{{relativeDate(conversation.created_at)}}</li>
                            </ul>
                          </div>
                          <div class="post-content">
                            <p>A Conversation with {{conversation.partner.name}}.</p>
                            <h4 class="post-footer">Send a Message</h4>
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
                        <div class="post-preview"><a href="#"><img src="https://images.unsplash.com/photo-1541890538547-6b1a7617ec7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="empty bench"></a></div>
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












    
  <!-- <span v-if="conversations.length > 0">
    
  
    <div v-for="conversation in conversations">
      <router-link v-bind:to="'/conversations/' + conversation.id">
        <h2>My Conversation with {{conversation.partner.name}}. . . </h2>
        <img :src="conversation.partner.image" :alt="conversation.partner.name">
      </router-link>
  
    
    </div>

  </span> -->
 
    
  



  





  </div>
</template>


<style>
  section.module.p-0.bg-dark.bg-gradient, article div div ul li, ul.post-meta.h5, h4.post-footer {
    color: #999;
  }

</style>



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
