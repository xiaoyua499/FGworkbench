<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="50">
        <HomeMenu />
      </el-aside>
      <el-container>
        <el-header>
          <el-tag v-for="tag in dynamicTags" :key="tag" class="mx-1" closable :disable-transitions="false"
            @close="handleClose(tag)">
            {{ tag }}
          </el-tag>
          <el-button class="button-new-tag ml-1" size="small" @click="addTag">
            +
          </el-button>
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
import { nextTick } from 'vue'
import { ElInput } from 'element-plus'


const data = ref()


const inputValue = ref('')
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3'])

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}

const addTag = () => {
  dynamicTags.value.push(inputValue.value)
}


</script>

<style lang='less' scoped>
.common-layout {
  width: 100%;
  height: 100%;

  .el-container {
    width: 100%;
    height: 100%;

    .el-header {
      width: 100%;
      height: 40px;
      background-color: #c4d3f0;
    }

    .el-aside {
      padding: 0 5px;
      background-image: linear-gradient(180deg, #618efb, #1966ff);
    }

    .el-main {
      background-color: #f7f7f7;
    }
  }
}
</style>