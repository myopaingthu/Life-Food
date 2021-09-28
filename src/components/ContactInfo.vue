<template>
    <div class="yellow accent-1 mx-0 mt-5 py-11">
        <v-container 
        fill-height>
            <v-row justify="center" >
                <v-col
                    cols="12"
                    sm="3"
                >
                    <v-img
                        :max-height="$vuetify.breakpoint.xs ? 100 : 200"
                        :max-width="$vuetify.breakpoint.xs ? 100 : 200"
                        :src="require('../assets/life.png')"
                    >
                    </v-img>
                </v-col>
                <v-col
                    cols="12"
                    sm="9"
                >
                    <v-hover
                        v-slot="{ hover }"
                    >
                        <v-card
                        width="100%"
                        height="100%"
                        outlined
                        class="pa-3"
                        :elevation="hover ? 16 : 2"
                        >
                            <v-row 
                            no-gutters
                            class="mb-2"
                            >
                                <v-col
                                    cols="12"
                                    sm="3"
                                >
                                <v-icon
                                    color="green darken-2"
                                    class="mb-2"
                                >
                                mdi-domain
                                </v-icon>
                                <p class="d-inline contact-size green--text text--darken-2">
                                    Address
                                </p>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="9"
                                    class="mb-5 mb-md-0"
                                >
                                <p class="d-inline contact-size text--primary">
                                    Kyimyindaing Township, Yangon, Myanmar
                                </p>
                                </v-col>
                            </v-row>
                            <v-row 
                            no-gutters
                            class="mb-2"
                            >
                                <v-col
                                    cols="12"
                                    sm="3"
                                >
                                <v-icon
                                    color="black darken-2"
                                    class="mb-2"
                                >
                                mdi-phone
                                </v-icon>
                                <p class="d-inline contact-size black--text text--darken-2">
                                    Phone
                                </p>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="9"
                                    class="mb-5 mb-md-0"
                                >
                                    <a
                                        href="tel:+959442660656"
                                        target="_blank"
                                        class="text-decoration-none contact-size text--primary"
                                    >
                                        09442660656
                                    </a>
                                </v-col>
                            </v-row>
                            <v-row 
                            no-gutters
                            class="mb-2"
                            >
                                <v-col
                                    cols="12"
                                    sm="3"
                                >
                                <v-icon
                                    color="red darken-2"
                                    class="mb-2"
                                >
                                mdi-email
                                </v-icon>
                                <p class="d-inline contact-size red--text text--darken-2">
                                    Email
                                </p>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="9"
                                    class="mb-5 mb-md-0"
                                >
                                    <a
                                        href="mailto:lifefoodservicedistributor@gmail.com"
                                        target="_blank"
                                        class="text-decoration-none contact-size text--primary"
                                    >
                                        lifefoodservicedistributor@gmail.com
                                    </a>
                                </v-col>
                            </v-row>
                            <v-row 
                            no-gutters
                            class="mb-2"
                            >
                                <v-col
                                    cols="12"
                                    sm="3"
                                >
                                <v-icon
                                    color="blue darken-2"
                                    class="mb-2"
                                >
                                mdi-facebook
                                </v-icon>
                                <p class="d-inline contact-size blue--text text--darken-2">
                                    Facebook
                                </p>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="9"
                                    class="mb-5 mb-md-0"
                                >
                                    <a
                                        href="https://www.facebook.com/life09442660656/"
                                        target="_blank"
                                        class="text-decoration-none contact-size text--primary"
                                    >
                                        Follow us on facebook page
                                    </a>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
   
}
</script>
<style scoped>
    .contact-size {
        font-size: 1.3em;
        font-family: "Times New Roman", Times, serif;
    }
</style>