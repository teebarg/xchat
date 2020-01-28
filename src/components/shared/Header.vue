<template>
    <div class="header__wrapper">
      <div class="container">
        <b-navbar toggleable="lg">
          <b-navbar-brand to="/">Cynachat</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"/>

          <b-collapse id="nav-collapse" is-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item to="/">
                <span class="menu-nav__link-text">HOW IT WORKS</span>
              </b-nav-item>
              <b-nav-item to="/auth/login">
                <span class="menu-nav__link-text">BLOG</span>
              </b-nav-item>
              <b-nav-item to="/auth/register">
                <span class="menu-nav__link-text">FAQ</span>
              </b-nav-item>
              <b-nav-item to="/auth">
                <span class="menu-nav__link-text">HELP</span>
              </b-nav-item>
              <b-button pill to="/auth/login" class="header__btn" variant="outline-danger">Log In</b-button>
              <b-button pill to="/auth/logout" class="ml-2 header__btn" variant="info">Sign Up</b-button>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .nav-item {
    font-weight: 600;
  }
  .header__wrapper {
    position: fixed;
    width: 100vw;
    background: #FFFFFF;
  }
  .menu-nav__link-text {
    position: relative;
    padding: 5px 10px;
  }
  .menu-nav__link-text:after {
    position: absolute;
    left: 0;
    right: 0;
    height: 10px;
    bottom: 0;
    transform: scaleX(0);
    background-color: #ffe54c;
    transition: transform .3s,-webkit-transform .3s;
    z-index: -1;
    content: "";
  }
  .menu-nav__link-text:hover:after,
  .router-link-exact-active .menu-nav__link-text:after{
    transform: scaleX(1);
  }
  .header__btn {
    min-width: 100px;
  }
</style>
