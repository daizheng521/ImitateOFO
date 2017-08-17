window.onload = function(){
	
	/*设置条款弹出层的高度*/
	$('.clause-popup-background').height($(window).height());
	
	$('.clause-popup').height($(window).height()*0.8);
	
	/*初始化弹层位置*/
	$('.clause-popup').css({
		'top':-($(window).height())
	});
	
	$.prototype.hideclause = function(modality,modalitybackground){
		this.click(function(){
			
			if(parseInt($('.clause-popup').css('top')) < 0){
				$('.clause-popup').css({
					'top':'2rem'
				});
				$('.clause-popup-background').css({
					'display':'block'
				});
			}else{
				$(modality).css({
					'top':-($(window).height())
				});
				setTimeout(function(){
					$(modalitybackground).css({
						'display':'none'
					});
				},300);
			}
		});
	}
	
	/*用户服务条款文本被点击事件*/
	$('.clause-click').hideclause('.clause-popup','.clause-popup-background');
	
	/*右上角的关闭按钮事件*/
	$('.clause-popup-text').hideclause('.clause-popup','.clause-popup-background');
	
	
	/*半透明背景被点击事件*/
	$('.clause-popup-background').hideclause('.clause-popup','.clause-popup-background');
	
	
	
	
	
	/*获取验证码并且验证手机号*/
	
	$('.verification-obtain-btn').click(function(){
		var mobilephone = $('#mobilephone').val();

		var regexp = /^1[3578]\d{9}$/g;
		if(mobilephone == ''){
			alert('手机号不能不填写');
		}else if(regexp.exec(mobilephone)){
			
			/*在这里将数据发送到服务器*/
			
			
			/*发送完毕后出现一个一分钟的倒计时*/
			
			var verification_count_down = 60;
			
			var time;
			time = setInterval(function(){
				if(verification_count_down >= 0){
					$('.verification-obtain-btn').css({
						'background-color':'#c0c0c0'
					});
					$('.verification-obtain-btn-ask').css({
						'display':'block'
					});
					$('.verification-obtain-btn').text(verification_count_down+'s');
					
					verification_count_down--;
				}else{
					verification_count_down = 60;
					clearInterval(time);
					$('.verification-obtain-btn').text('重新获取');
					$('.verification-obtain-btn-ask').css({
						'display':'none'
					});
					return;
				}
			},900);
			
			
			
		}else{
			alert('您输入的手机号不合法，必须是11位数字，不得含有"，、。|/\！@#￥%……&*（）-=+"等非法字符，不得含有空格；');
		}
	});
	
	
	/*手机号输入验证*/
	$('#mobilephone').on({
		focus:function(){
			$('#mobilephone').css({
				'border':'1px solid #39f',
				'box-shadow':'0 0 10px #39f'
			});
		},
		keyup:function(){
			var mobilephone = $('#mobilephone').val();
			var regexp = /^1[3578]\d{9}$/g;
			if(regexp.exec(mobilephone)){
				$('.verification-obtain-btn').css({
					'background-color':'#FE9345'
				});
				$('#mobilephone').css({
					'border':'1px solid #39f',
					'box-shadow':'0 0 10px #39f'
				});
			}else{
				$('#mobilephone').css({
					'border':'1px solid #f00',
					'box-shadow':'0 0 10px #f00'
				});
				$('.verification-obtain-btn').css({
					'background-color':'#c0c0c0'
				});
			}
		}
	});
	
	
	console.log(document.getElementById('clause').checked);//true
	
	
	/*验证码验证*/
	$('#verification').on({
		keyup:function(){
			if($('#verification').val() == 888888 && document.getElementById('clause').checked == true){
				$('.submit-container-mask').css({
					'display':'none'
				});
				$('.submit-container').css({
					'background-color':'#FE9345'
				});
			}else{
				$('.submit-container-mask').css({
					'display':'block'
				});
				$('.submit-container').css({
					'background-color':'#c0c0c0'
				});
			}
		}
	});
	
	/*同意用户协议*/
	$('#clause').click(function(){
		if(document.getElementById('clause').checked == true && $('#verification').val() == 888888){
			$('.submit-container-mask').css({
				'display':'none'
			});
			$('.submit-container').css({
				'background-color':'#FE9345'
			});
		}else{
			$('.submit-container-mask').css({
				'display':'block'
			});
			$('.submit-container').css({
				'background-color':'#c0c0c0'
			});
		}
	});
}
