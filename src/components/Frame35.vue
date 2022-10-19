<template>
  <div :class="[`frame-35-2-1`, className || ``]">
    <div class="value-12 teddy-72-bold-white-16-8px">{{ value }}</div>
    <img
      class="arro-2"
      src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/arro@2x.svg"
      alt="arro"
    />
  </div>
</template>

<script>
export default {
  name: "Frame35",
  props: ["value", "className"],
};
</script>

<style lang="sass">
.frame-35-2-1
  align-items: center
  border: 1px none
  display: flex
  gap: 10px
  justify-content: center
  width: fit-content

.value-12
  letter-spacing: 0.13px
  line-height: 26.8px
  margin-top: -1.00px
  text-align: center
  white-space: nowrap
  width: fit-content

.arro-2
  height: 7.33px
  min-width: 10px

.frame-35-2-1.frame-35-2-2 .arro-2
  height: 7.33px

.frame-35-2-1.frame-35-2 .arro-2
  height: 7.33px

.frame-35-2-1.frame-35-3-1 .arro-2,
.frame-35-2-1.frame-35-3-3 .arro-2,
.frame-35-2-1.frame-35-3 .arro-2
  min-width: 10px

.frame-35-2-1.frame-35-3-2 .arro-2
  height: 7.33px
  min-width: 10px

.frame-35-2-1.frame-35-3-4 .arro-2
  height: 7.33px
  min-width: 10px
</style>
