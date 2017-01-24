# jQueryPlugin-Snow
简单插件，雪花飘落
 设计要点：1、clone()克隆元素；2、js插件中使用if判断雪花endPositionLeft是否超宽，影响横向滚动条不断滚动；3、setInterval循环制造新的雪花；
 4、animate()动画实现雪花的飘落
 html结构和css样式可自行设计；
 js引入：
 <script src="http://www.jq22.com/jquery/jquery-1.9.1.js"></script>
 <script src="js/snow.js"></script>
 snow	函数调用： 
 <script>
		$(function(){
			$('body').snow({//可直接更改作用区域 				
        fadecolor: '#fff', //雪花颜色
				minSize: 10, //雪花最小尺寸
				maxSize: 40,// 雪花最大尺寸
				rate: 200//雪花出现频率，毫秒，值越小雪花出现越快
			});
		});
	</script>
