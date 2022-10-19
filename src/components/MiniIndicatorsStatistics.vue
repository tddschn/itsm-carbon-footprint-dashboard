<template>
  <div class="mini-indicators-statistics">
    <div class="indicator-1">
      <div class="value-6">
        <div class="overlap-group-1">
          <div class="value-7 valign-text-middle opensans-bold-white-24px">{{ value }}</div>
          <div class="title-3 valign-text-middle opensans-normal-white-16px">{{ title }}</div>
        </div>
      </div>
    </div>
    <div class="overlap-group4">
      <div class="icon-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniIndicatorsStatistics",
  props: ["value", "title"],
};
</script>

<style lang="sass">
@import '../../variables'

.mini-indicators-statistics
  border: 1px none
  height: 54px
  min-width: 256px
  position: relative

.indicator-1
  align-items: center
  border: 1px none
  display: flex
  gap: 14px
  left: 58px
  overflow: hidden
  position: absolute
  top: 0
  width: fit-content

.value-6
  height: 54px
  min-width: 172px

.overlap-group-1
  height: 54px
  position: relative
  width: 168px

.value-7
  height: 36px
  left: 0
  letter-spacing: 0
  line-height: 36px
  position: absolute
  top: 18px
  white-space: nowrap

.title-3
  height: 24px
  left: 0
  letter-spacing: 0.44px
  line-height: 24px
  position: absolute
  top: 0
  white-space: nowrap

.overlap-group4
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

.icon-2
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/pie@2x.svg)
  background-size: 100% 100%
  height: 24px
  width: 24px
</style>
