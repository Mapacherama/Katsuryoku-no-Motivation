<template>
    <div class="about-page">
      <div class="header">
        <h1>About Us</h1>
        <p>Discover who we are and what drives our mission.</p>
      </div>
  
      <div class="content">
        <section class="mission">
          <h2>Our Mission</h2>
          <p>We are committed to [your mission statement here].</p>
        </section>
  
        <section class="vision">
          <h2>Our Vision</h2>
          <p>We envision [your vision statement here].</p>
        </section>
  
        <section class="team">
          <h2>Meet the Team</h2>
          <div class="team-members">
            <div v-for="member in team" :key="member.name" class="team-member">
              <img :src="member.image" :alt="member.name" class="team-photo" />
              <h3>{{ member.name }}</h3>
              <p class="role">{{ member.role }}</p>
              <p class="bio">{{ member.bio }}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script setup>
  const team = [
    {
      name: "Jerome Tesselaar",
      role: "Developer",
      bio: "I am a developer who is passionate about creating useful and efficient applications.",
      image: "src/assets/profile.jpg",
    },

  ];
  </script>
  
  <style scoped>
  /* Overall Page Styling */
  .about-page {
    max-width: 900px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #1a1a1a; /* Dark Grey Background */
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(255, 0, 0, 0.3); /* Blood Red Glow */
    color: #e0e0e0; /* Light Grey Text */
    font-family: 'Arial', sans-serif;
  }
  
  /* Header Styling */
  .header {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .header h1 {
    font-size: 2.5rem;
    color: #b30000; /* Blood Red */
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  
  .header p {
    font-size: 1.2rem;
    color: #cccccc;
  }
  
  /* Sections */
  .content section {
    margin-bottom: 2rem;
    text-align: center;
    border-bottom: 1px solid #b30000; /* Blood Red Separator */
    padding-bottom: 1rem;
  }
  
  h2 {
    font-size: 1.8rem;
    color: #b30000; /* Blood Red */
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  
  /* Team Section */
  .team-members {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .team-member {
    text-align: center;
    background-color: #292929; /* Dark Grey Card */
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(255, 0, 0, 0.2); /* Blood Red Glow */
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }
  
  .team-member:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(255, 0, 0, 0.4); /* Strong Blood Red Glow */
  }
  
  /* Team Member Styling */
  .team-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 0.75rem;
    border: 2px solid #b30000; /* Blood Red Border */
  }
  
  h3 {
    font-size: 1.4rem;
    color: #e0e0e0;
  }
  
  .role {
    font-size: 1rem;
    font-weight: bold;
    color: #b30000; /* Blood Red */
  }
  
  .bio {
    font-size: 0.9rem;
    color: #cccccc;
  }
  </style>
  