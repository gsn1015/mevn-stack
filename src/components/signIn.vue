<template>
    <div class="sign-in">
        <Form :model="formSingIn" :label-width="60">
            <FormItem label="姓名">
                <Input v-model="formSingIn.name"/>
            </FormItem>
            <FormItem label="密码">
                <Input v-model="formSingIn.password"/>
            </FormItem>
            <FormItem>
                <Button @click="onSubmit" type="primary">登录</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
import userApi from '../api/user';
export default {
    data() {
        return {
            formSingIn: {
                name: '',
                password: '',

            }
        }
    },
    created() {

    },
    methods: {
        onSubmit() {
            userApi.login({
                name: this.formSingIn.name,
                password: this.formSingIn.password,
            }).then((res)=> {
                console.log(res,"res");
                this.$router.push('/index')
            })
        },
        onReset() {

        },
    }
}
</script>
<style lang="less" scoped>
.sign-in {
    width: 500px;
    height: 1000px;
    overflow: hidden;
    margin: 0 auto;
}
</style>


