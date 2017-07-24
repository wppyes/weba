<template>
	  <div class="hello">
	  		<div class="nav-bg" @click="closenav">			
						<div class="nav-content" @click="hide">
							<img src="../assets/close.png" class="close close-index" @click="closenav" />
							<ul>
									<li><router-link to="/">首页</router-link></li>
									<li><router-link to="/yunying">微信代运营</router-link></li>
									<li><router-link to="/case">品牌全案</router-link></li>
									<li><router-link to="/quanjing">全景</router-link></li>
									<li><router-link to="/yunfuwu">云服务</router-link></li>
							</ul>
						</div>
					</div>
					<div class="logo">
						<img src="../assets/logo.png" class="animated fadeInDown"/>
						<img src="../assets/menu.png" class="nav" @click="shownavcontent" />
					</div>
					<div class="banner" id="banner">
						<div class="hd">
							<ul><li v-for="(item,index) in bannerList" v-text=""></li></ul>
						</div>
						<div class="bd">
							<ul>
								<li v-for="item in bannerList"><img v-bind:src="item.Images"></li>
							</ul>
						</div>
					</div>
					<div class="index-title animated pulse">
						品牌全案
						<span>Brand whole case</span>
					</div>
					<div class="index-img animated fadeInLeft">
						<img src="../assets/bwc.png" />
					</div>
					<div class="index-content">
						全方位的品牌策划，帮企业摸清品牌管理存在的问题，并提供创造性的解决方案，差异化的品牌定位，提升企业软实力，增强品牌竞争力，多渠道精准传播，效率高，转化率更高。
					</div>
					<div class="index-title animated fadeIn">
						微信代运营
						<span>WeChat operation</span>
					</div>
					<div class="index-img animated ani1">
						<img src="../assets/wco.png" />
					</div>
					<div class="index-content">
						量身定制，打造专属您的个性平台、创意商城、原创内容，小而美，大而广的营销活动，为您带来粉丝的裂变式增长，精准的品牌定位分析，高效的资源整合推广，助您打造强势品牌。
					</div>
					<div class="index-title animated ani2">
						全景
						<span>Panorama</span>
					</div>
					<div class="index-img animated ani3">
						<img src="../assets/pan.png" />
					</div>
					<div class="index-content">
						零距离的视觉呈现，打造720°商业全景，给您更真实的体验，与用户更深入的交互，完美展现自我的商业品质，搭配全景的完美营销，用创意赢得用户。
					</div>
					<div class="index-title animated ani4">
						云服务
						<span>Cloud services</span>
					</div>
					<div class="index-img animated ani5">
						<img src="../assets/cs.png" />
					</div>
					<div class="index-content">
						基于云计算的营销解决方案，为您提供低成本、免维护、易使用的营销工具，从企业站、电商平台、微信小程序到H5，全面覆盖您的需求，告别传统繁琐运营，一站式解决微营销，不仅仅是营销工具，而是完整解决方案。
					</div>
					<div class="index-title">
						新闻中心
						<span>News</span>
					</div>
					<div class="index-new">
						<ul>
							<li v-for="item in newList">
								<router-link :to="{path:'/Hello',query: {Id: item.Id}}" class="clear">
								<img v-bind:src="item.Img" class="float_left" />
								<div class="float_right indexnew-text">
									<span v-text="item.Title"></span>
									<p v-text="item.Desc"></p>
								</div>					
							</router-link></li>
						</ul>
					</div>
	  </div>
</template>

<script>	
	import '../../static/js/TouchSlide.1.1.js'
	export default {
		  name: 'hello',
		  data () {
			    return {
				      bannerList:[],
				      newList:[]
			    }
		  },		  
			created:function(){
					var _this=this;
					this.$ajax.get('http://www.tintonesoft.com/api/official/Banner_List').then(function(res){
							_this.bannerList=res.data.List;	
							_this.$nextTick(function() {
								//轮播图					
								TouchSlide({ 
										slideCell:"#banner",
										titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
										mainCell:".bd ul", 
										effect:"leftLoop", 
										autoPlay:true,//自动播放
										autoPage:true //自动分页
								});
							});
					}).catch(function(err){
							console.log(err)
					});														
					this.$ajax.get('http://www.tintonesoft.com/api/official/Category?Category=5').then(function(res){
						_this.newList=res.data.List;
					}).catch(function(err){
						console.log(err);
					});	
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
						wx_share_link: "http://m.tintonesoft.com",
						wx_share_img: "http://m.tintonesoft.com/images/share.png"
					})
				});
		  },
			methods:{
				shownavcontent:function(){
					$('.nav-bg').animate({
						marginLeft: '0px'
					});
				},
				closenav:function(){
					$('.nav-bg').animate({
						marginLeft: '-640px'
					});
				},
				hide:function(event){
					event.stopPropagation();
				}
			}
	}
	
			$(window).scroll(function() {
				if($(window).scrollTop()>115){
					$('.ani1').addClass('fadeInLeft');
				};
				if($(window).scrollTop()>600){
					$('.ani2').addClass('fadeInLeft');
					$('.ani3').addClass('bounce');
				};
				if($(window).scrollTop()>1200){
					$('.ani4').addClass('pulse');
					$('.ani5').addClass('fadeInLeft');
				};
			});
</script>
