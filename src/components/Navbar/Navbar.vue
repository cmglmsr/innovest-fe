<template>
  <nav class="navbar">
    <div class="navbar-container">
      <a href="#" class="navbar-logo">Innovest</a>
      <div class="menu-icon" @click="toggleMenu">
        <i :class="[isNavbarMenuOpen ? 'fas fa-times' : 'fas fa-bars']"></i>
      </div>
      <ul :class="['nav-menu', { 'active': isNavbarMenuOpen }]">
        <li class="nav-item">
          <a href="#" class="nav-links">Dashboard</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-links">Stocks</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-links">ETFs</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-links">GENAI Analysis</a>
        </li>
      </ul>
      <div class="auth-buttons">
        <a v-if="!isSmallScreen" href="#" class="auth-button">Login</a>
        <a v-if="!isSmallScreen" href="#" class="auth-button subscribe">Subscribe</a>
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
    },
    handleSubscribeClick() {
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