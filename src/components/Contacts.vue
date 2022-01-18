<template>
  <div v-if="phoneNumber" class="contact-line" @click="goTo('tel:678154252')">
    <img src="@/assets/phone.svg" />
    <Paragraph class="contact" :text="phoneNumber" />
  </div>
  <div v-if="email" class="contact-line" @click="goTo('mailto:hectormartinezoria@gmail.com?Subject=Hi%20There!')">
    <img src="@/assets/email.svg" />
    <Paragraph class="contact" :text="email" />
  </div>
  <div v-if="email" class="contact-line" @click="goTo('https://www.linkedin.com/in/hmartinezoria/')">
    <img src="@/assets/linkedin.svg" />
   <Paragraph class="contact" :text="linkedIn" />
  </div>
</template>

<script>
import Paragraph from "@/components/Paragraph.vue";

export default {
  name: "Contacts",

  components: { Paragraph },

  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage;
    },

    contactsLabel() {
      return this.currentLanguage.resumeLabels.contacts;
    },

    contacts() {
      return this.currentLanguage.data.contacts;
    },

    phoneNumber() {
      return this.contacts.phone;
    },

    email() {
      return this.contacts.email;
    },

    linkedIn() {
      return this.contacts.linkedIn;
    },
  },

   methods: {
    goTo(link) {
      window.open(link, '_blank')
    },
  },
};
</script>

<style scoped>
.contact-line {
  display: flex;
  margin: 0 auto;
  align-items: center;
}

.contact-line img {
   width: 1em;
}

.contact {
  padding-left: 1em;
  margin: 0.25em;
}

.contact:hover {
  color: #4DB39E;
  transition: all 0.4s ease-out;
  cursor: pointer;
}
</style>
