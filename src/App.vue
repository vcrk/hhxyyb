<template>
  <div id="app" style="height:100%">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
     <router-view v-if="!$route.meta.keepAlive"/>
    <TabBar v-if="this.isTabBar()"></TabBar>
  </div>
</template>



<script>
import TabBar from './components/TabBar';

export default {
  data(){

  },
  components:{
    TabBar
  },
  methods:{
    isTabBar(){
      if(this.$route.path!='/login'&&this.$route.path!='/regist')
      {
         return true;
      }else{
        return false;
      }
    }
  },
}
</script>


<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
