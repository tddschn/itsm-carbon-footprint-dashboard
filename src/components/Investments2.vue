<template>
  <div :class="[`investments-5`, className || ``]">
    <p class="tittle-8 teddy-72-black-white-14px">{{ tittle }}</p>
    <frame1028 :frame35Props="frame1028Props.frame35Props" :frame352Props="frame1028Props.frame352Props" />
  </div>
</template>

<script>
import Frame1028 from "./Frame1028";
export default {
  name: "Investments2",
  components: {
    Frame1028,
  },
  props: ["tittle", "className", "frame1028Props"],
};
</script>

<style lang="sass">
.investments-5
  align-items: center
  border: 0.84px none
  display: flex
  flex-direction: column
  gap: 20px
  position: relative
  width: fit-content

.tittle-8
  letter-spacing: 0
  margin-top: -0.84px
  text-align: center
  width: 160px

.investments-5.investments-6
  left: 20px
  position: absolute
  top: 142px
</style>
