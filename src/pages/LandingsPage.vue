<template>
    <div class="landing-container">      
      <p class="landing-description">
        A MotivationHub that brings together all sources of inspiration—fueling your fire, illuminating your ideas, and driving you toward greatness.
      </p>
      
      <div class="cards-container">
        <div class="card-item" v-for="(item, index) in items" :key="index">
          <v-card class="card">
            <v-icon :icon="item.icon" class="card-icon" />
            <v-card-text>
              <h2 class="card-title">{{ item.title }}</h2>
              <p class="card-text">{{ item.description }}</p>
            </v-card-text>
          </v-card>
        </div>
      </div>
      
      <v-btn class="cta-button" to="/home">Start Your Journey</v-btn>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const items = ref([
    {
      title: 'Fuel the Fire',
      description: 'Unleash inner energy with powerful stories and relentless drive.',
      icon: 'mdi-fire',
    },
    {
      title: 'Bright Ideas',
      description: 'Find insights from leaders, thinkers, and creators worldwide.',
      icon: 'mdi-lightbulb',
    },
    {
      title: 'Endless Growth',
      description: 'Break limits, set new heights, and evolve beyond expectations.',
      icon: 'mdi-terrain',
    },
  ]);
  </script>
  
  <style scoped>
  .landing-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to right, #2d2d2d, #8b0000);
    color: white;
  }
  
  .header-container {
    padding: 20px;
  }
  
  .header-title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  
  .landing-description {
    text-align: center;
    max-width: 600px;
    opacity: 0.8;
  }
  
  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .card {
    background: white;
    color: black;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .card-icon {
    font-size: 48px;
    margin-bottom: 10px;
  }
  
  .cta-button {
    margin-top: 20px;
    background: white;
    color: black;
    font-weight: bold;
    padding: 12px 24px;
    border-radius: 24px;
    transition: background 0.3s;
  }
  
  .cta-button:hover {
    background: #cccccc;
  }
  </style>