<template>
    <div class="villain-container">
      <h1 class="villain-title">💀 Villainous Motivation 💀</h1>
      <div class="villain-grid">
        <div 
          v-for="villain in villains" 
          :key="villain.name" 
          :class="['villain-card', { active: activeVillain === villain.name }] "
          @click="toggleDetails(villain.name)"
        >
          <img :src="villain.image" :alt="villain.name">
          <h2 class="villain-name">{{ villain.name }}</h2>
          <p class="villain-tagline">{{ villain.tagline }}</p>
          <p class="villain-lesson">{{ villain.lesson }}</p>
        </div>
      </div>
  
      <!-- Motivation Section Below -->
      <div class="motivation-text">
        <h2>Why Learn from Villains?</h2>
        <p>
          Villains might not be the heroes of the story, but they embody traits that can fuel our personal growth.
          Their **strategic thinking, relentless ambition, and ability to execute bold plans** are powerful mindsets 
          that we can learn from—without their destructive flaws. 
        </p>
        <p>
          **Johan Liebert** teaches us the **art of persuasion and patience**.<br>
          **Walter White** shows the power of **reinvention and adaptability**.<br>
          **Thanos** reminds us that **commitment to a vision is key**, even when others doubt us.<br>
        </p>
        <p class="highlight">
          Channel the **strengths** of villains while keeping your moral compass intact. **Execute your goals with their intensity!**
        </p>
      </div>
    </div>
  </template>  
  
  <script>
  export default {
    data() {
      return {
        activeVillain: null,
        villains: [
          {
            name: "Johan Liebert",
            image: "http://i1.sndcdn.com/artworks-fxdaQu510Tym6pLT-UiGczg-t1080x1080.jpg", // Replace with real image
            tagline: "The master of persuasion and long-term planning.",
            lesson: "Use strategic patience—plant seeds now for future success.",
          },
          {
            name: "Walter White",
            image: "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png", // Replace with real image
            tagline: "Reinvention is the ultimate power move.",
            lesson: "Adapt, evolve, and leverage intelligence to stay ahead.",
          },
          {
            name: "Thanos",
            image: "https://i.ytimg.com/vi/s9SyzdnaPKU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0Ifz73PkqVYjyRIh_qoC2m_wLVg", // Replace with real image
            tagline: "Unwavering commitment, even to controversial goals.",
            lesson: "When you have a vision, execute it with full force.",
          }
        ],
      };
    },
    methods: {
      toggleDetails(name) {
        this.activeVillain = this.activeVillain === name ? null : name;
      },
    },
  };
  </script>
  
  <style scoped>
  /* General Styling */
  .villain-container {
    padding: 1.5rem;
    text-align: center;
  }
  
  .villain-title {
    font-size: 1.875rem; /* text-3xl */
    font-weight: bold;
    color: #ff4c4c;
    margin-bottom: 1.5rem;
  }
  
  /* Grid Layout */
  .villain-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    justify-content: center;
  }
  
  /* Villain Cards */
  .villain-card {
    background-color: #1a1a1a; /* Dark gray */
    color: white;
    border-radius: 1rem; /* rounded-xl */
    padding: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  .villain-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(255, 76, 76, 0.4); /* Red glow effect */
  }
  
  /* Villain Images */
  .villain-card img {
    width: 100%;
    height: 12rem; /* 48px * 4 */
    object-fit: cover;
    border-radius: 0.5rem;
  }
  
  /* Villain Names */
  .villain-name {
    font-size: 1.25rem; /* text-xl */
    font-weight: bold;
    margin-top: 0.75rem;
  }
  
  /* Villain Tagline */
  .villain-tagline {
    font-style: italic;
    font-size: 0.875rem;
    opacity: 0.8;
  }
  
  /* Villain Lesson (Hidden Until Clicked) */
  .villain-lesson {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    display: none;
  }
  
  .villain-card.active .villain-lesson {
    display: block;
  }
  
  /* Motivation Text Below */
  .motivation-text {
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #292929; /* Dark background for contrast */
    color: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(255, 76, 76, 0.3); /* Blood Red Glow */
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  
  .motivation-text h2 {
    font-size: 1.8rem;
    color: #ff4c4c;
    margin-bottom: 1rem;
  }
  
  .motivation-text p {
    font-size: 1rem;
    color: #e0e0e0;
    margin-bottom: 1rem;
  }
  
  .highlight {
    font-weight: bold;
    color: #ff4c4c;
  }
  </style>
  