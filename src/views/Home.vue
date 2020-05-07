<template>
  <div class="home page">
    <!-- <h1>Podcast Guest!</h1>
    <p>
      Welcome to Podcast Guest! This website is intended as a "rolodex" of possible guests for podcasters! 
    </p>
    <p>
      As we continue, this site will allow you to search by knowledge, ability, and add your name to the rolodex.
    </p> -->
    <div class="section">
      <div class="section-txt">
        <h2 class="txt-lg">The simple way to find your next guest</h2>
        <p>Discover knowledgeable and engaged guest speakers to take your podcast to new lengths!</p>
        <button @click="handleStart">Get Started</button>
      </div>
      <img src="../assets/undraw_people_search_wctu.png" />
    </div>
    <div class="section section-mid">
      <div>
        <img src="../assets/undraw_podcast_q6p7.png" />
        <div class="section-txt">
          <h2 class="txt-md">For hosts</h2>
          <p>Search through a curated list of potential guest speakers based on topics covered in your podcast</p>
        </div>
      </div>
      <div>
        <img src="../assets/undraw_audio_conversation_dgtw.png" style="transform:scaleX(-1)" />
        <div class="section-txt">
          <h2 class="txt-md">And speakers</h2>
          <p>Have your voice heard when you connect with podcasts that are excited to broadcast your knowledge</p>
        </div>
      </div>
    </div>
    <div class="section">
      <img src="../assets/undraw_trends_a5mf.png" />
      <div class="section-txt">
        <h2 class="txt-lg">A wide coverage of topics, ideas, and trends</h2>
        <p>It can be overwhelming trying to find the right people to talk to. Our categorized listings make it easy.</p>
        <button @click="handleStart">Get Started</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    handleStart() {
      this.$router.push("register");
    }
  }
};
</script>

<style scoped>
p {
  font-size: 1.3rem;
}

.txt-md {
  font-size: 2.4rem;
}

.txt-lg {
  font-size: 5rem;
  font-weight: normal;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 40%;
  height: auto;
}

.section {
  margin: 5rem;
  display: flex;
  justify-content: center;
}

.section-mid {
  width: 100%;
  max-width: 90rem;
  display: flex;
  justify-content: space-between;
}

.section-mid img {
  width: 80%;
}

.section-txt {
  width: 30rem;
}

button {
  margin-top: 2rem;
}
</style>