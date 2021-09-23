<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-row type="flex" justify="start">
        <el-select v-model="form.region" placeholder="+886">
          <el-option label="+886" value="+886" style="width:20%">+886</el-option>
        </el-select>
        <el-input></el-input>
      </el-row>

      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      form: {
        name: "",
        delivery: false,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>
