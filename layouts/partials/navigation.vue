<template>
<!-- 12.94 -->
  <header class="fixed-topx">
    <nav class="navbar navbar-expand-lg navbar-dark align-items-center">
      <!-- 12.95 -->
      <!-- <a
        class="navbar-brand text-uppercase fw-500"
        href="#"
        title="Project Name"
        >DesignHouse</a
      > -->
      <nuxt-link :to="{ name: 'register' }"
        class="navbar-brand text-uppercase fw-500"
        href="#"
        title="Project Name"
        >DesignHouse</nuxt-link>
      <button
        class="navbar-toggler mr-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav font-14 fw-300">
            <li class="nav-item active">
              <a class="nav-link" href="#" title="Shots">Designs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" title="Designers">Designers</a>
            </li>
          </ul>
            <div class="header-search">
              <form action="" method="">
                <div class="form-group">
                  <input
                    type="text"
                    autocomplete="OFF"
                    name="search"
                    class="form-control text-white font-14 fw-300"
                    placeholder="Search and hit enter..."
                  />
                  <div class="search-icon text-white">
                    <i class="fas fa-search"></i>
                  </div>
                </div>
              </form>
            </div>
            <div class="upload-shot white-path font-14 fw-500 text-uppercase mr-auto">
              <a href="/upload" class="primary-bg-color text-white">
                <i class="fas fa-cloud-upload-alt"></i> Upload
              </a>
            </div>
        </div>

        <!-- Before Login -->
        <!-- 12.96 -->
        <template v-if="!$auth.loggedIn">
        <ul class="before-login font-14 fw-300 text-uppercase">
          <li>
            <!-- 12.95 -->
            <!-- <a href="#">Sign up</a> -->
            <!-- <nuxt-link to="/register">Sign up</nuxt-link> -->
            <nuxt-link :to="{ name: 'register' }">Sign up</nuxt-link>
          </li>
          <li>
            <!-- 12.95 -->
            <!-- <a href="#">Sign in</a> -->
            <nuxt-link :to="{ name: 'login' }">Login</nuxt-link>
          </li>
        </ul>
        </template>
        <!-- End Before Login -->

        <!-- After Login -->
        <!-- 12.96 -->
        <template v-else>
          <ul class="author-page white-path">
            <!-- Profile Dropdown -->
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle text-white"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img class="user-thumb" :src="$auth.user.photo_url" />
                  <div class="usr-info">
                    <span class="user-name font-14 fw-500"
                      >{{ $auth.user.name }}</span
                    >
                    <span class="user-deg font-10 fw-300"
                      >{{ $auth.user.tagline }}</span
                    >
                    <span class="down-chevron">
                      <i class="fa fa-angle-down"></i>
                    </span>
                  </div>
                </a>
                <div
                  class="dropdown-menu user-dropdown font-14 fw-500"
                  aria-labelledby="userDropdown"
                >
                <div class="dropdown-title-group font-12 fw-500">
                  <span class="dropdown-title text-uppercase">Your Account</span>
                </div>
                <nuxt-link to="/settings/dashboard" class="dropdown-item mt-28">
                  <i class="fas fa-tachometer-alt"></i>
                  Dashboard
                </nuxt-link>
                <a
                  class="dropdown-item mt-28"
                  href="#"
                  title="Profile"
                >
                  <i class="fa fa-user"></i>
                  Profile
                </a>
                <a class="dropdown-item" href="#" title="Setting">
                  <i class="fa fa-cogs"></i>
                  Setting
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" @click.prevent="logout">
                  <i class="fa fa-lock"></i>
                  Sign Out
                </a>
              </div>
            </li>
            <!-- End Profile Dropdown -->
          </ul>
        </template>
        <!-- End After Login -->
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>

<style>

</style>
