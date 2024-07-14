<template>
  <div class="auth-container">
    <div class="background-image"></div>
    <div class="auth-content">
      <h1 class="auth-title">Innovest</h1>
      <form class="auth-form">
        <p class="auth-text">Register</p>
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
        <button type="submit" class="auth-button">Register</button>
      </form>
      <p class="auth-link">
        Already have an account? <a href="#">Login</a>
      </p>
    </div>
  </div>
</template>

<script>
import "./style.css"
export default {
  name: "RegisterView",
};
</script>