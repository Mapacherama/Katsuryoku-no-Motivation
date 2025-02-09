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
        { title: "Atomic Habits", info: "James Clear", image: "https://m.media-amazon.com/images/I/81ANaVZk5LL.jpg" },
        { title: "Can't Hurt Me", info: "David Goggins", image: "https://m.media-amazon.com/images/I/81gTRv2HXrL.jpg" },
        { title: "Deep Work", info: "Cal Newport", image: "https://m.media-amazon.com/images/I/81JJ7fyyKyS._AC_UF1000,1000_QL80_.jpg" }
      ]
    },
    {
      title: "Podcasts",
      items: [
        { title: "The Tim Ferriss Show", info: "Self-improvement", image: "https://thearmyleader.co.uk/wp-content/uploads/2017/07/Tim-Ferris-Show.png" },
        { title: "Huberman Lab", info: "Science & Health", image: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/61/35/d6/6135d6e9-5d67-86db-e984-ed74d5646c5d/mza_3545313863246849826.jpeg/1200x1200bf-60.jpg" },
        { title: "The Diary of a CEO", info: "Business & Mindset", image: "https://cdn-images.dzcdn.net/images/talk/2f29b18762c16f06c558d5842988014e/0x1900-000000-80-0-0.jpg" }
      ]
    },
    {
      title: "Movies & Documentaries",
      items: [
        { title: "The Last Dance", info: "Michael Jordan Documentary", image: "https://static.wixstatic.com/media/a27d24_5c5d7acb69df43058d7904ebb212737b~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_85,usm_0.66_1.00_0.01/a27d24_5c5d7acb69df43058d7904ebb212737b~mv2.jpg" },
        { title: "Free Solo", info: "Rock Climbing Documentary", image: "https://i.ytimg.com/vi/7XhsuT0xctI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJBx0DtA5QfcLduoaYLR9x_1L6Cg" },
        { title: "Inception", info: "Christopher Nolan", image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/12/Inception.jpg" }
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
  