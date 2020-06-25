<template>
<!-- 12.95 -->
  <section class="authentication">
    <div class="auth-body">
        <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
            Login
        </h1>
        <!-- <form class="auth-form" action="" method=""> -->
        <!-- 13.100 -->
        <form class="auth-form" @submit.prevent="submit">
          <alert-error v-if="form.errors.has('message')" :form="form">
            {{ form.errors.get('message') }}
            <nuxt-link :to="{ name: 'verification.resend' }">
              Resend verification email
            </nuxt-link>
          </alert-error>
          <div class="form-group">
            <!-- 14.107 -->
            <!-- <input
              type="text"
              name="email"
              v-model="form.email"
              class="form-control form-control-lg font-14 fw-300"
              :class="{ 'is-invalid': form.errors.has('email') }"
              placeholder="Email"
            />
            <has-error :form="form" field="email"></has-error> -->
            <!-- {{ form.email }} -->
            <base-input
              :form="form"
              field="email"
              v-model="form.email"
              placeholder="Email"
            >
            </base-input>
          </div>
          <div class="form-group">
            <!-- 14.107 -->
            <!-- <input
              type="password"
              name="password"
              v-model="form.password"
              class="form-control form-control-lg font-14 fw-300"
              :class="{ 'is-invalid': form.errors.has('password') }"
              placeholder="Password"
            />
            <has-error :form="form" field="password"></has-error> -->
            <base-input
              :form="form"
              field="password"
              inputType="password"
              v-model="form.password"
              placeholder="Password"
            >
            </base-input>
          </div>
          <div class="mt-4 mb-4 clearfix">
              <nuxt-link to="/password/email" class="forgot-pass color-blue font-14 fw-400">
                Forgot password?
              </nuxt-link>
          </div>
          <div class="text-right">
            <!-- 13.100 -->
            <!-- <button type="submit" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
                Login
            </button> -->
            <!-- 14.105 -->
            <!-- <button type="submit" :disabled="form.busy" class="btn btn-primary primary-bg-color font-16 fw-500 text-uppercase">
              <span v-if="form.busy">
                <i class="fas fa-spinner fa-spin"></i>
              </span>
              Login
            </button> -->
            <!-- <base-button></base-button> -->
            <!-- 14.106 -->
            <!-- <base-button :block="true" type="danger"></base-button> -->
            <base-button :loading="form.busy">
              Login
            </base-button>
          </div>
          <p class="font-14 fw-400 text-center mt-4">
              Don't have an account yet?
              <!-- <a class="color-blue" href="#"> Create an account</a> -->
              <!-- 13.100 -->
              <nuxt-link :to="{ name: 'register' }" class="color-blue"> Create an account</nuxt-link>
          </p>
        </form>
    </div>
  </section>
</template>

<script>
export default {
  // 14.108
  middleware: ['guest'],
  // 13.100
  data() {
    return {
      form: this.$vform({
        email: '',
        password: ''
      })
    }
  },

  methods: {
    submit() {
      this.$auth.loginWith('local', {
        data: this.form
      })
      .then(res => {
        console.log(res);
      })
      .catch(e => {
        // console.log(e.response.data.errors);
        this.form.errors.set(e.response.data.errors);
      });
    }
  }
}
</script>

<style>

</style>
