<template>
  <!-- 13.103 -->
  <section class="authentication">
    <div class="auth-body">
        <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
            Reset Password
        </h1>
        <form class="auth-form" @submit.prevent="submit">
          <alert-success :form="form">{{ status }}</alert-success>
          <div class="form-group">
            <base-input
              :form="form"
              field="email"
              v-model="form.email"
              placeholder="Email"
            ></base-input>
          </div>
          <div class="text-right">
            <!-- 14.107 -->
            <!-- <button type="submit" :disabled="form.busy" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
              <span v-if="form.busy">
                <i class="fas fa-spinner fa-spin"></i>
              </span>
              Send Reset Link
            </button> -->
            <base-button :loading="form.busy">
              Send Reset Link
            </base-button>
          </div>
          <p class="font-14 fw-400 text-center mt-4">
              <nuxt-link :to="{ name: 'login' }" class="color-blue">
                Back to login
              </nuxt-link>
          </p>
        </form>
    </div>
  </section>
</template>

<script>
export default {
    // 14.108
  middleware: ['guest'],

  data() {
    return {
      status: '',
      form: this.$vform({
        email: ''
      })
    };
  },

  methods: {
    submit() {
      this.form
        .post('/password/email')
        .then(res => {
          this.status = res.data.status;
          this.form.reset();
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>

</style>
