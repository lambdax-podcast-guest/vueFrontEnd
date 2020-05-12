<template>
  <div class="settings page">
    <div class="header">
      <SettingsHeader>
        <p>Advanced Settings</p>
      </SettingsHeader>
    </div>
    <div class="settings-content">
      <router-link :to="{name: 'BasicSettings'}">Basic Settings</router-link>
      <div class="settings-adv-form">
        <div class="name">
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" v-model="input.firstName" />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" v-model="input.lastName" />
          </div>
        </div>
        <div>
          <label>Email</label>
          <input type="text" name="email" v-model="input.email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" v-model="input.password" />
        </div>
        <div>
          <label>Repeat Password</label>
          <input type="password" name="passwordRepeat" v-model="input.passwordRepeat" />
        </div>
        <div class="buttons">
          <button>Delete Account</button>
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SettingsHeader from "@/components/SettingsHeader.vue";

export default {
  name: "AdvancedSettings",
  components: { SettingsHeader },
  data() {
    return {
      input: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordRepeat: ""
      }
    };
  }
};
</script>

<style scoped>
.settings-content {
  display: flex;
  flex-direction: column;
}

.settings-content a {
  width: 9rem;
  align-self: flex-end;
  font-weight: normal;
}

.settings-adv {
  display: flex;
  justify-content: center;
  align-items: center;
}

.settings-adv-txt {
  width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 3rem;
  font-weight: normal;
}

a {
  font-weight: bold;
  text-decoration: none;
}

.settings-adv-form {
  /* width: 30rem; */
  background-color: #f0f0ff;
  border-radius: 2rem;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.settings-adv-form div {
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.name {
  flex-direction: row !important;
  justify-content: space-between;
}

.name div {
  width: 46%;
  display: flex;
  flex-direction: column;
}

label {
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
}

input {
  padding: 0.5rem;
  font-family: inherit;
  border: none;
}

.buttons {
  display: flex;
  flex-direction: row !important;
  justify-content: center;
}

button {
  margin-left: 2rem;
  margin-right: 2rem;
}
</style>