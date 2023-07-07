<template>
  <div class="first-div">
    <div class="connor-img-div">
      <img
        class="connor-img"
        src="https://i.postimg.cc/JhSJ2WTY/20230512-125112.jpg"
        alt="connor winkworth"
      />
    </div>
    <div class="form-div">
      <form action="https://formspree.io/f/xwkjaayr" method="POST">
        <div class="contact-page-div">
          <div class="email-div">
            <p>Send a message:</p>
            <label> Your email: </label>
            <input
              placeholder="Type your email here"
              type="email"
              name="email"
            />
          </div>
          <div class="message-div">
            <label> Your message: </label>
            <br>
            <textarea
              placeholder="Type your message here"
              name="message"
            ></textarea>
          </div>
          <!-- your other form fields go here -->
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.first-div {
  display: flex;
  justify-content: center;
  width: 90vw;
  border-radius: 1vw;
  margin: auto;
  margin-top: 1vw;
  margin-bottom: 1vw;
  padding: 1vw;
  background-color: #f0f0f0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.connor-img-div{
  margin-right: auto;
}
.connor-img {
  border-radius: 1vw;
    width: 35vw;
    height: 100%;
}
.email-div {
  display: flex;
  flex-direction: column;
  background-color: transparent;
}
.form-div {
  margin-right: auto;
  justify-content: center;
  text-align: center;
}
textarea {
  width: 35vw;
  height: 20vw;
}
input {
  height: 2vw;
}
label {
  font-size: 25px;
}
button {
  width: 100px;
  height: 30px;
  background-color: rgb(242, 247, 1);
}
</style>
