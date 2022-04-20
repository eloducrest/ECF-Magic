<template>
  <div id="header-wrapper">
    <div class="container">

      <!-- Header -->
      <header id="header">
        <div class="inner">

          <!-- Logo -->
          <h1>
            <a href="/" class="">MAGIC</a>
          </h1>

          <!-- Nav -->
          <nav id="nav">
            <ul>
              <li class="nav-item">
                <router-link to="/" class="nav-link">HOME</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/my-collection" class="nav-link">Ma Collection</router-link>
              </li>
            </ul>
          </nav>

        </div>
      </header>

      <!-- Banner -->
      <div id="banner">
        <h2><strong>Magic Card:</strong> Ma collection </h2>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style lang="scss" scoped>

.router-link-exact-active {
  background: rgba(0, 0, 0, 0.15);
  box-shadow: inset 1px 1px 0px 0px rgba(0, 0, 0, 0.025), 1px 1px 0px 0px rgba(255, 255, 255, 0.025);
}
</style>