<template>
  <div class="auth container-fluid">
    <div class="row">
      <div class="col-12">
        <!-- login -->
        <form v-if="loginForm" @submit.prevent="loginUser" class="form-group">
          <input type="email" v-model="creds.email" placeholder="email" class="form-control">
          <input type="password" v-model="creds.password" placeholder="password" class="form-control">
          <button type="submit" class="btn btn-secondary">Login</button>
        </form>

        <!-- register -->
        <form v-else @submit.prevent="register" class="form-group">
          <input type="text" v-model="newUser.name" placeholder="name" class="form-control">
          <input type="email" v-model="newUser.email" placeholder="email" class="form-control">
          <input type="password" v-model="newUser.password" placeholder="password" class="form-control">
          <button type="submit" class="btn btn-secondary">Create Account</button>
        </form>
        <div class="action" @click="loginForm = !loginForm">
          <p v-if="loginForm">No account? Click here to Register</p>
          <p v-else>Already have an account? Click here to Login</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "auth",
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);


      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    }
  };
</script>

<style>
  .action {
    cursor: pointer;
  }

  .container-fluid {
    /* height: 100vh; */
    background-color: var(--primary);
    opacity: .7;
  }
</style>