<template>
    <div class="landing-container">
      <section class="hero-section">
        <h2 class="hero-title">There is Only One<br /><span>Katsuryoku Motivation</span></h2>
        <p class="hero-description">
          A MotivationHub that brings together all sources of inspiration—fueling your fire, illuminating your ideas, and driving you toward greatness.
        </p>
      </section>
      
      <section class="categories">
        <div class="category" id="books">
          <h3>Books</h3>
          <p>Explore motivational books that inspire action.</p>
        </div>
        <div class="category" id="podcasts">
          <h3>Podcasts</h3>
          <p>Listen to powerful stories and success journeys.</p>
        </div>
        <div class="category" id="audiobooks">
          <h3>Audiobooks</h3>
          <p>Learn on the go with curated motivational audiobooks.</p>
        </div>
        <div class="category" id="youtube">
          <h3>YouTube Channels</h3>
          <p>Watch motivational content from top creators.</p>
        </div>
        <div class="category" id="movies">
          <h3>Movies & Documentaries</h3>
          <p>Be inspired by powerful films and true stories.</p>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // No additional logic needed for static presentation
  </script>
  
  <style scoped>
  .landing-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: black;
    color: white;
    padding-top: 0;
  }
  
  .hero-section {
    text-align: center;
    margin-top: 0;
    padding-top: 0;
  }
  
  .hero-title {
    font-size: 3rem;
    font-weight: bold;
  }
  
  .hero-title span {
    color: #ff4c4c;
  }
  
  .hero-description {
    font-size: 1.2rem;
    opacity: 0.8;
    max-width: 800px;
    margin: auto;
  }
  
  .categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 50px;
    max-width: 1000px;
  }
  
  .category {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 12px;
    text-align: center;
  }
  </style>