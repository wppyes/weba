	function IsPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break
			}
		};
		return flag
	};
	judjehref();	
	function judjehref() {
		var flag = IsPC();
		var host = window.location.hostname;
		if (flag) {
			if (host == 'www.tintonesoft.com') {
				return
			} else {
				location.href = 'http://www.tintonesoft.com' + window.location.hash
			}
		} else {
			if (host == 'm.tintonesoft.com') {
				return
			} else {
				location.href = 'http://m.tintonesoft.com' + window.location.hash
			}
		}
	};
	$(window).resize(judjehref);