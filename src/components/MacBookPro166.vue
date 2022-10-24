<template>
  <div class="container-center-horizontal">
    <div class="macbook-pro-16-6 screen">
      <div
        class="flex-col-1"
        :style="{ 'background-image': 'url(' + flexCol + ')' }"
      >
        <div class="frame-container-2">
          <frame159 :className="frame159Props.className" />
          <div class="frame-34-3">
            <div
              class="carbon-footprint-tracking-on-itsm teddy-72-black-white-48px"
            >
              {{ carbonFootprintTrackingOnItsm }}
            </div>
            <div class="frame-34-4">
              <div class="frame-1027">
                <div class="quarter">
                  <div class="period-3 teddy-72-bold-white-20px">
                    {{ period1 }}
                  </div>
                </div>
                <div class="frame-1027-item">
                  <div class="period teddy-72-bold-white-20px">
                    {{ period2 }}
                  </div>
                </div>
                <div class="frame-1027-item">
                  <div class="period teddy-72-bold-white-20px">
                    {{ period3 }}
                  </div>
                </div>
                <div class="frame-1027-item">
                  <div class="period teddy-72-bold-white-20px">
                    {{ period4 }}
                  </div>
                </div>
              </div>
              <div class="frame-6">
                <div class="surname teddy-72-black-white-20px">
                  {{ surname }}
                </div>
                <img
                  class="frame-4"
                  src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/frame-2@2x.svg"
                  alt="Frame"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex-row-2">
          <div class="frame-container-3">
            <div class="frame-10">
              <div class="period-1 teddy-72-italic-normal-white-14px">
                {{ period5 }}
              </div>
              <div class="frame-35-1">
                <div class="frame-35">
                  <div class="value-9 opensans-bold-cyan--aqua-48px">
                    {{ value }}
                  </div>
                  <img
                    class="arro"
                    src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/arro-3@2x.svg"
                    alt="arro"
                  />
                </div>
                <div class="period-2 teddy-72-light-white-12px">
                  {{ period6 }}
                </div>
              </div>
            </div>
            <div class="frame-10">
              <div class="period-1 teddy-72-italic-normal-white-14px">
                {{ period7 }}
              </div>
              <div class="frame-35">
                <div class="value-10 opensans-bold-cyan--aqua-48px">
                  <span class="opensans-bold-cyan--aqua-48px">{{
                    spanText1
                  }}</span
                  ><span class="opensans-bold-cyan--aqua-24px">{{
                    spanText2
                  }}</span>
                </div>
                <img
                  class="arro"
                  src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/arro-3@2x.svg"
                  alt="arro"
                />
              </div>
              <div class="period-2 teddy-72-light-white-12px">
                {{ period8 }}
              </div>
            </div>
            <div class="frame-10">
              <div class="period-1 teddy-72-italic-normal-white-14px">
                {{ period9 }}
              </div>
              <div class="frame-35">
                <div class="value-11 opensans-bold-cyan--aqua-48px">
                  <span class="opensans-bold-cyan--aqua-48px">{{
                    spanText3
                  }}</span
                  ><span class="opensans-bold-cyan--aqua-24px">{{
                    spanText4
                  }}</span>
                </div>
                <img
                  class="arro-1"
                  src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/arro-3@2x.svg"
                  alt="arro"
                />
              </div>
              <p class="period-2 teddy-72-black-white-12px">{{ period10 }}</p>
            </div>
          </div>
          <div class="bubble-container">
            <div class="bubble"></div>
            <div class="bubble-1"></div>
          </div>
          <div class="overlap-group3-1">
            <div class="overlap-group1-2">
              <div class="bg_lines-5"></div>
              <div class="bg_lines-6"></div>
              <group34 />
              <div class="bubble-2"></div>
              <div class="bubble-3"></div>
              <div class="bubble-4"></div>
              <div class="bubble-5"></div>
              <div class="bubble-6"></div>
              <div class="bubble-7"></div>
              <div class="bubble-8"></div>
              <div class="bubble-9"></div>
              <div class="bubble-10"></div>
              <div class="bubble-11"></div>
              <div class="bubble-12"></div>
              <div class="bubble-13"></div>
              <div class="bubble-14"></div>
              <div class="bubble-15"></div>
              <div class="bubble-16"></div>
              <div class="bubble-17"></div>
              <div class="bubble-18"></div>
              <div class="bubble-19"></div>
              <div class="investments">
                <div class="tittle">{{ tittle1 }}</div>
                <frame1028
                  :frame35Props="frame1028Props.frame35Props"
                  :frame352Props="frame1028Props.frame352Props"
                />
              </div>
              <div class="investments-1">
                <div class="tittle-1 teddy-72-black-white-14px">
                  {{ tittle2 }}
                </div>
                <div class="frame-1028">
                  <div class="frame-3">
                    <div class="tittle-2 teddy-72-regular-normal-white-10px">
                      {{ tittle3 }}
                    </div>
                    <frame35
                      :value="frame35Props.value"
                      :className="frame35Props.className"
                    />
                  </div>
                  <div class="frame-3">
                    <div class="tittle-3 teddy-72-regular-normal-white-10px">
                      {{ tittle4 }}
                    </div>
                    <frame352 :children="frame352Props.children" />
                  </div>
                </div>
              </div>
              <investments
                :tittle="investments1Props.tittle"
                :frame353Props="investments1Props.frame353Props"
              />
              <investments
                :tittle="investments2Props.tittle"
                :className="investments2Props.className"
                :frame353Props="investments2Props.frame353Props"
              />
            </div>
            <div class="bubble-20"></div>
            <div class="overlap-group2-2">
              <investments2
                :tittle="investments2Props2.tittle"
                :frame1028Props="investments2Props2.frame1028Props"
              />
            </div>
            <div class="bubble-21"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Frame159 from "./Frame159";
import Group34 from "./Group34";
import Frame1028 from "./Frame1028";
import Frame35 from "./Frame35";
import Frame352 from "./Frame352";
import Investments from "./Investments";
import Investments2 from "./Investments2";
export default {
  name: "MacBookPro166",
  components: {
    Frame159,
    Group34,
    Frame1028,
    Frame35,
    Frame352,
    Investments,
    Investments2,
  },
  props: [
    "flexCol",
    "carbonFootprintTrackingOnItsm",
    "period1",
    "period2",
    "period3",
    "period4",
    "surname",
    "period5",
    "value",
    "period6",
    "period7",
    "spanText1",
    "spanText2",
    "period8",
    "period9",
    "spanText3",
    "spanText4",
    "period10",
    "tittle1",
    "tittle2",
    "tittle3",
    "tittle4",
    "frame159Props",
    "frame1028Props",
    "frame35Props",
    "frame352Props",
    "investments1Props",
    "investments2Props",
    "investments2Props2",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.macbook-pro-16-6
  align-items: flex-start
  background-color: $chicago
  border: 1px none
  cursor: pointer
  display: flex
  height: 1117px
  width: 1728px

.flex-col-1
  align-items: center
  background-position: 50% 50%
  background-size: cover
  display: flex
  flex-direction: column
  gap: 60px
  min-height: 1117px
  padding: 40px 0
  width: 1728px

.frame-container-2
  align-items: center
  display: flex
  flex-direction: column
  gap: 60px
  min-height: 249px
  position: relative
  width: 1608px

.frame-34-3
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 20px
  width: fit-content

.carbon-footprint-tracking-on-itsm
  letter-spacing: 0
  margin-top: -1.00px
  width: fit-content

.frame-34-4
  align-items: center
  border: 1px none
  display: flex
  justify-content: space-between
  width: 1548px

.frame-1027
  align-items: flex-end
  border: 1px none
  display: flex
  gap: 30px
  width: fit-content

.quarter
  align-items: flex-start
  background: linear-gradient(180deg, rgba(69, 135, 233, 0.7) 0%, rgba(96, 155, 243, 0.7) 100%)
  border: 40px solid
  border-color: transparent
  border-image: linear-gradient(to bottom, rgba(135, 105, 255, 0.46), rgba(96, 208, 243, 0.8)) 1
  border-radius: 100px
  display: flex
  gap: 10px
  padding: 10px 20px
  width: fit-content

.period-3
  letter-spacing: 0
  line-height: 24px
  margin-top: -40.00px
  text-align: center
  white-space: nowrap
  width: fit-content

.frame-1027-item
  align-items: flex-start
  border: 1.26px none
  display: flex
  gap: 10px
  padding: 10px 20px
  width: fit-content

.period
  letter-spacing: 0
  line-height: 24px
  margin-top: -1.26px
  text-align: center
  white-space: nowrap
  width: fit-content

.frame-6
  align-items: center
  background-color: $white-2
  border: 1px solid
  border-color: $white
  border-radius: 12px
  display: flex
  justify-content: space-between
  padding: 10px 20px
  width: 200px

.surname
  letter-spacing: 0.40px
  margin-top: -1.00px
  width: fit-content

.frame-4
  height: 20px
  min-width: 20px

.flex-row-2
  align-items: center
  display: flex
  margin-right: 158.0px
  min-width: 1390px

.frame-container-3
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 100px
  margin-top: 17.42px
  min-height: 589px
  width: 292px

.frame-10
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 10px
  width: fit-content

.period-1
  letter-spacing: 0
  line-height: 24px
  margin-top: -1.00px
  white-space: nowrap
  width: fit-content

.frame-35-1
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  width: fit-content

.frame-35
  align-items: center
  border: 1px none
  display: flex
  gap: 10px
  justify-content: center
  width: fit-content

.value-9,
.value-10,
.value-11,
.tittle-2,
.tittle-3
  letter-spacing: 0
  margin-top: -1.00px
  text-align: center
  width: fit-content

.arro
  height: 15.33px
  min-width: 22px

.period-2
  letter-spacing: 0
  line-height: 24px
  white-space: nowrap
  width: fit-content

.arro-1
  height: 15.33px
  min-width: 22px

.bubble-container
  align-items: flex-end
  display: flex
  flex-direction: column
  gap: 326px
  margin-bottom: 45.58px
  margin-left: 100px
  min-height: 436px
  width: 63px

.bubble
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 30px
  box-shadow: inset 8.38px 16.75px 41.88px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 60px
  margin-right: 3px
  width: 60px

.bubble-1
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 16.75px 25.12px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 50px
  width: 50px

.overlap-group3-1
  height: 652px
  margin-left: 12px
  position: relative
  width: 923px

.overlap-group1-2
  height: 652px
  left: 0
  position: absolute
  top: 0
  width: 791px

.bg_lines-5
  border: 0.84px solid
  border-color: $ebony-clay
  border-radius: 271.35px
  height: 543px
  left: 121px
  position: absolute
  top: 54px
  width: 543px

.bg_lines-6
  border: 0.84px solid
  border-color: $ebony-clay
  border-radius: 325.79px
  height: 652px
  left: 66px
  position: absolute
  top: 0
  width: 652px

.bubble-2
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 50px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 100px
  left: 548px
  position: absolute
  top: 280px
  width: 100px

.bubble-3
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 16.75px 25.12px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 50px
  left: 514px
  position: absolute
  top: 528px
  width: 50px

.bubble-4
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 30px
  box-shadow: inset 8.38px 16.75px 41.88px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 60px
  left: 413px
  position: absolute
  top: 0
  width: 60px

.bubble-5
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 20px
  box-shadow: inset 8.38px 16.75px 41.88px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 40px
  left: 130px
  position: absolute
  top: 374px
  width: 40px

.bubble-6
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 50px
  left: 212px
  position: absolute
  top: 194px
  width: 50px

.bubble-7
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 50px
  left: 581px
  position: absolute
  top: 465px
  width: 50px

.bubble-8
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 50px
  left: 363px
  position: absolute
  top: 521px
  width: 50px

.bubble-9
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 50px
  left: 642px
  position: absolute
  top: 204px
  width: 50px

.bubble-10
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 50px
  left: 369px
  position: absolute
  top: 99px
  width: 50px

.bubble-11
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 40px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 80px
  left: 19px
  position: absolute
  top: 360px
  width: 80px

.bubble-12
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 30px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 60px
  left: 685px
  position: absolute
  top: 409px
  width: 60px

.bubble-13
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 30px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 60px
  left: 460px
  position: absolute
  top: 439px
  width: 60px

.bubble-14
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 80px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 160px
  left: 162px
  position: absolute
  top: 457px
  width: 160px

.bubble-15
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 60px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 120px
  left: 553px
  position: absolute
  top: 80px
  width: 120px

.bubble-16
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 40px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 80px
  left: 711px
  position: absolute
  top: 80px
  width: 80px

.bubble-17
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 80px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 160px
  left: 0
  position: absolute
  top: 146px
  width: 160px

.bubble-18
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 20px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 40px
  left: 162px
  position: absolute
  top: 74px
  width: 40px

.bubble-19
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 20px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 40px
  left: 182px
  position: absolute
  top: 306px
  width: 40px

.investments
  align-items: center
  border: 0.84px none
  display: flex
  flex-direction: column
  gap: 20px
  left: 320px
  position: absolute
  top: 229px
  width: fit-content

.tittle
  color: $white
  font-family: $font-family-teddy-72-black
  font-size: $font-size-xl
  font-weight: 900
  letter-spacing: 0
  margin-top: -0.84px
  text-align: center
  width: 160px

.investments-1
  align-items: center
  border: 0.84px none
  display: flex
  flex-direction: column
  gap: 10px
  left: 20px
  position: absolute
  top: 170px
  width: fit-content

.tittle-1
  letter-spacing: 0
  margin-top: -0.84px
  text-align: center
  width: 120px

.frame-1028
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  gap: 10px
  width: fit-content

.frame-3
  align-items: center
  border: 1px none
  display: flex
  flex-direction: column
  position: relative
  width: fit-content

.bubble-20
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 20px
  box-shadow: inset 8.38px 16.75px 41.88px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 40px
  left: 718px
  position: absolute
  top: 499px
  width: 40px

.overlap-group2-2
  align-items: flex-end
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border-radius: 100px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  display: flex
  height: 200px
  left: 723px
  min-width: 200px
  padding: 20px
  position: absolute
  top: 207px

.bubble-21
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 50px
  left: 0
  position: absolute
  top: 528px
  width: 50px
</style>
