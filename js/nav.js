//遍历li 实现点击事件
for(var i = 0;i < $('.nav-content ul li').length;i++){
	(function(i){
		$('.nav-content ul li').eq(i).click(function(){
			for(var j = 0;j < $('.nav-content ul li').length;j++){
				$(".nav-content ul li").eq(j).attr('class','issub');
			}
			$(this).attr('class','bottom_link');
		})
	}(i))
}
