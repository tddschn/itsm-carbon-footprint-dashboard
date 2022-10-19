<template>
  <div class="frame-35-6">
    <frame35 :value="frame35Props.value" :className="frame35Props.className" />
    <frame352 :children="frame352Props.children" />
  </div>
</template>

<script>
import Frame35 from "./Frame35";
import Frame352 from "./Frame352";
export default {
  name: "Frame353",
  components: {
    Frame35,
    Frame352,
  },
  props: ["frame35Props", "frame352Props"],
};
</script>

<style lang="sass">
.frame-35-6,
.frame-35-7
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  position: relative
  width: fit-content
</style>
