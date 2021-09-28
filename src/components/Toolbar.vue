<template>
    <div>
        <v-toolbar
        dark
        height="70"
        color="yellow accent-1"
        >
        <div class="title">
        <v-toolbar-title>
            <router-link to="/">
                <img 
                class="mt-2" 
                :src="require('../assets/life.png')" 
                height="60" 
                width="60"
                />
            </router-link>
        </v-toolbar-title>
        </div>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn
                text
                color="black"
                :to="'/detail'">
                <v-icon left>mdi-filter-variant</v-icon>
                Detail
            </v-btn>
        </v-toolbar-items>
       
        </v-toolbar>
    </div>
</template>
<script>
export default {
    data: () => ({
    
    }),
}
</script>
<style>
    .title {
        font-size: 30rem;
    }
</style>