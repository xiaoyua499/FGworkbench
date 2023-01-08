<template>
  <ul class="conversation-box">
    <li class="session-list">
      <!-- 用户信息 -->
      <div class="user-info">
        <div class="info-left">
          <!-- 头像 -->
          <img src="@/assets/头像.jpg" alt="" class="head-img">
          <!-- 用户在线状态 -->
          <el-dropdown trigger="click" class="state">
            <div class="el-dropdown-link" :style="{ backgroundColor: `${dropdownLink.bgc}` }">
              <span>{{ dropdownLink.text }}</span>
              <i class="iconfont jiantouxia"></i>
            </div>
            <template #dropdown>
              <el-dropdown-menu class="dropdown-menu">
                <div class="dropdown-menu-top">
                  <p>{{ userStore.userInfo.nickname }}</p>
                  <p>{{ userStore.userInfo.nickname }}</p>
                </div>
                <div class="dropdown-menu-center">
                  <p>切换状态</p>
                  <el-radio-group v-model="radio" class="state-item">
                    <el-radio :label="1">
                      <el-dropdown-item>
                        <div class="round online-round-color"></div>
                        <span class="state-type online-color">在线</span>
                        <span class="state-details">可接待买家</span>
                      </el-dropdown-item>
                    </el-radio>
                    <el-radio :label="2">
                      <el-dropdown-item>
                        <div class="round rest-round-color"></div>
                        <span class="state-type rest-color">小休</span>
                        <span class="state-details">可接待当前买家，无法接待新买家</span>
                      </el-dropdown-item>
                    </el-radio>
                    <el-radio :label="3">
                      <el-dropdown-item>
                        <div class="round offLine-round-color"></div>
                        <span class="state-type offLine-color">离线</span>
                        <span class="state-details">无法接受和发送消息</span>
                      </el-dropdown-item>
                    </el-radio>
                  </el-radio-group>
                </div>
                <div class="dropdown-menu-bottom">
                  <button>退出登录</button>
                </div>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div class="info-right">
          <div class="nikename">{{ userStore.userInfo.nickname }}</div>
          <div class="queue">
            <span>已开启不排队</span>
            <i class="iconfont wenhao"></i>
          </div>
        </div>
      </div>
      <!-- 会话列表 -->
      <div class="session">
        <!-- 搜索框 -->
        <Search class="search" />
        <!-- 会话列表 -->
        <Tabs :inServiceNum="inServiceNum" />
      </div>
    </li>
    <li class="chat-box">
      <information class="information" />
      <div class="chat">2</div>
    </li>
    <li class="sidebar-details">
      <router-view></router-view>
    </li>
    <li class="session-sidebar">
      <Menu :menuDataTop="menuDataTop" :menuDataBottom="menuDataBottom" :activeStyle="activeStyle" />
    </li>
  </ul>
</template>

<script lang='ts' setup>
import { useUserStore } from '@/store/user';
import { useCustomerStore } from "@/store/customer";
import { onMounted, ref, watch } from 'vue';
import { getCustomerInfo } from '@/server/api/customer'
//获取用户仓库
const userStore = useUserStore()

//获取顾客仓库
const customerStore = useCustomerStore()

const radio = ref(1)

watch(radio, () => {
  getUserCondition(radio.value)
  // console.log(radio.value);
})

//menu顶部数据
const menuDataTop = [
  {
    router: '/conversation/order',
    iconfont: 'wodedingdan',
    title: '订单',
    showTile: true,
    Tooltip: false,
    index: 1
  },
  {
    router: '/conversation/commodity',
    iconfont: 'shangpin',
    title: '商品',
    showTile: true,
    Tooltip: false,
    index: 2
  },
  {
    router: '/conversation/phrase',
    iconfont: 'fasong',
    title: '快捷短语',
    showTile: true,
    Tooltip: false,
    index: 3
  },
  {
    router: '/conversation/assistant',
    iconfont: 'jiqiren',
    title: '智能助手',
    showTile: true,
    Tooltip: false,
    index: 4
  }
]

//menu底部数据
const menuDataBottom = [
  {
    router: '/guide',
    iconfont: 'zhinan',
    title: '新手指南',
    showTile: false,
    Tooltip: true,
    index: 1
  },
  {
    router: '/download',
    iconfont: 'xiazai',
    title: '下载',
    showTile: false,
    Tooltip: true,
    index: 2
  }
]
//menu动态样式
const activeStyle = {
  color: '#999999',
  activeIconColor: '#1966ff',
  activeColor: 'none'
}

//下拉菜单动态样式 默认为在线
const dropdownLink = {
  text: '在线', //状态
  bgc: '#28c728' //背景颜色  
}

//获取用户状态
const getUserCondition = (value: number) => {
  dropdownLink.text = userStore.userCondition[value - 1].text
  dropdownLink.bgc = userStore.userCondition[value - 1].bgc
  // console.log(dropdownLink);
}

//获取顾客信息
const getCustomersInfos = async () => {
  const customer = await getCustomerInfo().then(res => {
    const data: any[] = res.data.data
    data.forEach(item => {
      //截取最近聊天时间
      item.updateTime = Number(item.updateTime.slice(11, 13)) + 8 + item.updateTime.slice(13, 16)
      // console.log(item);
    })
    return data
  })
  // console.log(customer);
  customerStore.getCustomer(customer)
}

//获取服务中顾客数量
const inServiceNum = customerStore.inServiceCustomer.length
onMounted(() => {
  getCustomersInfos()
})

</script>

<style lang='less' scoped>
.conversation-box {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .session-list {
    width: 20%;
    height: 100%;
    background-color: #fff;

    //用户信息
    .user-info {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px;
      width: 100%;
      height: 15%;
      border-bottom: 2px solid #f7f7f7;


      .info-left {
        position: relative;
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 50px;
        margin-right: 10px;

        .head-img {
          width: 40px;
          height: 40px;
          border-radius: 5px;

        }

        .state {
          position: absolute;
          top: 30px;

          .el-dropdown-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 23px;
            font-size: 14px;
            border-radius: 5px;
            color: #fff;

            .iconfont {
              margin-left: 2px;
              font-size: 12px;
            }
          }
        }
      }

      .info-right {
        .queue {
          display: flex;
          align-items: center;
          margin-top: 5px;

          &>span {
            display: inline-block;
            margin-right: 5px;
            width: 90px;
            height: 25px;
            text-align: center;
            line-height: 25px;
            font-size: 14px;
            color: #b3b2b3;
            background-color: #f7f7f7;
          }

          .iconfont {
            color: #ccc;
          }
        }
      }
    }

    .session {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: flex-start;
      padding: 10px 0;
      width: 100%;
      height: 85%;
      // overflow: scroll;

      .search {
        margin-bottom: 10px;
      }
    }
  }

  .chat-box {
    position: relative;
    width: 38%;
    height: 100%;
    background-color: #f7f7f7;

    .information {
      position: absolute;
      top: 0;
    }

    .chat {
      margin-top: 110px;
      height: 85%;
    }
  }

  .sidebar-details {
    width: 38%;
    height: 100%;
    background-color: #fff;
  }

  .session-sidebar {
    width: 4%;
    height: 100%;
    background-color: #f7f7f7;
  }
}
</style>


<style lang="less">
.el-dropdown__popper {
  box-sizing: border-box;
  border: none !important;
  border-radius: 5px;
  inset: 131px auto auto 80px !important;

  .el-popper__arrow {
    left: 17px !important;
  }
}

.dropdown-menu {
  box-sizing: border-box;
  padding: 0;
  width: 300px;
  // height: 200px;
  box-sizing: border-box;

  .dropdown-menu-top {
    padding: 10px;
    border-radius: 5px 5px 15px 0;
    background-color: #216eff;
    font-size: 16px;
    color: #fff;

    p {
      &:nth-child(2) {
        font-weight: 100;
      }
    }
  }

  .dropdown-menu-center {
    padding: 10px;

    &>p {
      font-size: 14px;
      color: rgb(178, 177, 177);
    }

    .el-radio-group {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-around;

      .el-radio {
        margin: 0;
        width: 100%;

        .el-radio__input {
          position: absolute;
          right: 0;


          .el-radio__inner {
            border: none;
            background: none;
          }
        }

        .el-radio__label {
          padding: 0;

          .el-dropdown-menu__item {
            padding: 0;

            &:not(.is-disabled):focus {
              background: none;
              color: var(--el-text-color-regular);
            }
          }
        }

        //圆点样式
        .round {
          margin-right: 10px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .state-type {
          margin-right: 6px;
        }

        .state-details {
          color: #ccc;
        }

        //在线状态颜色
        .online-round-color {
          background-color: #28c728;
        }

        .online-color {
          color: #28c728;
        }

        //小休状态颜色
        .rest-round-color {
          background-color: #ff9a0d;
        }

        .rest-color {
          color: #ff9a0d;
        }

        //离线状态颜色
        .offLine-round-color {
          background-color: #ccc;
        }

        .offLine-color {
          color: var(--el-text-color-regular);
        }
      }

      //对号样式
      .el-radio__input.is-checked {
        .el-radio__inner {
          &::after {
            content: "";
            width: 10px;
            height: 5px;
            border: 2px solid #2f74ff;
            border-top: transparent;
            border-right: transparent;
            text-align: center;
            display: inline-block;
            position: absolute;
            top: 2px;
            left: 2px;
            vertical-align: middle;
            transform: rotate(-45deg);
            border-radius: 0px;
            background: none;
          }
        }
      }
    }
  }

  //退出登录按钮样式
  .dropdown-menu-bottom {
    &>button {
      padding: 10px;
      border: none;
      background: none;
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>