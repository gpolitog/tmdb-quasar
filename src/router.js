import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/
  return () => import(`@/app/pages/${component}.vue`)
}
import Films from '@/app/pages/Films/Films.vue'
import FilmDetail from '@/app/pages/FilmDetail/FilmDetail.vue'

export const POPULAR_FILMS_PATH = '/popular_films'
export const POPULAR_TV_SHOWS_PATH = '/popular_tv_shows'

const router = new VueRouter({
  routes:
  [
    { path: '/', redirect: POPULAR_FILMS_PATH },
    { path: POPULAR_FILMS_PATH, component: Films },
    { path: POPULAR_TV_SHOWS_PATH, component: Films },
    { path: '/film/:id', component: FilmDetail, title: 'film' },
    { path: '*', component: load('Error404') }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
