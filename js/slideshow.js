jQuery(document).ready(function($) {		
	$('#mycarousel li').css('float','left'); // let the images display vertically if no javascript
	$('#product-slideshow-inside').css('overflow','hidden'); // so images display without javascript
	var n=$('#mycarousel li').length;
	$('#index-display').append('1/'+(n-1));
	var parentwidth=0;
	$('#mycarousel li').each(function(){
		parentwidth+=$(this).width();
		});
	$('#mycarousel').css('width',parentwidth); 
	
/*$('#product-slideshow-inside').append('<div id="slide-left-nav" class="control-parent control"><div id="slide-left-nav-button"></div></div><div id="slide-right-nav"class="control-parent control"><div id="slide-right-nav-button"></div></div>');*/
	

	
	var firstoffset=$('#product-slideshow-inside').width()-$('#mycarousel li:first').width();
	var theoffset=firstoffset/2;
	$('#mycarousel').css('left',theoffset);
	$('.control-parent').css('width',theoffset);
	var firstcaption=$('#mycarousel li:first').children().attr('alt');
	$('#display').text(firstcaption);
	$('#display').prepend('<strong>In this picture:</strong><br />');
	
		// hover arrows and left arrow
		
		$('#product-slideshow').hover(
			function() {
				if (currentPosition==1) 
					{
					$('#slide-left-nav-button').css('background-position','left bottom');
					$('#slide-right-nav-button').css('background-position','left top');
					}
					else
					{
					$('#slide-right-nav-button').css('background-position','left top');
					$('#slide-left-nav-button').css('background-position','left top');
					}
				},
				
			function() {
				$('#slide-right-nav-button').css('background-position','left bottom');
				$('#slide-left-nav-button').css('background-position','left bottom');
				}
			);
				
		
		// play and pause 
		
			$('#play-button').click(function() {
				$(this).css('color','#fe205a');
				$('#pause-button').css('color','#403d3c');
				return false;
				});
				
			$('#pause-button').click(function() {
				$(this).css('color','#fe205a');
				$('#play-button').css('color','#403d3c');
				return false;
				});
			
		
				
		var Sliderules = 
		{
		slideactions:function(){
		$('#index-display').empty(); 
		
		$('#index-display').append(+currentPosition + '/'+(n-1)); 
		currentItem=$('#mycarousel li').eq(currentPosition-1);  
		itemLocation=currentItem.position();
		leftdistance=itemLocation.left; 
		totalOffset=$('#product-slideshow-inside').width()-currentItem.width();
		var panelOffset=totalOffset/2; 
		var currentRounded=Math.round(panelOffset);
		$('.control-parent').animate({
		width:currentRounded},600) 
		totaldistance=leftdistance-panelOffset; // determines how far the ul needs to move left
		$('#mycarousel').animate({
		left:-totaldistance  
		},600,function(){		
		$('#display').empty(); //empty the description box
		var imagecaption=$('#mycarousel li').eq(currentPosition-1).children().attr('alt');
		$('#display').text(imagecaption);
		$('#display').prepend('<strong>In this picture:</strong><br />');
		
		});
		}
		};
		
		var currentPosition = 1; //allows this variable to increment inside the functions
		function slidestuff() {
		var n=$('#mycarousel li').length;  // number of list items
		currentPosition+=1;  // variable increments each time function is called
		if (currentPosition >=n ) 
			{
			currentPosition=1;
			}	
		Sliderules.slideactions();	
		}
	
	// start slideshow on load
	var runfirst;
	function runit() {
	runfirst=setInterval(slidestuff,6000);
	}
	//runit();
	
	// start and stop autoplay
	$('#play-button').click(function() {
		clearInterval(runfirst);
		runit();
		}); 
		
	$('#pause-button').click(function() {
		clearInterval(runfirst);
	});

	$('.control').click(function() {
		clearInterval(runfirst);
	 });
	
		
	$('.control').bind('click',function() {
		var n=$('#mycarousel li').length;
		//$('#pause-button,#play-button').css('color','#403d3c');
		currentPosition=($(this).attr('id')=='slide-right-nav')||($(this).attr('id')=='mycarousel-next') ? currentPosition+1 : currentPosition-1;
		if (currentPosition >= n)
		{
		currentPosition=1;
		}
		
		if (currentPosition < 1)
		{
		currentPosition=1;
		}
			
		/*if (currentPosition==1)  //once currentPosition becomes 2, the left arrow displays
		{
			$('#slide-left-nav-button').css('background-position','left bottom');
		}
		if (currentPosition==2)
		{
			$('#slide-left-nav-button').css('background-position','left top');
		}*/
		
		Sliderules.slideactions();	
		
	  });
	
	$("#product-slideshow").swipe({
	  swipe:function(event, direction, distance, duration, fingerCount) {
		 if(direction == 'left')
		 {
			 currentPosition = currentPosition+1;
		 }
		 
		 if(direction == 'right')
		 {
			 currentPosition = currentPosition-1;
		 }
		 
		 if (currentPosition >= n)
		 {
			currentPosition=1;
		 }
		 
		 if (currentPosition < 1)
		 {
			currentPosition=1;
		 }
		 
		 Sliderules.slideactions();
	  }		  
	});
	
	});

	
	