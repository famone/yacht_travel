<template>
    <div id="app">
      
      <Header />
  
      <router-view></router-view>


      <Footer />


  


      





    </div>
</template>

<script>
import './assets/css/style.css'
import axios from 'axios'
import Header from './components/ui/Header.vue'
import Footer from './components/ui/Footer.vue'

  export default{
  	components: {Header, Footer},

  }
</script>



<style>
  select{
    width: 100%;
  }
</style>





