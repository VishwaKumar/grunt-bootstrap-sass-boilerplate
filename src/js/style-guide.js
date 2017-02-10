$(function() {
	
	function rgb2hex(rgb){
		 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
		 var hex = (rgb && rgb.length === 4) ? "#" +
		  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
		  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
		  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
		  
		 return hex.toUpperCase();
	}
	
	$("#brand")
		.find('.color')
		.each(function (index,ele) {
			var hex = $(ele).css('background-color');
			$(ele).parent().parent().find('span.hex').html( rgb2hex(hex) );
		});
});