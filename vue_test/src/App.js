// 引入子组件
import MyButton from "./components/MyButton"

// 创建一个根组件
export default {
    data() {
        return {
            msg: "我爱Vue"
        }
    },

    // 注册子组件
    components: {
        MyButton
    },

    template: `
    <h1>{{msg}}</h1>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
    `
}