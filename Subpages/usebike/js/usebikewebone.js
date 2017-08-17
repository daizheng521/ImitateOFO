window.onload = function(){
	
	/*输入车牌号的文字间距*/
	
	$('.usebikeweb-input input').on({
		keyup:function(){
			
			var input_val = $('.usebikeweb-input input').val();//获得输入的值
			
			if(input_val === ''){
				$('.usebikeweb-input-btn').css({
					'background-color':'#e0e0e0',
					'background-image':'url(img/usebike.png)'
				});
				$('.usebikeweb-input input').css({
					'letter-spacing':''
				});
				$('.usebikeweb-text').text('输入车牌号，获取解锁码哦~~~');
			}else{
				$('.usebikeweb-input-btn').css({
					'background-color':'#FE9345',
					'background-image':'url(img/usebikehover.png)'
				});
				$('.usebikeweb-input input').css({
					'letter-spacing':'15px'
				});
				$('.usebikeweb-text').text('车牌号一般为4位数字哦~~');
			}
			/*对于input如果你要添加任何别的事件，在下面接着写就行了*/
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
