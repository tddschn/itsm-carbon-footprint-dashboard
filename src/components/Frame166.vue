<template>
  <div :class="[`frame-166`, className || ``]">
    <x-title :children="titleProps.children" />
    <div class="value-8">
      <div class="amount-2 valign-text-middle opensans-bold-white-24px">
        {{ amount }}
      </div>
      <img
        class="arrow-up-1"
        src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/arrow-up@2x.svg"
        alt="Arrow up"
      />
    </div>
  </div>
</template>

<script>
import xTitle from "./xTitle";
export default {
  name: "Frame166",
  components: {
    xTitle,
  },
  props: ["amount", "className", "titleProps"],
};
</script>

<style lang="sass">
.frame-166
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  left: 335px
  position: absolute
  top: 321px
  width: fit-content

.value-8
  align-items: flex-end
  border: 1px none
  display: flex
  gap: 6px
  justify-content: center
  width: 228px

.amount-2
  letter-spacing: 0
  line-height: 36px
  margin-top: -1.00px
  text-align: center
  white-space: nowrap
  width: fit-content

.arrow-up-1
  height: 26px
  min-width: 14px

.frame-166.frame-164
  top: 0
</style>
