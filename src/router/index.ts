/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'

// Import LandingsPage explicitly
import LandingsPage from '@/pages/LandingsPage.vue'
import HomePage from '@/pages/HomePage.vue'
import DiscoverPage from '@/pages/DiscoverPage.vue'
import ReversePage from '@/pages/ReversePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts([
    ...routes,
    {
      path: '/',
      name: 'Landing',
      component: LandingsPage,
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage,
    },
    {
      path: '/discover',
      name: 'Discover',
      component: DiscoverPage,
    },
    {
      path: '/reverse',
      name: 'Reverse',
      component: ReversePage,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage,
    },
  ]),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
