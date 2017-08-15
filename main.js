function addLoadEvent(func){
	var oldload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		oldload();
		func();
	}
}

function main(){
	//导航按钮鼠标经过事件
	$('header ul li').hover(function(){
		$(this).find('.xhx').stop(true).animate({width: '100%'},300)
	},function(){
		$(this).find('.xhx').stop(true).animate({width: '0'},300)
	  });
	//在移动端的情况下的点击事件
	$('.m').click(function(){
		if($('header ul').is(':visible')){
			$('header ul').slideUp(200);
		}else{
			$('header ul').slideDown(200);
		}
	});
}
addLoadEvent(main);