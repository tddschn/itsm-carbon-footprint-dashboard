<template>
  <div class="container-center-horizontal">
    <div class="macbook-pro-16-5 screen">
      <div
        class="flex-col-2"
        :style="{ 'background-image': 'url(' + flexCol + ')' }"
      >
        <div class="frame-container-4">
          <frame159 :className="frame159Props.className" />
          <div class="frame-34-5">
            <div
              class="carbon-footprint-tracking-on-itsm-1 teddy-72-black-white-48px"
            >
              {{ carbonFootprintTrackingOnItsm }}
            </div>
            <div class="frame-34-6">
              <div class="frame-1028-3">
                <div class="quarter-1">
                  <div class="period-7 teddy-72-bold-white-20px">
                    {{ period1 }}
                  </div>
                </div>
                <div class="frame-1028-item">
                  <div class="period-4 teddy-72-bold-white-20px">
                    {{ period2 }}
                  </div>
                </div>
                <div class="frame-1028-item">
                  <div class="period-4 teddy-72-bold-white-20px">
                    {{ period3 }}
                  </div>
                </div>
                <div class="frame-1028-item">
                  <div class="period-4 teddy-72-bold-white-20px">
                    {{ period4 }}
                  </div>
                </div>
              </div>
              <div class="frame-6-1">
                <div class="incident teddy-72-black-white-20px">
                  {{ incident }}
                </div>
                <img
                  class="frame-5"
                  src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/frame-5@2x.svg"
                  alt="Frame"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex-row-3">
          <div class="frame-container-5">
            <div class="frame-10-1">
              <div class="period-5 teddy-72-italic-normal-white-14px">
                {{ period5 }}
              </div>
              <div class="frame-35-9">
                <div class="frame-35-8">
                  <div class="value-16 opensans-bold-cyan--aqua-48px">
                    {{ value }}
                  </div>
                  <img
                    class="arro-3"
                    src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/arro-3@2x.svg"
                    alt="arro"
                  />
                </div>
                <div class="period-6 teddy-72-light-white-12px">
                  {{ period6 }}
                </div>
              </div>
            </div>
            <div class="frame-10-1">
              <div class="period-5 teddy-72-italic-normal-white-14px">
                {{ period7 }}
              </div>
              <div class="frame-35-8">
                <div class="value-16 opensans-bold-cyan--aqua-48px">
                  <span class="opensans-bold-cyan--aqua-48px">{{
                    spanText1
                  }}</span
                  ><span class="opensans-bold-cyan--aqua-24px">{{
                    spanText2
                  }}</span>
                </div>
                <img
                  class="arro-3"
                  src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/arro-3@2x.svg"
                  alt="arro"
                />
              </div>
              <div class="period-6 teddy-72-light-white-12px">
                {{ period8 }}
              </div>
            </div>
            <div class="frame-10-1">
              <div class="period-5 teddy-72-italic-normal-white-14px">
                {{ period9 }}
              </div>
              <div class="frame-35-8">
                <div class="value-16 opensans-bold-cyan--aqua-48px">
                  <span class="opensans-bold-cyan--aqua-48px">{{
                    spanText3
                  }}</span
                  ><span class="opensans-bold-cyan--aqua-24px">{{
                    spanText4
                  }}</span>
                </div>
                <img
                  class="arro-4"
                  src="https://anima-uploads.s3.amazonaws.com/projects/634795d892cbf5aa39af8b08/releases/634795eb56dffe0dd51df4f3/img/arro-3@2x.svg"
                  alt="arro"
                />
              </div>
              <div class="period-6 teddy-72-black-white-12px">
                {{ period10 }}
              </div>
            </div>
          </div>
          <div class="overlap-group3-2">
            <div class="overlap-group4-1">
              <div class="overlap-group1-3">
                <div class="bg_lines-7"></div>
                <div class="bg_lines-8"></div>
                <group34 :className="group34Props.className" />
                <div class="bubble-24"></div>
                <div class="bubble-25"></div>
                <div class="bubble-26"></div>
                <div class="bubble-27"></div>
                <div class="bubble-28"></div>
                <div class="bubble-29"></div>
                <div class="bubble-30"></div>
                <div class="bubble-31"></div>
                <div class="bubble-32"></div>
                <div class="bubble-33"></div>
                <div class="bubble-34"></div>
                <div class="bubble-35"></div>
                <div class="bubble-36"></div>
                <div class="bubble-37"></div>
                <div class="bubble-38"></div>
                <div class="bubble-39"></div>
                <div class="bubble-40"></div>
                <div class="investments-7">
                  <div class="tittle-11 teddy-72-black-white-20px">
                    {{ tittle1 }}
                  </div>
                  <frame1028
                    :frame35Props="frame1028Props.frame35Props"
                    :frame352Props="frame1028Props.frame352Props"
                  />
                </div>
                <investments2
                  :tittle="investments2Props.tittle"
                  :className="investments2Props.className"
                  :frame1028Props="investments2Props.frame1028Props"
                />
                <investments
                  :tittle="investmentsProps.tittle"
                  :className="investmentsProps.className"
                  :frame353Props="investmentsProps.frame353Props"
                />
                <div class="investments-8">
                  <div class="tittle-10 teddy-72-black-white-12px">
                    {{ tittle2 }}
                  </div>
                  <frame353
                    :frame35Props="frame3531Props.frame35Props"
                    :frame352Props="frame3531Props.frame352Props"
                  />
                </div>
                <div class="tittle-12 teddy-72-black-white-12px">
                  {{ tittle3 }}
                </div>
              </div>
              <div class="bubble-41"></div>
              <div class="overlap-group2-3">
                <div class="investments-9">
                  <p class="tittle-10 teddy-72-black-white-12px">
                    {{ tittle4 }}
                  </p>
                  <frame353
                    :frame35Props="frame3532Props.frame35Props"
                    :frame352Props="frame3532Props.frame352Props"
                  />
                </div>
              </div>
              <div class="bubble-42"></div>
              <div class="bubble-43"></div>
            </div>
            <div class="bubble-44"></div>
            <div class="bubble-45"></div>
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
import Investments2 from "./Investments2";
import Investments from "./Investments";
import Frame353 from "./Frame353";
export default {
  name: "MacBookPro165",
  components: {
    Frame159,
    Group34,
    Frame1028,
    Investments2,
    Investments,
    Frame353,
  },
  props: [
    "flexCol",
    "carbonFootprintTrackingOnItsm",
    "period1",
    "period2",
    "period3",
    "period4",
    "incident",
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
    "group34Props",
    "frame1028Props",
    "investments2Props",
    "investmentsProps",
    "frame3531Props",
    "frame3532Props",
  ],
};
</script>

<style lang="sass">
@import '../../variables'

.macbook-pro-16-5
  align-items: flex-start
  background-color: $chicago
  border: 1px none
  cursor: pointer
  display: flex
  height: 1117px
  width: 1728px

.flex-col-2
  align-items: flex-start
  background-position: 50% 50%
  background-size: cover
  display: flex
  flex-direction: column
  gap: 60px
  min-height: 1117px
  padding: 40px 0
  width: 1728px

.frame-container-4
  align-items: center
  align-self: center
  display: flex
  flex-direction: column
  gap: 60px
  min-height: 249px
  position: relative
  width: 1608px

.frame-34-5
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 20px
  width: fit-content

.carbon-footprint-tracking-on-itsm-1
  letter-spacing: 0
  margin-top: -1.00px
  width: fit-content

.frame-34-6
  align-items: center
  border: 1px none
  display: flex
  justify-content: space-between
  width: 1548px

.frame-1028-3
  align-items: flex-end
  border: 1px none
  display: flex
  gap: 30px
  width: fit-content

.quarter-1
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

.period-7
  letter-spacing: 0
  line-height: 24px
  margin-top: -40.00px
  text-align: center
  white-space: nowrap
  width: fit-content

.frame-1028-item
  align-items: flex-start
  border: 1.26px none
  display: flex
  gap: 10px
  padding: 10px 20px
  width: fit-content

.period-4
  letter-spacing: 0
  line-height: 24px
  margin-top: -1.26px
  text-align: center
  white-space: nowrap
  width: fit-content

.frame-6-1
  align-items: center
  background-color: $white-2
  border: 1px solid
  border-color: $white
  border-radius: 12px
  display: flex
  justify-content: space-between
  padding: 10px 20px
  width: 200px

.incident
  letter-spacing: 0.40px
  margin-top: -1.00px
  width: fit-content

.frame-5
  height: 20px
  min-width: 20px

.flex-row-3
  align-items: center
  display: flex
  gap: 100px
  margin-left: 90px
  min-width: 1350px

.frame-container-5
  align-items: flex-start
  display: flex
  flex-direction: column
  gap: 100px
  margin-top: 17.42px
  min-height: 589px
  width: 292px

.frame-10-1
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  gap: 10px
  width: fit-content

.period-5
  letter-spacing: 0
  line-height: 24px
  margin-top: -1.00px
  white-space: nowrap
  width: fit-content

.frame-35-9
  align-items: flex-start
  border: 1px none
  display: flex
  flex-direction: column
  width: fit-content

.frame-35-8
  align-items: center
  border: 1px none
  display: flex
  gap: 10px
  justify-content: center
  width: fit-content

.value-16
  letter-spacing: 0
  margin-top: -1.00px
  text-align: center
  width: fit-content

.arro-3
  height: 15.33px
  min-width: 22px

.period-6
  letter-spacing: 0
  line-height: 24px
  white-space: nowrap
  width: fit-content

.arro-4
  height: 15.33px
  min-width: 22px

.overlap-group3-2
  height: 652px
  position: relative
  width: 958px

.overlap-group4-1
  height: 652px
  left: 45px
  position: absolute
  top: 0
  width: 913px

.overlap-group1-3
  height: 652px
  left: 18px
  position: absolute
  top: 0
  width: 803px

.bg_lines-7
  border: 0.84px solid
  border-color: $ebony-clay
  border-radius: 271.35px
  height: 543px
  left: 133px
  position: absolute
  top: 54px
  width: 543px

.bg_lines-8
  border: 0.84px solid
  border-color: $ebony-clay
  border-radius: 325.79px
  height: 652px
  left: 78px
  position: absolute
  top: 0
  width: 652px

.bubble-24
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 50px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 100px
  left: 560px
  position: absolute
  top: 280px
  width: 100px

.bubble-25
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 16.75px 25.12px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 50px
  left: 526px
  position: absolute
  top: 528px
  width: 50px

.bubble-26
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 30px
  box-shadow: inset 8.38px 16.75px 41.88px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 60px
  left: 425px
  position: absolute
  top: 0
  width: 60px

.bubble-27
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 20px
  box-shadow: inset 8.38px 16.75px 41.88px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 40px
  left: 142px
  position: absolute
  top: 374px
  width: 40px

.bubble-28
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 50px
  left: 227px
  position: absolute
  top: 127px
  width: 50px

.bubble-29
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 50px
  left: 593px
  position: absolute
  top: 465px
  width: 50px

.bubble-30
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 50px
  left: 375px
  position: absolute
  top: 521px
  width: 50px

.bubble-31
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 50px
  left: 654px
  position: absolute
  top: 204px
  width: 50px

.bubble-32
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 50px
  left: 381px
  position: absolute
  top: 99px
  width: 50px

.bubble-33
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 40px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 80px
  left: 31px
  position: absolute
  top: 360px
  width: 80px

.bubble-34
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 30px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 60px
  left: 697px
  position: absolute
  top: 409px
  width: 60px

.bubble-35
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 30px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 60px
  left: 472px
  position: absolute
  top: 439px
  width: 60px

.bubble-36
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 80px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 160px
  left: 160px
  position: absolute
  top: 444px
  width: 160px

.bubble-37
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 100px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 200px
  left: 0
  position: absolute
  top: 114px
  width: 200px

.bubble-38
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 60px
  box-shadow: inset 8.38px 16.75px 83.75px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 120px
  left: 513px
  position: absolute
  top: 57px
  width: 120px

.bubble-39
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 40px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 80px
  left: 723px
  position: absolute
  top: 80px
  width: 80px

.bubble-40
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 20px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 40px
  left: 174px
  position: absolute
  top: 74px
  width: 40px

.investments-7
  align-items: center
  border: 0.84px none
  display: flex
  flex-direction: column
  gap: 20px
  left: 326px
  position: absolute
  top: 229px
  width: fit-content

.tittle-11
  letter-spacing: 0
  margin-top: -0.84px
  text-align: center
  width: 160px

.investments-8
  align-items: center
  border: 0.84px none
  display: flex
  flex-direction: column
  gap: 10px
  left: 180px
  position: absolute
  top: 482px
  width: fit-content

.tittle-10
  letter-spacing: 0
  margin-top: -0.84px
  text-align: center
  width: 120px

.tittle-12
  left: 581px
  letter-spacing: 0
  position: absolute
  text-align: center
  top: 322px

.bubble-41
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 20px
  box-shadow: inset 8.38px 16.75px 41.88px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 40px
  left: 748px
  position: absolute
  top: 499px
  width: 40px

.overlap-group2-3
  align-items: flex-end
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border-radius: 80px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  display: flex
  height: 160px
  left: 753px
  min-width: 160px
  padding: 17px 20px
  position: absolute
  top: 219px

.investments-9
  align-items: center
  border: 0.84px none
  display: flex
  flex-direction: column
  gap: 10px
  position: relative
  width: fit-content

.bubble-42
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 50px
  left: 30px
  position: absolute
  top: 528px
  width: 50px

.bubble-43
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 20px
  box-shadow: inset 8.38px 13.4px 16.75px #8205fff2 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #2200f7
  height: 40px
  left: 0
  position: absolute
  top: 315px
  width: 40px

.bubble-44
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 25px
  box-shadow: inset 8.38px 16.75px 25.12px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 50px
  left: 13px
  position: absolute
  top: 471px
  width: 50px

.bubble-45
  background: radial-gradient(50% 50% at 50% 50%, rgb(50.19, 68.33, 231.63) 0%, rgba(0, 1.59, 15.94, 0) 100%)
  border: 0.84px none
  border-radius: 30px
  box-shadow: inset 8.38px 16.75px 41.88px #ff0505 , inset 0px 1.68px 8.38px #ffffff94 , 0px 3.35px 67px #f700767a
  height: 60px
  left: 0
  position: absolute
  top: 85px
  width: 60px
</style>
