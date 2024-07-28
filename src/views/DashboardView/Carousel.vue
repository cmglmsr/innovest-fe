<template>
    <div class="carousel">
      <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-item">
          <slot name="slide1"></slot>
        </div>
        <div class="carousel-item">
          <slot name="slide2"></slot>
        </div>
      </div>
      <button class="carousel-control prev" @click="prevSlide">&#10094;</button>
      <button class="carousel-control next" @click="nextSlide">&#10095;</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Carousel',
    data() {
      return {
        currentIndex: 0,
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % 2;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + 2) % 2;
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 90vh;
    margin-top: 6%;
  }
  
  .carousel-inner {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
  }
  
  .carousel-item {
    min-width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carousel-item > * {
    height: 90%;
    width: 90%;
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.7);
    border: none;
    cursor: pointer;
    z-index: 1;
    font-size: 36px;
    padding: 20px;
    background: none;
  }
  
  .carousel-control.prev {
    left: 40px;
  }
  
  .carousel-control.next {
    right: 40px;
  }
  </style>
  