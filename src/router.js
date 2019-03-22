import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from "./views/Logout.vue";
import UsersShow from "./views/users/Show.vue";
import UsersEdit from "./views/users/Edit.vue";
import GoalsIndex from "./views/goals/Index.vue";
import GoalsShow from "./views/goals/Show.vue";
import GoalsNew from "./views/goals/New.vue";
import ConversationsIndex from "./views/conversations/Index.vue";
import ConversationsShow from "./views/conversations/Show.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/users/me',
      name: 'users-show',
      component: UsersShow
    },
    {
      path: '/users/me/edit',
      name: 'users-edit',
      component: UsersEdit
    },
    {
      path: '/goals',
      name: 'goals-index',
      component: GoalsIndex
    },
    {
      path: '/goals/new',
      name: 'goals-new',
      component: GoalsNew
    },
    {
      path: '/goals/:id',
      name: 'goals-show',
      component: GoalsShow
    },
    {
      path: '/conversations',
      name: 'conversations-index',
      component: ConversationsIndex
    },
    {
      path: '/conversations/:id',
      name: 'conversations-show',
      component: ConversationsShow
    }
    
  ]
});
