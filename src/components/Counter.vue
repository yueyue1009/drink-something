<template>
    <div>
        <span v-bind:totalPrice=totalPrice>
            total price : {{totalPrice}}$
        </span>
    <button >購買</button>
    </div>
</template>

<script>
export default ({
    name: "Counter",
    data: function () {
        return {
            totalPrice: 0
        }
    },
    props: ["orders"],
    watch: {
        orders: { 
            handler(newOrders){
                let newResult = 0
                console.log(newOrders)
                newOrders.map(order => {
                    newResult += order.price * order.number
                })
                this.totalPrice = newResult
            },
            deep: true
        }
    },

})
</script>

<style scoped>
div {
    width: 731px;
    height: 40px;
    left: 0px;
    top:-1px;
    position: relative;
    border: solid 0.1px;
    border-color: rgb(172, 170, 170);
    text-align: right;
    padding: 10px;
    margin:0 auto;
}
span {
    position: relative;
    right:20px;
    top :5px;
    font-size: 23px
}

button {
    position: relative;
    top :5px;
    height: 32.67px;
    width: 80px;
    font-size: 20px;
    /* line-height: 30px;  */
    text-align:center;
    background-color: white;
    border: solid;
    border-width: 0.02px;
    border-color: rgb(172, 170, 170);
    margin:0px -1px -1px -1px;
}
</style>>