function browserRedirect() {
			var sUserAgent = navigator.userAgent.toLowerCase();
			if(/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
				//跳转移动端页面
				alert('跳转移动端页面')
				
			} else {
				//跳转pc端页面
				alert('跳转pc端页面')
				
			}
		}
		browserRedirect();