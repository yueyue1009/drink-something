<template>
    <div class="form">
        <span class="product">想喝什麼？</span>
        <select class="product-selector" v-model="selected">
            <option id="empty"></option>
            <optgroup  v-for="(val, type) in sortedProducts" v-bind:label=type v-bind:key=type >
                <option v-for="(product) in val" v-bind:key="product.name">
                    {{product.price + "$ " +product.name}}
                </option>
            </optgroup>
        </select>
        <span class="sugar">甜度</span>
        <select  class="sugar-selector" v-model="sugar">
            <option id="empty"></option>
            <option key="normal">
                正常糖
            </option>
            <option key="less">
                少糖
            </option>
            <option key="half">
                半糖
            </option>
            <option key="little">
                微糖
            </option>
            <option key="none">
                無糖
            </option>
        </select>
        <span class="ice">冰塊</span>
        <select class="ice-selector" v-model="ice">
            <option id="empty"></option>
            <option key="normal">
                正常冰
            </option>
            <option key="less">
                少冰
            </option>
            <option key="little">
                微冰
            </option>
            <option key="none">
                去冰
            </option>
        </select>
        <div class="price">
            <!-- ${{order.number * order.price}} -->
            ${{selected.split("$")[0] * number}}
        </div>
        <button class="reduce" v-on:click="reduce" >
           -
        </button>
        <div class="number" v-bind:number=number>
            {{number}}
        </div>
        <button class="add" v-on:click="add">
            +
        </button>
        <button class="confirm" v-on:click="check">
            確認
        </button>
    </div>
</template>

<script>

export default ({
    name: "OrderForm",
    data: function () {
        return {
            selected: "",
            name: "",
            ice: "",
            sugar: "",
            number: 1
        }
    },
    props: ["products", "orders"],
    computed: {
        // 把商品按照分類以及價格排序好 以便在選單顯示
        sortedProducts: function() {
            const result = {}
            this.products.map(product => {
                let type = product.type
                if(!(type in result)) {
                    result[type] = []
                }
                result[type].push(product)
            })
            const keys = Object.keys(result)
            keys.map(key => {
                result[key].sort((a, b)=> {
                    return a.price - b.price
                })
            })
            return result
        }
    },
    methods: {
        check: function() {

            if(this.sugar == "" || this.ice =="" || this.selected =="") {
                alert("三個條件都要填喔！")
                return
            }

            // 檢查是否有相同品項相同甜度冰塊已經被order過
            for(let i = 0; i < this.orders.length; i++ ){
                if(this.selected.split(" ")[1] == this.orders[i].name &&
                this.sugar == this.orders[i].notes[0].split(" ")[0] &&
                this.ice == this.orders[i].notes[0].split(" ")[1] ) {
                    this.orders[i].number += this.number
                    return 
                }
            }
            this.orders.push({
                name: this.selected.split(" ")[1], 
                price: this.selected.split("$")[0], 
                notes:[this.sugar+ " " +this.ice], 
                number: this.number
            })
        },
        add: function() {
            this.number++;
        },
        reduce: function() {
            if(this.number > 1)
                this.number--;
        }
    }
})
</script>

<style scoped>
.form {
    position: relative;
    height: 150px;
    width: 750px;
    margin:0 auto;
    border: solid 0.1px;
    border-color: rgb(172, 170, 170);
    margin:-1 auto;
}

.price {
    position: absolute;
    right:52px;
    top: 30%;
    font-size: 30px;
}

.product {
    position: absolute;
    left:45px;
    top: 10px;
}
.sugar {
    position: absolute;
    left:200px;
    top: 10px;
}
.ice {
    position: absolute;
    left:300px;
    top: 10px;
}

.product-selector {
    position: absolute;
    left:45px;
    top: 40px;
}
.sugar-selector {
    position: absolute;
    left:200px;
    top: 40px;
}
.ice-selector {
    position: absolute;
    left:300px;
    top: 40px;
}

.number {
    position: absolute;
    right:45px;
    top: 100px;
    font-size: 20px;
    width: 60px;
    height: 30px;
    line-height: 32.67px;
    border: solid;
    border-width: 0.02px;
    border-color: rgb(172, 170, 170);
    margin:0px -1px -1px 0px;
}

.reduce {
    position: absolute;
    right:106px;
    top: 100px;
    height: 32.67px;
    width: 30px;
    font-size: 23px;
    text-align:center;
    background-color: white;
    border: solid;
    border-width: 0.02px;
    border-color: rgb(172, 170, 170);
    margin:0px -1px -1px -1px;
}

.add {
    position: absolute;
    right:16px;
    top: 100px;
    height: 32.67px;
    width: 30px;
    font-size: 23px;
    text-align:center;
    background-color: white;
    border: solid;
    border-width: 0.02px;
    border-color: rgb(172, 170, 170);
}

.confirm {
    position: absolute;
    right:0px;
    top: 0px;
    height: 32.67px;
    width: 60px;
    font-size: 18px;
    text-align:center;
    background-color: white;
    border: solid;
    border-width: 0.02px;
    border-color: rgb(172, 170, 170);
    margin:0px -1px -1px -1px;
}
</style>
