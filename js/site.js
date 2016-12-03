$('.btn-nav').click(function(e){
	if(!$('body').hasClass('animation')){
	if($(this).attr('id')=='link-main-page' && $('body').hasClass('podstrony')) {
		$('body').removeClass('podstrony').addClass('animation');
		setTimeout(function(){$('body').removeClass('animation');},1000);
	} else if($(this).attr('id')!='link-main-page' && !($('body').hasClass('podstrony'))) {
		$('body').addClass('podstrony').addClass('animation');
		setTimeout(function(){$('body').removeClass('animation');},1000);
	}}
	e.preventDefault();
	return false;
});
