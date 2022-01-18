<template>
  <h1>{{ text }}</h1>
</template>

<script>
export default {
  Name: "Title",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
h1 {
  color: #FEA86D;
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 4px;
  margin: 0 0 1em 0;
  text-transform: uppercase;
}
</style>
