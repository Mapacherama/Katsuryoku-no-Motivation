<template>
    <header class="header-container">
      <nav class="header-nav">
        <div class="header-left">
          <h1 class="header-logo">Katsuryoku</h1>
          <span class="header-subtext">Motivation Hub</span>
        </div>
        <ul class="nav-links">
          <li><router-link to="/about">About</router-link></li>
          <li><a href="#generate">Generate</a></li>
          <li><router-link to="/discover">Discover</router-link></li>
          <li><router-link to="/reverse">Reverse</router-link></li>

        </ul>
      </nav>
    </header>


  </template>
  
  <script setup>
  // No additional logic needed, pure presentation
  </script>
  
  <style scoped>
  .header-container {
    width: 100%;
    background: black;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .header-left {
    display: flex;
    flex-direction: column;
  }
  
  .header-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
  }
  
  .header-subtext {
    color: grey;
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    background: rgba(255, 255, 255, 0.1);
    padding: 10px 20px;
    border-radius: 25px;
    gap: 20px;
  }
  
  .nav-links li {
    display: inline;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
  }
  
  .nav-links a:hover {
    color: #ff4c4c;
  }
  
  .header-right {
    color: grey;
    font-size: 0.8rem;
    text-align: right;
    text-transform: uppercase;
  }
  </style>