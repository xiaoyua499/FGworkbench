<template>
  <div class="chat-box">
    <header class="header">
      <h1 class="nikename">title</h1>
      <ul class="function">
        <li><i class="iconfont xingxing"></i></li>
        <li><i class="iconfont tanhao2tanhao"></i></li>
        <li><i class="iconfont qiehuanyonghu"></i></li>
        <li><i class="iconfont kaiguan"></i></li>
      </ul>
    </header>
    <main class="message">
      <el-scrollbar>
        <div v-for="item in msg" :key="item.id">
          <div class="msg-left" v-if="item.send">
            <img class="headImg" src="/src/assets/头像.jpg" alt="">
            <div class="content" v-if="item.type">
              <p class="text">{{ item.message }}</p>
            </div>
            <div class="content" v-else>
              <img class="img" src="/src/assets/头像.jpg" alt="">
            </div>
          </div>
          <div class="msg-rigth" v-else>
            <div class="content" v-if="item.type">
              <span class="name">外包客服</span>
              <p class="text">{{ item.message }}</p>
            </div>
            <div class="content" v-else>
              <span class="name">外包客服</span>
              <img class="img" src="/src/assets/头像.jpg" alt="">
            </div>
            <img class="headImg" src="/src/assets/头像.jpg" alt="">
          </div>
        </div>
      </el-scrollbar>
    </main>
    <footer class="input">
      <div class="input-box">
        <div class="icons">
          <ul class="icons-left">
            <li><i class="iconfont biaoqing"></i></li>
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
          <textarea class="input-text" name="" id="">
          </textarea>
          <el-button type="primary">发送</el-button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang='ts' setup>

const msg: any = []
const messageList = [
  {
    id: 1,//消息id
    message: '在吗',//消息内容
    send: 0,//发送者
    sendId: '',//发送者id
    type: 1,//消息类型 
    sendTime: new Date(),//发送时间 
    status: 1//消息状态
  },
  {
    id: 2,//消息id
    message: '在吗1',//消息内容
    send: 1,//发送者
    sendId: '',//发送者id
    type: 0,//消息类型 
    sendTime: new Date(),//发送时间 
    status: 1//消息状态
  },
  {
    id: 3,//消息id
    message: '在吗2',//消息内容
    send: 0,//发送者
    sendId: '',//发送者id
    type: 1,//消息类型 
    sendTime: new Date(),//发送时间 
    status: 1//消息状态
  },
  {
    id: 4,//消息id
    message: '在3',//消息内容
    send: 1,//发送者
    sendId: '',//发送者id
    type: 1,//消息类型 
    sendTime: new Date(),//发送时间 
    status: 1//消息状态
  }
]

const getMsgList = (messageList: any) => {
  messageList.forEach((item: any) => {
    msg.unshift(item)
  })
  console.log(msg);
}

getMsgList(messageList)
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

        .text {
          background-color: #e1efff;
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
        width: 100%;
        height: 80%;

        .input-text {
          width: 100%;
          height: 100%;
          border: none;
          outline: none; //边线不显示
          resize: none; //禁止拉伸
        }
      }
    }
  }
}
</style>