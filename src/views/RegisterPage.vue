<template>
  <div class="register page">
    <div class="register-txt">
      <h1>Join a community just waiting to be heard...</h1>
      <img src="../assets/undraw_community_8nwl.png" />
    </div>
    <div class="register-form">
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
      <div>
        <label>You are a...</label>
        <div class="checkbox-row">
          <input type="checkbox" id="checkboxHost" v-model="input.checkedHost">
          <label for="checkboxHost">Podcast Host</label>
        </div>
        <div class="checkbox-row">
          <input type="checkbox" id="checkboxGuest" v-model="input.checkedGuest">
          <label for="checkboxGuest">Guest Speaker</label>
        </div>
      </div>
      <button @click="createAccount">Create Account</button>
      <p>Already have an account? <router-link to="/signin">Sign In Here.</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      input: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordRepeat: "",
        checkedHost: false,
        checkedGuest: false
      }
    };
  },
  methods: {
    createAccount() {
      console.log(this.input.firstName);
      console.log(this.input.lastName);
      console.log(this.input.email);
      console.log(this.input.password);
      console.log(this.input.passwordRepeat);
      console.log(this.input.checkedHost);
      console.log(this.input.checkedGuest);
      this.$store.dispatch("signIn");
      this.$router.push("all");
    }
  }
};
</script>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
}

.register-txt {
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

.register-form {
  width: 30rem;
  background-color: #f0f0ff;
  border-radius: 2rem;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.register-form > div {
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

.checkbox-row {
  display: flex;
  align-items: center;
}

.checkbox-row label {
  font-weight: normal;
  margin-left: 0.5rem;
}
</style>