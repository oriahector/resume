<template>
  <Title :text="skillsLabel" />
  <div class="skill-line" v-for="(skill, index) in skills" :key="index">
    <img class="circle" src="@/assets/circle.svg" />
    <Paragraph class="contact" :text="skill" />
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  Name: "Skills",

  components: { Title,Paragraph },

  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },

    resumeLabels() {
      return this.currentLanguage.resumeLabels;
    },

    skillsLabel() {
      return this.resumeLabels.skills;
    },

    professionalLabel() {
      return this.resumeLabels.professional;
    },

    skills() {
      return this.currentLanguage.data.skills;
    }
  }
};
</script>

<style scoped>
.circle {
  color: #FEA86D;
  width: 5px;
  margin-left: 8px;
}

.material-icons {
  display: inline-flex;
  align-items: center;
}

.skill-line {
  display: flex;
}

.contact {
  padding-left: calc(1em + 8px);
  margin: 0.05em;
}
</style>
