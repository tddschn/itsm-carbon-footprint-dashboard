<template>
  <div :class="[`investments-2`, className || ``]">
    <div class="tittle-6 teddy-72-black-white-12px" v-html="tittle"></div>
    <frame353 :frame35Props="frame353Props.frame35Props" :frame352Props="frame353Props.frame352Props" />
  </div>
</template>

<script>
import Frame353 from "./Frame353";
export default {
  name: "Investments",
  components: {
    Frame353,
  },
  props: ["tittle", "className", "frame353Props"],
};
</script>

<style lang="sass">
.investments-2
  align-items: center
  border: 0.84px none
  display: flex
  flex-direction: column
  gap: 10px
  left: 553px
  position: absolute
  top: 91px
  width: fit-content

.tittle-6
  letter-spacing: 0
  margin-top: -0.84px
  text-align: center
  width: 120px

.investments-2.investments-3
  left: 182px
  top: 495px

.investments-2.investments-4
  left: 513px
  top: 68px
</style>
