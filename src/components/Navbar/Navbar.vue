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
    };
  },
  methods: {
    toggleMenu() {
      this.isNavbarMenuOpen = !this.isNavbarMenuOpen;
    },
  },
};
</script>
