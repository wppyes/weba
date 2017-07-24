<template>
	  <div class="fuwu">	  	
	  		<navlist></navlist>
				<p class="nav-title">叮当云服务</p>
				<img src="../assets/y-banner.jpg" class="list-banner" />
				<div class="y-title">
					叮当云服务
					<p>打通并共享企业各平台的营销数据，实现智能化、精准化的营销分析投放</p>
				</div>
				<div class="index-img">
					<img src="../assets/qyz.png" />
				</div>
				<div class="y-text">
					企业站
					<p>个性化定制企业形象，丰富企业推广方式 集聚企业特色，展现企业魅力与实力</p>
				</div>
				<div class="index-img">
					<img src="../assets/wsc.png" />
				</div>
				<div class="y-text">
					微商城
					<p>强大稳定的开店系统，快速搭建商城完整的线上交易支持提升流量和销量丰富的线上营销粉丝互动不怕没有回头客完善的会员管理以及数据分析祝您精准营销</p>
				</div>
				<div class="index-img">
					<img src="../assets/wyx.png" />
				</div>
				<div class="y-text">
					微营销
					<p>创意十足的营销策划更接地气的O2O运作模式打通线上线下壁垒，让营销紧跟时代潮流时刻保持与用户的零距离对话</p>
				</div>
				<div class="index-img">
					<img src="../assets/H5.png" />
				</div>
				<div class="y-text">
					H5
					<p>极具创意的炫酷页面为客户带来无限惊喜灵活多样的互动性强力增加用户粘性完善的数据分析随时掌握运营数据</p>
				</div>
	  </div>
</template>

<script>		
	import navlist from './nav'
	export default {
		  name: 'fuwu',
		  data () {
			    return {
			    }
		  },
		  components:{
		  	navlist
		  },
		  mounted:function(){
		  	console.log(window.location.href.split('#')[0]);
		  	console.log(window.location.href);
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
						wx_share_link: "http://m.tintonesoft.com/#/yunfuwu",
						wx_share_img: "http://m.tintonesoft.com/images/share.png"
					})
				});
		  }
	}
</script>
