<template>
  <div class="settings page">
    <div class=header>
      <SettingsHeader>
        <p>Tell us a little about yourself!</p>
      </SettingsHeader>
    </div>
    <div class="settings-content">
      <div class="settings-content-top">
        <div class="settings-content-top-left">
          <ProfilePic />
          <div>
            <h2>Avatar</h2>
            <p>Upload an avatar that represents your podcast, yourself, or something fun!</p>
          </div>
        </div>
        <div class="settings-content-top-right">
          <router-link to="settings/advanced">Advanced Settings</router-link>
          <router-link to="settings/profilepreview">Profile Preview</router-link>
        </div>
      </div>
      <div class="settings-content-bottom">
        <div class="settings-content-bottom-left">
          <div>
            <label>Headline</label>
            <p>First impressions count!</p>
            <input type="text" />
          </div>
          <div>
            <label>Where are you located?</label>
            <p>Help others find you. Remote is ok!</p>
            <input type="text" />
          </div>
          <div>
            <label>What languages do you speak?</label>
            <input type="text" />
          </div>
          <div>
            <label>Biography?</label>
            <p>What do you know about, or would like to know about? Fill this space so that others can get to know you!</p>
            <textarea />
          </div>
        </div>
        <div class="settings-content-bottom-right">
          <label>User Type</label>
          <div class="settings-checkbox">
            <div class="checkbox-row">
              <input type="checkbox" id="checkboxHost">
              <label for="checkboxHost">Podcast Host</label>
            </div>
            <div class="checkbox-row">
              <input type="checkbox" id="checkboxGuest">
              <label for="checkboxGuest">Guest Speaker</label>
            </div>
          </div>
          <label>Seeking</label>
          <div class="settings-checkbox">
            <div class="checkbox-row">
              <input type="checkbox" id="checkboxHost">
              <label for="checkboxHost">Podcast Host</label>
            </div>
            <div class="checkbox-row">
              <input type="checkbox" id="checkboxGuest">
              <label for="checkboxGuest">Guest Speaker</label>
            </div>
          </div>
          <div>
            <label>What topics are you interested in?</label>
            <p>Enter topics below or choose from existing tags!</p>
            <input type="text" />
          </div>
          <div class="tags">
            TAGS
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettingsHeader from "@/components/SettingsHeader.vue";
import ProfilePic from "@/components/ProfileAvatar.vue";

export default {
  name: "Settings",
  components: { SettingsHeader, ProfilePic }
};
</script>

<style>
.settings {
  max-width: 90rem;
  margin: 0 auto;
}

.settings .header p {
  font-size: 1.5rem;
}

.settings-content {
  width: 100%;
  background-color: #f0f0ff;
  margin-top: 2rem;
  border-radius: 1rem;
  padding: 2rem;
}

.settings-content input,
.settings-content textarea {
  width: 100%;
  border: none;
  padding: 0.5rem;
  border-radius: 0.3rem;
}

.settings-content-top {
  display: flex;
  justify-content: space-between;
}

.settings-content-top-left {
  display: flex;
}

.settings-content-top-right a {
  margin: 0 2rem;
}

.settings-content-bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
}

.settings-content-bottom-left,
.settings-content-bottom-right {
  width: 47%;
  display: flex;
  flex-direction: column;
}

.settings-content-bottom-left div,
.settings-content-bottom-right div {
  margin-bottom: 1rem;
}

.settings-checkbox,
.settings-checkbox .checkbox-row {
  display: flex;
}

.settings-checkbox .checkbox-row {
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.settings-checkbox .checkbox-row label {
  width: 18rem;
}

.settings-content-bottom-right button {
  align-self: flex-end;
}

.tags {
  background-color: white;
  padding: 1rem;
  border-radius: 0.3rem;
  height: 15vh;
}

label {
  font-weight: bold;
  font-size: 1.5rem;
}

.settings-content-bottom-right .checkbox-row label {
  font-weight: normal;
  font-size: 1.2rem;
}

a,
p {
  font-size: 1.2rem;
}
</style>