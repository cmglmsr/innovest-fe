<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-logo">Innovest</router-link>
      <div class="menu-icon" @click="toggleMenu">
        <i :class="[isNavbarMenuOpen ? 'fas fa-times' : 'fas fa-bars']"></i>
      </div>
      <ul :class="['nav-menu', { 'active': isNavbarMenuOpen }]">
        <li class="nav-item">
          <router-link to="/" class="nav-links">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/stocks" class="nav-links">Stocks</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/etfs" class="nav-links">ETFs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/genai-analysis" class="nav-links">GENAI Analysis</router-link>
        </li>
      </ul>
      <div class="auth-buttons-navbar">
        <router-link v-if="!isSmallScreen" to="/login" class="auth-button-navbar">Login</router-link>
        <router-link v-if="!isSmallScreen" to="/subscribe" class="auth-button-navbar subscribe">Subscribe</router-link>
        <div v-else class="icon-buttons">
          <i class="fas fa-user-circle" @click="handleLoginClick"></i>
          <i class="fas fa-user-plus" @click="handleSubscribeClick"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import "./style.css";

export default {
  name: "Navbar",
  data() {
    return {
      isNavbarMenuOpen: false,
      isSmallScreen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isNavbarMenuOpen = !this.isNavbarMenuOpen;
    },
    handleLoginClick() {
      this.$router.push({ name: 'LoginPage' });
    },
    handleSubscribeClick() {
      this.$router.push({ name: 'RegisterPage' });
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 960;
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>
