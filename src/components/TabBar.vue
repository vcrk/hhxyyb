<template>
    <div >
        <div class="yb-tab">
            <div style="float:left;width:20%;padding-top: 3px;" v-on:click="changeView('/')">
                <span class="icon iconfont icon-zhuye" style="font-size:36px;color:rgb(53, 53, 53)"></span><br/>
                <span style="font-weight:bold;font-size:13px;">主页</span>
            </div>
            <div style="float:left;width:20%;padding-top: 3px;" v-on:click="changeView('/list')">
                <span class="icon iconfont icon-icon_list_pressx" style="font-size:36px;color:rgb(53, 53, 53)"></span><br/>
                <span style="font-weight:bold;font-size:13px;">列表</span>
            </div>
            <div style="float:left;width:20%;padding-top: 3px;" v-on:click="changeView('/publish')">
                <span class="icon iconfont icon-fabu" style="font-size:36px;color:rgb(53, 53, 53)"></span><br/>
                <span style="font-weight:bold;font-size:13px;">发布</span>
            </div>
            <div style="float:left;width:20%;padding-top: 3px;" v-on:click="changeView('/information')">
                <span class="icon iconfont icon-xiaoxi" style="font-size:36px;color:rgb(53, 53, 53)"></span><br/>
                <span style="font-weight:bold;font-size:13px;">消息</span>
            </div>
            <div style="float:left;width:20%;padding-top: 3px;" v-on:click="changeView('/selfInfo')">
                <span class="icon iconfont icon-wodedangxuan" style="font-size:36px;color:rgb(53, 53, 53)"></span><br/>
                <span style="font-weight:bold;font-size:13px;">我的</span>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    methods:{
           changeView:function(path){
            if((path=='/publish'||path=='/information')&&this.store.state.isLogin==false){
                  this.$router.push({ path:'/login' });
            }else{
                if(path=='/list'){
                    sessionStorage.setItem("cid",0)
                }
                 this.$router.push({ path: path });
            }
            
        }


    }
}
</script>

<style>
    
    .yb-tab{
        z-index: 2147483647;
        width: 100%;
        height:60px;
        background-color:#fff;
        position: fixed;
        bottom:0px;
        color: rgb(53, 53, 53);
    }

</style>
