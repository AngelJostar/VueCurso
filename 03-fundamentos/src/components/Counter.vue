<template>
  <h2>{{customTitle}}</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

  <div>
    <button v-on:click="increaseCounter()">+1</button>
    <button @click="decreaseCounter()">-1</button>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: {
    title: String,
    start: {
        type: Number,
        default: 10,
        // required: true
        validator(value){
          return value >= 0
        }
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquareValue() {
      return counter;
    },
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    },
  },
  computed: {
    squareCounter() {
      console.log("");
      return this.counter * this.counter;
    },
    customTitle(){
        return this.title || 'Counter'

        // Primera forma
        // return this.title ? this.title : 'Counter'

        // Segunda Forma
        // if(this.title){
        //     return this.title
        // }else{
        //     return "Counter"
        // }
    }
  },
};
</script>


<style>
button {
  background-color: brown;
  border-radius: 5px;
  color: white;
  margin: 0 5px;
}
</style>