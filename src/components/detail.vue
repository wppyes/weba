<template>
	  <div class="xiangqing">	  	
	  		<navlist></navlist>	
				<p class="nav-title">新闻中心</p>			
				<img src="../assets/d-banner.jpg" class="list-banner" />
				<div id="content">			
					<h1 v-text="List.Title"></h1>
					<div class="detail" v-html="List.Content"></div>
					<div class="hrefbth" v-if="category==3">
						<a v-bind:href="List.Url">全景详情</a>
					</div>
				</div>
	  </div>
</template>

<script>		
	import navlist from './nav'
	export default {
		  name: 'xiangqing',
		  data () {
			    return {
			    	List:[],
			    	category:'',
			    	id:''
			    }
		  },				
			created:function(){
				this.category=this.$route.query.category;
				this.id=this.$route.query.Id;
				var _this=this;
				this.$ajax.post('http://www.tintonesoft.com/api/official/Article_Id?Id='+this.$route.query.Id).then(function(res){
					_this.List=res.data.List;
				}).catch(function(err){
					console.log(err);
				});
			},
		  components:{
		  	navlist
		  },
		  mounted:function(){
		  	var _this=this;
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
						wx_share_link: "http://m.tintonesoft.com/#/Hello?Id="+_this.id+'&category='+_this.category,
						wx_share_img: "http://m.tintonesoft.com/images/share.png"
					})
				});
		  }
	}
</script>
