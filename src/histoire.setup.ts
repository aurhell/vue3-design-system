// import './histoire.css' // Import global CSS
import './assets/base.css'

import { createPinia } from 'pinia'
import { defineSetupVue3 } from 'histoire/client'

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  const pinia = createPinia()
  app.use(pinia) // Add Pinia store
})
