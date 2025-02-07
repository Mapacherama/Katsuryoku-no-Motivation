<template>
  <v-footer app class="footer-container">
    <div class="footer-content">
      <v-icon icon="mdi-heart" class="heart-icon" />
      <span class="footer-text">Made with love using <strong>Vuetify</strong> & <strong>Vue.js</strong></span>
      <v-icon icon="mdi-vuejs" class="vue-icon" />
    </div>
  </v-footer>
</template>

<script setup>
// No additional logic needed, pure presentation
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: var(--v-theme-surface);
  color: var(--v-theme-on-surface);
  font-size: 14px;
  font-weight: 500;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-text {
  opacity: 0.8;
}

.heart-icon {
  color: red;
}

.vue-icon {
  color: #42b883;
}
</style>