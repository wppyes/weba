<template>
	  <div class="navlist">	  		
			<div class="nav-bg-right"  @click="closenav">			
				<div class="nav-content" @click="hide">
					<img src="../assets/close.png" class="close-list close" @click="closenav" />
							<ul>
									<li><router-link to="/">首页</router-link></li>
									<li><router-link to="/yunying">微信代运营</router-link></li>
									<li><router-link to="/case">品牌全案</router-link></li>
									<li><router-link to="/quanjing">全景</router-link></li>
									<li><router-link to="/yunfuwu">云服务</router-link></li>
							</ul>
				</div>
			</div>
			<div class="nav-list">
				<div class="back" @click="back">
					返回
				</div>
				<img src="../assets/nav.png" class="nav1" @click="shownavcontent" />
			</div>
	  </div>
</template>

<script>	
	export default {
		  data () {
			    return {
			    }
		  },		  
			created:function(){	
			},
			methods:{
				shownavcontent:function(){
					$('.nav-bg-right').animate({
						marginLeft: '0px'
					});
				},
				closenav:function(){
					$('.nav-bg-right').animate({
						marginLeft: '640px'
					});
				},
				back:function(){
					history.back();
				},
				hide:function(event){
					event.stopPropagation();
				}
			}
	}
</script>
