<template>
    <div>
        <v-toolbar
        dark
        height="70"
        color="yellow accent-1"
        >
        <div class="title">
        <v-toolbar-title>
            <img class="mt-2" :src="require('../assets/life.png')" height="60" width="60"/>
        </v-toolbar-title>
        </div>

        <v-spacer></v-spacer>
       
        </v-toolbar>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .title {
        font-size: 30rem;
    }
</style>