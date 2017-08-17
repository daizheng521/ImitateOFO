window.onload = function(){
	
	
	
	
	/*选择支付方式的点击事件
	$('.paymentway-wx').click(function(){
		if($('.paymentway-wx-right img').is('.paymentway-show')){
			if($('.paymentway-alipay-right img').is('.paymentway-show')){
				$('.paymentway-alipay-right img').removeClass('paymentway-show');
				$('.paymentway-alipay-right img').addClass('paymentway-hide');
			};
			
			
			$('.paymentway-wx-right img').removeClass('paymentway-show');
			$('.paymentway-wx-right img').addClass('paymentway-hide');
			
			
			
		}else{
			
			if($('.paymentway-alipay-right img').is('.paymentway-show')){
				$('.paymentway-alipay-right img').removeClass('paymentway-show');
				$('.paymentway-alipay-right img').addClass('paymentway-hide');
			};
			$('.paymentway-wx-right img').removeClass('paymentway-hide');
			$('.paymentway-wx-right img').addClass('paymentway-show');
		}
	});
	
	
	
	$('.paymentway-alipay').click(function(){
		
		
		
		if($('.paymentway-alipay-right img').is('.paymentway-show')){
			if($('.paymentway-wx-right img').is('.paymentway-show')){
				$('.paymentway-wx-right img').removeClass('paymentway-show');
				$('.paymentway-wx-right img').addClass('paymentway-hide');
			};
			
			
			$('.paymentway-alipay-right img').removeClass('paymentway-show');
			$('.paymentway-alipay-right img').addClass('paymentway-hide');
		}else{
			if($('.paymentway-wx-right img').is('.paymentway-show')){
				$('.paymentway-wx-right img').removeClass('paymentway-show');
				$('.paymentway-wx-right img').addClass('paymentway-hide');
			};
			
			
			$('.paymentway-alipay-right img').removeClass('paymentway-hide');
			$('.paymentway-alipay-right img').addClass('paymentway-show');
		}
	});
	*/
	
	
	
	


	console.log(document.getElementById('paymentway-wx').checked);
	$('#paymentway-wx').click(function(){
		if(document.getElementById('paymentway-alipay').checked){
			document.getElementById('paymentway-alipay').checked = false;
		}
	});
	
	$('#paymentway-alipay').click(function(){
		if(document.getElementById('paymentway-wx').checked){
			document.getElementById('paymentway-wx').checked = false;
		}
	});
	
	
	
	/*充值按钮点击事件*/
	$('.recharge-btn').click(function(){
		if(document.getElementById('paymentway-wx').checked){
			alert("你选择的是微信支付!");
		}else if(document.getElementById('paymentway-alipay').checked){
			alert("你选择的是支付宝支付!");
		}else{
			alert("请选择支付方式！");
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
