import Vue from "vue";
import YeTestSkin from "YeTestSkin.vue";

Vue.use(YeTest)

export default new YeTest({
    routes:[
        {
            path:"/",
            name: 'YeTestSkin',
            component: {YeTestSkin},
        }
    ]
})
