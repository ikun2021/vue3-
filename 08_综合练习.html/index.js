const App = {
    template: '#my-app',
    data(){
        return {
            books:[
                {
                    id:1,
                    name:"11111",
                    data:"2006",
                    price:80,
                    count:1
                },
                {
                    id:2,
                    name:"2222",
                    data:"2006",
                    price:70,
                    count:3
                },
                {
                    id:3,
                    name:"33333",
                    data:"2006",
                    price:50,
                    count:1
                },
                {
                    id:4,
                    name:"44444",
                    data:"2006",
                    price:60,
                    count:1
                },
                
            ]
        }
    },

    methods:{
        increment(index){
            this.books[index].count++;
        },
        decrement(index){
            this.books[index].count--;
        },
        removeBook(index){
            this.books.splice(index,1);
        },

        formatPrice(price){
            return "￥" + price;
        }
    },

    computed:{
        totalPrice(){
            let finalPrice = 0;
            for (let book of this.books){
                finalPrice += book.count * book.price;
            }
            return finalPrice;
        },

        //vue3不支持过滤器了，需要利用计算属性做数据转化，最终展示在界面上  使用比较多
        filterBooks(){
            //js中 数组的map方法来做转换
            return this.books.map(item =>{
                //拷贝旧的对象，生成新的对象
                const newItem = Object.assign({},item)
                newItem.price = "￥" + item.price;
                return newItem;
            })
        }
    }
}

Vue.createApp(App).mount('#app');
