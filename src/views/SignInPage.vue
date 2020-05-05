<template>
  <div class="signin page">
    <div class="signin-txt">
      <h1>Welcome back!</h1>
      <p>Need to <router-link to="/register">register</router-link>?</p>
    </div>
    <div class="signin-form">
      <div>
        <label>Email</label>
        <input type="text" name="email" v-model="input.email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" v-model="input.password" />
      </div>
      <button>Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      input: {
        email: "",
        password: ""
      }
    };
  }
};
</script>

<style scoped>
.signin {
  display: flex;
  justify-content: center;
  align-items: center;
}

.signin-txt {
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
  text-transform: uppercase;
  text-decoration: none;
}

.signin-form {
  width: 30rem;
  background-color: #f0f0ff;
  border-radius: 2rem;
  padding: 1rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.signin-form div {
  width: 100%;
  margin-bottom: 1rem;
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
</style>