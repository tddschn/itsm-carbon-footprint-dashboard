<template>
  <div :class="[`frame-159`, className || ``]">
    <div class="logotype">
      <img
        class="logo"
        src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/logo@2x.svg"
        alt="Logo"
      />
      <div class="type teddy-72-bold-white-20px">SAP ITSM Carbon Footprint</div>
    </div>
    <div class="frame-33">
      <div class="frame-33-item teddy-72-black-white-18px">Dashboard</div>
      <div class="frame-33-item teddy-72-regular-normal-star-dust-18px">
        Settings
      </div>
      <img
        class="frame"
        src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/frame@2x.svg"
        alt="Frame"
      />
      <img
        class="frame"
        src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/frame-1@2x.svg"
        alt="Frame"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Frame159",
  props: ["className"],
};
</script>

<style lang="sass">
@import '../../variables'

.frame-159
  align-items: center
  align-self: center
  background-color: $log-cabin
  border: 1px none
  border-radius: 200px
  box-shadow: 0px 1px 10px #0000001a
  display: flex
  justify-content: space-between
  padding: 12px 20px
  width: 1608px

.logotype
  align-items: center
  border: 1px none
  display: flex
  gap: 20px
  padding: 8px 9px
  width: fit-content

.logo
  height: 46.07px
  margin-bottom: -8.04px
  margin-left: -8.04px
  margin-top: -8.04px
  min-width: 46.07px

.type
  letter-spacing: 0
  width: fit-content

.frame-33
  align-items: center
  border: 1px none
  display: flex
  gap: 60px
  width: fit-content

.frame-33-item
  letter-spacing: 0.36px
  width: fit-content

.frame
  height: 24px
  min-width: 24px

.frame-159.frame-159-1,
.frame-159.frame-159-2
  align-self: unset

.frame-159.frame-159-1 .logo,
.frame-159.frame-159-2 .logo
  min-width: 46.07px
</style>
