<template>
  <div class="Welcome">
    <div class="logo">

    <img src="@/assets/imgs/logo.png" class="logoimg">

    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'userName',
            { rules: [{ required: true, message: '请输入您的工号或手机号码!' }] },
          ]"
          placeholder="工号或手机号码" class="frame"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'password',
            { rules: [{ required: true, message: '请输入密码！' }] },
          ]"
          type="password"
          placeholder="密码" class="frame"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" class="login-form-button">
         登录
        </a-button>

      </a-form-item>
    </a-form>

    </div>
    </div>

</template>

<script >
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          localStorage.setItem('user',values);
          this.$router.push("/search")
        }
      });
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logoimg{
    width:320px;
    height:200px;
}
.logo{
    position: absolute;
    left:35%;
    top: 15%
}
.frame
{
  width: 500px;
  top:20px
}
.login-form-button{
  width:75 px;
 top:20px
}
</style>
