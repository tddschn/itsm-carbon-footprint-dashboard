<template>
  <div class="mini-indicators-balance">
    <div class="indicator">
      <div class="value-2">
        <div class="overlap-group">
          <div class="value-3 valign-text-middle opensans-bold-white-24px">{{ value }}</div>
          <div class="title-1 valign-text-middle opensans-normal-white-16px">{{ title }}</div>
        </div>
      </div>
    </div>
    <div class="overlap-group1-1">
      <div class="icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniIndicatorsBalance",
  props: ["value", "title"],
};
</script>

<style lang="sass">
@import '../../variables'

.mini-indicators-balance
  border: 1px none
  height: 54px
  min-width: 241px
  position: relative

.indicator
  align-items: center
  border: 1px none
  display: flex
  gap: 13px
  left: 58px
  overflow: hidden
  position: absolute
  top: 0
  width: fit-content

.value-2
  height: 54px
  min-width: 123px

.overlap-group
  height: 54px
  position: relative
  width: 119px

.value-3
  height: 36px
  left: 0
  letter-spacing: 0
  line-height: 36px
  position: absolute
  top: 18px
  white-space: nowrap

.title-1
  height: 24px
  left: 0
  letter-spacing: 0.44px
  line-height: 24px
  position: absolute
  top: 0
  white-space: nowrap

.overlap-group1-1
  align-items: flex-start
  border: 1px solid
  border-color: $rhino
  border-radius: 8px
  display: flex
  height: 46px
  left: 0
  min-width: 46px
  padding: 10px
  position: absolute
  top: 4px

.icon
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/favorite@2x.svg)
  background-size: 100% 100%
  height: 24px
  width: 24px
</style>
