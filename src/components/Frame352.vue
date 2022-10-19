<template>
  <div class="frame-35-4">
    <div class="value-14 teddy-72-bold-white-16-8px">{{ children }}</div>
  </div>
</template>

<script>
export default {
  name: "Frame352",
  props: ["children"],
};
</script>

<style lang="sass">
.frame-35-4,
.frame-35-5
  align-items: center
  border: 1px none
  display: flex
  gap: 10px
  justify-content: center
  width: fit-content

.value-14,
.value-15
  letter-spacing: 0.13px
  line-height: 26.8px
  margin-top: -1.00px
  text-align: center
  white-space: nowrap
  width: fit-content
</style>
