<template>
  <v-app>
    <Toolbar/>
    <v-main>
    <Home/>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
import Home from './components/Home';

export default {
  name: 'App',

  components: {
    Toolbar, Home
  },

  data: () => ({
    //
  }),
};
</script>
