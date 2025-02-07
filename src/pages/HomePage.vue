<template>
    <div class="landing-container">
      <section class="hero-section">
        <h2 class="hero-title">There is Only One<br /><span>Katsuryoku Motivation</span></h2>
        <p class="hero-description">
          A MotivationHub that brings together all sources of inspiration—fueling your fire, illuminating your ideas, and driving you toward greatness.
        </p>
      </section>
      
      <section class="categories">
        <div class="category category-left" id="books" style="background-image: url('/path-to-books-image.jpg');">
          <h3>Books</h3>
          <p>Explore motivational books that inspire action.</p>
        </div>
        <div class="category category-right" id="podcasts" style="background-image: url('/path-to-podcasts-image.jpg');">
          <h3>Podcasts</h3>
          <p>Listen to powerful stories and success journeys.</p>
        </div>
        <div class="category category-left" id="audiobooks" style="background-image: url('/path-to-audiobooks-image.jpg');">
          <h3>Audiobooks</h3>
          <p>Learn on the go with curated motivational audiobooks.</p>
        </div>
        <div class="category category-right" id="youtube" style="background-image: url('/path-to-youtube-image.jpg');">
          <h3>YouTube Channels</h3>
          <p>Watch motivational content from top creators.</p>
        </div>
        <div class="category category-left" id="movies" style="background-image: url('/path-to-movies-image.jpg');">
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
    background: url('/path-to-your-image.png') no-repeat center center;
    background-size: cover;
    width: 100%;
    padding: 100px 0;
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
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 50px;
    max-width: 1000px;
  }
  
  .category {
    background-size: cover;
    background-position: center;
    padding: 40px;
    border-radius: 12px;
    text-align: center;
    transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
    color: #ff4c4c;
    font-weight: bold;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
  }
  
  .category-left {
    align-self: flex-start;
  }
  
  .category-right {
    align-self: flex-end;
  }
  
  .category:hover {
    transform: scale(1.05);
    background-blend-mode: overlay;
  }
  </style>