<template>
  <div class="mini-indicators-active-users">
    <div class="overlap-group3">
      <div class="value-4">
        <div class="value-5 valign-text-middle opensans-bold-white-24px">
          {{ value }}
        </div>
      </div>
      <div class="title-2 valign-text-middle opensans-normal-white-16px">
        {{ title }}
      </div>
    </div>
    <div class="overlap-group2-1">
      <div class="icon-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniIndicatorsActiveUsers",
  props: ["value", "title"],
};
</script>

<style lang="sass">
@import '../../variables'

.mini-indicators-active-users
  border: 1px none
  height: 54px
  min-width: 236px
  position: relative

.overlap-group3
  height: 55px
  left: 58px
  position: absolute
  top: -1px
  width: 106px

.value-4
  align-items: flex-start
  border: 1px none
  display: flex
  gap: 6px
  left: 0
  position: absolute
  top: 19px
  width: fit-content

.value-5
  letter-spacing: 0
  line-height: 36px
  margin-top: -1.00px
  white-space: nowrap
  width: fit-content

.title-2
  height: 24px
  left: 0
  letter-spacing: 0.44px
  line-height: 24px
  position: absolute
  top: 0
  white-space: nowrap

.overlap-group2-1
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

.icon-1
  background-image: url(https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/user-vip@2x.svg)
  background-size: 100% 100%
  height: 24px
  width: 24px
</style>
