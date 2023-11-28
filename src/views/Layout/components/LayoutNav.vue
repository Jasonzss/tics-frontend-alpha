<script setup>

</script>
<script lang="ts" setup>
  import { ArrowDown } from '@element-plus/icons-vue'

</script>
<template>
  <nav class="app-topnav">
    <div class="left-container">
      <RouterLink  class="minilogo" to="/"><img src="@/assets/images/logo1.png"></RouterLink>
      <RouterLink  class="slogan" to="/"><img src="@/assets/images/Slogan.png"></RouterLink>
    </div>
    <div class="mid-container">
      <input type="text" placeholder="搜一搜">
      <i class="iconfont icon-search"></i>
    </div>
    <div class="right-container">
      <ul>
        <!-- 多模版渲染 区分登录状态和非登录状态 -->
        <!-- 适配思路: 登录时显示第一块 非登录时显示第二块  是否有token -->
        <template v-if="true">
          <li>
            <div class="flex flex-wrap items-center">
              <el-dropdown>
                <div class="avatar">
                  <img src="@/assets/images/avatar.jpg">
                  <arrow-down style="display: none;" />
                </div>
                
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>个人主页</el-dropdown-item>
                    <el-dropdown-item>我的社区</el-dropdown-item>
                    <el-dropdown-item>创作空间</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </li>
          <li><a href="javascript:;">AI-Talk</a></li>
          <li><a href="javascript:;">背单词</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
.app-topnav {
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

  .left-container{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .minilogo{
      height: 50px;
      margin: 10px;
      margin-left: 100px;
    }

    .slogan{
      height: 50px;
    }
  }

  .mid-container{
    width: 300px;
    height: 42px;
    position: relative;
    display: flex;
    align-items: center;
    border: 2px solid #00b43b;
    border-right: none;
    border-radius: 25px;
    line-height: 32px;

    .icon-search {
      font-size: 30px;
      color: #535353;
      padding: 5px;
      border-bottom-right-radius: 20px;
      border-top-right-radius: 20px;
      border-right: 2px solid #00b43b;
    }

    .icon-search:hover{
      color: #ffffff;
      background-color: #00b43b;
    }

    input {
      margin: 10px;
      width: 100%;
      height: 30px;
      padding-left: 5px;
      color: #666;
      font-weight: 700;
    }
  }
  

  .right-container{
    display: inline-block;
    margin-right: 60px;
    ul {
      display: flex;
      height: 53px;
      justify-content: flex-end;
      align-items: center;

      li {
        a {
          padding: 0 15px;
          color: #1d1d1d;
          line-height: 1;
          display: inline-block;

          i {
            font-size: 14px;
            margin-right: 2px;
          }

          &:hover {
            color: $xtxColor;
          }
        }

        ~li {
          a {
            border-left: 2px solid #000000;
          }
        }
      }

      .avatar{
        img{
          width: 50px;
          border-radius: 30px;
        }
      }
      
    }
  }
}
</style>