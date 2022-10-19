<template>
  <div class="title-4">
    <div class="name-1 opensans-normal-white-20px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "xTitle",
  props: ["children"],
};
</script>

<style lang="sass">
.title-4
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  width: 228px

.name-1
  letter-spacing: 0.44px
  line-height: 32px
  margin-top: -1.00px
  text-align: center
  white-space: nowrap
  width: 225px
</style>
