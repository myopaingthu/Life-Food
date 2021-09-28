<template>
    <div>
        <v-img
            height="90vh"
            width="100%"
            src="../assets/prawn.jpg"
        >
            <v-container fill-height>
                <v-row 
                justify="center" 
                align="center"
                class="abs-center">
                    <v-col cols="12" sm="8">
                        <v-hover
                            v-slot="{ hover }"
                        >
                            <v-card
                            width="1000"
                            align="center"
                            outlined
                            :elevation="hover ? 16 : 2"
                            >
                                <v-card-text>
                                    <h5 class="line-height text--primary">
                                        မြစ်ဝကျွန်းပေါ်ထွက်လတ်ဆက်သော ပုဇွန်ထုပ် ငါးသလောက်ဆိုဒ်မျိုးစုံ နှင့် ငါးသလောက်ပေါင်းတို့ကို ဝယ်ယူအားပေးနိုင်ပါသည်။
                                    </h5>
                                </v-card-text>
                                <v-card-actions>
                                    <v-btn
                                        href="tel:+959442660656"
                                        target="_blank"
                                        color="yellow accent-1"
                                        class="mx-auto"
                                    >
                                    <v-icon
                                        dark
                                        class="mr-2"
                                    >
                                        mdi-phone
                                    </v-icon>
                                        09442660656
                                    </v-btn>
                                </v-card-actions>
                            
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
                <div class="mt-auto mx-auto">
                    <v-btn
                        large
                        fab
                        color="yellow accent-1"
                    >
                    <v-icon
                        large
                        dark
                        @click="scroll"
                    >
                        mdi-arrow-down-bold
                    </v-icon>
                    </v-btn>
                </div>
            </v-container>
        </v-img>
        <List/>
        <ContactInfo/>
    </div>
</template>
<script>
import List from "./List";
import ContactInfo from "./ContactInfo";
export default {
    components: {
        List, ContactInfo
    },
    methods: {
        scroll () {
            window.scrollBy(0, window.innerHeight);
        }
    },
}
</script>
<style>
    .abs-center {
        position: relative;
        top: 80px;
    }
    .line-height {
        font-size: 1.5rem;
        line-height: 2.6;
    }
</style>