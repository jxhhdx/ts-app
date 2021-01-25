<template>
    <div class="hello">
        
    </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "@vue/composition-api";
import { useStore } from "../useSearchWord";

export default defineComponent({
    //更好的进行类型推断
    setup() {
        const searchWord = useStore();
        watchEffect(()=>{
            console.log("this is :" +searchWord.value);
        })
    },
});
</script>
<style scoped>

</style>
