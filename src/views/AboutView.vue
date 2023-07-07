<template>
    <div class="testimonial-div">
      <h3>Testimonials</h3>
      <div class="card-div">
        <div class="testi-parent-div" v-for="testi in Testimonials" :key="testi">
        <div class="testi-card">
          <div><img :src="testi.Card.image" :alt="image"></div>
        </div>
      </div>
      </div>
    </div>
</template>
<script>
import TestimonialsData from "../db.json";

export default {
    data() {
    return{
        Testimonials: TestimonialsData.Testimonials,
    }
}
}
</script>
<style scoped>
.testimonial-div {
  border-radius: 1vw;
  margin: 1vw;
  padding: 1vw;
  background-color: #f0f0f0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.card-div {
  display: flex;
  align-items: center;
  justify-content: center;
}
.testi-card {
  margin: 0.8vw;
}
.testi-card img {
  border-radius: 1vw;
  width: 17vw;
  height: 17vw;
}
</style>