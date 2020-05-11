<template>
  <div class="settings page">
    <div class="header">
      <SettingsHeader>
        <p>Profile Preview</p>
      </SettingsHeader>
    </div>
    <div class="settings-content">
      <router-link class="link-basic-settings" :to="{name: 'BasicSettings'}">Basic Settings</router-link>
      <div class="profile-top">
        <div class="profile-top-left">
          <ProfilePic />
        </div>
        <div class="profile-top-middle">
          <h2>{{ firstName }} {{ lastName }}</h2>
          <p>{{ location }}</p>
          <p>
            <span v-for="language in languages" :key="language">
              {{ language }}
            </span>
          </p>
          <p>{{ headline }}</p>
        </div>
        <div class="profile-top-right">
          <p>I am a <span class="role" v-if="host">Podcast Host</span>
            <span v-if="host && guest"> & </span>
            <span class="role" v-if="guest">Guest Speaker</span>
          </p>
          <p>seeking</p>
          <p>
            <span class="role" v-if="seekingHost">Podcast Hosts</span>
            <span v-if="seekingHost && seekingGuest"> & </span>
            <span class="role" v-if="seekingGuest">Guest Speakers</span>
          </p>
        </div>
      </div>
      <div class="profile-bottom">
        <div class="profile-bottom-left">
          <h3>Biography</h3>
          <hr />
          <p>{{ biography }}</p>
        </div>
        <div class="profile-bottom-right">
          <h3>Interests</h3>
          <hr />
          <div class="interests">
            <div class="interest" v-for="interest in interests" :key="interest">
              {{ interest }}
            </div>
          </div>
          <h3>Contact</h3>
          <hr />
          <div class="contact-buttons">
            <button>Message</button>
            <button>Email</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettingsHeader from "@/components/SettingsHeader.vue";
import ProfilePic from "@/components/ProfileAvatar.vue";

export default {
  name: "Profile",
  components: { SettingsHeader, ProfilePic },
  data() {
    return {
      // Temporary data, should be stored in Vuex
      firstName: "Firstname",
      lastName: "Lastname",
      languages: ["English", "Spanish"],
      location: "Los Angeles, CA",
      headline: `"I don't know what I'm doing!"`,
      host: true,
      guest: true,
      seekingHost: false,
      seekingGuest: true,
      biography:
        "I'm an awesome pup with lots of energy and I want to tell the world all about it! I have lots to tell and look forward to connecting with others!\nCheck out my podcast below!",
      interests: ["Astronomy", "Sports", "Technology"]
    };
  }
};
</script>

<style scoped>
.settings-content {
  display: flex;
  flex-direction: column;
}

.link-basic-settings {
  align-self: flex-end;
}

.profile-top,
.profile-bottom {
  display: flex;
  justify-content: space-between;
}

.profile-top {
  margin: 2rem 0;
}

.profile-top-right {
  text-align: center;
  margin: 0 auto;
}

.role {
  font-weight: bold;
  text-transform: uppercase;
}

.profile-bottom-left,
.profile-bottom-right {
  width: 49%;
}

.interests {
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
}

.interest {
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  color: white;
  background-color: #636cff;
  border-radius: 0.5rem;
}

.contact-buttons {
  padding: 1rem;
}

.contact-buttons button {
  margin-top: 0;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
  background-color: white;
  color: black;
  font-size: inherit;
  border: 1px solid silver;
  border-radius: 0.5rem;
}
</style>