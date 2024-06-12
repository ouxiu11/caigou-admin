import axios from 'axios';


const reqAPI = {
    methods: {
// 获取全部商品列表
        async getItemsList() {
            try {
                const res = await axios.get();
                console.log(res.data)
            } catch (err) {
                console.log(err);
            }
        }
    }
}

export {reqAPI};