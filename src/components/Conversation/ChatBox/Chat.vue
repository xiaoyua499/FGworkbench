<template>
  <div class="chat-box">
    <!-- 头部功能栏 -->
    <header class="header">
      <h1 class="nikename">{{ chustomreStoer.currentCustomer.customerNickName }}</h1>
      <ul class="function">
        <li><i class="iconfont xingxing"></i></li>
        <li><i class="iconfont tanhao2tanhao"></i></li>
        <li><i class="iconfont qiehuanyonghu"></i></li>
        <li><i class="iconfont kaiguan"></i></li>
      </ul>
    </header>
    <!-- 会话列表 -->
    <main class="message">
      <el-scrollbar ref="scrollbarRef" class="msgScroll">
        <div class="msg">
          <div v-for="item in chitchat" :key="item.chitchatid">
            <!-- 顾客会话列表 -->
            <div class="msg-left" v-if="item.send" ref="messageRef">
              <!-- 头像 -->
              <img class="headImg" src="/src/assets/头像.jpg" alt="">
              <!-- 会话内容为文字 -->
              <div class="content" v-if="item.type">
                <p class="text">{{ item.message }}</p>
              </div>
              <!-- 会话内容为图片 -->
              <div class="content" v-else>
                <img class="img" src="/src/assets/头像.jpg" alt="">
              </div>
            </div>
            <!-- 用户会话列表 -->
            <div class="msg-rigth" v-else ref="messageRef">
              <div class="content" v-if="item.type">
                <span class="name">外包客服</span>
                <div class="text-box">
                  <span class="status" v-if="item.status">已读</span>
                  <span class="status" v-else>未读</span>
                  <p class="text">{{ item.message }}</p>
                </div>
              </div>
              <div class="content" v-else>
                <span class="name">外包客服</span>
                <div class="text-box">
                  <span class="status" v-if="item.status">已读</span>
                  <span class="status" v-else>未读</span>
                  <img class="img" src="/src/assets/头像.jpg" alt="">
                </div>
              </div>
              <img class="headImg" src="/src/assets/头像.jpg" alt="">
            </div>
          </div>
        </div>
      </el-scrollbar>
    </main>
    <!-- 输入框 -->
    <footer class="input">
      <div class="input-box">
        <!-- 输入框功能列表 -->
        <div class="icons">
          <ul class="icons-left">
            <li>
              <!-- emoji表情组件 -->
              <V3Emoji :recent="true" :options-name="optionsName" @click-emoji="appendText" size="mid" class="emoji">
                <i class="iconfont biaoqing"></i>
              </V3Emoji>
            </li>
            <li><i class="iconfont tupian"></i></li>
            <li><i class="iconfont shipin"></i></li>
            <li><i class="iconfont gengduo"></i></li>
            <li><i class="iconfont jieping"></i></li>
          </ul>
          <ul class="icons-right">
            <li><i class="iconfont send-sms"></i></li>
            <li><i class="iconfont fasong1"></i></li>
            <li><i class="iconfont fapiao"></i></li>
            <span class="iconfont separate">|</span>
            <li><i class="iconfont a-jiqirenzhineng-01"></i></li>
          </ul>
        </div>
        <div class="input-content">
          <textarea class="input-text" v-model="sendMsg" name="input" maxlength="800"
            placeholder='发送给title，使用Enter发送消息，使用Ctrl+Enter换行' @keyup="Enter"></textarea>
          <div class="send">
            <span class="num">{{ sendMsg.length }}/800</span>
            <!-- 发送按钮 -->
            <el-button type="primary" class="send-btn" @click="send">发送</el-button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang='ts' setup>
import { sendChitchat } from "@/server/api/chitchat"
import { useChitchatStore } from "@/store/chitchat"
import { useCustomerStore } from "@/store/customer"
import { useUserStore } from "@/store/user"
import { ElScrollbar } from "element-plus"
import { storeToRefs } from "pinia"
import { ref, reactive, watch, nextTick, onMounted, onBeforeUpdate, onUpdated } from "vue"
import V3Emoji from 'vue3-emoji'
import 'vue3-emoji/dist/style.css'


const sendMsg = ref('') //发送消息
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
//仓库
const chitchatStore = useChitchatStore()
const chustomreStoer = useCustomerStore()
const userStore = useUserStore()
//仓库数据
const { userInfo } = storeToRefs(userStore)
const { chitchat } = storeToRefs(chitchatStore)
const { currentCustomer } = storeToRefs(chustomreStoer)
//配置emoji表情分类名称
const optionsName = {
  'Smileys & Emotion': '笑脸&表情',
  'Food & Drink': '食物&饮料',
  'Animals & Nature': '动物&自然',
  'Travel & Places': '旅行&地点',
  'People & Body': '人物&身体',
  Objects: '物品',
  Symbols: '符号',
  Flags: '旗帜',
  Activities: '活动'
};

//新消息
const newMsg = {
  acceptId: "",
  sendId: "",
  customerId: "",
  userId: "",
  message: "",
  contentAttribute: 0,
  MessageStatus: false
}

//创建新消息
const createNewMsg = async (sendMsg: any) => {
  newMsg.message = sendMsg.value
  newMsg.acceptId = currentCustomer.value.customerId
  newMsg.sendId = userInfo.value.id
  newMsg.customerId = currentCustomer.value.customerId
  newMsg.userId = userInfo.value.id
  newMsg.contentAttribute = 0
  newMsg.MessageStatus = false
  //将新消息发送到服务器
  await sendChitchat(newMsg)
  //获取信息列表
  chitchatStore.getChitchat(currentCustomer.value.customerId, userInfo.value.id)
  //刷新滚动条的位置
  nextTick(() => {
    setTimeout(() => {
      // 获取聊天窗口
      const message = document.querySelectorAll('.msg')
      //滚动条滚动到当前位置  
      scrollbarRef.value!.setScrollTop(message[0].scrollHeight + 64)
    }, 100)
  })

}
//将emoji表情添加到输入框
const appendText = (e: any) => {
  const input: any = document.querySelector('.input-text')
  input!.value = input.value + e
  sendMsg.value = input.value
  console.log(input.value);
}
//发送消息  
const send = () => {
  //判断输入框的值是否为空
  if (sendMsg.value !== '') {
    createNewMsg(sendMsg)
  }
  //清空输入框中的值
  sendMsg.value = ''
}
//回车发送消息  
const Enter = (e: any) => {
  // console.log(e);
  // 判断用户是否按下回车
  if (e.keyCode === 13) {
    send()
  }
}

</script>

<style lang='less' scoped>
.chat-box {
  position: relative;
  width: 100%;
  height: 100%;

  .header {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 8%;
    // background-color: #fff;

    // background-color: #fff;
    .nikename {
      margin-left: 10px;
      font-weight: 400;
      color: #8a8886;
    }

    .function {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 150px;

      .iconfont {
        font-size: 22px;
        color: #989898;
      }
    }
  }

  .message {
    width: 100%;
    height: 70%;
    padding: 0 10px;
    padding-top: 55px;
    // overflow: scroll;

    .headImg {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    .text {
      padding: 10px;
      margin: 0;
      max-width: 70%;
      // text-align: center;
      line-height: 25px;
      border-radius: 10px;
      background-color: #fff;
    }

    .img {
      width: 25%;
      height: auto;
      border-radius: 10px;
    }



    .msg-left {
      display: flex;
      justify-content: flex-start;
      margin: 10px 0;
      width: 100%;
      min-height: 40px;

      .content {
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
      }

      .headImg {
        margin-right: 10px;
      }
    }

    .msg-rigth {
      display: flex;
      justify-content: flex-end;
      margin: 10px 0;
      width: 100%;
      min-height: 40px;

      .headImg {
        margin-left: 10px;
      }

      .content {
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
        align-items: flex-end;
        width: 100%;

        .name {
          height: 100%;
          font-size: 14px;
          color: #8a8886;
        }

        .text-box {
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;

          width: 100%;

          .status {
            margin-right: 5px;
            font-size: 12px;
            color: #bcc4c6;
          }

          .text {
            background-color: #e1efff;
          }
        }

      }

    }
  }

  .input {
    padding: 10px;
    width: 100%;
    height: 30%;
    background-color: #f7f7f7;

    .input-box {
      padding: 5px 10px;
      width: 100%;
      height: 100%;
      border-radius: 5px;
      background-color: #fff;

      .icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 20%;

        // background-color: rgb(144, 243, 108);
        .iconfont {
          font-size: 20px;
          font-weight: 600;
          color: #848484;
        }

        .icons-left {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 35%;
          height: 100%;

          :deep(.emoji) {
            .pollup {
              left: -10px !important;
            }
          }

          .biaoqing,
          .tupian {
            font-size: 25px;
          }

          .shipin {
            font-size: 22px;
          }
        }

        .icons-right {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 30%;
          height: 100%;

          .send-sms {
            font-weight: 500;
            font-size: 21px;
          }

          .fasong1,
          .a-jiqirenzhineng-01 {
            font-weight: 500;
            font-size: 23px;
          }

          .separate {
            font-weight: 500;
            color: #dfdfdf;
          }

          .a-jiqirenzhineng-01 {
            color: #dfdfdf;
          }
        }

      }

      .input-content {
        position: relative;
        width: 100%;
        height: 80%;

        .input-text {
          padding: 10px;
          width: 100%;
          height: 100%;
          border: none;
          outline: none; //边线不显示
          resize: none; //禁止拉伸
          font-size: 16px;
          // background-color: #ccc;

          &::placeholder {
            // padding: 10px;
            font-size: 16px;
            color: #bcc4c6;
          }
        }

        .send {
          position: absolute;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;

          .num {
            margin-right: 5px;
            height: 100%;
            font-size: 12px;
            color: #bcc4c6;
          }

          .send-btn {
            width: 70px;
          }
        }

      }
    }
  }
}
</style>