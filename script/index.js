


window.onload = function(){
	/*初始化*/
	/*返回window窗口的总高度*/
	Object.prototype.winheight = function(){
		return $(window).height();
	};
	
	
	/*定义地图容器大小*/
	$.prototype.mapSize = function(){
		
		var toolbar_height = $('.toolbar').height();
		
		this.height(((this.winheight()-toolbar_height)/16)+'rem');
	};
	
	
	/*使用*/
	$('#gd-map').mapSize();
	
	
	
	
	
	
	
	
	
	/*定义地图组件*/
	
	var map = new AMap.Map('gd-map', {
	    resizeEnable: true,
	    zoom:15,
	    rotateEnable:true,
	    showBuildingBlock:true
	});
	
	
	/*这里顶底一个地图拖拽定位的组件*/
	AMapUI.loadUI(['misc/PositionPicker'],function(PositionPicker){
		
		var positionPicker = new PositionPicker({
	        mode:'dragMap',//设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
	        map:map,//依赖地图对象
	        iconStyle:{//自定义外观
		       url:'image/location1.png',//图片地址
		       size:[48,48],  //要显示的点大小，将缩放图片
		       ancher:[24,40],//锚点的位置，即被size缩放之后，图片的什么位置作为选中的位置
		    }
	    });
	    //事件绑定、结果处理等
	    
	    
	    positionPicker.on('success',function(positionResult){
	    	
	//拖动地图定位成功后向服务器发送定位的位置的坐标，并且返回该坐标车辆信息，然后将返回的车辆坐标信息依次作为标记点，标注在地图上
		   console.log(positionResult.position);//输出选中地址坐标原始值和高德转换值
		   console.log(positionResult.address);//输出选中地址具体的文字坐标信息
		   console.log(positionResult.nearestJunction);//输出选中位置最近的十字路口的信息
		   console.log(positionResult.nearestRoad);//输出距离选中位置最近的道路
		   console.log(positionResult.nearestPOI);//输出选中位置距离最近建筑或地标的位置
		   console.log(positionResult.regeocode);//输出一个对象，对象中包含众多地理位置数据，涵盖以上所有数据
	    });
	    positionPicker.on('fail',function(positionResult){
	    	 // 海上或海外无法获得地址信息
	    	 //如果定位出错，做相应的操作处理
	    });
	    
	    /*使用这个方法开始拖拽选址*/
	    positionPicker.start();
	});
	
	
	/*定义一个车辆停靠信息标注的组件*/
	AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {

        var lngLats = getGridLngLats(map.getCenter(), 5, 5);

        new SimpleMarker({
           
            //自定义图标地址
            iconStyle: 'image/bike.png',

            //设置基点偏移
            offset: new AMap.Pixel(-19, -60),

            map: map,

            showPositionPoint: true,
            position: lngLats[0],
            zIndex: 100
        });

        new SimpleMarker({
           
             //自定义图标地址
            iconStyle: 'image/bike.png',

            //设置基点偏移
            offset: new AMap.Pixel(-50, -60),

            map: map,

            showPositionPoint: true,
            position: lngLats[0],
            zIndex: 100
        });

        new SimpleMarker({
            
             //自定义图标地址
            iconStyle: 'image/bike.png',

            //设置基点偏移
            offset: new AMap.Pixel(-40, -60),

            map: map,

            showPositionPoint: true,
            position: lngLats[0],
            zIndex: 100
        });

        new SimpleMarker({
            
             //自定义图标地址
            iconStyle: 'image/bike.png',

            //设置基点偏移
            offset: new AMap.Pixel(-300, -60),

            map: map,

            showPositionPoint: true,
            position: lngLats[0],
            zIndex: 100
        });

       
    });

   

    /**
     * 返回一批网格排列的经纬度

     * @param  {AMap.LngLat} center 网格中心
     * @param  {number} colNum 列数
     * @param  {number} size  总数
     * @param  {number} cellX  横向间距
     * @param  {number} cellY  竖向间距
     * @return {Array}  返回经纬度数组
     */
    function getGridLngLats(center, colNum, size, cellX, cellY) {

        var pxCenter = map.lnglatToPixel(center);

        var rowNum = Math.ceil(size / colNum);

        var startX = pxCenter.getX(),
            startY = pxCenter.getY();

        cellX = cellX || 70;

        cellY = cellY || 70;


        var lngLats = [];

        for (var r = 0; r < rowNum; r++) {

            for (var c = 0; c < colNum; c++) {

                var x = startX + (c - (colNum - 1) / 2) * (cellX);

                var y = startY + (r - (rowNum - 1) / 2) * (cellY);

                lngLats.push(map.pixelToLngLat(new AMap.Pixel(x, y)));

                if (lngLats.length >= size) {
                    break;
                }
            }
        }
        return lngLats;
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*加载一些插件，与UI组件无关*/
	AMap.plugin('AMap.Geolocation',function(){
	    	var geolocations = new AMap.Geolocation({
	    		enableHighAccuracy: true,
	    		timeout: 30000,
	    		convert: true,
	    		showMarker: true,
	    		showCircle: false,
	    		showButton: false, 
	    		panToLocation: true, 
	    		zoomToAccuracy:true,
	    		useNative:true
	    	});
    	
	    	map.addControl(geolocations);
	    	geolocations.getCurrentPosition(function(status,result){
	    		var positions = result.formattedAddress;
	    		if(positions !== 'undefined'){
	    			alert("定位成功：\n"+"您当前的位置是："+positions);
	    		}else{
	    			alert('定位失败，请检查设备是否开启了GPS');
	    		}
	    	});
    	});
	    
	    
	    /*给DOM对象绑定事件*/
    	
    	/*获取DOM对象*/
    	/*声明一个事件函数*/
    	/*将事件函数绑定到DOM对象上：AMap.event.addDomListener(DOM对象, '事件名称', 事件函数);*/
    	
    	var locationbtn = document.getElementsByClassName('footer-location')[0];
    	
    	
    	var evtlocation = function(){
	      	//map.setCenter([num1, num2]);//回到指定的坐标值得地方为地图中心点
	      	/*加载一个定位插件，然后在定位插件里面去设置回到的地图中心点*/
	      	
	      	AMap.plugin('AMap.Geolocation',function(){
	      		var gltobj = new AMap.Geolocation({
	      			enableHighAccuracy: true,
		    		timeout: 30000,
		    		convert: true,
		    		showMarker: false,
		    		showCircle: false,
		    		showButton: false, 
		    		panToLocation: true, 
		    		useNative:true
	      		});
	      		map.addControl(gltobj);
	 
	      		gltobj.getCurrentPosition(function(status,result){
		    		var positions = result.position;
		    		
		    		if(positions !== 'undefined'){
		    			map.setCenter([positions.lng, positions.lat]);
			    		console.log(positions.lng);
			    		console.log(positions.lat);
		    		}else{
		    			alert('您的设备可能没有开启GPS定位，请检查设置，然后重启应用。');
		    		}
	      			
		    	});
	      	});
    	}
    	
    	AMap.event.addDomListener(locationbtn, 'click', evtlocation);
	
	
    
    
    
/**************************下面的操作与地图组件无关*************************************************************/
    
	    /*顶部工具条侧栏*/
	   $('.leftcolumn').height($(document.body).outerHeight(true));
	    
	   $('.sidebar').click(function(){
	   		$('.leftcolumn-mask').height($(document.body).outerHeight(true));
	   		$('.leftcolumn').css({
	   			'left':'0rem'
	   		});
	   });
	   $('.leftcolumn-mask').click(function(){
	   		$('.leftcolumn-mask').height(0);
	   		$('.leftcolumn').css({
	   			'left':'-16rem'
	   		});
	   });
	    
	
	    
	    /*信息条位置*/
	   $('.message-bar').css('top',($('.toolbar').height()/16)+1+'rem');
	   
	   /*信息条点击事件*/
	  $('.message-bar').click(function(){
	  	alert("不要点我呀，我的事件还没有添加呢~~~");
	  });
	  
	  
	 
	 /*在线客服点击事件*/
		$('.footer-customer-service').click(function(){
			$('.footer-customer-service-modallayer-mask').height($(document.body).outerHeight(true));
			
			$('.footer-customer-service-modallayer').css({
				'bottom':'0.5rem'
			});
			
		});
		$('.footer-customer-service-modallayer-mask').click(function(){
			$('.footer-customer-service-modallayer-mask').height(0);
			$('.footer-customer-service-modallayer').css({
				'bottom':'-15rem'
			});
		});
		
}
