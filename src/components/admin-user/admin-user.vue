<template>
  <div>
    <ol class="breadcrumb">
      <li><a href="/">首页</a></li>
      <li><span>用户列表</span></li>
    </ol>
    <h3>用户列表</h3>
    <table class="table table-hover table-bordered">
      <tbody>
      <tr>
        <td>ID</td>
        <td>用户名</td>
        <td>是否是管理员</td>
        <td>设为管理员</td>
        <td>删除用户</td>
      </tr>
      </tbody>
      <tbody v-if="userList">
      <tr v-for="(user,index) in userList">
        <td>{{index}}</td>
        <td>{{user.username}}</td>
        <td>{{user.type === 0 ? '是':'否'}}</td>
        <td>
          <a href="/admin/user/setAdmin">是</a>/
          <a href="/admin/user/removeAdmin">否</a>
        </td>
        <td>
          <a @click="removeUser(user._id,index)">删除</a>
        </td>
      </tr>
      </tbody>
      <tbody v-else>
      <td colspan="6">暂时没有用户</td>
      </tbody>
    </table>
    <page class="pull-right page"
          :total="total"
          :current-page='current'
          :display="display"
          @pagechange="pageChange"></page>
  </div>
</template>

<script>
  import toast from '@/components/toast/toast'
  import Page from '@/components/page/page'

  export default {
    name: "admin-user",
    data() {
      return {
        userList: null,
        total: 0,     // 记录总条数
        display: 10,   // 每页显示条数
        current: 1,   // 当前的页数
      }
    },
    created() {
      this.getUserList()
    },
    methods: {
      removeUser(id, index) {
        if (index > -1) {
          this.userList.splice(index, 1);
        }
        this.$api.delUser({id}).then(res => {
          toast({
            position: 'top',
            message: res.data.message
          })
        })
      },
      pageChange(current) {
        this.getUserList(current)
      },
      getUserList(currentPage = 1) {
        this.$api.getUserList({
          pageSize: this.display,
          pageNum: currentPage
        }).then(res => {
          const data = res.data;
          if (data.code === 200) {
            this.total = data.data.count
            this.current = data.data.pageNum
            this.userList = data.data.list
          }
        })
      }
    },
    components: {
      Page
    }
  }
</script>

<style scoped>
  .page {
    margin-right: 20px;
  }
</style>
