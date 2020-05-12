<template>
  <section class="container" @click="navTo">
    <ProfilePic />
    <div>
      <div class="name">
        <p>{{name}}</p>
      </div>
      <div class="email">
        <p>{{email}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import ProfilePic from "@/components/ProfileAvatar.vue";

export default {
  props: {
    name: [String],
    email: [String],
    id: [Number]
  },
  components: { ProfilePic },
  mounted: function() {},
  methods: {
    navTo: function() {
      this.$router.push(`/users/${this.$props.id}`);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  width: 50%;
  /* margin: 0.5rem auto; */
  margin: 1rem 0;
  cursor: pointer;
  border: 1px solid #b5b1ff;
  border-radius: 1rem;
  padding: 1rem;
}

/* .container > section {
} */

.name {
  font-weight: bold;
  font-size: 1.2rem;
}

/* .container > .email {
  width: 75%;
} */
</style>