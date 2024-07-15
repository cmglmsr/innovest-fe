<template>
  <div class="login-container">
    <div class="background-image"></div>
    <div class="login-content">
      <h1 class="login-title">Innovest</h1>
      <form class="login-form">
        <p class="login-text">Login</p>
        <div class="form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <p class="register-text">
        Don't have an account? <a href="/subscribe">Subscribe</a>
      </p>
    </div>
  </div>
</template>

<script>
import "./style.css"
export default {
  name: "LoginView",
};
</script>