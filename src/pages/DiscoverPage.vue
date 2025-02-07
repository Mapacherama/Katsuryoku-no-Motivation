<template>
    <div class="discover-container">
      <h2 class="section-title">Discover More</h2>
      
      <section class="discover-section" v-for="(category, index) in categories" :key="index">
        <h3 class="category-title">{{ category.title }}</h3>
        <div class="recommendations">
          <div class="recommendation" v-for="(item, i) in category.items" :key="i" :style="{ backgroundImage: `url(${item.image})` }">
            <div class="recommendation-overlay">
              <h4 class="recommendation-title">{{ item.title }}</h4>
              <p class="recommendation-info">{{ item.info }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const categories = [
    {
      title: "Books",
      items: [
        { title: "Atomic Habits", info: "James Clear", image: "/path-to-book1.jpg" },
        { title: "Can't Hurt Me", info: "David Goggins", image: "/path-to-book2.jpg" },
        { title: "Deep Work", info: "Cal Newport", image: "/path-to-book3.jpg" }
      ]
    },
    {
      title: "Podcasts",
      items: [
        { title: "The Tim Ferriss Show", info: "Self-improvement", image: "/path-to-podcast1.jpg" },
        { title: "Huberman Lab", info: "Science & Health", image: "/path-to-podcast2.jpg" },
        { title: "The Diary of a CEO", info: "Business & Mindset", image: "/path-to-podcast3.jpg" }
      ]
    },
    {
      title: "Movies & Documentaries",
      items: [
        { title: "The Last Dance", info: "Michael Jordan Documentary", image: "/path-to-movie1.jpg" },
        { title: "Free Solo", info: "Rock Climbing Documentary", image: "/path-to-movie2.jpg" },
        { title: "Inception", info: "Christopher Nolan", image: "/path-to-movie3.jpg" }
      ]
    }
  ];
  </script>
  
  <style scoped>
  .discover-container {
    padding: 40px;
    background: #0d0d0d;
    color: white;
    min-height: 100vh;
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .discover-section {
    margin-bottom: 40px;
  }
  
  .category-title {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
  
  .recommendations {
    display: flex;
    gap: 20px;
    overflow-x: auto;
  }
  
  .recommendation {
    width: 300px;
    height: 180px;
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    position: relative;
    transition: transform 0.3s ease-in-out;
  }
  
  .recommendation-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 0 0 12px 12px;
    color: white;
  }
  
  .recommendation-title {
    font-size: 1.1rem;
    font-weight: bold;
  }
  
  .recommendation-info {
    font-size: 0.9rem;
    opacity: 0.8;
  }
  
  .recommendation:hover {
    transform: scale(1.05);
  }
  </style>
  