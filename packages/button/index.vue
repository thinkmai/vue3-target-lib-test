/** * * Created by maixing on 2021/10/31 00:24:42 * */
<template>
  <div>
    {{ count }}
    <span @click="onAdd" class="btn">add</span>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "vbutton",
  data() {
    return {};
  },
  setup() {
    let count = ref(0);
    let onAdd = () => {
      count.value++;
    };
    return {
      count,
      onAdd,
    };
  },
};
</script>
<style>
.btn{
  display: inline-block;
  margin: 0 20px;
  padding: 5px;
  user-select: none;
  background-color: cornflowerblue;
  cursor: pointer;
}
</style>
