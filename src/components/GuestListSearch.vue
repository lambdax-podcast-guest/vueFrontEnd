<template>
  <div class="guest-search">
    <h3>Seeking</h3>
    <div class="seeking-checkbox">
      <div class="checkbox-row">
        <input type="checkbox" id="seekingCheckboxHost">
        <label for="seekingCheckboxHost">Podcast Hosts</label>
      </div>
      <div class="checkbox-row">
        <input type="checkbox" id="seekingCheckboxGuest">
        <label for="seekingCheckboxGuest">Guest Speakers</label>
      </div>
    </div>
    <h3 class="topics-header">What topics are you interested in?</h3>
    <p>Enter topics below or choose from existing tags!</p>
    <input type="text" />
    <button>Submit</button>
  </div>
</template>

<script>
export default {
  name: "GuestListSearch"
};
</script>

<style scoped>
.guest-search {
  display: flex;
  flex-direction: column;
  margin: 1rem auto 2rem;
  width: 30rem;
}

.checkbox-row {
  display: flex;
  align-items: center;
}

label {
  font-size: inherit;
  font-weight: normal;
  margin-left: 0.5rem;
}

.topics-header {
  margin-top: 1rem;
}

button {
  width: 10rem;
}
</style>