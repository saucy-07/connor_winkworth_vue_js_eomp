<template>
<div class="first-div">
      <div class="connor-img-div">
        <img
          class="connor-img" src="https://i.postimg.cc/P5h2mDXc/C12-C2-Connor-Winkworth-1by1.jpg" alt="connor winkworth"/>
      </div>
      <div class="second-div">
        <div class="text-div">
          <h1>Hi, I'm Connor Winkworth</h1>
          <h2>Aspiring Web Designer</h2>
          <h2>Creative thinker</h2>
          <h2>Based in Cape Town</h2>
          <p>
            I am a hardworking individual, who is flexable and savvy when it
            comes to working in different conditions and with different people.
          </p>
        </div>
      </div>
    </div>
    <div class="third-div-outer">
      <h4 class="bottom-text">
        Please explore the rest of my portfolio using the navigation links.
      </h4>
    </div>
</template>

<script>

export default {
  name: 'HomeView',
  }

</script>

<style scoped>
@keyframes fadeInAnimation2 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.first-div {
  animation-name: fadeInAnimation2;
  animation-delay: 0.6s;
  animation-iteration-count: 1;
  animation-duration: 0.8s;
  animation-fill-mode: both;
  border-radius: 1vw;
  display: flex;
  margin: 1vw;
  padding: 1vw;
  background-color: #f0f0f0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

}
.connor-img-div {
  margin: 0;
  align-self: center;
  float: left;
  width: 40vw;
  height: 50%;
}
.connor-img-div img {
  border-radius: 1vw;
  height: 100%;
  width: 100%;
  float: left;
}
.second-div {
  display: flex;
  margin: 0 0 0 2vw;
  padding: 0;
  width: 60vw;
  height: 100%;
}
.text-div {
  align-items: center;
  text-align: left;
  justify-content: space-around;
}
h1 {
  padding-bottom: 0.5vw;
  margin: 0;
  font-size: 6vw;
}
h2 {
  padding-bottom: 0.5vw;
  margin: 0;
  font-size: 4vw;
}
p {
  margin: 0;
  font-size: 2vw;
}
.bottom-text {
  animation-name: fadeInAnimation2;
  animation-delay: 0.6s;
  animation-iteration-count: 1;
  animation-duration: 0.8s;
  animation-fill-mode: both;
}
</style>