<template>
    <div>
        <div class="yourOrder">
            您的訂單
            <div class=sort>
                <span>sort by </span>
                <input type=radio class=priceSort id="price" value="price" v-model="picked" v-on:change="handleSort()">
                <span>price</span>
                <input type=radio class=nameSort id="name" value="name" v-model="picked" v-on:change="handleSort()">
                <span>name</span>
                <span class="dir" v-bind:topDown=topDown v-bind:pos=pos v-on:click="changeDirection()">{{topDown[pos]}}</span>
            </div>
        </div>
        <ul>
            <li v-for="(order, id) in orders" :key="order.name">
                <Order  v-bind:order=order v-bind:id=id v-bind:remove=remove v-bind:cancelNote=cancelNote />
            </li>
        </ul>
    </div>
</template>

<script>
import Order from "./Order"

export default {
    name: 'OrderList',
    data: function () {
        return {
            picked: "price",
            topDown: ["⇧", "⇩"],
            pos: 0,
        }
    },
    props: ['orders'],
    components: {
        Order
    },
    methods: {
        remove: function(i) {
            this.orders.splice(i, 1)
        },
        
        cancelNote: function(orderId, noteID) {
            this.orders[orderId].notes.splice(noteID, 1)
        },
        handleSort: function() {
            if(this.picked == "name") {
                if(this.pos) {
                    this.orders = this.orders.sort((a, b)=> {
                        return (a.name > b.name)
                    })
                }
                else {
                    this.orders = this.orders.sort((a, b)=> {
                        console.log(a.name < b.name)
                        return (a.name < b.name)
                    })
                }
            }
            else {
                if(this.pos) {
                    this.orders = this.orders.sort((a, b)=> {
                        return ( a.price * a.number - b.price * b.number)
                    })
                }
                else {
                    this.orders = this.orders.sort((a, b)=> {
                        return ( b.price * b.number - a.price * a.number)
                    })
                }
            }
        },
        changeDirection: function() {
            this.pos = (this.pos + 1) % 2
            this.handleSort()
        },
    },
}
</script>

<style  scoped>
div {
    position: relative;
    height: 150px;
    width: 750px;
    right: 20.8px;
    margin:0 auto;
    top: -1px;
}
ul {
    margin:0 auto;
    list-style-type: none;
}
.yourOrder {
    width: 731px;
    height: 20px;
    left: 19px;
    top:-1px;
    position: relative;
    border: solid 0.1px;
    border-color: rgb(172, 170, 170);
    text-align: left;
    padding: 10px;
    /* margin:0 auto; */
    margin:-1 auto;
}
.sort {
    position: relative;
    top: -20px;
    left: 540px;
}

.dir {
    position: relative;
    left: 8px;
    border: solid 0.1px;
    border-color: rgb(172, 170, 170);
    font-size: 16px;
}
</style>