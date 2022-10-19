<template>
  <div :class="[`table-1`, className || ``]">
    <div class="name teddy-72-regular-normal-white-20px">{{ name }}</div>
    <div class="graph">
      <div class="overlap-group-2">
        <div class="column"></div>
        <div class="column-1"></div>
        <div class="column-2"></div>
        <div class="column-3"></div>
        <img
          class="chart"
          src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/chart@2x.svg"
          alt="Chart"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "xTable",
  props: ["name", "className"],
};
</script>

<style lang="sass">
@import '../../variables'

.table-1
  align-items: flex-start
  background-color: $mirage
  border: 1px none
  border-radius: 10px
  display: flex
  flex-direction: column
  gap: 20px
  overflow: hidden
  padding: 20px
  width: 200px

.name
  letter-spacing: 0
  margin-top: -1.00px
  width: 98px

.graph
  height: 21px
  min-width: 68px

.overlap-group-2
  height: 21px
  position: relative
  width: 68px

.column
  background-color: $jaguar
  border: 1px none
  border-radius: 1px
  height: 21px
  left: 0
  opacity: 0.7
  position: absolute
  top: 0
  width: 17px

.column-1
  background-color: $jaguar
  border: 1px none
  border-radius: 1px
  height: 21px
  left: 19px
  opacity: 0.7
  position: absolute
  top: 0
  width: 14px

.column-2
  background-color: $jaguar
  border: 1px none
  border-radius: 1px
  height: 21px
  left: 35px
  opacity: 0.7
  position: absolute
  top: 0
  width: 14px

.column-3
  background-color: $jaguar
  border: 1px none
  border-radius: 1px
  height: 21px
  left: 51px
  opacity: 0.7
  position: absolute
  top: 0
  width: 17px

.chart
  height: 13px
  left: 0
  position: absolute
  top: 4px
  width: 68px

.table-1.table-2 .chart
  height: 10px
  top: 5px
  width: 67px

.table-1.table .chart
  height: 14px
  top: 5px
  width: 67px
</style>
