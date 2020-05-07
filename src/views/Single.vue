<template>
    <section>
        <section class="container" v-if="user.name!=undefined">
            <section class="name">Name: {{user.name}}</section>
            <section class="email">Email: {{user.email}}</section>
            <button @click="edit">Edit</button>
        </section>
        <section class="container" v-else>Loading...</section>

        <section class="container" v-if="editing">
            <h3>Edit User</h3>
            <form @submit="testAndSubmit">
                <section class="form-control">
                    <label for="Name">Name: </label>
                    <input type="text" v-model="user.name" name="name">
                </section>
                <section class="form-control">
                    <label for="email">Email: </label>
                    <input type="email" v-model="user.email" name="email">
                </section>
                <section class="form-control">
                    <input type="submit" :disabled="disable">
                </section>
            </form>
            <section class="error-text">
                {{err}}
            </section>
        </section>
        
        <error />
    </section>
</template>

<script>
import { mapState } from "vuex";
import Error from "@/components/Error.vue";
export default {
  data: function() {
    return {
      editing: false,
      err: "",
      id: this.$route.params.id,
      disable: false
    };
  },
  components: {
    Error
  },
  computed: mapState({
    user: state => state.current,
    userAlias: "user"
  }),
  mounted: function() {
    this.$store.dispatch("getSingle", { id: this.$route.params.id });
  },
  methods: {
    edit: function(e) {
      e.preventDefault();
      this.editing = true;
    },
    testAndSubmit: function(e) {
      e.preventDefault();
      if (
        this.user.name != "" &&
        this.user.email != "" &&
        this.user.email.includes("@")
      ) {
        this.editing = false;
        this.disable = false;
        this.$store.dispatch("editUser", {
          id: this.id,
          name: this.user.name,
          email: this.user.email
        });
      } else {
        this.err = "Please fill out the entirety of the form";
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.name {
  font-size: 2rem;
}
.email {
  font-size: 1.25rem;
}
.container > section {
  margin: 0.5rem;
}
.form-control {
  margin: 1rem;
}
.error-text {
  color: red;
}
</style>