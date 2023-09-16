<template>
  <div>
    <div class="first-div">
      <div class="basic-info-div">
      <h3>Basic Information</h3>
      <div v-for="info in BasicInformation" :key="info">
        <h4>First Name: {{ info.firstName }}</h4>
        <h4>Surname: {{ info.surname }}</h4>
        <h4>Date of Birth: {{ info.dateOfBirth }}</h4>
        <h4>Gender: {{ info.gender }}</h4>
        <h4>Adress: {{ info.adress }}</h4>
      </div>
    </div>
    <div class="bibliography-div">
      <h3>Bibliography</h3>
      <div v-for="bibli in Bibliography" :key="bibli">
        <h4>{{bibli.text}}</h4>
      </div>
    </div>
    </div>
    <div class="second-div">
      <div class="edu-work-div">
      <div class="edu-div">
        <h3>Education</h3>
        <div v-for="edu in Education" :key="edu">
          <h4>2023: {{edu.frst}}</h4>
          <h4>2022: {{edu.scnd}}</h4>
          <h4>2018-2022: {{edu.thrd}}</h4>
          <h4>2010-2017: {{edu.frth}}</h4>
        </div>
      </div>
      <div class="work-div">
        <h3>Work Experience</h3>
        <div v-for="work in WorkExperience" :key="work">
          <h4>{{work.text}}</h4>
        </div>
      </div>
    </div>
    <div class="skills-div">
      <h3>Skills</h3>
      <div>
        <div v-for="skill in Skills" :key="skill">
          <h3>Hard Skills</h3>
          <div class="hard-skills">
          <img  :src="skill.hardSkills.htmlImg" :alt="html"/>
          <img :src="skill.hardSkills.githubImg" :alt="github"/>
          <img :src="skill.hardSkills.cssImg" :alt="css"/>
          <img :src="skill.hardSkills.bootstrapImg" :alt="bootstrap"/>
          </div>
          <h3>Soft Skills</h3>
          <div class="soft-skills">
            <h4><li>{{skill.softSkills.skillOne}}</li></h4>
            <h4><li>{{skill.softSkills.skillTwo}}</li></h4>
            <h4><li>{{skill.softSkills.skillThree}}</li></h4>
            <h4><li>{{skill.softSkills.skillThree}}</li></h4>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="projects-div">
      <h3>Projects</h3>
      <h4>Below are some links to my completed projects.</h4>
      <div class="pro-link-div" v-for="project in Projects" :key="project">
        <h4><li>{{project.linkOne}}</li></h4>
        <h4><li>{{project.linkTwo}}</li></h4>
        <h4><li>{{project.linkThree}}</li></h4>
        <h4><li>{{project.linkFour}}</li></h4>
        <h4><li>{{project.linkFive}}</li></h4>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  computed: {
    BasicInformation() {
      return this.$store.getters.getBasicInformation;
    },
    Bibliography() {
      return this.$store.getters.getBibliography;
    },
    Education() {
      return this.$store.getters.getEducation;
    },
    WorkExperience() {
      return this.$store.getters.getWorkExperience;
    },
    Skills() {
      return this.$store.getters.getSkills;
    },
    Projects() {
      return this.$store.getters.getProjects;
    },
  },
  mounted() {
    this.$store.dispatch('fetchBasicInformation');
    this.$store.dispatch('fetchBibliography');
    this.$store.dispatch('fetchEducation');
    this.$store.dispatch('fetchWorkExperience');
    this.$store.dispatch('fetchSkills');
    this.$store.dispatch('fetchProjects');
  },
};
</script>

<style scoped>
.first-div {
  display: flex;
}
.basic-info-div {
  text-align: left;
  width: 45vw;
  border-radius: 1vw;
  margin: 1vw;
  padding: 1vw;
  background-color: #f0f0f0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.bibliography-div {
  text-align: left;
  width: 45vw;
  border-radius: 1vw;
  margin: 1vw;
  padding: 1vw;
  background-color: #f0f0f0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.second-div {
  display: flex;
}
.edu-work-div {
  text-align: left;
  width: 45vw;
  border-radius: 1vw;
  margin: 1vw;
  padding: 1vw;
  background-color: #f0f0f0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.skills-div {
  text-align: left;
  width: 45vw;
  border-radius: 1vw;
  margin: 1vw;
  padding: 1vw;
  background-color: #f0f0f0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.hard-skills {
  text-align: center;
  
}
.hard-skills img {
  height: 10vw;
  width: 10vw;
}
.projects-div {
  list-style: none;
  border-radius: 1vw;
  margin: 1vw;
  padding: 1vw;
  background-color: #f0f0f0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
}
.pro-link-div {
  display: flex;
}
</style>