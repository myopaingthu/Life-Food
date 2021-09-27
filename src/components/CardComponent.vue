<template>
    <v-hover
        v-slot="{ hover }"
    >
        <v-card
            outlined
            align="center"
            :elevation="hover ? 16 : 2"
        >
            <v-img
                height="250"
                width="100%"
                :src="list.image"
            >
            </v-img>
            <div 
            class="black--text ma-4 description">
            {{list.title}}
            </div>
            <div class="black--text ma-4 price">
            {{list.price}}
            </div>
            <v-card-actions>
                <v-btn
                    href="tel:+959442660656"
                    target="_blank"
                    color="yellow accent-1"
                    class="mr-auto"
                    small
                >
                    ဖုန်းဖြင့်မှာယူမယ်
                </v-btn>
                <v-btn
                    href="http://m.me/life09442660656"
                    target="_blank"
                    color="yellow accent-1"
                    small
                >
                    မတ်ဆင်ဂျာမှမှာယူမယ်
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-hover>
</template>
<script>
export default {
    props:['list']
}
</script>
<style scoped>
    .description {
        font-size: 1.2em;
        font-style: italic;
        height: 40px;
    }
    .price {
        font-size: 1.1em;
    }
</style>