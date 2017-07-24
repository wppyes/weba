<template>
	  <div class="pinpaiquanan">	  	
	  		<navlist></navlist>
				<p class="nav-title">品牌全案</p>
				<img src="../assets/pp-banner.jpg" class="list-banner" />
				<div class="index-img">
					<img src="../assets/ppdw.png" />
				</div>
				<div class="pp-text">
					品牌定位
					<p>打造品牌差异化，增强品牌影响力及产品竞争力。</p>
				</div>
				<div class="index-img bgray padding-t">
					<img src="../assets/ppch.png" />
					<div class="pp-text margin-t">
						品牌形象
						<p>传递品牌价值观，展示品牌软实力。</p>
					</div>
				</div>
				<div class="index-img">
					<img src="../assets/ppzx.png" />
				</div>
				<div class="pp-text">
					品牌策划
					<p>针对品牌诉求，解决品牌问题。</p>
				</div>
				<div class="index-img bgray">
					<img src="../assets/ppyx.png" />
					<div class="pp-text margin-t">
						品牌营销
						<p>提升品牌核心价值，提高转化率。</p>
					</div>
				</div>
				<div class="index-img">
					<img src="../assets/pptg.png" />
				</div>
				<div class="pp-text margin-b">
					品牌推广
					<p>精准传播，渠道广，速度快，效率高。</p>
				</div>
	  </div>
</template>

<script>		
	import navlist from './nav'
	export default {
		  name: 'pinpaiquanan',
		  data () {
			    return {
			    }
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
						wx_share_link: "http://m.tintonesoft.com/#/case",
						wx_share_img: "http://m.tintonesoft.com/images/share.png"
					})
				});
		  }
	}
</script>
