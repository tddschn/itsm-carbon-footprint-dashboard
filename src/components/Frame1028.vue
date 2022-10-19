<template>
  <div class="frame-1028-1">
    <div class="frame-3-1">
      <div class="tittle-4 teddy-72-regular-normal-white-12px">Efficiency Improvement</div>
      <frame35 :value="frame35Props.value" :className="frame35Props.className" />
    </div>
    <div class="frame-3-1">
      <div class="tittle-4 teddy-72-regular-normal-white-12px">Carbon Consumption</div>
      <frame352 :children="frame352Props.children" />
    </div>
  </div>
</template>

<script>
import Frame35 from "./Frame35";
import Frame352 from "./Frame352";
export default {
  name: "Frame1028",
  components: {
    Frame35,
    Frame352,
  },
  props: ["frame35Props", "frame352Props"],
};
</script>

<style lang="sass">
.frame-1028-1,
.frame-1028-2
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 10px
  width: fit-content

.frame-3-1,
.frame-3-2
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  position: relative
  width: fit-content

.tittle-4,
.tittle-5
  letter-spacing: 0
  margin-top: -1.00px
  text-align: center
  width: fit-content
</style>
