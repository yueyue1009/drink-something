<template>
    <div class="order">
        <img :src=imgs[order.name] rel="preload">
        <div class="name">
            {{order.name}}
        </div>
        <div class="price">
            ${{order.number * order.price}}
        </div>
        <button class="reduce" v-on:click="reduce">
           -
        </button>
        <div class="number" v-bind:number=order.number >
            {{order.number}}
        </div>
        <button class="add" v-on:click="add">
            +
        </button>
        <div class="text">
            notes
        </div>
        <ul class="notes">
            <li v-for="note, x in order.notes" :key=x class="note">
                <button class="cancel" v-on:click="cancelNote(id, x)">x</button>
                <span>
                    {{note}}
                </span>
            </li>
        </ul>
        <input type=text/ placeholder="Add note (at most 3)" v-model="newNote" v-on:keyup.enter="addNotes()" >
        <button class=delete v-on:click="remove(id)" >
            x
        </button>
    </div>
</template>>


<script>
export default {
    name: 'Order',
    data:  () => {
        return {
            newNote: "",
            imgs: {
                '熟成紅茶': require('@/assets/熟成紅茶.png'),
                '春芽綠茶': require('@/assets/春芽綠茶.png'),
                '清凝冷露':require('@/assets/清凝冷露.png'),
                '珍珠鮮奶茶':require('@/assets/珍珠鮮奶茶.png'),
                '紅茶拿鐵':require('@/assets/紅茶拿鐵.png'),
                '抹茶拿鐵':require('@/assets/抹茶拿鐵.png'),
                '伯爵拿鐵':require('@/assets/伯爵拿鐵.png'),
                '芝芝葡萄':require('@/assets/芝芝葡萄.png'),
                '柳橙果粒茶':require('@/assets/柳橙果粒茶.png'),
                '葡萄柚綠茶':require('@/assets/葡萄柚綠茶.png'),
            }

        }
    },
    props: {
        order: {
            name: String,
            price: Number,
            notes: Array,
            number: Number,
        },
        id: Number,
        remove: Function,
        cancelNote: Function
    },
    methods: {
        add: function() {
            this.order.number++;
        },
        reduce: function() {
            if(this.order.number > 1)
                this.order.number--;
        },
        addNotes: function() {
            if(this.newNote.trim() !="" && this.order.notes.length < 3) {
                this.order.notes.push(this.newNote.trim())
                this.newNote=""
            }
        }

    }
}
</script>

<style scoped>
img {
    position: absolute;
    left: 10px;
    width: 100px;
    height: 145px;
    top:2.5px;
    border: solid;
    border-width: 0.001px;
    border-color: rgb(224, 224, 224);
}

ul {
    list-style-type: none;
}


.name {
    position: absolute;
    left:160px;
    top: 5px;
    font-size: 26px;
}

.price {
    position: absolute;
    right:52px;
    top: 30%;
    font-size: 30px;
}

.order {
    /* height: 200px; */

    border: solid;
    border-width: 0.02px;
    border-color: rgb(172, 170, 170);
    margin:-1px -1px -1px 0px;
}

.notes {
    position: relative;
    left:160px;
    top: 70px;
    font-size: 16px;
    text-align:left;
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
    /* line-height: 30px;  */
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
    /* line-height: 30px;  */
    text-align:center;
    background-color: white;
    border: solid;
    border-width: 0.02px;
    border-color: rgb(172, 170, 170);
    /* margin:0px -1px -1px -1px; */
}
.delete {
    position: absolute;
    right:12px;
    top: 3px;
    height: 32.67px;
    width: 30px;
    font-size: 23px;
    text-align:center;
    background-color: white;
    color: rgb(172, 170, 170);
    border: none;
    background: none;
}

.cancel {
    background-color: white;
    color: rgb(172, 170, 170);
    border: none;
    background: none;
    position: relative;
    left: 0px;
    top: 0px;
}

.text {
    position: absolute;
    left:165px;
    top: 45px;
}

input {
    position: absolute;
    left:420px;
    top: 100px;

    font-size: 13px;
}

</style>