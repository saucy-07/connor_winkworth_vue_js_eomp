import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    BasicInformation: [],
    Bibliography: [],
    Education: [],
    WorkExperience: [],
    Skills: [],
    Projects: [],
    Testimonials: [],
  },
  getters: {
    getBasicInformation: (state) => state.BasicInformation,
    getBibliography: (state) => state.Bibliography,
    getEducation: (state) => state.Education,
    getWorkExperience: (state) => state.WorkExperience,
    getSkills: (state) => state.Skills,
    getProjects: (state) => state.Projects,
    getTestimonials: (state) => state.Testimonials,
  },
  mutations: {
    setBasicInformation(state, data) {
      state.BasicInformation = data;
    },
    setBibliography(state, data) {
      state.Bibliography = data;
    },
    setEducation(state, data) {
      state.Education = data;
    },
    setWorkExperience(state, data) {
      state.WorkExperience = data;
    },
    setSkills(state, data) {
      state.Skills = data;
    },
    setProjects(state, data) {
      state.Projects = data;
    },
    setTestimonials(state, data) {
      state.Testimonials = data;
    },
  },
  actions: {
    async fetchBasicInformation({ commit }) {
      try {
        const response = await axios.get("https://saucy-07.github.io/db.json");
        const data = response.data;
        const BasicInformation = data.BasicInformation;
        commit("setBasicInformation", BasicInformation);
      } catch (error) {
        console.error("Error fetching Basic Information Data:", error);
      }
    },
    async fetchBibliography({ commit }) {
      try {
        const response = await axios.get("https://saucy-07.github.io/db.json");
        const data = response.data;
        const Bibliography = data.Bibliography;
        commit("setBibliography", Bibliography);
      } catch (error) {
        console.error("Error fetching Bibliography Data:", error);
      }
    },
    async fetchEducation({ commit }) {
      try {
        const response = await axios.get("https://saucy-07.github.io/db.json");
        const data = response.data;
        const Education = data.Education;
        commit("setEducation", Education);
      } catch (error) {
        console.error("Error fetching Education Data:", error);
      }
    },
    async fetchWorkExperience({ commit }) {
      try {
        const response = await axios.get("https://saucy-07.github.io/db.json");
        const data = response.data;
        const WorkExperience = data.WorkExperience;
        commit("setWorkExperience", WorkExperience);
      } catch (error) {
        console.error("Error fetching Work Experience Data:", error);
      }
    },
    async fetchSkills({ commit }) {
      try {
        const response = await axios.get("https://saucy-07.github.io/db.json");
        const data = response.data;
        const Skills = data.Skills;
        commit("setSkills", Skills);
      } catch (error) {
        console.error("Error fetching Skills Data:", error);
      }
    },
    async fetchProjects({ commit }) {
      try {
        const response = await axios.get("https://saucy-07.github.io/db.json");
        const data = response.data;
        const Projects = data.Projects;
        commit("setProjects", Projects);
      } catch (error) {
        console.error("Error fetching Projects Data:", error);
      }
    },
    async fetchTestimonials({ commit }) {
      try {
        const response = await axios.get("https://saucy-07.github.io/db.json");
        const data = response.data;
        const Testimonials = data.Testimonials;
        commit("setTestimonials", Testimonials);
      } catch (error) {
        console.error("Error fetching Testimonial Data:", error);
      }
    },
  },
  modules: {},
});
