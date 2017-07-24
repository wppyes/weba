<template>
	  <div class="weixin">	  	
	  		<navlist></navlist>
				<p class="nav-title">微信代运营</p>
	  		<img src="../assets/w-banner.jpg" class="list-banner" />
				<p class="list-title">我们的服务</p>
				<div class="wx-list">
					<ul class="clear">
						<li @click="showel==1?showel=-1:showel=1">
							<img src="../assets/dwfx_white.png" v-show="showel!=1" />
							<img src="../assets/dwfx.png" v-show="showel==1"/>
							<img src="../assets/upward.png" class="ward" v-show="showel==1"/>
						</li>
						<li @click="showel==2?showel=-1:showel=2">
							<img src="../assets/xtdj.png" v-show="showel!=2"/>
							<img src="../assets/xtdj_red.png" v-show="showel==2"/>
							<img src="../assets/upward.png" class="ward" v-show="showel==2"/>
						</li>
						<li @click="showel==3?showel=-1:showel=3">
							<img src="../assets/nryy.png" v-show="showel!=3"/>
							<img src="../assets/nryy_red.png" v-show="showel==3"/>
							<img src="../assets/upward.png" class="ward" v-show="showel==3"/>
						</li>
					</ul>
					<div class="wx-content" v-show="showel==1">
						<p>品牌定位分析</p>
						定位准，方能见效快<br />量身定制品牌定位推广策略
					</div>
					<div class="wx-content" v-show="showel==2">
						<p>平台系统搭建</p>
						独具一格，方能抢占先机<br />个性化微信公众号平台系统，完美呈现品牌特色
					</div>
					<div class="wx-content" v-show="showel==3">
						<p>内容运营</p>
						内容原创，方能走向精品<br />高质量的文案创意，打造精品文化
					</div>
					<ul class="clear">
						<li @click="showel==4?showel=-1:showel=4">
							<img src="../assets/hdch.png" v-show="showel!=4"/>
							<img src="../assets/hdch_red.png" v-show="showel==4"/>
							<img src="../assets/upward.png" class="ward" v-show="showel==4"/>
						</li>
						<li @click="showel==5?showel=-1:showel=5">
							<img src="../assets/scyy.png" v-show="showel!=5"/>
							<img src="../assets/scyy_red.png" v-show="showel==5"/>
							<img src="../assets/upward.png" class="ward" v-show="showel==5"/>
						</li>
						<li @click="showel==6?showel=-1:showel=6">
							<img src="../assets/qdtg.png" v-show="showel!=6"/>
							<img src="../assets/qdtg_red.png" v-show="showel==6"/>
							<img src="../assets/upward.png" class="ward" v-show="showel==6"/>
						</li>
					</ul>
					<div class="wx-content" v-show="showel==4">
						<p>渠道推广</p>
						资源整合，方能高效推广<br />多渠道联合营销推广，打造强势品牌
					</div>
					<div class="wx-content" v-show="showel==5">
						<p>商城运营</p>
						创意展现，方能赢得用户<br />个性化商城，创意的运营策略，流量的快速转化
					</div>
					<div class="wx-content" v-show="showel==6">
						<p>营销活动策划</p>
						活动精彩，方能吸引<br />受众小而美，大而广的营销活动，粉丝裂变式增长
					</div>
				</div>
				<p class="list-title">我们的优势</p>
				<div class="index-img">
					<img src="../assets/ys.jpg" />
				</div>
				<div class="wx-text">
					紧跟微信营销的新趋势，结合当下流行的新元素，把握企业产品的竞争点，为企业的微信运营提供全面的解决方案
				</div>
				<div class="index-img">
					<img src="../assets/ys2.png" />
				</div>
				<div class="wx-text">
					创意我们掘新弃旧，内容我们深挖精耕，活动我们运筹帷幄（承接地气），更有超硬技术支撑，助您紧贴互联网+脉络，把握新营销趋势下的蜕变机遇
				</div>
	  </div>
</template>

<script>		
	import navlist from './nav'
	export default {
		  name: 'weixin',
		  data () {
			    return {
			    	showel:-1
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
						wx_share_link: "http://m.tintonesoft.com/#/yunying",
						wx_share_img: "http://m.tintonesoft.com/images/share.png"
					})
				});
		  }
	}
</script>
