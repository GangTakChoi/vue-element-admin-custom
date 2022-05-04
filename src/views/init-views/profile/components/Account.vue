<template>
  <el-form>
    <el-form-item label="이름">
      <el-input v-model.trim="user.name" />
    </el-form-item>
    <el-form-item label="역할">
      <el-input v-model.trim="user.role" :disabled="true" />
    </el-form-item>
    <el-form-item label="비밀번호">
      <el-input v-model.trim="user.password" />
    </el-form-item>
    <el-form-item label="비밀번호 재입력">
      <el-input v-model.trim="user.rePassword" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">Update</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          role: ''
        }
      }
    }
  },
  methods: {
    submit() {
      this.$message({
        message: 'User information has been updated successfully',
        type: 'success',
        duration: 5 * 1000
      })
    }
  }
}
</script>
