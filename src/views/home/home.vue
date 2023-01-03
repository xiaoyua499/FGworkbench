<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="70px">
        <Menu :menuDataTop="menuDataTop" :menuDataBottom="menuDataBottom" :activeStyle="activeStyle"/>
      </el-aside>
      <el-container class="right">
        <el-header>
          <div class="left">
            <el-tag class="userInfo fillet-right">
              <img class="HeadImg" src="@/assets/头像.jpg" alt="">
              <h1 class="nickname">{{ user.userInfo.nickname }}</h1>
              <button class="LogOut">
                <i class="iconfont gengduo-shuxiang"></i>
              </button>
            </el-tag>
            <button class="addUser">
              +
            </button>
          </div>
          <div class="right-icons">
            <i class="iconfont wenhao"></i>
            <span class="iconfont partition">|</span>
            <i class="iconfont guding"></i>
            <i class="iconfont suoxiao"></i>
            <i class="iconfont chuangkouzuidahua"></i>
            <i class="iconfont guanbi"></i>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref } from "vue-demi";
import { reactive } from 'vue'
import { userInfo } from "@/server/api/login";
import { useUserStore } from '@/store/user'
import { UserData } from "@/plugin/types";

const user = useUserStore()

//获取用户信息
const getUser = async () => {
  await userInfo().then(res => {
    user.userInfo = res.data.data
    console.log(user.userInfo);
  })
}

onMounted(
  getUser
)

//menu顶部数据
const menuDataTop = [
  {
    router: '/conversation',
    iconfont: 'gf-bubbles4',
    title: '会话',
    showTile: true,
    Tooltip: true,
    index: 1
  },
  {
    router: '/information',
    iconfont: 'shuzhuangtu',
    title: '数据',
    showTile: true,
    Tooltip: true,
    index: 2
  },
  {
    router: '/messageBoard',
    iconfont: 'tianchongxing-',
    title: '留言',
    showTile: true,
    Tooltip: true,
    index: 3
  },
  {
    router: '/management',
    iconfont: 'yingyongzhongxin',
    title: '客服管理',
    showTile: true,
    Tooltip: true,
    index: 4
  },
  {
    router: '/platform',
    iconfont: 'kefu',
    title: '平台客服',
    showTile: true,
    Tooltip: true,
    index: 5
  },
]

//menu底部数据
const menuDataBottom = [
  {
    router: '/derive',
    iconfont: 'renwu',
    title: '数据/短语导出明细',
    showTile: false,
    Tooltip: true,
    index: 1
  },
  {
    router: '/setting',
    iconfont: 'shezhi',
    title: '设置',
    showTile: false,
    Tooltip: true,
    index: 2
  },
  {
    router: '/backstage',
    iconfont: 'dianpu1',
    title: '前往商家后台',
    showTile: false,
    Tooltip: true,
    index: 3
  }
]
//menu动态样式
const activeStyle = {
  color: '#d6e6ff',
  activeIconColor: '#fff',
  activeColor:'#2364f5'
}

</script>

<style lang='less' scoped>
.common-layout {
  width: 100%;
  height: 100%;

  .el-container {
    width: 100%;
    height: 100%;


    .el-aside {
      height: 100%;
      padding: 0 5px;
      background-image: linear-gradient(180deg, #618efb, #1966ff);
    }

    .right {
      height: 100%;

      .el-header {
        display: flex;
        justify-content: space-between;
        padding: 0;
        width: 100%;
        height: 5%;
        background-color: #6290fb;

        :deep(.userInfo) {
          padding: 0;
          width: 200px;
          height: 100%;
          border: none;
          background-color: #fff;
          border-radius: 12px 10px 0 0;

          .el-tag__content {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            height: 100%;

            .HeadImg {
              margin: 10px;
              width: 25px;
              height: 25px;
              border-radius: 50%;
            }

            .nickname {
              padding-right: 10px;
              width: 75%;
              text-align: center;
              color: #595959;
            }

            .LogOut {
              opacity: 0;
              border: none;
              background-color: #fff;

              &:hover {
                opacity: 1;
              }

              .iconfont {
                font-size: 20px;
              }
            }
          }
        }

        .addUser {
          // height: 100%;
          margin: 0 10px;
          border: none;
          border-radius: 10px;
          background-color: #6290fb;
          color: #e1ebff;
          font-size: 30px;
        }

        .right-icons {
          display: flex;
          // flex-flow: column;
          justify-content: space-evenly;
          align-items: center;
          width: 200px;
          height: 100%;

          .iconfont {
            color: #d0e1fc;
            font-size: 15px;
          }

          .partition {
            margin: 0 10px;
            font-size: 15px;
            opacity: 0.3;
          }

          .guding {
            font-size: 25px;
          }

          .suoxiao {
            font-size: 20px;
          }

          .guanbi {
            font-size: 13px;
          }

        }
      }

      .el-main {
        height: 95%;
        padding: 0;
        background-color: #fff;
      }
    }
  }
}
</style>