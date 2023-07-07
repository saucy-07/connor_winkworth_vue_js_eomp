<template>
  <nav>
    <div class="nav-links">
      <div class="nav-title-div">
        <h3>CONNOR WINKWORTH</h3>
      </div>
      <div class="nav-link-div">
        <li><router-link class="router-link" to="/">HOME</router-link></li>
        <li>
          <router-link class="router-link" to="/resume">RESUME</router-link>
        </li>
        <li>
          <router-link class="router-link" to="/about"
            >ABOUT</router-link
          >
        </li>
        <li>
          <router-link class="router-link" to="/contact"
            >CONTACT ME</router-link
          >
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarComp",
};
</script>

<style scoped>
@keyframes fadeInAnimation1 {
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
nav {
  animation-name: fadeInAnimation1;
  animation-delay: 0.1s;
  animation-iteration-count: 1;
  animation-duration: 1s;
  animation-fill-mode: both;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  width: auto;
  margin: 0;
  background-color: rgb(0, 0, 0);
  padding: 15px;
}
.nav-title-div {
  margin-top: 1vw;
  margin-bottom: 1vw;
}
.nav-title-div h3 {
  color: #f9d949;
  margin: 0;
}
.nav-links {
  margin-top: 0vw;
  margin-bottom: 0vw;
  display: flex;
}
.nav-link-div {
  margin-top: 1vw;
  margin-bottom: 1vw;
  margin-left: auto;
  list-style: none;
  display: flex;
  align-items: center;
}
.nav-link-div li {
  padding: 0px 5px 0px 5px;
}
.router-link {
  text-decoration: none;
}
</style>
