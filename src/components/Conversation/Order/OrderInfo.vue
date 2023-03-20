<template>
  <div class="order-collapse">
    <el-collapse accordion>
      <el-collapse-item name="1" class="collapse-item">
        <template #title>
          <div class="item-letft">
            <div class="top">
              <h1 class="title">待发货</h1>
              <span class="order-number">1234123098612034897612</span>
              <i class="iconfont xiangyoujiantou"></i>
              <el-button plain size="small" class="btn">复制</el-button>
            </div>
            <div class="bottom">
              <h2 class="title">推迟发货</h2>
              <span>付款：<span>2022/11/07 08:22:19</span><span>(微信)</span></span>
            </div>
          </div>
        </template>
        <div class="order-content">
          <div class="order-left">
            <div class="top">
              Consistent with real life: in line with the process and logic of real
              life, and comply with languages and habits that the users are used to;
            </div>
            <div class="middle">
              Consistent within interface: all elements should be consistent, such
              as: design style, icons and texts, position of elements, etc.
            </div>
            <div class="bottom">
              Consistent within interface: all elements should be consistent, such
              as: design style, icons and texts, position of elements, etc.
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
              <el-button type="info" plain size="small"
                >打款</el-button>
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
import { InfoFilled } from '@element-plus/icons-vue'
</script>

<style lang='less' scoped>
@borderColor: #f1f1f1;

.order-collapse {
  width: 100%;
  height: 100%;

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
          color: #a7a7a7;

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

    .order-content {
      display: flex;
      align-items: center;
      justify-content: center;

      .order-left {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        .top,
        .middle,
        .bottom {
          border-bottom: 1px solid @borderColor;
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
}</style>