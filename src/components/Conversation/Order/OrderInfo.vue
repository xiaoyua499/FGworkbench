<template>
  <div class="order-collapse" ref="collapseRef">
    <el-collapse accordion v-model="activeNames">
      <el-collapse-item name="1" class="collapse-item">
        <template #title>
          <div class="item-letft">
            <div class="top">
              <h1 class="title">待发货</h1>
              <span class="order-number">1234123098612034897612</span>
              <i class="iconfont xiangyoujiantou"></i>
              <el-button plain size="small" class="btn" @click="copyBtn()" @click.stop.prevent>复制</el-button>
            </div>
            <div class="bottom">
              <h2 class="title">推迟发货</h2>
              <span>付款：<span>2022/11/07 08:22:19</span><span>(微信)</span></span>
            </div>
          </div>
        </template>
        <div class="order-content">
          <div class="order-left">
            <!-- 商品信息 -->
            <div class="top">
              <div class="commodity-img">
                <img src="@\assets\头像.jpg" alt="">
              </div>
              <ul class="blurb">
                <li class="title">
                  <h1>商品名称</h1><span class="num">[共1件]</span>
                </li>
                <li class="amount">
                  <span>实付：</span>
                  <p><span>￥</span>129.00</p>
                </li>
                <li class="equity">权益</li>
                <li class="specification">
                  <p>规格：</p><span>xl</span>
                </li>
                <li class="after-sale"><a href="#">发售后卡</a><span>|</span><a href="#">代申售后</a></li>
              </ul>
            </div>
            <!-- 收货信息 -->
            <ul class="middle">
              <li class="middle-top">
                <p class="left">收货信息</p>
                <span class="userinfo">
                  <p class="name">
                  <h2 ref="userNameRef" style="width: 42px;">秦宏飞</h2>
                  <span ref="userPhoneRef" style="width: 90px;">18804961951</span>
                  <i class="iconfont yanjing_xianshi_o" v-if="isShowUserInfo" @click="showUserInfo(false)"></i>
                  <i class="iconfont yincang" v-else="isShowUserInfo" @click="showUserInfo(true)"></i>
                  </p>
                  <p class="address">辽宁省大连市旅顺口区大连科技学院999-26号</p>
                </span>
              </li>
              <li>
                <p class="left">承诺发货</p>
                <span>7天7小时7分钟07秒内发货</span>
              </li>
              <li>
                <p class="left">订单备注</p>
                <span class="flag">
                  <i class="iconfont ic_settled"></i>
                  <p>加急</p>
                </span>
              </li>
            </ul>
            <!-- 金额 -->
            <div class="bottom">
              <p class="left">实付金额</p>
              <p class="right">
                <span class="num">￥129.00</span>
                <span>(含运费</span><span>￥</span><span>0.00)</span>
              </p>
            </div>
          </div>
          <ul class="btns">
            <li>
              <el-button type="primary" plain size="small">核对地址</el-button>
            </li>
            <li>
              <el-button type="primary" plain size="small">改地址</el-button>
            </li>
            <li>
              <el-button type="primary" plain size="small">发货</el-button>
            </li>
            <li style=" border-bottom: 1px solid #f1f1f1;">
              <el-button type="info" plain size="small">打款</el-button>
            </li>
            <li>
              <el-button plain size="small">备注</el-button>
            </li>
            <li>
              <el-button plain size="small">发送订单</el-button>
            </li>
          </ul>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang='ts' setup>
import { computed, nextTick, onMounted, ref } from 'vue'

const activeNames = ref(['1'])
const collapseRef = ref()
const userNameRef = ref()
const userPhoneRef = ref()
let oldUserName = ref('秦宏飞')
let newUserName = ref('')
let newUserPhone = ref('')
let oldUserPhone = ref('18804961951')
let collapseAriaExpanded = true

const copyBtn = () => {
  console.log('复制了');
}

//获取Dom实例
const getEntity = () => {
  const collapseEntity = collapseRef.value.children[0].children[0].children[0]
  collapseAriaExpanded = collapseEntity.ariaExpanded
  const userNameEntity = userNameRef.value
  const userPhoneEntity = userPhoneRef.value
  oldUserName= userNameEntity.textContent
  oldUserPhone = userPhoneEntity.textContent
}

let isShowUserInfo = ref(false)
//显示或隐藏用户信息
const showUserInfo = (boolean: boolean) => {
  isShowUserInfo.value = boolean
  //如为true则显示用户信息
  if (boolean) {
    userNameRef.value.textContent = oldUserName
    userPhoneRef.value.textContent = oldUserPhone
  } else {
    replaceUserInfo(oldUserName, oldUserPhone)
    userNameRef.value.textContent = newUserName
    userPhoneRef.value.textContent = newUserPhone
  }

  console.log(newUserName, newUserPhone);
}
/**
 * 将用户的信息替换为*号
 * @param name 用户名
 * @param phone 手机号码
 */
const replaceUserInfo = (name: any, phone: any) => {
  const phoneReg = /^(\d{3})\d{6}(\d{2})$/g
  newUserPhone = phone.replace(phoneReg, '$1******$2')
  newUserName = name.replace(/.(.*)/g, (match: any, str: any) => {
    return match[0] + "*".repeat(str.length);
  });
}

onMounted(() => {
  getEntity()
})
</script>

<style lang='less' scoped>
@borderColor: #f1f1f1;
@fontColor: #a7a7a7;
@blue: #4784ff;

.order-collapse {
  width: 100%;
  height: 100%;
  // box-shadow:0px 15px 10px -15px #000;
  border-bottom: 2px solid @borderColor;

  :deep(.collapse-item) {
    width: 100%;
    height: 100%;

    .el-collapse-item__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      width: 100%;
      height: 100%;
      border-bottom: 1px solid @borderColor;

      .item-letft {
        display: flex;
        flex-flow: column;
        align-items: start;
        justify-content: center;
        width: 100%;
        height: 100%;

        .title,
        .order-number,
        .iconfont {
          padding: 0 10px;
          font-size: 16px;
          font-weight: 400;
          height: 25px;
          // width: 65px;
          line-height: 25px;
          text-align: center;
          border-radius: 3px;
        }

        .top {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 5px;
          height: 25px;

          .title {
            background-image: linear-gradient(to right, #73a2ff, #4784ff);
            color: #fff;
          }

          .iconfont {
            padding: 0 5px 0;
            font-size: 13px;
          }

          .btn {
            color: #000;
          }
        }

        .bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 30px;
          color: @fontColor;

          .title {
            margin-right: 5px;
            padding: 0 5px;
            background-color: #fff;
            color: #ecb541;
            border: 1px solid #f8e9d2;
          }
        }
      }
    }

    .el-collapse-item__arrow {
      margin: 0;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background-color: #f0f0f0;
    }

    .el-collapse-item__content {
      padding-bottom: 0;
    }

    .order-content {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      height: 100%;

      .order-left {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        width: 90%;

        .top,
        .middle,
        .bottom {
          width: 100%;
          padding: 5px;
          color: @fontColor;
          border-bottom: 1px solid @borderColor;
        }

        .top {
          display: flex;
          justify-content: space-around;
          align-items: flex-start;
          height: 45%;

          .commodity-img {
            width: 15%;

            img {
              width: 50px;
              height: 50px;
              border-radius: 5px;
            }
          }

          .blurb {
            display: flex;
            align-items: flex-start;
            flex-flow: column;
            justify-content: flex-start;
            width: 85%;
            height: 100%;

            .title,
            .equity,
            .amount,
            .specification,
            .after-sale {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              width: 100%;
              font-size: 12px;
            }

            .title {
              width: 100%;

              h1 {
                margin-right: 5px;
                max-width: 85%;
                font-size: 14px;
                font-weight: 400;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #000;
              }
            }

            .amount {
              p {
                color: #000;
              }
            }

            .equity {
              padding: 0 4px;
              width: auto;
              height: 15%;
              line-height: 15%;
              color: @blue;
              border: 1px solid #86abf6;
              border-radius: 2px;
            }

            .after-sale {
              text-align: center;

              a {
                font-weight: 600;
                color: @blue;
              }

              span {
                padding: 0 5px;
              }
            }
          }
        }

        .middle {
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 40%;

          .left {
            width: 15%;
            color: @fontColor;
            font-size: 14px;
          }

          .middle-top {
            align-items: flex-start;
          }

          li {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            color: #000;

            .userinfo {
              .name {
                display: flex;
                align-items: center;
                justify-content: flex-start;

                h2 {
                  padding-right: 5px;
                  font-size: 12px;
                  font-weight: 400;
                }
              }

              .iconfont {
                font-size: 14px;
              }

              .address {
                max-width: 80%;
                color: @fontColor;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }

            .flag {
              display: flex;
              align-items: center;
              justify-content: flex-start;
            }
          }
        }

        .bottom {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 15%;

          .left {
            width: 15%;
          }

          .right {
            width: 85%;

            .num {
              color: #fa6254;
            }
          }
        }
      }

      .btns {
        padding: 0 10px;
        border-left: 1px solid @borderColor;

        .el-button {
          margin: 10px 0;
          width: 90%;
        }
      }
    }
  }
}

.el-collapse {
  border: none;
}
</style>