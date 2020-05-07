<template>
    <div>
        <h3>Add New User</h3>
        <form @submit="testAndSubmit">
            <section class="form-control">
                <label for="Name">Name: </label>
                <input type="text" v-model="name" name="name">
            </section>
            <section class="form-control">
                <label for="email">Email: </label>
                <input type="email" v-model="email" name="email">
            </section>
            <section class="form-control">
                <input type="submit" :disabled="disable">
            </section>
        </form>
        <section class="error-text">
            {{error}}
        </section>
        <error/>
    </div>
</template>

<script>
// import Error from "@/components/Error.vue";

export default {
  //   components: {
  //     Error
  //   },
  data: function() {
    return {
      name: "",
      email: "",
      disable: false,
      error: ""
    };
  },
  methods: {
    testAndSubmit: function(e) {
      e.preventDefault();
      this.error = "";
      if (this.name != "" && this.email != "" && this.email.includes("@")) {
        this.disable = true;
        this.$store.dispatch("addUser", { name: this.name, email: this.email });
      } else {
        this.error = "Please fill out all fields in our form";
      }
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 1rem;
}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.error-text {
  color: red;
}
</style>