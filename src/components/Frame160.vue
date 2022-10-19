<template>
  <div :class="[`frame-160`, className || ``]">
    <x-title :children="titleProps.children" />
    <div class="amount-1 valign-text-middle opensans-bold-white-24px">{{ amount }}</div>
  </div>
</template>

<script>
import xTitle from "./xTitle";
export default {
  name: "Frame160",
  components: {
    xTitle,
  },
  props: ["amount", "className", "titleProps"],
};
</script>

<style lang="sass">
.frame-160
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  position: relative
  width: fit-content

.amount-1
  letter-spacing: 0
  line-height: 36px
  text-align: center
  white-space: nowrap
  width: 228px

.frame-160.frame-161
  margin-top: 94px

.frame-160.frame-162
  margin-top: 112px

.frame-160.frame-163
  margin-top: 92px
</style>
