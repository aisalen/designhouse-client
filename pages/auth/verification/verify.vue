<template>
  <!-- 13.99 -->
  <!-- <div>verify email</div> -->
  <!-- 13.102 -->
  <section class="authentication">
    <div class="auth-body">
      <h1 class="text-uppercase fw-500 mb-4 text-center font-22">
        Email Verification
      </h1>
      <form class="auth-form">
        <div class="form-group" v-if="success">
          <!-- {{ name }} -->
          <div class="alert alert-success">
            <!-- Email successfully verified. -->
            {{ status }}
          </div>
          <!-- <a href="#">Proceed to Login</a> -->
          <nuxt-link to="/login">Proceed to Login</nuxt-link>
        </div>
        <div class="form-group" v-else>
          <div class="alert alert-danger">
            <!-- An error was encountered. -->
            {{ status }}
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
    // 14.108
  middleware: ['guest'],

  async asyncData({ params, query, app }) {
    // return { name: 'John Doe' };
    // return { name: query };
    // return { name: params.id };
    const q = await Object.keys(query)
      .map(k => `${k}=${query[k]}`)
      .join('&');
    // return { name: q };
    try {
      const { data } = await app.$axios.post(
        `/verification/verify/${params.id}?${q}`
      );
      return { success: true, status: data.message };
    } catch (e) {
      return { success: false, status: e.response.data.errors.message };
    }
  }
};
</script>

<style>

</style>
