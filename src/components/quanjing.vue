<template>
	  <div class="quanjing">	  	
	  		<navlist></navlist>	  		
				<p class="nav-title">全景</p>
				<img src="../assets/qj-banner.jpg" class="list-banner" />
				<p class="qj-title">关于全景</p>
				<div class="index-img">
					<img src="../assets/qj-pan.png" />
				</div>
				<div class="qj-text">
					零距离的视觉呈现，打造720°商业全景，给您更真实的体验
					与用户更深入的交互，完美展现自我的商业品质
					搭配全景的完美营销，用创意赢得用户
				</div>
				<p class="qj-title">全景案例展示</p>
				<div class="qj-list">
					<ul>
						<li v-for="item in List">
							<router-link :to="{path:'/Hello',query: {Id: item.Id,category:3}}">
								<img v-bind:src="item.Img" />
								<span v-text="item.Title"></span>
							</router-link>
						</li>
					</ul>
				</div>
	  </div>
</template>

<script>		
	import navlist from './nav'
	export default {
		  name: 'quanjing',
		  data () {
			    return {
			    	List:[]
			    }
		  },				
			created:function(){		
				var _this=this;
				$.get('http://www.tintonesoft.com/api/official/Category?Category=3',function(res){
					_this.List=res.List;
				});
			},
		  components:{
		  	navlist
		  },
		  mounted:function(){
	  		$.get("http://h5.tintonesoft.com/api/services", {
					url: window.location.href.split('#')[0]
				}, function(data) {
					new wxJsdk(wx).Init({
						appIdstr: data.appId,
						timestampstr: data.timestamp,
						nonceStrstr: data.nonceStr,
						signaturestr: data.signature,
						wx_share_title: "河南叮当信息科技",
						wx_share_desc: "河南叮当信息科技",
						wx_share_timeline: "河南叮当信息科技",
						wx_share_link: "http://m.tintonesoft.com/#/quanjing",
						wx_share_img: "http://m.tintonesoft.com/images/share.png"
					})
				});
		  }
	}
</script>
