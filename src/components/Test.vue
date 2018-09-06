<template>
    <div>
        这是一个测试用的东西
        <button v-on:click="onClick">点击返回</button>
    </div>
</template>

<script>
export default {
    name:"Test",
    data(){
        return {
            onClick:()=>{
                this.$router.go(-1);
            }
        }
    }
}
</script>
