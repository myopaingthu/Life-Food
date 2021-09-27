<template>
    <v-container class="mt-5">
        <v-row>
        <v-col
            v-for="list in lists"
            :key="list.image"
            cols="12"
            sm="4"
        >
            <card-component
                :list=list
            >
            </card-component>  
        </v-col>
        </v-row>
    </v-container>
</template>
<script>
import CardComponent from "./CardComponent";
export default {
    components: {
        CardComponent
    },
    data: () => ({
        lists: [
            { title: "သန့်ရှင်းလတ်ဆတ်တဲ့ ပုဇွန်များ", price: "တစ်ပိသာ ၂၃၀၀၀ ကျပ်", image: require("../assets/list-prawn.jpg")},
            { title: "သန့်ရှင်းလတ်ဆတ်တဲ့ ငါးသလောက်များ", price: "တစ်ပိသာ ၂၀၀၀၀ ကျပ်", image: require("../assets/list-fish.jpg")},
            { title: "နူးနူးအိအိ ငါးသလောက်ပေါင်း", price: "တစ်ပွဲ ၆၀၀၀ ကျပ်", image: require("../assets/list2.jpg")},
        ]
    }),
}
</script>
<style scoped>
   
</style>