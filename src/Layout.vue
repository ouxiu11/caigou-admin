<script>
export default {
  name: "Layout"
}
</script>

<template>
  <el-container class="el-container">
    <el-header class="el-header">
      高校物资采购系统
    </el-header>
    <el-container>
      <el-aside class="el-aside" width="200px">
<!--一级-->
        <el-menu default-active="$route.path"
                 router
                 @open="handleOpen"
                 @close="handleClose"
                 text-color="#000"
                 active-text-color=red>
          <!--二级-->
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-container {
  height: 600px;
  border: 1px solid #eee
}

.el-header {
  text-align: left;
  background-color: rgb(238, 241, 246);
  font-size: 20px;
  line-height: 60px
}

.el-aside {
  background-color: rgb(238, 241, 246);
  height: 100%;
  overflow: hidden;
}
</style>