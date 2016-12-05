$('.btn-nav').click(function(e){
	if(!$('body').hasClass('animation')){
	if($(this).attr('id')=='link-main-page' && $('body').hasClass('podstrony')) {
		$('body').removeClass('podstrony').addClass('animation');
