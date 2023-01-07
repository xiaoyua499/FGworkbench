<template>
  <div class="information">
    <div class="left">
      <div class="data-item" v-for="item,index in information" :key="index">
        <p class="title">{{ item.title }}</p>
        <span class="num">{{ item.data }}</span>
        <span class="ranking" v-show="item.ranking">店<span class="ranking-num">{{ item.rankingNum }}</span></span>
      </div>
    </div>
    <div class="right">
      <i class="iconfont shangshuangjiantou"></i>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { reactive } from "vue-demi";

const information = reactive([
  {
    title: '本组排队',//标题
    data: '0', //数据
    ranking: false,//是否排行
    rankingNum: ''//排行
  },
  {
    title: '接待人数',//标题
    data: '0', //数据
    ranking: true,//是否排行
    rankingNum: '1'//排行
  },
  {
    title: '不满意率',//标题
    data: '-', //数据
    ranking: true,//是否排行
    rankingNum: '1'//排行
  },
  {
    title: '3分钟回复率',//标题
    data: '-', //数据
    ranking: true,//是否排行
    rankingNum: '1'//排行
  },
  {
    title: '平均响应',//标题
    data: '-', //数据
    ranking: true,//是否排行
    rankingNum: '1'//排行
  },
  {
    title: '首次响应',//标题
    data: '-', //数据
    ranking: true,//是否排行
    rankingNum: ''//排行
  },
  {
    title: '满意率',//标题
    data: '-', //数据
    ranking: true,//是否排行
    rankingNum: '1'//排行
  },
  {
    title: '今日接待会话量',//标题
    data: '0', //数据
    ranking: true,//是否排行
    rankingNum: '1'//排行
  }
])
</script>

<style lang='less' scoped>
.information {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
  background-color: #fff;
  border: 2px solid #f7f7f7;
  border-top: none;
  overflow: hidden;
  transition: all 0.2s;

  &:hover {
    height: 201px;

    .iconfont {
      display: inline-block;
      transform: rotate(180deg);
    }
  }

  .left {
    margin: 0;
    width: 95%;
    height: 100%;

    .data-item {
      float: left;
      padding-left: 10px;
      width: 25%;
      height: 50px;
      text-align: start;

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4) {
        margin: 35px 0;
      }

      .title {
        font-size: 14px;
        color: #afafaf;
      }

      .ranking {
        display: inline-block;
        padding-left: 1px;
        margin-left: 5px;
        width: 40px;
        height: 20px;
        color: #fff;
        text-align: center;
        line-height: 20px;
        background-color: #ff9e3d;

        .ranking-num {
          display: inline-block;
          margin-left: 3px;
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          color: #ff9e3d;
          background-color: #ffedda;
          border: 1px solid #ff9e3d;
        }
      }
    }
  }

  .right {
    padding-top: 50px;
    width: 5%;
    height: 100%;

    .iconfont {
      display: inline-block;
      transition: all 0.2s;
    }

  }
}
</style>