export default {
    data() {
        return {
            count: 0
        }
    },

    template: `
    <h2>子组件</h2>
    <button @click='count++'>点我一下</button><span>{{count}}</span>
    `
}