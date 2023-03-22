<template>
  <main class="order" ref="order">
    <!-- 买家信息 -->
    <header class="buyer-description" ref="orderTop">
      <div class="buyer-top">
        <div class="left">
          <!-- 头像 -->
          <img class="head-portrait" src="@/assets/头像.jpg" alt="">
          <!-- 买家名称 -->
          <h1 class="user-name">{{ chustomreStoer.currentCustomer.customerNickName }}</h1>
        </div>
        <!-- 买家描述 -->
        <div class="right">
          <span class="describe-txt">给买家添加描述</span>
          <i class="iconfont bianji"></i>
        </div>
      </div>
      <ul class="buyer-center">
        <li>
          <span>72h回访</span>
          <span>0</span>
          <i class="iconfont fengexian"></i>
        </li>
        <li>
          <span>好评率</span>
          <span>-</span>
          <i class="iconfont fengexian"></i>
        </li>
        <li>
          <span>退货率</span>
          <span>-</span>
          <i class="iconfont fengexian"></i>
        </li>
        <li>
          <span>抖音-商品详情页</span>
        </li>
      </ul>
      <ul class="buyer-bottom">
        <li>
          <span>店铺消费</span>
          <span>￥</span>
          <span>-</span>
          <i class="iconfont fengexian"></i>
        </li>
        <li>
          <span>-</span>
          <span>次</span>
          <i class="iconfont fengexian"></i>
        </li>
        <li>
          <span>客单价</span>
          <span>-</span>
        </li>
      </ul>
    </header>
    <footer class="order-details">
      <OrderDetails  />
    </footer>
  </main>
</template>

<script lang='ts' setup>
import { useCustomerStore } from "@/store/customer"
import { storeToRefs } from "pinia"
import { onMounted, ref } from "vue"



const chustomreStoer = useCustomerStore()
const { currentCustomer } = storeToRefs(chustomreStoer)


</script>

<style lang='less' scoped>
.order {
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;

  .buyer-description {
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
    height: 18%;
    background-color: #fff;

    .buyer-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 20px;
      width: 100%;

      .left {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .head-portrait {
          margin-right: 5px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }

        .user-name {
          font-size: 15px;
          font-weight: 400;
        }
      }

      .right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #999;

        .describe-txt {
          margin-right: 5px;
          font-size: 14px;
          font-weight: 400;
        }
      }

    }

    .buyer-center,
    .buyer-bottom {
      display: flex;
      text-align: center;
      justify-content: flex-start;
      margin: 15px 0;
      height: 20px;
      width: 100%;

      li {
        display: flex;
        align-items: center;
        height: 100%;
        font-size: 14px;
        font-weight: 400;

        .fengexian {
          height: 100%;
          color: #999;

          &::before {
            vertical-align: middle;
          }
        }
      }
    }

    .buyer-bottom {
      margin-top: 10px;
      padding: 5px;
      height: 30px;
      background-color: #eef4fe;
      border-radius: 3px;

      li {
        font-size: 13px;
      }

    }
  }

  .order-details {
    width: 100%;
    height: 65%;
  }
}
</style>