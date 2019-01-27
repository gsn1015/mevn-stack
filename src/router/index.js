import Vue from 'vue'
import Router from 'vue-router'
import ShowBook from '@/components/ShowBook'

import movieList from '@/components/movieList'
import signIn from '@/components/signIn';
import signUp from '@/components/signUp';
import index from '@/components/index';
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'BookList',
    //   component: BookList
    // },
    {
      path: '/show-book/:id',
      name: 'ShowBook',
      component: ShowBook
    },
    {
      path: '/',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/movies',
      name: 'movieList',
      component: movieList
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
  ]
})
