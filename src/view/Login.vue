<script setup>
import {ref} from 'vue';


const username = ref('');
const password = ref('');


</script>

<template>
  <div class="login-container">
    <el-card class="login-card">
      <div class="login-header">高校物资采购管理系统</div>
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="用户角色">
          <el-checkbox-group v-model="role">
            <el-checkbox label="supplier">供应商</el-checkbox>
            <el-checkbox label="college">学院</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-button type="primary" class="login-button">登录</el-button>
      </el-form>
      <div class="login-footer">
        <el-link>供应商注册</el-link>
        <el-link>学院注册</el-link>
      </div>
    </el-card>
  </div>
</template>

<style scoped>

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
  background-position: center;
}

.login-card {
  width: 400px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.login-header {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.login-button {
  width: 100%;
  margin-top: 20px;
}

.login-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>