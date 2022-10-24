<template>
  <div class="container-center-horizontal">
    <div class="macbook-pro-16-4 screen">
      <frame159 />
      <div class="flex-row">
        <div class="frame-170">
          <div class="address teddy-72-regular-normal-white-20px">
            {{ address }}
          </div>
          <div class="frame-169">
            <h1 class="text-1 teddy-72-black-white-48px">{{ text1 }}</h1>
            <div class="frame-34">
              <img
                class="vector"
                src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/vector@2x.svg"
                alt="Vector"
              />
              <div class="percent">{{ percent }}</div>
              <div class="compared-to-last-year">{{ comparedToLastYear }}</div>
            </div>
          </div>
        </div>
        <div class="flex-col">
          <div class="frame-container">
            <div class="frame-34-1">
              <div class="title teddy-72-bold-comet-16px">{{ title1 }}</div>
              <div class="value teddy-72-black-white-48px">{{ value1 }}</div>
            </div>
            <div class="frame-171">
              <div class="title teddy-72-bold-comet-16px">{{ title2 }}</div>
              <div class="value teddy-72-black-white-48px">{{ value2 }}</div>
            </div>
            <div class="frame-172">
              <div class="title teddy-72-bold-comet-16px">{{ title3 }}</div>
              <div class="value teddy-72-black-white-48px">{{ value3 }}</div>
            </div>
          </div>
          <div class="frame-34-2">
            <mini-indicators-balance
              :value="miniIndicatorsBalanceProps.value"
              :title="miniIndicatorsBalanceProps.title"
            />
            <mini-indicators-active-users
              :value="miniIndicatorsActiveUsersProps.value"
              :title="miniIndicatorsActiveUsersProps.title"
            />
            <mini-indicators-statistics
              :value="miniIndicatorsStatisticsProps.value"
              :title="miniIndicatorsStatisticsProps.title"
            />
          </div>
        </div>
      </div>
      <div class="flex-row-1">
        <div class="frame-1026">
          <x-table :name="xTable1Props.name" />
          <x-table
            :name="xTable2Props.name"
            :className="xTable2Props.className"
          />
          <x-table :name="xTable3Props.name" />
          <x-table
            :name="xTable4Props.name"
            :className="xTable4Props.className"
          />
        </div>
        <div class="overlap-group5">
          <div class="bg_lines"></div>
          <div class="bg_lines-1"></div>
          <div class="bg_lines-2"></div>
          <div class="bg_lines-3"></div>
          <div class="bg_lines-4"></div>
          <div class="group-33">
            <div class="frame-container-1">
              <frame160
                :amount="frame1601Props.amount"
                :titleProps="frame1601Props.titleProps"
              />
              <frame160
                :amount="frame1602Props.amount"
                :className="frame1602Props.className"
                :titleProps="frame1602Props.titleProps"
              />
              <frame160
                :amount="frame1603Props.amount"
                :className="frame1603Props.className"
                :titleProps="frame1603Props.titleProps"
              />
              <frame160
                :amount="frame1604Props.amount"
                :className="frame1604Props.className"
                :titleProps="frame1604Props.titleProps"
              />
            </div>
            <div class="vector-container">
              <img
                class="vector-1"
                src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/vector-1@2x.svg"
                alt="Vector 1"
              />
              <img
                class="vector-2"
                src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/vector-2@2x.svg"
                alt="Vector 2"
              />
              <img
                class="vector-3"
                src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/vector-3@2x.svg"
                alt="Vector 3"
              />
              <img
                class="vector-4"
                src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/vector-4@2x.svg"
                alt="Vector 4"
              />
            </div>
            <div class="cloud-solution" v-html="cloudSolution"></div>
            <div class="overlap-group2">
              <div class="overlap-group1">
                <img
                  class="vector-5"
                  src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/vector-5@2x.svg"
                  alt="Vector 5"
                />
                <img
                  class="vector-6"
                  src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/vector-6@2x.svg"
                  alt="Vector 6"
                />
                <img
                  class="vector-7"
                  src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/vector-7@2x.svg"
                  alt="Vector 7"
                />
                <img
                  class="vector-8"
                  src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/vector-8@2x.svg"
                  alt="Vector 8"
                />
                <frame166
                  :amount="frame1661Props.amount"
                  :titleProps="frame1661Props.titleProps"
                />
              </div>
              <frame166
                :amount="frame1662Props.amount"
                :className="frame1662Props.className"
                :titleProps="frame1662Props.titleProps"
              />
              <div class="frame-165">
                <x-title :children="xTitle1Props.children" />
                <div class="value-1">
                  <div
                    class="amount valign-text-middle opensans-bold-white-24px"
                  >
                    {{ amount1 }}
                  </div>
                  <img
                    class="arrow-up"
                    src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/arrow-up@2x.svg"
                    alt="Arrow up"
                  />
                </div>
              </div>
              <div class="frame-167">
                <x-title :children="xTitle2Props.children" />
                <div class="value-1">
                  <div
                    class="amount valign-text-middle opensans-bold-white-24px"
                  >
                    {{ amount2 }}
                  </div>
                  <img
                    class="arrow-up"
                    src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/arrow-up-3@2x.svg"
                    alt="Arrow up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame159 from "./Frame159";
import MiniIndicatorsBalance from "./MiniIndicatorsBalance";
import MiniIndicatorsActiveUsers from "./MiniIndicatorsActiveUsers";
import MiniIndicatorsStatistics from "./MiniIndicatorsStatistics";
import xTable from "./xTable";
import Frame160 from "./Frame160";
import Frame166 from "./Frame166";
import xTitle from "./xTitle";
export default {
  name: "MacBookPro164",
  components: {
    Frame159,
    MiniIndicatorsBalance,
    MiniIndicatorsActiveUsers,
    MiniIndicatorsStatistics,
    xTable,
    Frame160,
    Frame166,
    xTitle,
  },
  props: [
    "address",
    "text1",
    "percent",
    "comparedToLastYear",
    "title1",
    "value1",
    "title2",
    "value2",
    "title3",
    "value3",
    "cloudSolution",
    "amount1",
    "amount2",
    "miniIndicatorsBalanceProps",
    "miniIndicatorsActiveUsersProps",
    "miniIndicatorsStatisticsProps",
    "xTable1Props",
    "xTable2Props",
    "xTable3Props",
    "xTable4Props",
    "frame1601Props",
    "frame1602Props",
    "frame1603Props",
    "frame1604Props",
    "frame1661Props",
    "frame1662Props",
    "xTitle1Props",
    "xTitle2Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.macbook-pro-16-4
  align-items: flex-start
  background-color: #05050f
  border: 1px none
  cursor: pointer
  display: flex
  flex-direction: column
  height: 1117px
  padding: 40px 58px
  position: relative
  width: 1728px

.flex-row
  align-items: flex-start
  display: flex
  gap: 48px
  height: 168px
  margin-left: 2px
  margin-top: 55px
  min-width: 1301px

.frame-170
  -webkit-backdrop-filter: blur(60px) brightness(100%)
  align-items: flex-start
  backdrop-filter: blur(60px) brightness(100%)
  background: linear-gradient(180deg, rgb(227, 35, 255) 0%, rgb(117, 23, 248) 100%)
  border: 2px solid
  border-color: transparent
  border-image: linear-gradient(to bottom, rgb(227, 35, 255), rgb(117, 23, 248)) 1
  border-radius: 20px
  box-shadow: 0px 4px 30px #0000002b
  display: flex
  flex-direction: column
  gap: 10px
  padding: 20px
  width: fit-content

.address
  letter-spacing: 0.40px
  margin-top: -2.00px
  width: fit-content

.frame-169
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 10px
  width: 360px

.text-1
  letter-spacing: 0
  margin-top: -1.00px
  width: fit-content

.frame-34
  align-items: center
  border: 1px none
  display: flex
  gap: 20px
  width: fit-content

.vector
  height: 11.59px
  min-width: 21.18px

.percent
  color: $cyan--aqua
  font-family: $font-family-teddy-72-bold
  font-size: $font-size-xxxxl
  font-weight: 700
  letter-spacing: 0.48px
  margin-top: -1.00px
  width: fit-content

.compared-to-last-year
  color: $white
  font-family: $font-family-teddy-72-light
  font-size: $font-size-l
  font-weight: 300
  letter-spacing: 0.28px
  width: fit-content

.flex-col
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 39px
  min-height: 168px
  width: 853px

.frame-container
  align-items: flex-start
  display: flex
  height: 75px
  margin-left: 1px
  min-width: 755px

.frame-34-1
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 4px
  width: fit-content

.title
  letter-spacing: 0
  line-height: 16px
  margin-top: -1.00px
  text-align: center
  white-space: nowrap
  width: fit-content

.value
  letter-spacing: 0
  text-align: center
  width: fit-content

.frame-171
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 4px
  margin-left: 124px
  width: fit-content

.frame-172
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 4px
  margin-left: 99px
  width: fit-content

.frame-34-2
  align-items: flex-end
  border: 1px none
  display: flex
  gap: 60px
  position: relative
  width: fit-content

.flex-row-1
  align-items: center
  align-self: flex-end
  display: flex
  gap: 20px
  margin-top: 48px
  min-width: 1610px

.frame-1026
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 40px
  margin-top: 3.0px
  position: relative
  width: fit-content

.overlap-group5
  height: 661px
  position: relative
  width: 1390px

.bg_lines
  background-color: $shark
  border: 1px solid
  border-color: $mulled-wine
  border-radius: 250px
  height: 500px
  left: 278px
  position: absolute
  top: 36px
  width: 500px

.bg_lines-1
  background-color: $shark
  border: 1px solid
  border-color: $mulled-wine
  border-radius: 150px
  height: 300px
  left: 928px
  position: absolute
  top: 296px
  width: 300px

.bg_lines-2
  background-color: $shark
  border: 1px solid
  border-color: $mulled-wine
  border-radius: 150px
  height: 300px
  left: 130px
  position: absolute
  top: 361px
  width: 300px

.bg_lines-3
  background-color: $shark
  border: 1px solid
  border-color: $mulled-wine
  border-radius: 238px
  height: 476px
  left: 502px
  position: absolute
  top: 142px
  width: 476px

.bg_lines-4
  background-color: $shark
  border: 1px solid
  border-color: $mulled-wine
  border-radius: 250px
  height: 500px
  left: 778px
  position: absolute
  top: 0
  width: 500px

.group-33
  align-items: flex-start
  display: flex
  height: 570px
  left: 0
  min-width: 1390px
  position: absolute
  top: 66px

.frame-container-1
  align-items: flex-start
  display: flex
  flex-direction: column
  min-height: 570px
  position: relative
  width: 228px

.vector-container
  height: 592px
  margin-top: -16px
  position: relative
  width: 380px

.vector-1
  height: 341px
  left: 0
  position: absolute
  top: 0
  width: 380px

.vector-2
  height: 159px
  left: 0
  position: absolute
  top: 172px
  width: 380px

.vector-3
  height: 180px
  left: 0
  position: absolute
  top: 252px
  width: 380px

.vector-4
  height: 340px
  left: 0
  position: absolute
  top: 252px
  width: 380px

.cloud-solution
  align-self: center
  color: $white
  font-family: $font-family-teddy-72-black
  font-size: 36px
  font-weight: 900
  letter-spacing: 0
  margin-bottom: 20.0px
  margin-left: 1px
  min-height: 82px
  text-align: center
  width: 216px

.overlap-group2
  height: 570px
  position: relative
  width: 563px

.overlap-group1
  height: 537px
  left: 0
  position: absolute
  top: 19px
  width: 563px

.vector-5
  height: 271px
  left: 3px
  position: absolute
  top: 0
  width: 330px

.vector-6
  height: 129px
  left: 0
  position: absolute
  top: 152px
  width: 335px

.vector-7
  height: 161px
  left: 0
  position: absolute
  top: 226px
  width: 336px

.vector-8
  height: 301px
  left: 0
  position: absolute
  top: 236px
  width: 334px

.frame-165
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  left: 335px
  position: absolute
  top: 160px
  width: fit-content

.value-1
  align-items: flex-end
  border: 1px none
  display: flex
  gap: 6px
  justify-content: center
  width: 228px

.amount
  letter-spacing: 0
  line-height: 36px
  margin-top: -1.00px
  text-align: center
  white-space: nowrap
  width: fit-content

.arrow-up
  height: 26px
  min-width: 14px

.frame-167
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  left: 335px
  position: absolute
  top: 502px
  width: fit-content
</style>
