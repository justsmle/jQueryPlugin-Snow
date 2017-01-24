(function($){
	$.fn.extend({
		'snow':function(options){
			//合并defaults options
			var options        = $.extend({},defaults,options);
			//新创建一个div
			var $snowDown      = $("<div></div>").css({"position":"absolute",'font-weight':'bold'}).html("&#10052;");
			var documentWidth  = $(this).width();//设置作用区域宽度
			var documentHeight = $(this).height();//设置作用区域高度
			//设置循环执行函数
			var interval       = setInterval(function(){
				//设置开始状态
				var maxPositionLeft   = documentWidth-options.maxSize;//用于判断雪花下落是否超出作用区域宽度
				var startPositionLeft = documentWidth * Math.random();//设置雪花随机出现的top值
				var size              = options.minSize+Math.random() * options.maxSize;//设置雪花随机大小
				var startOpacity      = 0.8+Math.random() * 0.2; //
				//设置结束状态
				var endPositionTop    = documentHeight-50;
				var endPositionLeft   = startPositionLeft+Math.random() * 300;
				//设置动画时间
				var flowTime          = documentHeight * 10 + Math.random() * 5000;
				//判断endPositionLeft宽度是否超宽，避免造成滑动条不断闪动						
				if( endPositionLeft > maxPositionLeft ){
					endPositionLeft = maxPositionLeft;
				}else{
				//新增雪花，设置其动画
					$snowDown.clone().appendTo('body').css({
						'top' : '-10px',
						'left' : startPositionLeft,
						'opacity' : startOpacity,
						'font-size' : size,
						'color' : options.fadecolor
					}).animate({
						top : endPositionTop,
						left : endPositionLeft,
						opacity : 0.3
					},flowTime,'linear',function(){
						$(this).remove()
					})
				}//if 判断结束  动画 执行
			},options.rate)//循环执行over
		}//snow函数结束
	})
	//默认参数
	var defaults={
		fadecolor : '#fff', //雪花颜色
		minSize : 10, //雪花最小尺寸
		maxSize : 30,// 雪花最大尺寸
		rate : 1000 //雪花出现频率，毫秒
	}
})(jQuery);