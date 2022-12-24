<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="50">
          <HomeMenu />
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
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
      background-image: linear-gradient(180deg, #81b3fe, #1966ff);
    }

    .el-main {
      background-color: #f7f7f7;
    }
  }
}
</style>