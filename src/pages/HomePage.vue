<template>
    <div class="landing-container">
        <section class="hero-section">
            <h2 class="hero-title">There is Only One<br /><span>Katsuryoku Motivation</span></h2>
            <p class="hero-description">
                A MotivationHub that brings together all sources of inspiration—fueling your fire, illuminating your
                ideas, and driving you toward greatness.
            </p>
        </section>

        <section class="categories">
            <div class="category category-left" id="books"
                style="background-image: url('https://atletischleven.nl/wp-content/uploads/2024/04/Boekrecensie-Never-Finished-van-David-Goggins.png.webp');">
                <h3 class="category-title">Books</h3>
                <p class="category-description category-overlay">Explore motivational books that inspire action.</p>
            </div>
            <div class="category category-right" id="podcasts"
                style="background-image: url('https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/df/9e/18/df9e1841-39c6-1274-2901-ad46c93d4402/mza_12697705062075299633.jpg/1200x1200bf-60.jpg');">
                <h3 class="category-title">Podcasts</h3>
                <p class="category-description category-overlay">Listen to powerful stories and success journeys.</p>
            </div>
            <div class="category category-left" id="audiobooks"
                style="background-image: url('https://m.media-amazon.com/images/I/81gByv+FhjL._UF894,1000_QL80_.jpg');">
                <h3 class="category-title">Audiobooks</h3>
                <p class="category-description category-overlay">Learn on the go with curated motivational audiobooks.
                </p>
            </div>
            <div class="category category-right" id="youtube"
                style="background-image: url('https://yt3.googleusercontent.com/KfDl2-ci5OXoqJXt4sivRCNZJZvT9P-SqIZxFjp-yrbmTioIc8Noep9eM_iB9dsyXIlkpoMe=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj');">
                <h3 class="category-title">YouTube Channels</h3>
                <p class="category-description category-overlay">Watch motivational content from top creators.</p>
            </div>
            <div class="category category-left" id="movies"
                style="background-image: url('https://images.saymedia-content.com/.image/t_share/MTk4NzkxNDkyOTIyNzc5Mzk5/the-pursuit-of-happiness-a-heartrending-tale-of-triumph.jpg');">
                <h3 class="category-title">Movies & Documentaries</h3>
                <p class="category-description category-overlay">Be inspired by powerful films and true stories.</p>
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  background-size: cover;
  background-position: center;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease-in-out, background 0.3s ease-in-out;
  overflow: hidden;
}

.category::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
}

.category-title {
    color: #ff4c4c;
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.category-description {
    color: rgba(255, 255, 255, 0.9);
    font-weight: normal;
    font-size: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    max-width: 80%;
    margin: 0 auto;
}

.category-overlay {
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    border-radius: 8px;
    display: inline-block;
}

.category-left {
    align-self: flex-start;
}

.category-right {
    align-self: flex-end;
}

.category:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(255, 76, 76, 0.2);
}
</style>