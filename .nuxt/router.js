import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _12d6ac7c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _164c8487 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _18345d40 = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages__lang_index" */))
const _0f06fb0a = () => interopDefault(import('..\\pages\\_lang\\about.vue' /* webpackChunkName: "pages__lang_about" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _12d6ac7c,
      name: "about"
    }, {
      path: "/",
      component: _164c8487,
      name: "index"
    }, {
      path: "/:lang",
      component: _18345d40,
      name: "lang"
    }, {
      path: "/:lang/about",
      component: _0f06fb0a,
      name: "lang-about"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
