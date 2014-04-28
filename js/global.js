/*set the folder level number of the website root*/
var rootLevel=0;
var isIE = (navigator.appName.indexOf("Microsoft") > -1);
var isiPad = navigator.userAgent.match(/iPad/i) != null;
var isApp = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
var d = document;
var str;
var isIE8 = $.browser.msie && +$.browser.version === 8;
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(obj, start) {
		for (var i = (start || 0), j = this.length; i < j; i++) {
			 if (this[i] === obj) { return i; }
		}
		return -1;
  }
}

if (!levelArray) var levelArray = new Array();
if (levelArray.length == 0) getLevel();
//if(isiPad){
	
//}

$(document).ready(function(){

	if(isiPad){
		$('.printThisPage').css('display','none');
		$('.toolsSubNav').css('right',103);
		$('.shareSubNav').css('right',43);		
		$('.btnSearch ').css('display','none');
		$('body').removeClass('withHover');	
	}else{
		$('body').addClass('withHover');	
		
	}
});

var toolsShowFlag = false;
var currentActiveSubNav = null;
function initTopNav(){
	$('#'+levelArray[0]).addClass('currentSection');
	$('.page-class-'+d.getElementsByTagName('body')[0].id.replace('page-id-','')).addClass('currentPage');
	$("#searchfield").focus(function(){		$(this).val("");	});	$("#searchfield").blur(function(){if($(this).val()=="") $(this).val("Search");	});
	$('#topNav a').each(function(){
		$(this).click(function(){
			if($(this).hasClass('btnContact')) return;
			$('#'+levelArray[0]).addClass('currentSection');
			if($(this).hasClass('currentSection')) $(this).removeClass('currentSection');
			if($('#subNavContainer .active').length == 0){
				if($(this).hasClass('btnTools')){
					if(isiPad)
						$('#subNavContainer .subNavItem').eq($('#topNav a').index($(this))).animate({'height':95},200);
					else
						$('#subNavContainer .subNavItem').eq($('#topNav a').index($(this))).animate({'height':131},200);
					$(this).addClass('active');
					toolsShowFlag = true;
				}else if($(this).hasClass('btnShare')){
					$('#subNavContainer .subNavItem').eq($('#topNav a').index($(this))).animate({'height':181},200);
					$(this).addClass('active');
					toolsShowFlag = true;
				}else if($(this).hasClass('btnSearch')){
					$('#subNavContainer .subNavItem').eq($('#topNav a').index($(this))).animate({'height':111},200);
					$('#breadcumb').animate({'top':194}, 200);
					$(this).addClass('active');
					toolsShowFlag = true;
				}else{
					resetInnerNav();
					
					if($('#topNav a').index($(this)) == 3)
					{
						var subNavActiveTabIndex = $('.subNavTabContainer .subSectionItem').index($('#'+levelArray[1]));
						if(subNavActiveTabIndex == -1)
						{
							$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabContainer .subSectionItem').eq(0).addClass('currentTab');
							$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabChildContainer .subNavTabChildItem').eq(0).css('display', 'block');
						}else{
							$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabContainer .subSectionItem').eq(subNavActiveTabIndex).addClass('currentTab');
							$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabChildContainer .subNavTabChildItem').eq(subNavActiveTabIndex).css('display', 'block');
						}
					}else{
						$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabContainer .subSectionItem').eq(0).addClass('currentTab');
						$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabChildContainer .subNavTabChildItem').eq(0).css('display', 'block');
					}
					var subNavHeight = $('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).height()+40+35;
					$('#subNavContainer .subNavItem').eq($('#topNav a').index($(this))).animate({'height':subNavHeight},200);
					//$('#subNavContainer').animate({'height':subNavHeight},200);

					if ($("#breadcumb").length > 0){
						$('#breadcumb').animate({'top':subNavHeight+69}, 150);
					}
					$(this).addClass('active');
					toolsShowFlag = false;
				}
				$('#subNavContainer .subNavItem').eq($('#topNav a').index($(this))).addClass('active');
				
				currentActiveSubNav = parseInt($('#topNav a').index($(this)));
				$('#overlay').show();
			}else if(currentActiveSubNav == $('#topNav a').index($(this))){
				$(this).removeClass('active');
				$('#'+levelArray[0]).addClass('currentSection');
				resetSubNav(1);
				toolsShowFlag = false;
				currentActiveSubNav == null;
				$('#overlay').hide();
			}else{
				currentActiveSubNav = parseInt($('#topNav a').index($(this)));
				
				//alert(currentActiveSubNav);
				if($(this).hasClass('btnTools')){
					resetSubNav(1);
					if(isiPad)
						setTimeout("$('#subNavContainer .subNavItem').eq(currentActiveSubNav).animate({'height':95},200); $('#subNavContainer .subNavItem').eq(currentActiveSubNav).addClass('active');",300);
					else
						setTimeout("$('#subNavContainer .subNavItem').eq(currentActiveSubNav).animate({'height':131},200); $('#subNavContainer .subNavItem').eq(currentActiveSubNav).addClass('active');",300);
					toolsShowFlag = true;
					$('#overlay').show();
				}else if($(this).hasClass('btnShare')){
					resetSubNav(1);
					setTimeout("$('#subNavContainer .subNavItem').eq(currentActiveSubNav).animate({'height':181},200); $('#subNavContainer .subNavItem').eq(currentActiveSubNav).addClass('active');",300);
					toolsShowFlag = true;
					$('#overlay').show();
				}else if($(this).hasClass('btnSearch')){
					resetSubNav(1);
					setTimeout("$('#subNavContainer .subNavItem').eq(currentActiveSubNav).animate({'height':111},200); $('#subNavContainer .subNavItem').eq(currentActiveSubNav).addClass('active'); if ($('#breadcumb').length > 0){$('#breadcumb').animate({'top':195}, 200);}",300);
					toolsShowFlag = true;
					$('#overlay').show();
				}else if(toolsShowFlag == true){
					resetSubNav(0);
					
					resetInnerNav();
					if($('#topNav a').index($(this)) == 3)
					{
						var subNavActiveTabIndex = $('.subNavTabContainer .subSectionItem').index($('#'+levelArray[1]));
						if(subNavActiveTabIndex == -1)
						{
							$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabContainer .subSectionItem').eq(0).addClass('currentTab');
							$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabChildContainer .subNavTabChildItem').eq(0).css('display', 'block');
						}else{
							$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabContainer .subSectionItem').eq(subNavActiveTabIndex).addClass('currentTab');
							$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabChildContainer .subNavTabChildItem').eq(subNavActiveTabIndex).css('display', 'block');
						}
					}else{
						$('#subNavContainer .subNavItemWrapper').eq(currentActiveSubNav).find('.subNavTabContainer .subSectionItem').eq(0).addClass('currentTab');
						$('#subNavContainer .subNavItemWrapper').eq(currentActiveSubNav).find('.subNavTabChildContainer .subNavTabChildItem').eq(0).css('display', 'block');
					}
					var subNavHeight = $('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).height()+40+35;
					//setTimeout("$('#subNavContainer .subNavItem').eq(currentActiveSubNav).animate({'height':subNavHeight},200); $('#subNavContainer .subNavItem').eq(currentActiveSubNav).addClass('active');",300);
					$('#subNavContainer .subNavItem').eq(currentActiveSubNav).animate({'height':subNavHeight},200); 
					
					if ($('#breadcumb').length > 0){$('#breadcumb').animate({'top':subNavHeight+69},150);}
					
					$('#subNavContainer .subNavItem').eq(currentActiveSubNav).addClass('active');
					toolsShowFlag = false;
				}else{
					resetSubNav(0);
					resetInnerNav();
					
					if($('#topNav a').index($(this)) == 3)
					{
						var subNavActiveTabIndex = $('.subNavTabContainer .subSectionItem').index($('#'+levelArray[1]));
						if(subNavActiveTabIndex == -1)
						{
							$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabContainer .subSectionItem').eq(0).addClass('currentTab');
							$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabChildContainer .subNavTabChildItem').eq(0).css('display', 'block');
						}else{
							$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabContainer .subSectionItem').eq(subNavActiveTabIndex).addClass('currentTab');
							$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabChildContainer .subNavTabChildItem').eq(subNavActiveTabIndex).css('display', 'block');
						}
					}else{
						$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabContainer .subSectionItem').eq(0).addClass('currentTab');
						$('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).find('.subNavTabChildContainer .subNavTabChildItem').eq(0).css('display', 'block');
					}
					var subNavHeight = $('#subNavContainer .subNavItemWrapper').eq($('#topNav a').index($(this))).height()+40+35;
					$('#subNavContainer .subNavItem').eq($('#topNav a').index($(this))).css({'height':subNavHeight});
					//$('#subNavContainer').css({'height':subNavHeight});
					if ($('#breadcumb').length > 0){$('#breadcumb').animate({'top':subNavHeight+69},150);}
					
					$('#overlay').show();
					$('#subNavContainer .subNavItem').eq(currentActiveSubNav).addClass('active');
				}			
				
				$(this).addClass('active');
			}			
		})
	});
	
	$('#subNavContainer .subNavTabContainer .subSectionItem').each(function(){
		$(this).click(function(){
			//alert($('#subNavContainer .subNavTabContainer .subSectionItem').index($(this)));
			resetInnerNav();
			var currentActiveInnerNav = parseInt($('#subNavContainer .subNavTabContainer .subSectionItem').index($(this)));
			$('#subNavContainer .subNavTabContainer .subSectionItem').eq(currentActiveInnerNav).addClass('currentTab');
			$('#subNavContainer .subNavTabChildContainer .subNavTabChildItem').eq(currentActiveInnerNav).css('display', 'block');
			var subNavHeight = $('#subNavContainer .subNavItemWrapper').eq(currentActiveSubNav).height()+40+35;
			$('#subNavContainer .subNavItem').eq(currentActiveSubNav).animate({'height':subNavHeight});
			
			if ($('#breadcumb').length > 0){$('#breadcumb').animate({'top':subNavHeight+69},350);}
	  });
	})
	
	function resetInnerNav()
	{
		$('#subNavContainer .subNavTabContainer .subSectionItem').each(function(){
			$(this).removeClass('currentTab');
		})
		
		$('#subNavContainer .subNavTabChildContainer .subNavTabChildItem').each(function(){
			$(this).css('display', 'none');
		})
	}
	
	function resetSubNav(flag)
	{
		$('#topNav a').removeClass('active');
		if(flag == 0){
			$('#subNavContainer .active').css({'height':0}).removeClass('active');
			//$('#'+levelArray[0]).addClass('currentSection');
		}else if(flag == 1){
			$('#subNavContainer .active').animate({'height':0}, 200)
			//$('#subNavContainer').animate({'height':0}, 200)
			if ($('#breadcumb').length > 0){
				$('#breadcumb').animate({'top':69}, 200);
				
			}
			setTimeout("$('#subNavContainer .active').removeClass('active');",150);
			//$('#subNavContainer .active').removeClass('active');
			$('#'+levelArray[0]).addClass('currentSection');
		}
		//if(!$('#'+levelArray[0]).hasClass('currentSection'))
		//{
			
		//}
	}
	
	$('#overlay').click(function(e){
		if($(e.target).is('a')){
			return;
		}else{
			resetSubNav(1);
			$('#overlay').hide();
		}
	});
	initContactPopup();
}

function getLevel() {
    var url = location.pathname;
    if(isApp){
    url = url.substring(url.indexOf('/www/')+5);
	    levelArray = url.split('/');
	    if (levelArray.length == 0) return;
	    var obj = levelArray[levelArray.length - 1];
	    if (!(obj == 'index.asp' || obj == 'index_big5.asp')) {
	        if (obj == 'online.asp') levelArray[levelArray.length - 1] = obj.replace('.asp', '');
	        else
	        levelArray[levelArray.length - 1] = obj.replace('.html', '');
	    } else {
	        levelArray.pop();
	    }
	}
	else{
		levelArray = url.split('/');
		for(var i=0;i<=rootLevel;i++)
	    	levelArray.shift();
	    if (levelArray.length == 0) return;
	    var obj = levelArray[levelArray.length - 1];
	    if (!(obj == 'index.asp' || obj == 'index_big5.asp')) {
	        if (obj == 'online.asp') levelArray[levelArray.length - 1] = obj.replace('.asp', '');
	        else
	        levelArray[levelArray.length - 1] = obj.replace('.html', '');
	    } else {
	        levelArray.pop();
	    }
	}
}

function initBreadcumb()
{
	//alert(levelArray);
	
	if ($('#breadcumb').length > 0){
		
		var homeHref = '';
		for(var k=0; k<levelArray.length-1; k++)
		{
			homeHref += '../';
		}
		
		$('<a>',{text: 'Home', href: homeHref+'index.html'}).appendTo($('#breadcumb'));
		
		//$('<span>',{class:'arrow_breadcumb'}).appendTo($('#breadcumb'));
		$('<span>').addClass('arrow_breadcumb').appendTo($('#breadcumb'));
		
		var levelfilter = new Array();
		levelfilter = searchArray(breadcumbArray, d.getElementsByTagName('body')[0].id);
		for(var j=0; j<levelArray.length; j++)
		{
			if(j == levelArray.length-1)
			{
				//$('<a>',{text: levelfilter[0].pageName, href: 'javascript:;', class: 'bold'}).appendTo($('#breadcumb'));
				$('<a>',{text: levelfilter[0].pageName, href: 'javascript:;'}).addClass('bold').appendTo($('#breadcumb'));
			}else{
				$('<a>',{text: levelfilter[0].levelName[j], href: homeHref+levelfilter[0].levelLinks[j]}).appendTo($('#breadcumb'));
			}
			if(j != levelArray.length-1 && levelArray[j+1] != 'index')
			{
				//$('<span>',{class: 'arrow_breadcumb'}).appendTo($('#breadcumb'));
				$('<span>').addClass('arrow_breadcumb').appendTo($('#breadcumb'));
			}
		}
	}
	
	function searchArray(a, searchStr) {
	  var returnArray = false;
	  for (i=0; i<a.length; i++) {
			//if (this[i].location[j]==searchStr) {
			if(a[i].id === searchStr) {
			  if (!returnArray) { returnArray = [] }
			  returnArray.push(a[i]);
			}
		}
	  return returnArray;
	}
}

var initNavFlag = false;
function initNavLink()
{	
	var navLevelContainer = ['#mainBtn .btnContent', '#level2Btn .btnContent', '#level3Btn .btnContent'];
	var navLevelLinkContainer = ['#mainSection .linkContainer', '#level2Section .linkContainer', '#level3Section .linkContainer'];
	
	if(!initNavFlag)
	{
		for(var j=0; j<levelArray.length; j++)
		{
			var currentLinkText = levelArray[j].replace(/-/g, ' ');
			var currentLink = $('<a>',{
				 text:currentLinkText,
				 href:'javascript:;'
			});
			currentLink.appendTo(navLevelContainer[j]);
			
			if(j == 0)
			{
				for(var i=0; i<mainSection.length; i++)
				{
					var navLink = $('<a>',{
						 text:mainSection[i].section,
						 href:mainSection[i].link,
						 'rel':'external',
						 'data-ajax':'false'
					});
					navLink.appendTo(navLevelLinkContainer[j]);
				}	
			}else if(j == 1){
				for(var i=0; i<findById(mainSection, levelArray[0]).subSection.length; i++)
				{
					var navLink = $('<a>',{
						 text:findById(mainSection, levelArray[0]).subSection[i].section,
						 href:findById(mainSection, levelArray[0]).subSection[i].link,
						 'rel':'external',
						 'data-ajax':'false'
					});
					navLink.appendTo(navLevelLinkContainer[j]);
				}
			}/*else if(j == 2){
				//alert('j=2')
				//alert(findById(mainSection, levelArray[1]));
				//for(var i=0; i<findById(mainSection, levelArray[1]).subSection.length; i++)
				for(var i=0; i<find3rdLevelById(mainSection, levelArray[0], levelArray[1]).subSection.length; i++)
				{
					var navLink = $('<a>',{
						 text:find3rdLevelById(mainSection, levelArray[0], levelArray[1]).subSection[i].section,
						 href:find3rdLevelById(mainSection, levelArray[0], levelArray[1]).subSection[i].link,
						 'rel':'external',
						 'data-ajax':'false'
					});
					navLink.appendTo(navLevelLinkContainer[j]);
				}
			}*/
			
			initNavFlag = true;
		}
	}
}

function findById(source, id) {
  for (var i = 0; i < source.length; i++) {
    if (source[i].id === id) {
      return source[i];
    }
  }
  throw "Couldn't find object with id: " + id;
}

/*function find3rdLevelById(source, id, id2) {
  for (var i = 0; i < findById(mainSection, id).subSection[i].length; i++) {
    //if (source[i].id === id) {
	 if(findById(mainSection, id).subSection[i].id === id){
      return findById(mainSection, id).subSection[i];
    }
  }
  throw "Couldn't find object with id: " + id;
}*/
var navOpenCount = 0;

function getElementsByClassName(p, c, selected)
{
	var array = new Array();
	var tags = p.getElementsByTagName('*');
	
	for (var i=0; i<tags.length; i++)
	{
		if (!tags[i].className)	continue;
		if (selected)
		{
			if (tags[i].className.indexOf(c) >= 0)	array.push(tags[i]);
		}
		else
		{
			if (tags[i].className == c)	array.push(tags[i]);
		}
	}
	
	return array;
}


function setChildNodes(obj, tagName)
{
	var array = new Array();
	
	for (var i=0; i<obj.childNodes.length; i++)
	{
		if (tagName)
		{
			if (obj.childNodes[i].tagName != tagName)	continue;
		}
		if (obj.childNodes[i].toString().toLowerCase().indexOf('text') >= 0)	continue;
		array.push(obj.childNodes[i]);
	}
	
	return array;
}

function createDiv(id, className, txt)
{		
	var div = d.createElement('div');
	if (id)	div.setAttribute('id', id);
	if (className)	div.className = className;
	//if (txt)	div.appendChild(d.createTextNode(txt));
	if (txt)	div.innerHTML = txt;
	return div;
}

function createA(link, t, txt, id, className)
{		
	var a = d.createElement('a');
	if (link)	a.setAttribute('href', link);
	if (t && typeof(t) != 'undefined')	a.setAttribute('target', t);
	
	//if (txt)	a.appendChild(d.createTextNode(txt));
	if (txt)	a.innerHTML = txt;
	if (id)	a.setAttribute('id', id);
	if (className)	a.className = className;
	
	return a;
}

function createImg(src, alt, w, h, link, t, className, id)
{
	var img = d.createElement('img');
	if (src)	img.setAttribute('src', src);
	if (alt)	img.setAttribute('alt', alt);
	if (w)	img.setAttribute('width', w);
	if (h)	img.setAttribute('height', h);
	if (className)	img.className = className;
	if (id)	img.setAttribute('id', id);
	
	if (link)
	{
		img.setAttribute('border', 0);
		
		var a = d.createElement('a');
		a.setAttribute('href', link);
		if (t && typeof(t) != 'undefined')	a.setAttribute('target', t);
		a.appendChild(img);
		return a;
	}
	else
	{	
		return img;
	}
}

function initTrackRecord(viewMode)
{
	var viewModeFlag = viewMode;
	//var locationBtn = d.getElementById('trackLocation').getElementsByTagName('A');
	var locationBtn = d.getElementById('trackLocation').getElementsByTagName('A');
	var industryBtn = d.getElementById('trackIndustry').getElementsByTagName('A');
	var div = d.getElementById('trackLogoContainer');

	trackRecordArray.sort(function (a, b) {
		var A = a.companyName.toLowerCase();
     	var B = b.companyName.toLowerCase();
	    if (A > B)
	      return 1;
	    if (A < B)
	      return -1;
	    // a must be equal to b
	    return 0;
	});
	
	if(viewModeFlag){
		showLogo(trackRecordArray, 'opacityNone', 0, 100);
		var trackLogoArray = $('#trackLogoContainer .trackRecordListItem');
	}else{
		showLogo(trackRecordArray, 'opacityNone', 0, 100);
		var trackLogoArray = d.getElementById('trackLogoContainer').getElementsByTagName('IMG');
	}
		
	var locationClickFlag = false;
	var industryClickFlag = false;
	var currentLocation = null;
	var currentIndustry = null;
	var filterFactor = null;
	var filter = new Array();

	//initOverlay();
	initIPadTrackRecordListHover();
	checkFilterExist(1);	
	//init location btn
	for(var i=0; i<locationBtn.length; i++)
	{
		//hideFilterTransition
		//locationBtn[i].clickFlag = false;
		locationBtn[i].num = i;
		locationBtn[i].onclick = function()
		{
			if(locationClickFlag == false)
			{
				//this.clickFlag = true;
				locationClickFlag = true;
				$('#trackLocation a').each(function(){
					$(this).removeClass('active')
				})
				$(this).addClass('active');
				filterFactor = this.innerHTML;
				currentLocation = filterFactor.toLowerCase();
				
				checkFilterExist(0, currentLocation, currentIndustry);

				hideLogo();
				
				if(filterFactor.toLowerCase() == 'all')
				{
					if(filter.length == 0)
					{
						//alert(1)
						showLogo(trackRecordArray, 'opacityNone', 0);
						currentLocation = null;
					}
					else
					{
						//alert(2)
						currentLocation = null;
						showLogo(filter, '', 1);
					}
				}else{
					if(currentIndustry == null)
					{
						//alert(3)
						filter = trackRecordArray.locationFilter(trackRecordArray, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo', 1);
					}else{
						//alert(4)
						filter = trackRecordArray.industryFilter(trackRecordArray, currentIndustry);
						var temp = filter;
						filter = temp.locationFilter(temp, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo', 1);
					}
				}			
			}else if(this.innerHTML == currentLocation){
				return;				
			}else{
				$('#trackLocation a').each(function(){
					$(this).removeClass('active')
				})
				$(this).addClass('active');
				filterFactor = this.innerHTML;
				currentLocation = filterFactor.toLowerCase();
				
				checkFilterExist(0, currentLocation, currentIndustry);
				
				hideLogo();
				
				if(filterFactor.toLowerCase() == 'all')
				{
					if(currentIndustry == null)
					{
						showLogo(trackRecordArray, 'opacityNone', 0);
						currentLocation = null;
					}
					else
					{
						filter = trackRecordArray.industryFilter(trackRecordArray, currentIndustry);
						currentLocation = null;
						showLogo(filter, 'lrgLogo', 1);
					}
				}else{
					if(currentIndustry == null)
					{
						filter = trackRecordArray.locationFilter(trackRecordArray, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo', 1);
					}
					else
					{
						filter = trackRecordArray.industryFilter(trackRecordArray, currentIndustry);
						var temp = filter;
						filter = temp.locationFilter(temp, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo', 1);
					}
				}
				
				
				$("body").focus();

				
			}	
		}
	}
	
	//init industry btn	
	for(var k=0; k<industryBtn.length; k++)
	{
		//industryBtn[k].clickFlag = false;
		industryBtn[k].num = k;
		industryBtn[k].onclick = function()
		{
			if(industryClickFlag == false)
			{
				industryClickFlag = true;
				$('#trackIndustry a').each(function(){
					$(this).removeClass('active')
				})
				$(this).addClass('active');
				filterFactor = this.innerHTML;
				currentIndustry = filterFactor.toLowerCase();
				
				checkFilterExist(0, currentLocation, currentIndustry);
				
				hideLogo();
				if(filterFactor.toLowerCase() == 'all')
				{
					if(filter.length == 0)
					{
						//alert(9)
						showLogo(trackRecordArray, 'opacityNone', 0);
						currentIndustry = null;
					}else
					{
						//alert(10)
						filter = trackRecordArray.locationFilter(trackRecordArray, currentLocation.toLowerCase());
						currentIndustry = null;
						showLogo(filter, 'opacityNone', 1);
					}
				}else{
					if(currentLocation == null)
					{
						//alert(11)
						filter = trackRecordArray.industryFilter(trackRecordArray, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo', 1);
					}
					else
					{
						//alert(12)
						filter = trackRecordArray.locationFilter(trackRecordArray, currentLocation);
						var temp = filter;
						filter = temp.industryFilter(temp, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo', 1);
					}			
				}				
			}else if(this.innerHTML == currentIndustry){
				return;
			}else{
				$('#trackIndustry a').each(function(){
					$(this).removeClass('active')
				})
				$(this).addClass('active');
				filterFactor = this.innerHTML;
				currentIndustry = filterFactor.toLowerCase();
				
				checkFilterExist(0, currentLocation, currentIndustry);
				
				hideLogo();
				if(filterFactor.toLowerCase() == 'all')
				{
					if(currentLocation == null)
					{
						//alert(13)
						showLogo(trackRecordArray, 'opacityNone', 0);
						currentIndustry = null;
					}else
					{
						//alert(14)
						filter = trackRecordArray.locationFilter(trackRecordArray, currentLocation.toLowerCase());
						showLogo(filter, 'opacityNone', 1);
						currentIndustry = null;
					}
				}else{
					if(currentLocation == null){
						//alert(15)
						filter = trackRecordArray.industryFilter(trackRecordArray, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo', 1);
					}else
					{
						//alert(16)
						filter = trackRecordArray.locationFilter(trackRecordArray, currentLocation.toLowerCase());
						var temp = filter;
						filter = temp.industryFilter(temp, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo', 1);
					}
				}
				$("body").focus();
			}		
		}
	}

	function checkFilterExist(initFlag,curLocation, curIndustry)
	{
		if(initFlag){
			/*$('#trackLocation a').each(function(){
				var checkingLocationfilter = trackRecordArray.industryFilter(trackRecordArray, '');
				var temp = checkingLocationfilter;
				if(!temp.locationFilter(temp, $(this).text().toLowerCase())){
					if($(this).text().toLowerCase() != "all")
						$(this).css('display','none');
				}else{
					$(this).css('display','block');
				}
			});
			
			$('#trackIndustry a').each(function(){
				var checkingLocationfilter = trackRecordArray.locationFilter(trackRecordArray, '');
				var temp = checkingLocationfilter;
				if(!temp.industryFilter(temp, $(this).text().toLowerCase())){
					if($(this).text().toLowerCase() != "all")
						$(this).css('display','none');
				}else{
					$(this).css('display','block');
				}
			});*/
		}else{
			if(curLocation == null || curLocation == 'all'){
				if(curIndustry == null || curIndustry == 'all'){
					//alert('case1 curLocation: '+curLocation+' curIndustry: '+curIndustry);
					$('#trackLocation a').each(function(){
						$(this).css('display', 'block');												
					})
					$('#trackIndustry a').each(function(){
						$(this).css('display', 'block');												
					})
				}else{
					//alert('case2 '+curIndustry);				
					$('#trackLocation a').each(function(){
						var checkingLocationfilter = trackRecordArray.industryFilter(trackRecordArray, curIndustry);
						var temp = checkingLocationfilter;
						if(!temp.locationFilter(temp, $(this).text().toLowerCase())){
							if($(this).text().toLowerCase() != "all")
								$(this).css('display','none');
						}else{
							$(this).css('display','block');
						}
					});
				}
			}else if(curIndustry == null || curIndustry == 'all'){
				//alert('case 3 '+curLocation)
				$('#trackLocation a').each(function(){
						$(this).css('display', 'block');												
					})
				$('#trackIndustry a').each(function(){
					var checkingLocationfilter = trackRecordArray.locationFilter(trackRecordArray, curLocation);
					var temp = checkingLocationfilter;
					if(!temp.industryFilter(temp, $(this).text().toLowerCase())){
						if($(this).text().toLowerCase() != "all")
							$(this).css('display','none');
					}else{
						$(this).css('display','block');
					}
				});
			}else{
				//alert('case 4 '+curLocation+' '+curIndustry)	
				/*if(curLocation != null)
				{
					$('#trackLocation a').each(function(){
						var checkingLocationfilter = trackRecordArray.industryFilter(trackRecordArray, curIndustry);
						var temp = checkingLocationfilter;
						if(!temp.locationFilter(temp, $(this).text().toLowerCase())){
							if($(this).text().toLowerCase() != "all")
								$(this).css('display','none');
						}else{
							$(this).css('display','block');
						}
					});
				}*/
				
				$('#trackLocation a').each(function(){
					var checkingLocationfilter = trackRecordArray.industryFilter(trackRecordArray, curIndustry);
					var temp = checkingLocationfilter;
					if(!temp.locationFilter(temp, $(this).text().toLowerCase())){
						if($(this).text().toLowerCase() != "all")
							$(this).css('display','none');
					}else{
						if($(this).text().toLowerCase() == curLocation)
							$(this).addClass('active');
						$(this).css('display','block');
					}
				});
				
				$('#trackIndustry a').each(function(){
					var checkingLocationfilter = trackRecordArray.locationFilter(trackRecordArray, curLocation);
					var temp = checkingLocationfilter;
					if(!temp.industryFilter(temp, $(this).text().toLowerCase())){
						if($(this).text().toLowerCase() != "all")
							$(this).css('display','none');
					}else{
						if($(this).text().toLowerCase() == curIndustry)
							$(this).addClass('active');
						$(this).css('display','block');
					}
				});
			}
		}
	}
	
	function initOverlay()
	{
		//trackLogoArray = d.getElementById('trackLogoContainer').getElementsByTagName('IMG');
		
		if(viewModeFlag)
			var trackLogoLinkArray = $('#trackLogoContainer .trackRecordListItem .trackRecordName a');
		else
			var trackLogoArray = d.getElementById('trackLogoContainer').getElementsByTagName('IMG');
		
		var trackRecordOverlay = d.getElementById('trackRecordOverlay');
		var closeBtn = d.getElementById('closeBtn');
		var overlayLogo = d.getElementById('overlayLogo');
		var companyNameDiv = d.getElementById('companyName');
		var branchBtnDiv = d.getElementById('branchBtnContainer');
		var branchInfoDiv = d.getElementById('branchInfo');
		//var caseStudyBtn = d.getElementById('caseStudyBtn');
		var caseStudyContainer = d.getElementById('caseStudyContainer');
		
		if(viewModeFlag)
		{
			for(var n=0; n<trackLogoLinkArray.length; n++)
			{
				trackLogoLinkArray[n].num = n;
				trackLogoLinkArray[n].onclick = function()
				{
					setContent(this.id);
					trackRecordOverlay.style.display = 'block';
				}
			}
		}else{
			trackLogoArray = $('#trackLogoContainer .recordItem')
			for(var n=0; n<trackLogoArray.length; n++)
			{
				trackLogoArray[n].num = n;
				trackLogoArray[n].onclick = function()
				{
					setContent(this.id);
					trackRecordOverlay.style.display = 'block';
				}
			}
		}
		
		closeBtn.onclick = function()
		{
			trackRecordOverlay.style.display = 'none';
			overlayLogo.src = '';
			companyNameDiv.innerHTML = '';
			branchBtnDiv.innerHTML = '';
			branchInfoDiv.innerHTML = '';
			caseStudyContainer.innerHTML = '';
		}
		
		function setContent(num)
		{
			//trackRecordArray[num].
			overlayLogo.src = findID(num)[0].thumb.replace('.png', '_overlay.png');
			companyNameDiv.innerHTML = findID(num)[0].companyName;
			
			//if(findID(num)[0].caseStudy != "")
			//{
			//	caseStudyBtn.href = findID(num)[0].caseStudy;
			//	caseStudyBtn.style.display = 'block';				
			//}
			
			//comment this due to filtering bug (20121018 11am)
			//if(findID(num)[0].branch.length > 1 && currentLocation == null)
			if(findID(num)[0].branch.length > 1)
			{
				branchBtnDiv.style.top = (400-findID(num)[0].branch.length*70)/2+'px';
				for(var i=0; i<findID(num)[0].branch.length; i++)
				{
					var branchContent = createDiv('', '', findID(num)[0].branch[i]);
					branchInfoDiv.appendChild(branchContent);
					
					var caseStudyBtn = createA(findID(num)[0].caseStudy[i], '', '', '', 'caseStudyBtn')
					caseStudyContainer.appendChild(caseStudyBtn);
					
					var branchBtn = createDiv('', '', i+1);
					branchBtn.num = i;
					branchBtnDiv.appendChild(branchBtn);
					branchBtn.onclick = function()
					{
						resetBranch();
						branchInfoDiv.getElementsByTagName('DIV')[this.num].style.display = 'block';
						if(caseStudyContainer.getElementsByTagName('A')[this.num].href != "")
						{
							caseStudyContainer.getElementsByTagName('A')[this.num].style.display = 'block';
							$(caseStudyContainer.getElementsByTagName('A')[this.num]).attr("rel","external");
							$(caseStudyContainer.getElementsByTagName('A')[this.num]).attr("data-ajax","false");
						}
						this.className = 'active';
					}
				}
				branchBtnDiv.getElementsByTagName('DIV')[0].className = 'active';
				branchInfoDiv.getElementsByTagName('DIV')[0].style.display = 'block';
				if(caseStudyContainer.getElementsByTagName('A')[0].href != "")
				{
					caseStudyContainer.getElementsByTagName('A')[0].style.display = 'block';
					$(caseStudyContainer.getElementsByTagName('A')[0]).attr("rel","external");
					$(caseStudyContainer.getElementsByTagName('A')[0]).attr("data-ajax","false");
				}
			//comment this to fix branch info not showing bug after clicking city button (20121018 11am)
			//}else if(currentLocation != null){
				//alert(include(findID(num)[0].location,currentLocation.toLowerCase()));
				//var a = findID(num)[0].location.indexOf(currentLocation.toLowerCase()); 				
			}else{
				var branchContent = createDiv('', '', findID(num)[0].branch[0]);
				branchContent.style.display = 'block';
				branchInfoDiv.appendChild(branchContent);
				
				var caseStudyBtn = createA(findID(num)[0].caseStudy[0], '', '', '', 'caseStudyBtn')
				if(caseStudyBtn.href != "")
				{
					caseStudyBtn.style.display = 'block';
					$(caseStudyBtn).attr("rel","external");
					$(caseStudyBtn).attr("data-ajax","false")
				}
				caseStudyContainer.appendChild(caseStudyBtn);
			}
			
			function resetBranch()
			{
				for(var i=0; i<findID(num)[0].branch.length; i++)
				{
					branchBtnDiv.getElementsByTagName('DIV')[i].className = '';
					branchInfoDiv.getElementsByTagName('DIV')[i].style.display = 'none';
					caseStudyContainer.getElementsByTagName('A')[i].style.display = 'none';
				}
			}
			//branchInfoDiv = 
			//caseStudyBtn = d.getElementById('caseStudyBtn');
		}
		
		$('#trackRecordOverlay').click(function(e){
			//alert($(e.target).attr('id'))
			if($(e.target).is("#branchBtnContainer div"))
			{
				return;
			}else if($(e.target).is('a') || $(e.target).is('#trackRecordOverlayContent') || $(e.target).is($('#trackRecordOverlayContent').find("*"))){
				return;
			}else{
				trackRecordOverlay.style.display = 'none';
				overlayLogo.src = '';
				companyNameDiv.innerHTML = '';
				branchBtnDiv.innerHTML = '';
				branchInfoDiv.innerHTML = '';
				caseStudyContainer.innerHTML = '';
			}
		 });
	}
	
	function findID(id){
		 return $.grep(trackRecordArray, function(item){
			return item.id == id;
		 });
	};
	
	
	function hideLogo()
	{
		for(var j=0; j<trackLogoArray.length; j++)
		{
			trackLogoArray[j].className += ' fadeOut';
		}
		setTimeout(function() {d.getElementById('trackLogoContainer').innerHTML = '';},800);		
	}
	
	function showLogo(arr, imgClass, size, timeoutVar)
	{
		var containerHeight = 0;
		
		if(!timeoutVar){
			var defaultTimeout = 1000;
		}else{
			var defaultTimeout = timeoutVar;
		}
			
		if(viewModeFlag)
		{
			setTimeout(function() {
				div.style.paddingTop = 0+'px';
				arr.sort(alphabeticalTrackRecordCompanyName);
				for(var f=0; f<arr.length; f++)
				{
					var trackRecordListItem = createDiv('', 'trackRecordListItem clearfix');
					
					var trackRecordName = createDiv('', 'trackRecordName');
					var trackRecordNameTxt = d.createElement('span');
					trackRecordNameTxt.innerHTML = arr[f].companyName;
					var trackRecordNameLink = createA('javascript:;', '', 'Find out more', arr[f].id);
					
					trackRecordName.appendChild(trackRecordNameTxt);
					trackRecordName.appendChild(trackRecordNameLink);
					
					if(arr[f].caseStudy.length > 0){
						var trackRecordCase = createDiv('', 'trackRecordCase');
						var trackRecordCaseTitle = d.createElement('span');
						trackRecordCaseTitle.innerHTML = 'Case Study';
						
						trackRecordCase.appendChild(trackRecordCaseTitle);
						for(var i = 0; i<arr[f].caseStudy.length; i++)
						{
							if(arr[f].caseStudy[i] != "")
							{
								var caseStudyLink = createA(arr[f].caseStudy[i], '', i+1);
								trackRecordCase.appendChild(caseStudyLink);
							}
						}
					}
					
					trackRecordListItem.appendChild(trackRecordName);
					if(arr[f].caseStudy.length > 0){
						trackRecordListItem.appendChild(trackRecordCase);
					}
					
					d.getElementById('trackLogoContainer').appendChild(trackRecordListItem);
				}
				
			}, defaultTimeout);
			
			setTimeout(function() {
				trackLogoArray = $('#trackLogoContainer .trackRecordListItem .trackRecordName a');
				
				for(var g=0; g<trackLogoArray.length; g++)
				{
					trackLogoArray[g].className += ' fadeIn';
					initOverlay(arr);
				}
				initIPadTrackRecordListHover();
			}, defaultTimeout+100 );	
		}else{
			setTimeout(function() {
				div.style.paddingTop = 0+'px';
			
				for(var f=0; f<arr.length; f++)
				{
					if(size == 1)
					{
						var itemDiv = createDiv('', 'recordItem largeRecord');
						itemDiv.id = arr[f].id;
						var itemDivHover = createDiv('', 'showMoveDiv');
						itemDivHover.innerHTML = "<div>Show more</div>";
						
						if(arr.length >= 5){
							var img = createImg(arr[f].thumb.replace('.png', '_lrg.png'), ' ', '', '', '', '', imgClass, arr[f].id);
							itemDiv.className += ' lrgLogoMargin';
						}else
							var img = createImg(arr[f].thumb.replace('.png', '_lrg.png'), ' ', '', '', '', '', imgClass, arr[f].id);
						
						itemDiv.appendChild(itemDivHover);
						itemDiv.appendChild(img);
						
						d.getElementById('trackLogoContainer').appendChild(itemDiv);
					}
					else{
						//var img = createImg(arr[f].thumb, ' ', '', '', '', '', imgClass,  arr[f].id);
												
						var itemDiv = createDiv('', 'recordItem');
						itemDiv.id = arr[f].id;
						var itemDivHover = createDiv('', 'showMoveDiv');
						itemDivHover.innerHTML = "<div>Show more</div>";
						
						var img = createImg(arr[f].thumb, ' ', '', '', '', '', imgClass,  arr[f].id);
						itemDiv.appendChild(itemDivHover);
						itemDiv.appendChild(img);
						
						d.getElementById('trackLogoContainer').appendChild(itemDiv);						
						//d.getElementById('teamLogoContainer').appendChild(itemDiv);
					}
					
				}
				
				if(size == 1)
				{
					containerHeight = Math.ceil(arr.length/5)*130;
					//alert(containerHeight);
				}else{
					//var containerHeight = Math.ceil(arr.length/9)*81;
					containerHeight = 565;
					//alert(containerHeight);
				}
				
				//alert(containerHeight+'(outside alert)')
					
				div.style.paddingTop = Math.round((565-containerHeight)/2)+'px';
				
			}, defaultTimeout);
			
			setTimeout(function() {
				//trackLogoArray = d.getElementById('trackLogoContainer').getElementsByTagName('IMG');
				trackLogoArray = $('#trackLogoContainer .recordItem img')	
				trackLogoContainerArray = $('#trackLogoContainer .recordItem')
				
				if(trackLogoArray.length < 5)
				{  //864px
					//113px
					var marginValue = Math.floor(738-(113*trackLogoContainerArray.length))/(trackLogoContainerArray.length*2)+'px';
					for(var h=0; h<trackLogoContainerArray.length; h++)
					{
						trackLogoContainerArray[h].style.marginRight = marginValue;
						trackLogoContainerArray[h].style.marginLeft = marginValue;
					}
				}
				
				for(var g=0; g<trackLogoArray.length; g++)
				{
					trackLogoArray[g].className += ' fadeIn';
					initOverlay(arr);
				}}, defaultTimeout+100 );	
		}
		
	}
	
	function initIPadTrackRecordListHover()
	{
		if(isiPad){
			$('.trackRecordListItem').click(function(){
				$('.trackRecordListItem').each(function(){
					$(this).removeClass('onActive');
				})
				$(this).addClass('onActive');
			})
		}		
	}
	
	function alphabeticalTrackRecordCompanyName(a, b)
	{
		 var A = a.companyName;
		 var B = b.companyName;
		  
		 A = A.toLowerCase();
		 B = B.toLowerCase();
		  
		 if (A < B) return -1;
		 if (A > B) return 1;
		 return 0;
	}
	
	
	Array.prototype.locationFilter = function(a, searchStr) {
	  var returnArray = false;
	  for (i=0; i<this.length; i++) {
			//if (this[i].location[j]==searchStr) {
			if(include(this[i].location,searchStr)) {
			  if (!returnArray) { returnArray = [] }
			  returnArray.push(a[i]);
			}
		}
	  return returnArray;
	}
	
	Array.prototype.industryFilter = function(a, searchStr) {
	  var returnArray = false;
	  for (i=0; i<this.length; i++) {
			if (this[i].industry==searchStr) {
			  if (!returnArray) { returnArray = [] }
			  returnArray.push(a[i]);
			}
		 }
	  return returnArray;
	}
}

function include(arr,obj) {
	for (i=0; i<arr.length; i++) {
		if(arr[i].toLowerCase()==obj.toLowerCase())
			return true;
	}
	return false;
    /*return (arr.indexOf(obj.toLowerCase()) != -1);*/
}

function trimWhiteSpace(str)
{
	str = str.replace(/\s+/g,'');	
	return str;
}

function initOurTeam(viewMode)
{
	var viewModeFlag = viewMode;
	var ourTeamCatBtn = d.getElementById('ourTeamCat').getElementsByTagName('A');
	var locationBtn = d.getElementById('locationSelection').getElementsByTagName('A');
	var div = d.getElementById('teamLogoContainer');
	
	if(viewModeFlag){
		showLogo(ourTeamArray, 'opacityNone', 100);
		var ourTeamContainerArray = $('#teamLogoContainer .listViewItem');
	}else{
		showLogo(ourTeamArray, 'opacityNone', 100);
		var ourTeamContainerArray = d.getElementById('teamLogoContainer').getElementsByTagName('IMG');
	}
	
	var workCatClickFlag = false;
	var locationSelectClickFlag = false;
	var currentWorkCat = null;
	var currentLocation = null;
	//var currentWorkCatBtn = null;
	var filterFactor = null;
	var filter = new Array();

	//initOverlay();
	initIPadTeamListHover();	
	//locationSelection
	for(var i=0; i<locationBtn.length; i++)
	{
		locationBtn[i].num = i;
		locationBtn[i].onclick = function()
		{
			if(locationSelectClickFlag == false)
			{
				locationSelectClickFlag = true;
				$('#locationSelection a').each(function(){
					$(this).removeClass('active')
				})
				$(this).addClass('active');
				filterFactor = this.innerHTML;
				currentLocation = filterFactor.toLowerCase();
				//currentWorkCatBtn = this.num;
				
				checkFilterExist(0, currentLocation, currentWorkCat);

				hideLogo();
				if(currentLocation == 'all')
				{
					if(filter.length == 0)
					{
						//alert(1)
						showLogo(filter, 'lrgLogo');
						currentLocation = null;
					}
					else
					{
						//alert(2)
						//filter = ourTeamArray.workCatFilter(ourTeamArray, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
						currentLocation = null;
					}					
				}else{
					if(currentWorkCat != null)
					{
						//alert(3)
						//have industry
						filter = ourTeamArray.workCatFilter(ourTeamArray, currentWorkCat);
						var temp = filter;
						filter = temp.locationFilter(temp, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}else{
						//alert(4)
						//no industry
						filter = ourTeamArray.locationFilter(ourTeamArray, currentLocation);
						showLogo(filter, 'lrgLogo');
					}					
				}				
			}else if(this.innerHTML == currentWorkCat){
				return;
			}else{
				//var innerText = trimWhiteSpace(currentWorkCat);	
				$('#locationSelection a').each(function(){
					$(this).removeClass('active');
				})
				$(this).addClass('active');
				filterFactor = this.innerHTML;
				currentLocation = filterFactor.toLowerCase();
				//currentWorkCatBtn = this.num;
				//locationSelectClickFlag = true;
				
				hideLogo();
				
				checkFilterExist(0, currentLocation, currentWorkCat);
				
				if(currentLocation == 'all')
				{
					if(currentWorkCat == null)
					{
						//alert(5)
						showLogo(ourTeamArray, 'lrgLogo');
						currentLocation = null;
					}
					else
					{
						//alert(6)
						filter = ourTeamArray.workCatFilter(ourTeamArray, currentWorkCat);
						showLogo(filter, 'lrgLogo');
						currentLocation = null;
					}
				}else{
					if(currentWorkCat == null)
					{
						//alert(7)
						filter = ourTeamArray.locationFilter(ourTeamArray, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}
					else
					{
						//alert(8)
						filter = ourTeamArray.workCatFilter(ourTeamArray, currentWorkCat);
						var temp = filter;
						filter = temp.locationFilter(temp, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}
				}
			}	
		}
	}
	
	//init workcat
	for(var i=0; i<ourTeamCatBtn.length; i++)
	{
		ourTeamCatBtn[i].num = i;
		ourTeamCatBtn[i].onclick = function()
		{
			if(workCatClickFlag == false)
			{
				workCatClickFlag = true;
				$('#ourTeamCat a').each(function(){
					$(this).removeClass('active')
				})
				$(this).addClass('active');
				filterFactor = this.innerHTML;
				currentWorkCat = filterFactor.toLowerCase();
				//currentWorkCatBtn = this.num;

				hideLogo();
				
				checkFilterExist(0, currentLocation, currentWorkCat);
				
				if(currentWorkCat == 'all')
				{
					if(filter.length == 0)
					{
						//alert(9)
						showLogo(ourTeamArray, 'lrgLogo');
						currentWorkCat = null;
					}else
					{
						//alert(10)
						filter = ourTeamArray.locationFilter(ourTeamArray, currentLocation);
						currentWorkCat = null;
						showLogo(filter, 'lrgLogo');
					}
				}else{
					if(currentLocation == null)
					{
						//alert(11)
						filter = ourTeamArray.workCatFilter(ourTeamArray, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}
					else
					{
						//alert(12)
						filter = ourTeamArray.locationFilter(ourTeamArray, currentLocation);
						var temp = filter;
						filter = temp.workCatFilter(temp, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}			
				}
			}else if(this.innerHTML == currentWorkCat){
				return;
			}else{
				//var innerText = trimWhiteSpace(currentWorkCat);	
				$('#ourTeamCat a').each(function(){
					$(this).removeClass('active')
				})
				$(this).addClass('active');
				filterFactor = this.innerHTML;
				currentWorkCat = filterFactor.toLowerCase();
				//currentWorkCatBtn = this.num;
				workCatClickFlag = true;
				
				hideLogo();
				
				checkFilterExist(0, currentLocation, currentWorkCat);
				
				if(currentWorkCat == 'all')
				{
					if(currentLocation == null)
					{
						//alert(13)
						showLogo(ourTeamArray, 'lrgLogo');
						currentWorkCat = null;
					}else
					{
						//alert(14)
						filter = ourTeamArray.locationFilter(ourTeamArray, currentLocation);
						showLogo(filter, 'lrgLogo');
						currentWorkCat = null;
					}
				}else{
					if(currentLocation == null){
						//alert(15)
						filter = ourTeamArray.workCatFilter(ourTeamArray, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}else
					{
						//alert(16)
						filter = ourTeamArray.locationFilter(ourTeamArray, currentLocation);
						var temp = filter;
						filter = temp.workCatFilter(temp, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}
				}
				
				//filter = ourTeamArray.workCatFilter(ourTeamArray, filterFactor.toLowerCase());
				//showLogo(filter, 'lrgLogo');
			}	
		}
	}
	
	function checkFilterExist(initFlag,curLocation, curWorkCat)
	{
		if(initFlag){
			/*$('#trackLocation a').each(function(){
				var checkingLocationfilter = trackRecordArray.industryFilter(trackRecordArray, '');
				var temp = checkingLocationfilter;
				if(!temp.locationFilter(temp, $(this).text().toLowerCase())){
					if($(this).text().toLowerCase() != "all")
						$(this).css('display','none');
				}else{
					$(this).css('display','block');
				}
			});
			
			$('#trackIndustry a').each(function(){
				var checkingLocationfilter = trackRecordArray.locationFilter(trackRecordArray, '');
				var temp = checkingLocationfilter;
				if(!temp.industryFilter(temp, $(this).text().toLowerCase())){
					if($(this).text().toLowerCase() != "all")
						$(this).css('display','none');
				}else{
					$(this).css('display','block');
				}
			});*/
		}else{
			if(curLocation == null || curLocation == 'all'){
				if(curWorkCat == null || curWorkCat == 'all'){
					//alert('case1 curLocation: '+curLocation+' curWorkCat: '+curWorkCat);
					$('#locationSelection a').each(function(){
						$(this).css('display', 'block');												
					})
					$('#ourTeamCat a').each(function(){
						$(this).css('display', 'block');												
					})
				}else{
					//alert('case2 '+curWorkCat);				
					$('#locationSelection a').each(function(){
						var checkingLocationfilter = ourTeamArray.workCatFilter(ourTeamArray, curWorkCat);
						var temp = checkingLocationfilter;
						if(!temp.locationFilter(temp, $(this).text().toLowerCase())){
							if($(this).text().toLowerCase() != "all")
								$(this).css('display','none');
						}else{
							$(this).css('display','block');
						}
					});
					
					//currentLocation = 'all';
				}
			}else if(curWorkCat == null || curWorkCat == 'all'){
				//alert('case 3 '+curLocation)
				$('#locationSelection a').each(function(){
						$(this).css('display', 'block');												
					})
				$('#ourTeamCat a').each(function(){
					var checkingLocationfilter = ourTeamArray.locationFilter(ourTeamArray, curLocation);
					//console.log("checkingLocationfilter"+checkingLocationfilter)
					var temp = checkingLocationfilter;
					if(!temp.workCatFilter(temp, $(this).text().toLowerCase())){
						if($(this).text().toLowerCase() != "all")
							$(this).css('display','none');
					}else{
						$(this).css('display','block');
					}
				});
			}else{
				//alert('case 4 '+curLocation+' '+curWorkCat)	
				/*if(curLocation != null)
				{
					$('#locationSelection a').each(function(){
						var checkingLocationfilter = ourTeamArray.workCatFilter(ourTeamArray, curWorkCat);
						var temp = checkingLocationfilter;
						if(!temp.locationFilter(temp, $(this).text().toLowerCase())){
							if($(this).text().toLowerCase() != "all")
								$(this).css('display','none');
						}else{
							$(this).css('display','block');
						}
					});
				}*/
				
				$('#locationSelection a').each(function(){
					var checkingLocationfilter = ourTeamArray.workCatFilter(ourTeamArray, curWorkCat);
					var temp1 = checkingLocationfilter;
					if(!temp1.locationFilter(temp1, $(this).text().toLowerCase())){
						if($(this).text().toLowerCase() != "all")
							$(this).css('display','none');
					}else{
						if($(this).text().toLowerCase() == curLocation)
							$(this).addClass('active');
						$(this).css('display','block');
					}
				});
				
				$('#ourTeamCat a').each(function(){
					var checkingLocationfilter = ourTeamArray.locationFilter(ourTeamArray, curLocation);
					var temp2 = checkingLocationfilter;
					if(!temp2.workCatFilter(temp2, $(this).text().toLowerCase())){
						if($(this).text().toLowerCase() != "all")
							$(this).css('display','none');
					}else{
						if($(this).text().toLowerCase() == curWorkCat)
							$(this).addClass('active');
						$(this).css('display','block');
					}
				});
				
			}
		}
	}
	
	function initOverlay()
	{
		//ourTeamContainerArray = d.getElementById('teamLogoContainer').getElementsByTagName('IMG');
		if(viewModeFlag)
			var ourTeamContainerLinkArray =  d.getElementById('teamLogoContainer').getElementsByTagName('a');
		else
			var ourTeamContainerArray = getElementsByClassName(d.getElementById('teamLogoContainer'), 'personItem', 1);
			//var ourTeamContainerArray = d.getElementById('teamLogoContainer').getElementsByTagName('IMG');
			
		//alert(ourTeamContainerArray.length)
			
		var ourTeamOverlay = d.getElementById('ourTeamOverlay');
		var closeBtn = d.getElementById('closeBtn');
		var imgContainer = d.getElementById('imgContainer');
		var empNameDiv = d.getElementById('empName');
		var empTitleDiv = d.getElementById('empTitle');
		var empDepartment = d.getElementById('empDepartment');
		var telNoDiv = d.getElementById('telNo');
		var emailDiv = d.getElementById('email');
		var locationDiv = d.getElementById('location');
		var experienceDiv = d.getElementById('experience');
		var languageDiv = d.getElementById('language');
		var expertiseDiv = d.getElementById('expertise');
		
		if(viewModeFlag){
			//console.log(ourTeamContainerLinkArray.length);
			for(var n=0; n<ourTeamContainerLinkArray.length; n++)
			{
				ourTeamContainerLinkArray[n].num = n;
				ourTeamContainerLinkArray[n].onclick = function()
				{
					//alert(this.id);
					setContent(this.id);
					ourTeamOverlay.style.display = 'block';
				}
			}	
		}else{
			for(var n=0; n<ourTeamContainerArray.length; n++)
			{
				ourTeamContainerArray[n].num = n;
				ourTeamContainerArray[n].onclick = function()
				{
					setContent(this.id);
					ourTeamOverlay.style.display = 'block';
				}
			}	
		}
		
		closeBtn.onclick = function()
		{
			ourTeamOverlay.style.display = 'none';
			imgContainer.innerHTML = '';
			empNameDiv.innerHTML = '';
			empTitleDiv.innerHTML = '';
			empDepartment.innerHTML = '';
			telNoDiv.innerHTML = '';
			emailDiv.innerHTML = '';
			locationDiv.innerHTML = '';
			experienceDiv.innerHTML = '';
			languageDiv.innerHTML = '';
			expertiseDiv.innerHTML = '';
		}
		
		/*function setContent(num)
		{
			var empOverlayImg = createImg('../images/ourTeam/'+ourTeamArray[num].empName.toLowerCase().replace(/['"]/g,'')+'_overlay.png');
			imgContainer.appendChild(empOverlayImg);
			
			empNameDiv.innerHTML = ourTeamArray[num].empName;
			empTitleDiv.innerHTML = ourTeamArray[num].empTitle;
			empDepartment.innerHTML = ourTeamArray[num].empDepartment;
			telNoDiv.innerHTML = ourTeamArray[num].telNo;
			emailDiv.innerHTML = ourTeamArray[num].email;
			locationDiv.innerHTML = 'Located in '+ourTeamArray[num].location;
			experienceDiv.innerHTML = ourTeamArray[num].experience+' years in Real Estate Industry';
			languageDiv.innerHTML = 'Speaks ' + ourTeamArray[num].languages;
			expertiseDiv.innerHTML = 'Expertise: '+ourTeamArray[num].expertise;
		}*/
		
		function setContent(num)
		{
			var empOverlayImg = createImg('../images/ourTeam/'+findID(num)[0].empName.toLowerCase().replace(/['"]/g,'')+'_overlay.png');
			imgContainer.appendChild(empOverlayImg);
			
			empNameDiv.innerHTML = findID(num)[0].empName;
			empTitleDiv.innerHTML = findID(num)[0].empTitle;
			empDepartment.innerHTML = findID(num)[0].empDepartment;
			telNoDiv.innerHTML = findID(num)[0].telNo;
			emailDiv.innerHTML = '<a href="mailto:'+findID(num)[0].email+'">'+findID(num)[0].email+'</a>';
			locationDiv.innerHTML = 'Located in '+findID(num)[0].location;
			experienceDiv.innerHTML = findID(num)[0].experience+' years in Real Estate Industry';
			languageDiv.innerHTML = 'Speaks ' + findID(num)[0].languages;
			expertiseDiv.innerHTML = 'Expertise: '+findID(num)[0].expertise;
		}
		
		$('#ourTeamOverlay').click(function(e){

			if($(e.target).is('a') || $(e.target).is('#ourTeamOverlayContent') || $(e.target).is($('#ourTeamOverlayContent').find("*")) ){
				return;
			}else{
				ourTeamOverlay.style.display = 'none';
				imgContainer.innerHTML = '';
				empNameDiv.innerHTML = '';
				empTitleDiv.innerHTML = '';
				telNoDiv.innerHTML = '';
				emailDiv.innerHTML = '';
				locationDiv.innerHTML = '';
				experienceDiv.innerHTML = '';
				languageDiv.innerHTML = '';
				expertiseDiv.innerHTML = '';
			}
		 });
	}
	
	function findID(id){
		 return $.grep(ourTeamArray, function(item){
			return item.id == id;
		 });
	};
	
	function hideLogo()
	{
		for(var j=0; j<ourTeamContainerArray.length; j++)
		{
			ourTeamContainerArray[j].className += ' fadeOut';
		}

		setTimeout(function() {d.getElementById('teamLogoContainer').innerHTML = '';},800);		
	}
	
	//function showLogo(arr, imgClass, size, timeoutVar)
	
	//function showLogo(arr, imgClass, currentWorkCatBtn)
	function showLogo(arr, imgClass, timeoutVar)
	{
		if(!timeoutVar){
			var defaultTimeout = 1000;
		}else{
			var defaultTimeout = timeoutVar;
		}
		
		if(viewModeFlag){
			//console.log(defaultTimeout)
			arr.sort(alphabeticalPersonName);
			setTimeout(function() {
				for(var f=0; f<arr.length; f++)
				{
					
					var listViewItem = createDiv('', 'listViewItem clearfix');
					
					var listViewPersonName = createDiv('', 'personName');
					var listViewPersonNameTxt = d.createElement('span');
					listViewPersonNameTxt.innerHTML = arr[f].empName;
					var listViewPersonNameLink = createA('javascript:;', '', 'Find out more', arr[f].id);
					
					listViewPersonName.appendChild(listViewPersonNameTxt);
					listViewPersonName.appendChild(listViewPersonNameLink);
					
					var listViewPersonTitle = createDiv('', 'personDescription');
					var listViewPersonTitleMain = d.createElement('span');
					listViewPersonTitleMain.innerHTML = arr[f].empTitle;
					
					
					listViewPersonTitle.appendChild(listViewPersonTitleMain);
					listViewPersonTitle.innerHTML += arr[f].empDepartment;
					
					listViewItem.appendChild(listViewPersonName);
					listViewItem.appendChild(listViewPersonTitle);
					
					d.getElementById('teamLogoContainer').appendChild(listViewItem);
				}
			}, defaultTimeout);
					
			setTimeout(function() {			
				ourTeamContainerArray = $('#teamLogoContainer .listViewItem .personName a');
									  
				for(var g=0; g<ourTeamContainerArray.length; g++)
				{
					ourTeamContainerArray[g].className += ' fadeIn';
					initOverlay(arr);
				}
				initIPadTeamListHover();			
			}, defaultTimeout+100);	
		}else{
			setTimeout(function() {
				for(var f=0; f<arr.length; f++)
				{
					var itemDiv = createDiv('', 'personItem');
					itemDiv.id = arr[f].id;
					var itemDivHover = createDiv('', 'showMoveDiv');
					itemDivHover.innerHTML = "<div>Show more</div>";
					
					var img = createImg('../images/ourTeam/'+arr[f].empName.toLowerCase().replace(/['"]/g,'')+'.png', ' ', '', '', '', '', imgClass);
					itemDiv.appendChild(itemDivHover);
					itemDiv.appendChild(img);
					
					d.getElementById('teamLogoContainer').appendChild(itemDiv);
				}
			}, defaultTimeout);
					
			setTimeout(function() {			
				for(var g=0; g<ourTeamContainerArray.length; g++)
				{
					ourTeamContainerArray[g].className += ' fadeIn';
					initOverlay(arr);
				}}, defaultTimeout+100);	
		}
	}
	
	function initIPadTeamListHover()
	{
		if(isiPad){
			$('.listViewItem').click(function(){
				$('.listViewItem').each(function(){
					$(this).removeClass('onActive');
				})
				$(this).addClass('onActive');
			})
		}		
	}
	
	function alphabeticalPersonName(a, b)
	{
		 var A = a.empName;
		 var B = b.empName;
		  
		 A = A.toLowerCase();
		 B = B.toLowerCase();
		  
		 if (A < B) return -1;
		 if (A > B) return 1;
		 return 0;
	}

	Array.prototype.workCatFilter = function(a, searchStr) {
	  var returnArray = false;
	  for (i=0; i<this.length; i++) {
			if(include(this[i].workCat,searchStr)) {
				//if(this[i].workCat.toLowerCase() == searchStr.toLowerCase()) {
			  if (!returnArray) { returnArray = [] }
			  returnArray.push(a[i]);
			}
		}
	  return returnArray;
	}
	
	Array.prototype.locationFilter = function(a, searchStr) {
	  var returnArray = false;
	  for (i=0; i<this.length; i++) {
	  		//console.log("country"+this[i].country);
			if(include(this[i].country,searchStr)) {
			  if (!returnArray) { returnArray = [] }
			  returnArray.push(a[i]);
			//console.log(a[i]);
			}
			/*if((this[i].location.toLowerCase()).indexOf(searchStr.toLowerCase())>=0) {
			  if (!returnArray) { returnArray = [] }
			  returnArray.push(a[i]);
			}*/
		}
	  return returnArray;
	}
}

function initOurTeam_apac(viewMode)
{
	var viewModeFlag = viewMode;
	var ourTeamCatBtn = d.getElementById('ourTeamCat').getElementsByTagName('A');
	var locationBtn = d.getElementById('locationSelection').getElementsByTagName('A');
	var div = d.getElementById('teamLogoContainer');
	
	if(viewModeFlag){
		showLogo(ourTeamArray, 'opacityNone', 100);
		var ourTeamContainerArray = $('#teamLogoContainer .listViewItem');
	}else{
		showLogo(ourTeamArray, 'opacityNone', 100);
		var ourTeamContainerArray = d.getElementById('teamLogoContainer').getElementsByTagName('IMG');
	}
	
	var workCatClickFlag = false;
	var locationSelectClickFlag = false;
	var currentWorkCat = null;
	var currentLocation = null;
	//var currentWorkCatBtn = null;
	var filterFactor = null;
	var filter = new Array();

	//initOverlay();
	initIPadTeamListHover();	
	//locationSelection
	for(var i=0; i<locationBtn.length; i++)
	{
		locationBtn[i].num = i;
		locationBtn[i].onclick = function()
		{
			if(locationSelectClickFlag == false)
			{
				locationSelectClickFlag = true;
				$('#locationSelection a').each(function(){
					$(this).removeClass('active')
				})
				$(this).addClass('active');
				filterFactor = this.innerHTML;
				if(filterFactor.toLowerCase() == 'all')
					currentLocation = null;
				else
					currentLocation = filterFactor.toLowerCase();
				//currentWorkCatBtn = this.num;
				
				checkFilterExist(0, currentLocation, currentWorkCat);

				hideLogo();
				if(currentLocation == 'null')
				{
					if(filter.length == 0)
					{
						showLogo(filter, 'lrgLogo');
						currentLocation = null;
					}
					else
					{
						//alert(2)
						//filter = ourTeamArray.workCatFilter(ourTeamArray, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
						currentLocation = null;
					}					
				}else{
					if(currentWorkCat != null)
					{
						//alert(3)
						//have industry
						filter = ourTeamArray.workCatFilter(ourTeamArray,currentWorkCat);
						var temp = filter;
						filter = temp.locationFilter(temp, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}else{
						//alert(4)
						//no industry
						filter = ourTeamArray.locationFilter(ourTeamArray, currentLocation);
						showLogo(filter, 'lrgLogo');
					}					
				}				
			}else if(this.innerHTML == currentWorkCat){
				return;
			}else{
				//var innerText = trimWhiteSpace(currentWorkCat);	
				$('#locationSelection a').each(function(){
					$(this).removeClass('active');
				})
				$(this).addClass('active');
				filterFactor = this.innerHTML;
				if(filterFactor.toLowerCase() == 'all')
					currentLocation = null;
				else
					currentLocation = filterFactor.toLowerCase();
				//currentWorkCatBtn = this.num;
				//locationSelectClickFlag = true;
				
				hideLogo();
				
				checkFilterExist(0, currentLocation, currentWorkCat);
				
				if(currentLocation == 'null')
				{
					if(currentWorkCat == null)
					{
						//alert(5)
						showLogo(ourTeamArray, 'lrgLogo');
						currentLocation = null;
					}
					else
					{
						//alert(6)
						currentLocation = null;
						filter = ourTeamArray.workCatFilter(ourTeamArray,currentWorkCat);
						showLogo(filter, 'lrgLogo');						
					}
				}else{
					if(currentWorkCat == null)
					{
						//alert(7)
						filter = ourTeamArray.locationFilter(ourTeamArray, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}
					else
					{
						//alert(8)
						filter = ourTeamArray.workCatFilter(ourTeamArray,currentWorkCat);
						var temp = filter;
						filter = temp.locationFilter(temp, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}
				}
			}	
		}
	}
	
	//init workcat
	for(var i=0; i<ourTeamCatBtn.length; i++)
	{
		ourTeamCatBtn[i].num = i;
		ourTeamCatBtn[i].onclick = function()
		{
			if(workCatClickFlag == false)
			{
				workCatClickFlag = true;
				$('#ourTeamCat a').each(function(){
					$(this).removeClass('active')
				})
				$(this).addClass('active');
				filterFactor = this.innerHTML;
				if(filterFactor.toLowerCase() == 'all')
					currentWorkCat = null;
				else
					currentWorkCat = filterFactor.toLowerCase();
				//currentWorkCatBtn = this.num;

				hideLogo();
				
				checkFilterExist(0, currentLocation, currentWorkCat);
				
				if(currentWorkCat == 'null')
				{
					if(filter.length == 0)
					{
						//alert(9)
						showLogo(ourTeamArray, 'lrgLogo');
						currentWorkCat = null;
					}else
					{
						//alert(10)
						currentWorkCat = null;
						filter = ourTeamArray.locationFilter(ourTeamArray, currentLocation);
						showLogo(filter, 'lrgLogo');
					}
				}else{
					if(currentLocation == null)
					{
						//alert(11)
						filter = ourTeamArray.workCatFilter(ourTeamArray, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}
					else
					{
						//alert(12)
						filter = ourTeamArray.locationFilter(ourTeamArray, currentLocation);
						var temp = filter;
						filter = temp.workCatFilter(temp, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}			
				}
			}else if(this.innerHTML == currentWorkCat){
				return;
			}else{
				//var innerText = trimWhiteSpace(currentWorkCat);	
				$('#ourTeamCat a').each(function(){
					$(this).removeClass('active')
				})
				$(this).addClass('active');
				filterFactor = this.innerHTML;
				if(filterFactor.toLowerCase() == 'all')
					currentWorkCat = null;
				else
					currentWorkCat = filterFactor.toLowerCase();
				//currentWorkCatBtn = this.num;
				workCatClickFlag = true;
				
				hideLogo();
				
				checkFilterExist(0, currentLocation, currentWorkCat);
				
				if(currentWorkCat == 'null')
				{
					if(currentLocation == null)
					{
						//alert(13)
						showLogo(ourTeamArray, 'lrgLogo');
						currentWorkCat = null;
					}else
					{
						//alert(14)
						currentWorkCat = null;
						
						filter = ourTeamArray.locationFilter(ourTeamArray, currentLocation, currentWorkCat);
						showLogo(filter, 'lrgLogo');
						
					}
				}else{
					if(currentLocation == null){
						//alert(15)
						filter = ourTeamArray.workCatFilter(ourTeamArray, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}else
					{
						//alert(16)
						filter = ourTeamArray.locationFilter(ourTeamArray, currentLocation, currentWorkCat);
						var temp = filter;
						filter = temp.workCatFilter(temp, filterFactor.toLowerCase());
						showLogo(filter, 'lrgLogo');
					}
				}
				
				//filter = ourTeamArray.workCatFilter(ourTeamArray, filterFactor.toLowerCase());
				//showLogo(filter, 'lrgLogo');
			}	
		}
	}
	
	function checkFilterExist(initFlag,curLocation, curWorkCat)
	{
		if(initFlag){

		}else{
			if(curLocation == null || curLocation == 'all'){
				if(curWorkCat == null || curWorkCat == 'all'){
					//alert('case1 curLocation: '+curLocation+' curWorkCat: '+curWorkCat);
					$('#locationSelection a').each(function(){
						$(this).css('display', 'block');												
					})
					$('#ourTeamCat a').each(function(){
						$(this).css('display', 'block');												
					})
				}else{
					//alert('case2 '+curWorkCat);				
					$('#locationSelection a').each(function(){
						var checkingLocationfilter = ourTeamArray.workCatFilter(ourTeamArray,curWorkCat);
						var temp = checkingLocationfilter;
						//console.log(checkingLocationfilter);
						if(temp.locationFilter(temp, $(this).text().toLowerCase(), null, 1).length == 0){
							if($(this).text().toLowerCase() != "all")
								$(this).css('display','none');
						}else{
							$(this).css('display','block');
						}
					});
					
					//currentLocation = 'all';
				}
			}else if(curWorkCat == null || curWorkCat == 'all'){
				//alert('case 3 '+curLocation)
				$('#locationSelection a').each(function(){
						$(this).css('display', 'block');												
					})
				$('#ourTeamCat a').each(function(){
					var checkingLocationfilter = ourTeamArray.locationFilter(ourTeamArray, curLocation);
					var temp = checkingLocationfilter;
					//console.log($(this).text().toLowerCase()+','+temp.workCatFilter(temp, $(this).text().toLowerCase(), 0).length)
					if(temp.workCatFilter(temp, $(this).text().toLowerCase(), 1).length == 0){
						if($(this).text().toLowerCase() != "all")
							$(this).css('display','none');
					}else{
						$(this).css('display','block');
					}
				});
			}else{
				//alert('case 4 '+curLocation+' '+curWorkCat)	
				/*if(curLocation != null)
				{
					$('#locationSelection a').each(function(){
						var checkingLocationfilter = ourTeamArray.workCatFilter(ourTeamArray, curWorkCat);
						var temp = checkingLocationfilter;
						if(!temp.locationFilter(temp, $(this).text().toLowerCase())){
							if($(this).text().toLowerCase() != "all")
								$(this).css('display','none');
						}else{
							$(this).css('display','block');
						}
					});
				}*/
				
				$('#locationSelection a').each(function(){
					var checkingLocationfilter = ourTeamArray.workCatFilter(ourTeamArray, curWorkCat);
					var temp1 = checkingLocationfilter;
					if(temp1.locationFilter(temp1, $(this).text().toLowerCase(), null, 1).length == 0){
						if($(this).text().toLowerCase() != "all")
							$(this).css('display','none');
					}else{
						if($(this).text().toLowerCase() == curLocation)
							$(this).addClass('active');
						$(this).css('display','block');
					}
				});
				
				$('#ourTeamCat a').each(function(){
					var checkingLocationfilter = ourTeamArray.locationFilter(ourTeamArray, curLocation);
					var temp2 = checkingLocationfilter;
					if(temp2.workCatFilter(temp2, $(this).text().toLowerCase(), 1).length == 0){
						if($(this).text().toLowerCase() != "all")
							$(this).css('display','none');
					}else{
						if($(this).text().toLowerCase() == curWorkCat)
							$(this).addClass('active');
						$(this).css('display','block');
					}
				});
				
			}
		}
	}
	
	function initOverlay()
	{
		//ourTeamContainerArray = d.getElementById('teamLogoContainer').getElementsByTagName('IMG');
		if(viewModeFlag)
			var ourTeamContainerLinkArray =  d.getElementById('teamLogoContainer').getElementsByTagName('a');
		else
			var ourTeamContainerArray = getElementsByClassName(d.getElementById('teamLogoContainer'), 'personItem', 1);
			//var ourTeamContainerArray = d.getElementById('teamLogoContainer').getElementsByTagName('IMG');
			
		//alert(ourTeamContainerArray.length)
			
		var ourTeamOverlay = d.getElementById('ourTeamOverlay');
		var closeBtn = d.getElementById('closeBtn');
		var imgContainer = d.getElementById('imgContainer');
		var empNameDiv = d.getElementById('empName');
		var empTitleDiv = d.getElementById('empTitle');
		var empDepartment = d.getElementById('empDepartment');
		var telNoDiv = d.getElementById('telNo');
		var emailDiv = d.getElementById('email');
		var locationDiv = d.getElementById('location');
		var experienceDiv = d.getElementById('experience');
		var languageDiv = d.getElementById('language');
		var expertiseDiv = d.getElementById('expertise');
		
		if(viewModeFlag){
			//console.log(ourTeamContainerLinkArray.length);
			for(var n=0; n<ourTeamContainerLinkArray.length; n++)
			{
				ourTeamContainerLinkArray[n].num = n;
				ourTeamContainerLinkArray[n].onclick = function()
				{
					//alert(this.id);
					setContent(this.id);
					ourTeamOverlay.style.display = 'block';
				}
			}	
		}else{
			for(var n=0; n<ourTeamContainerArray.length; n++)
			{
				ourTeamContainerArray[n].num = n;
				ourTeamContainerArray[n].onclick = function()
				{
					setContent(this.id);
					ourTeamOverlay.style.display = 'block';
				}
			}	
		}
		
		closeBtn.onclick = function()
		{
			ourTeamOverlay.style.display = 'none';
			imgContainer.innerHTML = '';
			empNameDiv.innerHTML = '';
			empTitleDiv.innerHTML = '';
			empDepartment.innerHTML = '';
			telNoDiv.innerHTML = '';
			emailDiv.innerHTML = '';
			locationDiv.innerHTML = '';
			experienceDiv.innerHTML = '';
			languageDiv.innerHTML = '';
			expertiseDiv.innerHTML = '';
		}
		
		/*function setContent(num)
		{
			var empOverlayImg = createImg('../images/ourTeam/'+ourTeamArray[num].empName.toLowerCase().replace(/['"]/g,'')+'_overlay.png');
			imgContainer.appendChild(empOverlayImg);
			
			empNameDiv.innerHTML = ourTeamArray[num].empName;
			empTitleDiv.innerHTML = ourTeamArray[num].empTitle;
			empDepartment.innerHTML = ourTeamArray[num].empDepartment;
			telNoDiv.innerHTML = ourTeamArray[num].telNo;
			emailDiv.innerHTML = ourTeamArray[num].email;
			locationDiv.innerHTML = 'Located in '+ourTeamArray[num].location;
			experienceDiv.innerHTML = ourTeamArray[num].experience+' years in Real Estate Industry';
			languageDiv.innerHTML = 'Speaks ' + ourTeamArray[num].languages;
			expertiseDiv.innerHTML = 'Expertise: '+ourTeamArray[num].expertise;
		}*/
		
		function setContent(num)
		{
			var empOverlayImg = createImg('../images/ourTeam/'+findID(num)[0].empName.toLowerCase().replace(/['"]/g,'')+'_overlay.png');
			imgContainer.appendChild(empOverlayImg);
			
			empNameDiv.innerHTML = findID(num)[0].empName;
			empTitleDiv.innerHTML = findID(num)[0].empTitle;
			empDepartment.innerHTML = findID(num)[0].empDepartment;
			telNoDiv.innerHTML = findID(num)[0].telNo;
			emailDiv.innerHTML = '<a href="mailto:'+findID(num)[0].email+'">'+findID(num)[0].email+'</a>';
			locationDiv.innerHTML = 'Located in '+findID(num)[0].location;
			experienceDiv.innerHTML = findID(num)[0].experience+' years in Real Estate Industry';
			languageDiv.innerHTML = 'Speaks ' + findID(num)[0].languages;
			expertiseDiv.innerHTML = 'Expertise: '+findID(num)[0].expertise;
		}
		
		$('#ourTeamOverlay').click(function(e){

			if($(e.target).is('a') || $(e.target).is('#ourTeamOverlayContent') || $(e.target).is($('#ourTeamOverlayContent').find("*")) ){
				return;
			}else{
				ourTeamOverlay.style.display = 'none';
				imgContainer.innerHTML = '';
				empNameDiv.innerHTML = '';
				empTitleDiv.innerHTML = '';
				telNoDiv.innerHTML = '';
				emailDiv.innerHTML = '';
				locationDiv.innerHTML = '';
				experienceDiv.innerHTML = '';
				languageDiv.innerHTML = '';
				expertiseDiv.innerHTML = '';
			}
		 });
	}
	
	function findID(id){
		 return $.grep(ourTeamArray, function(item){
			return item.id == id;
		 });
	};
	
	function hideLogo()
	{
		for(var j=0; j<ourTeamContainerArray.length; j++)
		{
			ourTeamContainerArray[j].className += ' fadeOut';
		}

		setTimeout(function() {d.getElementById('teamLogoContainer').innerHTML = '';},800);		
	}
	
	//function showLogo(arr, imgClass, size, timeoutVar)
	
	//function showLogo(arr, imgClass, currentWorkCatBtn)
	function showLogo(arr, imgClass, timeoutVar)
	{
		if(!timeoutVar){
			var defaultTimeout = 1000;
		}else{
			var defaultTimeout = timeoutVar;
		}
		
		if(viewModeFlag){
			//console.log(defaultTimeout)
			arr.sort(alphabeticalPersonName);
			setTimeout(function() {
				for(var f=0; f<arr.length; f++)
				{
					
					var listViewItem = createDiv('', 'listViewItem clearfix');
					
					var listViewPersonName = createDiv('', 'personName');
					var listViewPersonNameTxt = d.createElement('span');
					listViewPersonNameTxt.innerHTML = arr[f].empName;
					var listViewPersonNameLink = createA('javascript:;', '', 'Find out more', arr[f].id);
					
					listViewPersonName.appendChild(listViewPersonNameTxt);
					listViewPersonName.appendChild(listViewPersonNameLink);
					
					var listViewPersonTitle = createDiv('', 'personDescription');
					var listViewPersonTitleMain = d.createElement('span');
					listViewPersonTitleMain.innerHTML = arr[f].empTitle;
					
					
					listViewPersonTitle.appendChild(listViewPersonTitleMain);
					listViewPersonTitle.innerHTML += arr[f].empDepartment;
					
					listViewItem.appendChild(listViewPersonName);
					listViewItem.appendChild(listViewPersonTitle);
					
					d.getElementById('teamLogoContainer').appendChild(listViewItem);
				}
			}, defaultTimeout);
					
			setTimeout(function() {			
				ourTeamContainerArray = $('#teamLogoContainer .listViewItem .personName a');
									  
				for(var g=0; g<ourTeamContainerArray.length; g++)
				{
					ourTeamContainerArray[g].className += ' fadeIn';
					initOverlay(arr);
				}
				initIPadTeamListHover();			
			}, defaultTimeout+100);	
		}else{
			setTimeout(function() {
				for(var f=0; f<arr.length; f++)
				{
					var itemDiv = createDiv('', 'personItem');
					itemDiv.id = arr[f].id;
					var itemDivHover = createDiv('', 'showMoveDiv');
					itemDivHover.innerHTML = "<div>Show more</div>";
					
					var img = createImg('../images/ourTeam/'+arr[f].empName.toLowerCase().replace(/['"]/g,'')+'.png', ' ', '', '', '', '', imgClass);
					itemDiv.appendChild(itemDivHover);
					itemDiv.appendChild(img);
					
					d.getElementById('teamLogoContainer').appendChild(itemDiv);
				}
			}, defaultTimeout);
					
			setTimeout(function() {			
				for(var g=0; g<ourTeamContainerArray.length; g++)
				{
					ourTeamContainerArray[g].className += ' fadeIn';
					initOverlay(arr);
				}}, defaultTimeout+100);	
		}
	}
	
	function initIPadTeamListHover()
	{
		if(isiPad){
			$('.listViewItem').click(function(){
				$('.listViewItem').each(function(){
					$(this).removeClass('onActive');
				})
				$(this).addClass('onActive');
			})
		}		
	}
	
	function alphabeticalPersonName(a, b)
	{
		 var A = a.empName;
		 var B = b.empName;
		  
		 A = A.toLowerCase();
		 B = B.toLowerCase();
		  
		 if (A < B) return -1;
		 if (A > B) return 1;
		 return 0;
	}

	//old code on 9 Apr 2014
	/*Array.prototype.workCatFilter = function(a, searchStr) {
	  var returnArray = false;
	  for (i=0; i<this.length; i++) {
			if(include(this[i].workCat,searchStr)) {
				//if(this[i].workCat.toLowerCase() == searchStr.toLowerCase()) {
			  if (!returnArray) { returnArray = [] }
			  returnArray.push(a[i]);
			}
		}
	  return returnArray;
	}
	
	Array.prototype.locationFilter = function(a, searchStr) {
	  var returnArray = false;
	  for (i=0; i<this.length; i++) {
			if(include(this[i].country,searchStr)) {
			  if (!returnArray) { returnArray = [] }
			  returnArray.push(a[i]);
			}
		}
	  return returnArray;
	}
	*/
	
	//new code on 9 Apr 2014
	Array.prototype.workCatFilter = function(a, workCatStr, filterOption) {
	  var returnArray = false;
	  if (!returnArray) { returnArray = [] }
	  if(filterOption == null){ filterOption = 0 }
	  //console.log('WorkCatFilter:'+currentWorkCat+','+currentLocation)
	  if(!filterOption){
		  for (i=0; i<this.length; i++) {
			  if(currentWorkCat != null){
				  for(j=0; j<this[i].workCat.length; j++){
					if(this[i].workCat[j].cat == workCatStr){
						if(returnArray.length == 0){
							if(currentLocation != null  && this[i].workCat[j].locale == currentLocation){
								returnArray.push(a[i]);
							}else if(currentLocation == null)
								returnArray.push(a[i]);
						}else{
							var checkItemExist = false;
							for(k=0; k<returnArray.length; k++){
								if(this[i].id == returnArray[k].id){
									checkItemExist = true;
								}
							}
							if(!checkItemExist){
								if(currentLocation != null  && this[i].workCat[j].locale == currentLocation){
									returnArray.push(a[i]);
								}else if(currentLocation == null)
									returnArray.push(a[i]);
							}
						}
					}
				  }
			  }else{
				returnArray.push(a[i]);  
			  }
		  }
	  }else{
		  //console.log('workCatfilter'+workCatStr)
		  for (i=0; i<this.length; i++) {
			  for(j=0; j<this[i].workCat.length; j++){
				if(this[i].workCat[j].cat == workCatStr) {
					if(currentLocation != null  && this[i].workCat[j].locale == currentLocation){
					  //console.log('1:'+this[i].workCat[j].cat+','+workCatStr);
					  if (!returnArray) { returnArray = [] }
					  returnArray.push(a[i]);
					}
				}
			  }
		  }
	  }
	  //console.log(returnArray.length);
	  return returnArray;
	}
	
	//new code on 9 Apr 2014
	Array.prototype.locationFilter = function(a, locationStr, workCatStr, filterOption) {
	  var returnArray = false;
	  if (!returnArray) { returnArray = [] }
	  if(filterOption == null){ filterOption = 0 }
  	  //console.log('locationFilter:'+currentWorkCat+','+currentLocation)
  	  if(!filterOption){
		  for (i=0; i<this.length; i++) {
			  if(currentLocation != null){
				  for(j=0; j<this[i].workCat.length; j++){
					if(this[i].workCat[j].locale == locationStr) {
						if(returnArray.length == 0){
							if(workCatStr != null  && this[i].workCat[j].cat == workCatStr){
								returnArray.push(a[i]);
							}else if(workCatStr == null)
								returnArray.push(a[i]);
						}else{
							var checkItemExist = false;
							for(k=0; k<returnArray.length; k++){
								if(this[i].id == returnArray[k].id){
									checkItemExist = true;
								}
							}
							if(!checkItemExist){
								if(workCatStr != null  && this[i].workCat[j].cat == workCatStr){
									returnArray.push(a[i]);
								}else if(workCatStr == null)
									returnArray.push(a[i]);
							}
						}
					}
				  }
			  }else{
				  returnArray.push(a[i]);
			  }
		  }
	  }else{
		  for (i=0; i<this.length; i++) {
			  for(j=0; j<this[i].workCat.length; j++){
				if(this[i].workCat[j].locale == locationStr) {
					if(currentWorkCat != null  && this[i].workCat[j].cat == currentWorkCat){
					  //console.log('1:'+this[i].workCat[j].locale+','+locationStr);
					  if (!returnArray) { returnArray = [] }
					  returnArray.push(a[i]);
					}
				}
			  }
		 }
	  }
	  return returnArray;
	}
}

function initCaseStudies()
{
	var caseImgContainer = d.getElementById('caseImgContainer');
	var allDivArray = new Array();
	var totalWidth = 0;
	var startupLeft = 0;
	var imgContainerValue = 0;
	var currentItem = -1;
	
	for(var i=0; i<caseImgArray.length; i++)
	{
		var div = createDiv('', 'imgItem');
		var overlay = createDiv('', 'imgItemOpacity');
		var img = createImg(path+caseImgArray[i].src);
		
		totalWidth += caseImgArray[i].w;
		
		div.appendChild(overlay);
		div.appendChild(img);
		
		div.num = i;
		div.onclick = function()
		{
			initCenter(false, this.num);
		}
		
		allDivArray.push(div);
	}

	initCenter(true);
	appendImgDiv(allDivArray);
	caseImgContainer.style.width = totalWidth + 'px';
	
	function initCenter(starting, imgIndex)
	{
		if(starting)
		{
			var initWidth = 0;
			var numOfInit = 0;
			
			for(var j=0; j<allDivArray.length; j++)
			{
				initWidth += caseImgArray[j].w;
				numOfInit = j;
				if(initWidth > 880)
					break;
			}
			var index = Math.floor((numOfInit+1)/2);
			caseImgContainer.style.left = -(880-caseImgArray[index].w)/2+'px';
			getElementsByClassName(allDivArray[index], 'imgItemOpacity')[0].style.opacity = 0;	
			currentItem = index;
		}else{
			alert(caseImgContainer.style.left);
			for(var k=0; k<imgIndex; k++)
			{
				caseImgContainer.style.left = -(880-caseImgArray[imgIndex].w)/2+'px';
			}
			alert(caseImgContainer.style.left);
			getElementsByClassName(allDivArray[imgIndex], 'imgItemOpacity')[0].style.opacity = 0;	
			currentItem = imgIndex;
		}
	}
	
	function appendImgDiv(arr)
	{
		for(var i=0; i<arr.length; i++)
		{
			caseImgContainer.appendChild(arr[i]);
		}
	}
	
	function removeImgDiv(div)
	{
		var temp = div;
		caseImgContainer.removeChild(div);
		caseImgContainer.appendChild(temp);
	}
}

function initCityBrief(){
	if(!d.getElementById('briefMainContentContainer')) return;
	if(!d.getElementById('btn_brief_left')) return;
	if(!d.getElementById('btn_brief_right')) return;
	
	var currentCityBrief = 0;
	var currentCityBriefNum = 0;
	
	checkArrow();
	
	$(".briefMainContentInnerWraper").css("width", $(".briefMainContentInnerWraper .briefMainContentItem").size()*581+'px');
	$(".briefMainContentOutterWraper").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			
			if(direction == 'left')
			{
				if(currentCityBrief > ($(".briefMainContentInnerWraper .briefMainContentItem").size()-1)*-1*581)
				{
					currentCityBrief = currentCityBrief-581;
					currentCityBriefNum++;
					$('.briefMainContentInnerWraper').animate({"left":currentCityBrief+'px'}, 450);
					setActive(currentCityBriefNum);
				}
			}else if(direction == 'right'){
				if(currentCityBrief < 0)
				{
					currentCityBrief = currentCityBrief+581;
					currentCityBriefNum--;
					$('.briefMainContentInnerWraper').animate({"left":currentCityBrief+'px'}, 450);
					setActive(currentCityBriefNum);
				}
			}
			checkArrow();
		},threshold:0});
	
	$('#btn_brief_right').click(function(){
		if(currentCityBrief > ($(".briefMainContentInnerWraper .briefMainContentItem").size()-1)*-1*581)
		{
			currentCityBrief = currentCityBrief-581;
			currentCityBriefNum++;
			$('.briefMainContentInnerWraper').animate({"left":currentCityBrief+'px'}, 450);
			setActive(currentCityBriefNum);
			checkArrow();
		}
	})
	
	$('#btn_brief_left').click(function(){
		if(currentCityBrief < 0)
		{
			currentCityBrief = currentCityBrief+581;
			currentCityBriefNum--;
			$('.briefMainContentInnerWraper').animate({"left":currentCityBrief+'px'}, 450);
			setActive(currentCityBriefNum);
		}
		checkArrow();
	})
	
	$('.briefMainContentControl a').each(function(){
		$(this).click(function(){
			//$('.briefMainContentControl a').index($(this))
			if(currentCityBriefNum == $('.briefMainContentControl a').index($(this)))
				return;
			else if(currentCityBriefNum > $('.briefMainContentControl a').index($(this))){
				
				currentCityBrief = currentCityBrief+581*(currentCityBriefNum-$('.briefMainContentControl a').index($(this)));
				currentCityBriefNum = $('.briefMainContentControl a').index($(this));
				$('.briefMainContentInnerWraper').animate({"left":currentCityBrief+'px'}, 450);
				setActive($('.briefMainContentControl a').index($(this)));
				checkArrow();
			}else if(currentCityBriefNum < $('.briefMainContentControl a').index($(this))){
				
				currentCityBrief = currentCityBrief-581*($('.briefMainContentControl a').index($(this))-currentCityBriefNum);
				currentCityBriefNum = $('.briefMainContentControl a').index($(this));
				$('.briefMainContentInnerWraper').animate({"left":currentCityBrief+'px'}, 450);
				setActive($('.briefMainContentControl a').index($(this)));
				checkArrow();
			}
		})
	})
	
	function checkArrow()
	{
		if($('.briefMainContentControl a').length==1 || $('.briefMainContentControl a').length==0){
			$('#btn_brief_left').css('display', 'none');
			$('#btn_brief_right').css('display', 'none');
		}else if(currentCityBriefNum == 0){
			$('#btn_brief_left').css('display', 'none');
			$('#btn_brief_right').css('display', 'block');
		}else if(currentCityBriefNum == $('.briefMainContentControl a').length-1){
			$('#btn_brief_left').css('display', 'block');
			$('#btn_brief_right').css('display', 'none');
		}else{
			$('#btn_brief_left').css('display', 'block');
			$('#btn_brief_right').css('display', 'block');
		}
	}
	
	function setActive(num)
	{
		$('.briefMainContentControl a').each(function(){
			$(this).removeClass("active");
		});
		$('.briefMainContentControl a').eq(num).addClass('active');
	}
	$('.briefMainContentControl a').eq(0).addClass('active');
}

function initWorkBookDropDown()
{
	if(!d.getElementById('workBookDropdown')) return;
	
	$('.dropdownHead').toggle(
		function(){
			$('#workBookDropdown').height(569);
			$('#workBookDropdown .dropdownHead').addClass('active');
			$('#workBookDropdown .dropdownList').animate({"top":56}, 450);
		},
		function(){
			$('#workBookDropdown .dropdownList').animate({"top":-459}, 450);
			setTimeout('$("#workBookDropdown .dropdownHead").removeClass("active")', 450);
			setTimeout('$("#workBookDropdown").css("height","55px")', 450);
		}
	)
}

function initLeftNavDropDown(id, activeFlag)
{
	if(!d.getElementById(id)) return;
	$('#'+id+' .collapsibleLeftNavItemParent').toggle(
		function(){
			$('#'+id+' .maskWraper').animate({'height':$('#'+id+' .collapsibleLeftNavChild').height()+7}, 450);
			$(this).addClass('active');
		},
		function(){
			$('#'+id+' .maskWraper').animate({'height':0}, 450);
			$(this).removeClass('active');
		}
	)
	
	if(activeFlag)
	{
		$('#'+id+' .collapsibleLeftNavItemParent').click();	
		$('#'+id+' .collapsibleLeftNavItemParent').css('background-color','#000');
		$('#'+id+' .collapsibleLeftNavItemParent').css('color','#fff');
		 $('#'+id+' .collapsibleLeftNavItemParent').css('font-weight','bold');
	}
}

function initIntroPopup()
{
	if(!d.getElementById('introCat')) return;
	if(!d.getElementById('ourTeamOverlay')) return;
	if(!d.getElementById('closeBtn')) return;	
	
	$('#introCat div').each(function(){
			$(this).css('cursor','pointer');
		});
	
	$('#introCat div').click(function(){
		$('#ourTeamOverlay').css('display','block');
		$('.introPopup').each(function(){
			$(this).css('display','none');
		});
		$('.introPopup').eq($(this).index()).css('display','block');
	});
	
	$('#closeBtn').click(function(){
		$('#ourTeamOverlay').css('display','none');
	});
	
	$('#ourTeamOverlay').click(function(e){
		if($(e.target).is('a')){
			return;
		}else{
			$('#ourTeamOverlay').css('display','none');
		}
	 });
}

/*function initContactPopup()
{
	if(!d.getElementById('btn_contact')) return;
	if(!d.getElementById('contactOverlay')) return;
	//if(!d.getElementById('contactCloseBtn')) return;	
	
	$('#btn_contact').click(function(){
		$('#contactOverlay').css('display','block');
	});
	
	$('#contactOverlay .closeBtn').click(function(){
		$('#contactOverlay').css('display','none');
	});
}*/

function initWorkflow(){
	if(!d.getElementById('workflowLineContainer')) return;
	
	var dragFactor = (parseInt($('#workflowLineContainer .workflowLine').width())-460)/parseInt($('#workflowLineContainer .workflowTrack').width());
	
	//alert(parseInt($('#workflowLineContainer .workflowDrag').css('left')));
	//alert(parseInt($('#workflowLineContainer .workflowDrag').css('left'))*dragFactor);
	
	$('#workflowLineContainer .workflowDrag').draggable({
		drag: function() {
			if(parseInt($('#workflowLineContainer .workflowDrag').css('left')) == 0)
			{
				$('#workflowLineContainer .workflowLine').css('left',0);
			}else if(parseInt($('#workflowLineContainer .workflowDrag').css('left')) > 0)
			{
				$('#workflowLineContainer .workflowLine').css('left', parseInt($('#workflowLineContainer .workflowDrag').css('left'))*dragFactor*-1);
			}else if(parseInt($('#workflowLineContainer .workflowDrag').css('left')) == 583){
				$('#workflowLineContainer .workflowLine').css('left',-1070.05);
			}
		},
		containment: "parent"
	});
	
	if(isiPad)
	{
		var speed = 50;
		var currentPos = 0;
		var dragFactor2 = dragFactor*0.3;
		$('#workflowLineContainer .workflowLine').swipe({
		swipeStatus :function(event,phase,direction,distance,duration,fingerCount){
			//$('#countsDiv').html(phase+' '+direction+' '+distance);
			if(phase =="move" && (direction=="left" || direction=="right") )
			{
				//var duration=0;
				currentPos = parseInt($('.workflowLineContainer .workflowLine').css('left'));
				if (direction == "left")
				{
					if(currentPos < -1065)
					{
						$('.workflowLineContainer .workflowLine').css('left', -1070.05);
						$('#workflowLineContainer .workflowDrag').css('left', 583);
					}else{
						$('.workflowLineContainer .workflowLine').css('left', currentPos+distance*(speed/duration)*-1);
						$('.workflowLineContainer .workflowDrag').css('left', (currentPos*-1)*dragFactor2);
					}
					
					currentPos = currentPos+distance*(speed/duration)*-1;
				}else if (direction == "right")
				{
					if(currentPos > -5)
					{
						$('.workflowLineContainer .workflowLine').css('left', 0);
						$('#workflowLineContainer .workflowDrag').css('left', 0);
					}else{
						$('.workflowLineContainer .workflowLine').css('left', currentPos+distance*(speed/duration));
						$('.workflowLineContainer .workflowDrag').css('left', (currentPos*-1)*dragFactor2);
					}
					
					currentPos = currentPos+distance*(speed/duration)*-1;
				}
			}
		},threshold:0,triggerOnTouchEnd : true,excludedElements:"button, input, select, textarea, .noSwipe"});	
	}
}

function initLeftNavPanel(teamFlag)
{
	if(!teamFlag)
	{
		$('#closeOpenBtn').toggle(
			function(){
				$('#closeOpenBtn').addClass("close");
				$('#leftNavPanel').animate({"left":0},450);
				$('#overlay').show();
			},
			function(){
				$('#closeOpenBtn').removeClass("close");
				$('#leftNavPanel').animate({"left":'-242px'},450);
				$('#overlay').hide();
			});
		
		$('#overlay').click(function(e){
			closePanel();
		 });
		 
		 $('#mainContainer .topNavContainer').click(function(e){
			closePanel();
		 });
		 
		 function closePanel()
		 {
			if($('#closeOpenBtn').attr('class') == 'close')
			{
				$('#closeOpenBtn').click();
				$('#leftNavPanel').animate({"left":'-242px'}, 450);
				$('#closeOpenBtn').removeClass("close");
				$('#overlay').hide();
			}
		 }
	}else{
		$('#closeOpenBtn').toggle(
			function(){
				$('#closeOpenBtn').addClass("close");
				$('#leftNavPanel').animate({"left":0},450);
				$('#overlay').show();
			},
			function(){
				$('#closeOpenBtn').removeClass("close");
				$('#leftNavPanel').animate({"left":'-242px'},450);
				$('#overlay').hide();
			});
		
		$('#overlay').click(function(e){
			closePanel();
		 });
		
		$('.regionOption a').click(function(e){
			closePanel();
		 });
		 
		 $('#mainContainer .topNavContainer').click(function(e){
			closePanel();
		 });
		 
		 function closePanel()
		 {
			if($('#closeOpenBtn').attr('class') == 'close')
			{
				$('#closeOpenBtn').click();
				$('#leftNavPanel').animate({"left":'-242px'}, 450);
				$('#closeOpenBtn').removeClass("close");
				$('#overlay').hide();
			}
		 }	
	}
}

function initContactPopup()
{
	var defaultResearchReportArray = new Array();
	defaultResearchReportArray = [{contactPersonImg:"images/img_sres_popup.jpg", contactPerson:"", cpTitle:"Contact the team at Strategic Corporate Services", cpDepartment:"", cpTel:"+852 2842 4410", cpEmail:"scs@savills.com"}]
	
	if($('#researchReportContactOverlay').length > 0){
		$('#topNav .btnContact').click(function(){
			setContactContent(0);
			$('#researchReportContactOverlay').css('display','block');
		});	
	}
	
	$('.closeBtn').click(function(){		
		$('#researchReportContactOverlay .imgContainer').text(" ");
		$('#researchReportContactOverlay .contactPerson').text(" ");
		$('#researchReportContactOverlay .cpTitle').text(" ");
		$('#researchReportContactOverlay .cpDepartment').text(" ");
		$('#researchReportContactOverlay .cpTel').text(" ");
		$('#researchReportContactOverlay .cpEmail').text(" ");
		$('#researchReportContactOverlay .btnEmail').attr("href" , " ");
		$('#researchReportContactOverlay').css('display','none');
	});
	
	function setContactContent(num)
	{
		var homeHref = '';
		for(var k=0; k<levelArray.length-1; k++)
		{
			homeHref += '../';
		}
		//alert(typeof pageContactArray);
		if(typeof pageContactArray == 'undefined')
		{
			var empOverlayImg = createImg(homeHref+defaultResearchReportArray[num].contactPersonImg);
			$('#researchReportContactOverlay .imgContainer').append(empOverlayImg);
			$('#researchReportContactOverlay .contactPerson').text(defaultResearchReportArray[num].contactPerson);
			$('#researchReportContactOverlay .cpTitle').text(defaultResearchReportArray[num].cpTitle);
			$('#researchReportContactOverlay .cpDepartment').text(defaultResearchReportArray[num].cpDepartment);
			$('#researchReportContactOverlay .cpTel').text(defaultResearchReportArray[num].cpTel);
			$('#researchReportContactOverlay .cpEmail').text(defaultResearchReportArray[num].cpEmail);
			$('#researchReportContactOverlay .btnEmail').attr("href" , 'mailto:'+defaultResearchReportArray[num].cpEmail);
		}else{
			var empOverlayImg = createImg(homeHref+pageContactArray[num].contactPersonImg);
			$('#researchReportContactOverlay .imgContainer').append(empOverlayImg);
			$('#researchReportContactOverlay .contactPerson').text(pageContactArray[num].contactPerson);
			$('#researchReportContactOverlay .cpTitle').text(pageContactArray[num].cpTitle);
			$('#researchReportContactOverlay .cpDepartment').text(pageContactArray[num].cpDepartment);
			$('#researchReportContactOverlay .cpTel').text(pageContactArray[num].cpTel);
			$('#researchReportContactOverlay .cpEmail').text(pageContactArray[num].cpEmail);
			$('#researchReportContactOverlay .btnEmail').attr("href" , 'mailto:'+pageContactArray[num].cpEmail);	
		}
	}
	
	$('#researchReportContactOverlay').click(function(e){
		if($(e.target).is('a') || $(e.target).is('#researchReportContactOverlayContent') || $(e.target).is($('#researchReportContactOverlayContent').find("*"))){
			return;
		}else{
			resetOverlay();
		}
	 });
	
	function resetOverlay(flag)
	{
		$('#researchReportContactOverlay .imgContainer').text(" ");
		$('#researchReportContactOverlay .contactPerson').text(" ");
		$('#researchReportContactOverlay .cpTitle').text(" ");
		$('#researchReportContactOverlay .cpDepartment').text(" ");
		$('#researchReportContactOverlay .cpTel').text(" ");
		$('#researchReportContactOverlay .cpEmail').text(" ");
		$('#researchReportContactOverlay .btnEmail').attr("href" , " ");
		$('#researchReportContactOverlay').css('display','none');
	}
}

function initResearchReportPopup()
{
	if(!d.getElementById('coverContainer')) return;
	
	$('#regionContainer a').click(function(){
		//setContent(parseInt($(this).index()));
		//alert($(this).attr('class').replace('report-', ''));
		setContent($(this).attr('class').replace('report-', ''));
		$('#researchReportOverlay').css('display','block');
	});
	
	$('#coverContainer a').click(function(){
		//setContent(parseInt($(this).index()));
        //console.log("#coverContainer a setContent"+$(this).attr('class').replace('report-', ''))
		setContent($(this).attr('class').replace('report-', ''));
		$('#researchReportOverlay').css('display','block');
	});
	
	$('.closeBtn').click(function(){
		$('#researchReportOverlay .imgContainer').text(" ");
		$('#researchReportOverlay .pdfTitle').text(" ");
		$('#researchReportOverlay .pdfIssue').text(" ");
		/*$('#researchReportOverlay .btn_downloadPDF').attr("href" , " ");
		$('#researchReportOverlay .btn_previewPDF').attr("href" , " ");*/
		$('#researchReportOverlay .btn_viewPDF').attr("href" , " ");
		$('#researchReportOverlay .contactEmail').attr("id" , " ");
		$('#researchReportOverlay').css('display','none');
		
		$('#researchReportContactOverlay .imgContainer').text(" ");
		$('#researchReportContactOverlay .contactPerson').text(" ");
		$('#researchReportContactOverlay .cpTitle').text(" ");
		$('#researchReportContactOverlay .cpDepartment').text(" ");
		$('#researchReportContactOverlay .cpTel').text(" ");
		$('#researchReportContactOverlay .cpEmail').text(" ");
		$('#researchReportContactOverlay .btnEmail').attr("href" , " ");
		$('#researchReportContactOverlay').css('display','none');
	});
	
	$('#researchReportOverlay .contactEmail').click(function(){
		//researchReportContactOverlay
		setContactContent(parseInt($(this).attr('id')));
		$('#researchReportOverlay').css('display','none');
		resetOverlay(1);
		$('#researchReportContactOverlay').css('display','block');
	});
		
	function setContent(num)
	{
        //console.log("setContent("+num+")");
		var empOverlayImg = createImg(researchReportArray[num].thumb);
		$(empOverlayImg).css({'width':115, 'height':'auto'})
		$('#researchReportOverlay .imgContainer').append(empOverlayImg);
		$('#researchReportOverlay .pdfTitle').text(researchReportArray[num].reportTitle);
		$('#researchReportOverlay .pdfIssue').text(researchReportArray[num].reportIssue);
		/*$('#researchReportOverlay .btn_downloadPDF').attr("href" , "javascript:;");
        $('#researchReportOverlay .btn_downloadPDF').attr("onclick" , "window.open('"+researchReportArray[num].pdfLink+"', '_system');");
		$('#researchReportOverlay .btn_previewPDF').attr("href" , "javascript:;");
        $('#researchReportOverlay .btn_previewPDF').attr("onclick" , "openBrowser('"+researchReportArray[num].pdfLink+"');");*/
        $('#researchReportOverlay .btn_viewPDF').attr("href" , "javascript:;");
        $('#researchReportOverlay .btn_viewPDF').attr("onclick" , "openBrowser('"+researchReportArray[num].pdfLink+"','_blank','location=no,enableViewportScale=yes');");
		$('#researchReportOverlay .contactEmail').attr("id" , num);	
	}
	
	function setContactContent(num)
	{
		var empOverlayImg = createImg(researchReportArray[num].contactPersonImg);
		$('#researchReportContactOverlay .imgContainer').append(empOverlayImg);
		$('#researchReportContactOverlay .contactPerson').text(researchReportArray[num].contactPerson);
		$('#researchReportContactOverlay .cpTitle').text(researchReportArray[num].cpTitle);
		$('#researchReportContactOverlay .cpDepartment').text(researchReportArray[num].cpDepartment);
		$('#researchReportContactOverlay .cpTel').text(researchReportArray[num].cpTel);
		$('#researchReportContactOverlay .cpEmail').text(researchReportArray[num].cpEmail);
		$('#researchReportContactOverlay .btnEmail').attr("href" , 'mailto:'+researchReportArray[num].cpEmail);	
	}
	
	$('#researchReportOverlay').click(function(e){
		if($(e.target).is('a') || $(e.target).is('#researchReportOverlayContent') || $(e.target).is($('#researchReportOverlayContent').find("*"))){
			return;
		}else{
			resetOverlay(1);
		}
	 });
	
	$('#researchReportContactOverlay').click(function(e){
		if($(e.target).is('a')){
			return;
		}else{
			resetOverlay(2);
		}
	 });
	
	function resetOverlay(flag)
	{
		if(flag == 1)
		{
			$('#researchReportOverlay .imgContainer').text(" ");
			$('#researchReportOverlay .pdfTitle').text(" ");
			$('#researchReportOverlay .pdfIssue').text(" ");
			/*$('#researchReportOverlay .btn_downloadPDF').attr("href" , " ");
			$('#researchReportOverlay .btn_previewPDF').attr("href" , " ");*/
			$('#researchReportOverlay .btn_viewPDF').attr("href" , " ");
			$('#researchReportOverlay .contactEmail').attr("id" , " ");	
			$('#researchReportOverlay').css('display','none');	
		}
		
		if(flag == 2){
			$('#researchReportContactOverlay .imgContainer').text(" ");
			$('#researchReportContactOverlay .contactPerson').text(" ");
			$('#researchReportContactOverlay .cpTitle').text(" ");
			$('#researchReportContactOverlay .cpDepartment').text(" ");
			$('#researchReportContactOverlay .cpTel').text(" ");
			$('#researchReportContactOverlay .cpEmail').text(" ");
			$('#researchReportContactOverlay .btnEmail').attr("href" , " ");
			$('#researchReportContactOverlay').css('display','none');
		}
	}
}

function initResearchInnerpageContact()
{
	$('.reportContact').click(function(){
		//researchReportContactOverlay
		resetOverlay();
		setContactContent(parseInt($(this).attr('id')));
		
		$('#researchReportContactOverlay').css('display','block');
	})
	
	function setContactContent(num)
	{
		var empOverlayImg = createImg(researchReportArray[num].contactPersonImg);
		$('#researchReportContactOverlay .imgContainer').append(empOverlayImg);
		$('#researchReportContactOverlay .contactPerson').text(researchReportArray[num].contactPerson);
		$('#researchReportContactOverlay .cpTitle').text(researchReportArray[num].cpTitle);
		$('#researchReportContactOverlay .cpDepartment').text(researchReportArray[num].cpDepartment);
		$('#researchReportContactOverlay .cpTel').text(researchReportArray[num].cpTel);
		$('#researchReportContactOverlay .cpEmail').text(researchReportArray[num].cpEmail);
		$('#researchReportContactOverlay .btnEmail').attr("href" , 'mailto:'+researchReportArray[num].cpEmail);	
	}
	
	$('#researchReportContactOverlay').click(function(e){
		if($(e.target).is('a')){
			return;
		}else{
			resetOverlay();
		}
	 });
	
	function resetOverlay()
	{
		$('#researchReportContactOverlay .imgContainer').text(" ");
		$('#researchReportContactOverlay .contactPerson').text(" ");
		$('#researchReportContactOverlay .cpTitle').text(" ");
		$('#researchReportContactOverlay .cpDepartment').text(" ");
		$('#researchReportContactOverlay .cpTel').text(" ");
		$('#researchReportContactOverlay .cpEmail').text(" ");
		$('#researchReportContactOverlay .btnEmail').attr("href" , " ");
		$('#researchReportContactOverlay').css('display','none');
	}
}

function initLeadership()
{

		ourTeamArray.sort(function (a, b) {
		    if (parseInt(a.id) > parseInt(b.id))
		      return 1;
		    if (parseInt(a.id) < parseInt(b.id))
		      return -1;
		    return 0;
		});

		//ourTeamContainerArray = d.getElementById('teamLogoContainer').getElementsByTagName('IMG');
		ourTeamContainerArray = getElementsByClassName(d.getElementById('teamLogoContainer'), 'leadershipItem', 1);
		var ourTeamOverlay = d.getElementById('ourTeamOverlay');
		var closeBtn = d.getElementById('closeBtn');
		var imgContainer = d.getElementById('imgContainer');
		var empNameDiv = d.getElementById('empName');
		var empTitleDiv = d.getElementById('empTitle');
		var telNoDiv = d.getElementById('telNo');
		var emailDiv = d.getElementById('email');
		var locationDiv = d.getElementById('location');
		var experienceDiv = d.getElementById('experience');
		var languageDiv = d.getElementById('language');
		var expertiseDiv = d.getElementById('expertise');
		
		for(var n=0; n<ourTeamContainerArray.length; n++)
		{
			ourTeamContainerArray[n].num = n;
			ourTeamContainerArray[n].onclick = function()
			{
				setContent(this.id);
				ourTeamOverlay.style.display = 'block';
			}
		}
		
		/*$('#teamLogoContainer .leadershipItem').click(function(){
			alert($(this).id);
			setContent($(this).id);
			ourTeamOverlay.style.display = 'block';
		})
		*/
		closeBtn.onclick = function()
		{
			ourTeamOverlay.style.display = 'none';
			imgContainer.innerHTML = '';
			empNameDiv.innerHTML = '';
			empTitleDiv.innerHTML = '';
			telNoDiv.innerHTML = '';
			emailDiv.innerHTML = '';
			locationDiv.innerHTML = '';
			experienceDiv.innerHTML = '';
			languageDiv.innerHTML = '';
			expertiseDiv.innerHTML = '';
		}
		
		function setContent(num)
		{
			var homeHref = '';
			for(var k=0; k<levelArray.length-1; k++)
			{
				homeHref += '../';
			}
			var empOverlayImg = createImg(homeHref+'images/ourTeam/'+ourTeamArray[num].empName.toLowerCase().replace(/['"]/g,'')+'_overlay.png');
			imgContainer.appendChild(empOverlayImg);
			
			empNameDiv.innerHTML = ourTeamArray[num].empName;
			empTitleDiv.innerHTML = ourTeamArray[num].empTitle;
			telNoDiv.innerHTML = ourTeamArray[num].telNo;
			emailDiv.innerHTML = ourTeamArray[num].email;
			locationDiv.innerHTML = 'Located in '+ourTeamArray[num].location;
			experienceDiv.innerHTML = ourTeamArray[num].experience+' years in Real Estate Industry';
			languageDiv.innerHTML = 'Speaks ' + ourTeamArray[num].languages;
			expertiseDiv.innerHTML = 'Expertise: '+ourTeamArray[num].expertise;
		}
		
		$('#ourTeamOverlay').click(function(e){
		if($(e.target).is('a')){
			return;
		}else{
			ourTeamOverlay.style.display = 'none';
			imgContainer.innerHTML = '';
			empNameDiv.innerHTML = '';
			empTitleDiv.innerHTML = '';
			telNoDiv.innerHTML = '';
			emailDiv.innerHTML = '';
			locationDiv.innerHTML = '';
			experienceDiv.innerHTML = '';
			languageDiv.innerHTML = '';
			expertiseDiv.innerHTML = '';
		}
	 });
	}
function initCityMap(){
	var regionBtnArray = d.getElementById('jobNatureDiv').getElementsByTagName('A');
	var cityMapArray = d.getElementById('cityMapContainer').getElementsByTagName('IMG');
	
	for(var i=0; i<regionBtnArray.length; i++)
	{
		regionBtnArray[i].num = i;
		regionBtnArray[i].onclick = function()
		{
			$('#jobNatureDiv a').each(function(){
				$(this).removeClass('active');
			})
			
			$('#cityMapContainer img').each(function(){
				$(this).css('display','none')
			})
			
			$(this).addClass('active');
			$(cityMapArray[this.num]).css('display','block')
		}
	}
}
var currentOpenedLeftPanelDropDown = new Array();
function initLeftPanelDropDown(id)
{
	$('#'+id+' .regionDropdownHeader').toggle(
		function(){
			//$('#'+id+' .regionDropdownContent').animate({'top':42},250);
			for(var i=0; i<currentOpenedLeftPanelDropDown.length; i++)
			{
				$('#'+currentOpenedLeftPanelDropDown[i]+' .regionDropdownHeader').click();
			}
			if(id == "regionDropdown")
			{
				$('#'+id+' .regionDropdownContentMask').css('z-index',1099);
			}else
				$('#'+id+' .regionDropdownContentMask').css('z-index',1000);
			
			var dropdownContentHeight = 0;
			for(var j=0; j<$('#'+id+' .regionDropdownContent a').length; j++)
			{
				//dropdownContentHeight
				dropdownContentHeight += $('#'+id+' .regionDropdownContent a').eq(j).height()+25;
				//alert(dropdownContentHeight);
			}
			
			//$('#'+id+' .regionDropdownContentMask').animate({'height':$('#'+id+' .regionDropdownContent a').length*42},250);
			$('#'+id+' .regionDropdownContentMask').animate({'height':dropdownContentHeight},250);
			var curAngle = parseInt($('#'+id+' .dropdownArrow').getRotateAngle()) || 0;
			 $('#'+id+' .dropdownArrow').rotate({
				  angle: curAngle,
				  animateTo: curAngle + 90,
				  duration: 250
			 });
			 $('#'+id+' .dropdownArrow').css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation=1)");
			 $('#overlay').show();
			 currentOpenedLeftPanelDropDown.push(id);
		},
		function(){
			//$('#'+id+' .regionDropdownContent').animate({'top':0},250);
			$('#'+id+' .regionDropdownContentMask').animate({'height':0},250);
			var curAngle = parseInt($('#'+id+' .dropdownArrow').getRotateAngle()) || 0;
			$('#'+id+' .dropdownArrow').rotate({
				  angle: curAngle,
				  animateTo: curAngle - 90,
				  duration: 250
			 });
			$('#'+id+' .dropdownArrow').css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation=0)")
			$('#overlay').hide();
			var removeItem = id;
			 
			currentOpenedLeftPanelDropDown = jQuery.grep(currentOpenedLeftPanelDropDown, function(value) {
				return value != removeItem;
			});
		})
	
	$('#overlay').click(function(e){
		if($(e.target).is('a')){
			return;
		}else{
			$('#'+id+' .regionDropdownContentMask').animate({'height':0},250);
			var curAngle = parseInt($('#'+id+' .dropdownArrow').getRotateAngle()) || 0;
			if(curAngle != 0){
				$('#'+id+' .dropdownArrow').rotate({
				  angle: curAngle,
				  animateTo: curAngle - 90,
				  duration: 250
				});
			}
			for(var i=0; i<currentOpenedLeftPanelDropDown.length; i++)
			{
				$('#'+currentOpenedLeftPanelDropDown[i]+' .regionDropdownHeader').click();
			}
		}
	});
}

var nd = new Date();
nd.setTime(nd.getTime() + (60 * 24 * 60 * 60 * 1000));
var cdomain = (location.domain) ? location.domain : null;
var cpath = "/";

function setCookie(name, value, expires, path, domain, secure) {
    var curCookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires.toGMTString() : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "");
    d.cookie = curCookie;
}

function getCookie(name) {
    if (d.cookie.indexOf(name) < 0) {
        return null;
    } else {
        var startStr = d.cookie.indexOf(name) + name.length + 1;
        var endStr = d.cookie.indexOf(";", startStr);
        if (endStr == -1) endStr = d.cookie.length;
        return unescape(d.cookie.substring(startStr, endStr));
    }
}

function initFootprintCloseTips()
{
	if (getCookie('footprintTips') == null) {
		$('#tipsContainer').show();
	}
	
	$('#btn_close_tips').click(function(){
		$('#tipsContainer').hide();
		setCookie('footprintTips', 1, nd, cpath, cdomain);
	})
}

function initCloseTips()
{
	if (getCookie('teamTips') == null) {
		$('#tipsContainer').show();
	}
	
	$('#btn_close_tips').click(function(){
		$('#tipsContainer').hide();
		setCookie('teamTips', 1, nd, cpath, cdomain);
	})
}

function initHistoryTimeline(){
	var historyTimelineItemArray = new Array();
	//var playingMode = false;
	var animateStopFlag = false;
	var currentHistory = 0;
	var prevHistory = -1;
	var timeouts = null;
	var movementSpeed = 2250;
	
	$('#historyTimeline .clearfix').each(function(){
		historyTimelineItemArray.push($(this).offset().top-170);
	})
	
	$('#historyLeftNav a').each(function(){
		$(this).click(function(){
			prevHistory = currentHistory;
			currentHistory = $('#historyLeftNav a').index($(this));
			if($('#btn_play_pause').hasClass('active')){
				$('#btn_play_pause').removeClass('active');
				$('#btn_play_pause').click();
			}
			//playingMode = false;
			timelineMovement(this);
		})
	});
	
	$(".historyTimelineWrapper").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			if(direction == 'up')
			{
				if(currentHistory < historyTimelineItemArray.length-1)
				{
					if($('#btn_play_pause').hasClass('active')){
						$('#btn_play_pause').removeClass('active');
						$('#btn_play_pause').click();
					}
					prevHistory = currentHistory;
					currentHistory++;
					timelineMovement($('#historyLeftNav a').eq(currentHistory));
				}
			}else if(direction == 'down'){
				if(currentHistory > 0)
				{
					if($('#btn_play_pause').hasClass('active')){
						$('#btn_play_pause').removeClass('active');
						$('#btn_play_pause').click();
					}
					prevHistory = currentHistory;
					currentHistory--;
					timelineMovement($('#historyLeftNav a').eq(currentHistory));
				}
			}
	},threshold:100});
	
	$('#btn_play_pause').toggle(
		function(){
			$(this).addClass('active');
			//var movementSpeed = ((parseInt($('#historyTimeline').css('top'))-(historyTimelineItemArray[0]*-1)));
			//fif(movementSpeed < 0)	movementSpeed = movementSpeed*-1;
			
			animateStopFlag = false;
			prevHistory = currentHistory;
			if(currentHistory == historyTimelineItemArray.length)	
			{
				currentHistory = 0;
				$('#historyTimeline').animate({'top':historyTimelineItemArray[currentHistory]*-1},movementSpeed);
				setTimeout(startAnimation,movementSpeed);
			}else{
				$('#historyTimeline').animate({'top':historyTimelineItemArray[currentHistory]*-1},movementSpeed);
				startAnimation();
			}
			//startAnimation();
		},
		function(){
			$(this).removeClass('active');
			clearTimeout(timeouts);
			animateStopFlag = true;
		}
	)
	
	function timelineMovement(obj)
	{
		if(prevHistory > currentHistory){
			$('#historyTimeline').animate({'top':historyTimelineItemArray[$(obj).index()]*-1},movementSpeed);
		}else{
			$('#historyTimeline').animate({'top':historyTimelineItemArray[$(obj).index()]*-1},movementSpeed+250);
		}
		
		$('#historyLeftNav a').each(function(){
			$(this).removeClass('active'); 
		})
		$(obj).addClass('active');	
	}
	
	function startAnimation()
	{
		if(!animateStopFlag)
		{
			timeouts = setTimeout(startAnimation,5000);
			//timeLineContentArray[currentHistory].className = 'fade-out';
			
			timelineMovement($('#historyLeftNav a').eq(currentHistory));
			currentHistory++;
		}
		if(currentHistory == historyTimelineItemArray.length)
		{
			//clearTimeout(timeouts);
			$('#btn_play_pause').removeClass('active');
			$('#btn_play_pause').click();
			//animateStopFlag = true;
			
		}
	}	
}

function swipeToChangePage(prevPage, nextPage)
{	
	return;	
	$(".ourServiceContainer").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			if(direction == 'left')
			{
				if(nextPage == '') return;
				window.location.href = nextPage;
			}else if(direction == 'right'){
				if(prevPage == '') return;
				window.location.href = prevPage;


			}
		},threshold:200});
}

function workbookdragPanelInit()
{
	if($('#'+levelArray[levelArray.length-1]).length > 0)
	{
		$('#'+levelArray[levelArray.length-1]).addClass('active');
		var currentWorkBook = $('.workBookListContainer .workBookListItem').index($('#'+levelArray[levelArray.length-1]))
		if(currentWorkBook <= 8)
			$('.workBookListContainer').css({'left':-190*currentWorkBook},200);
		else if(currentWorkBook == 10)
			$('.workBookListContainer').css({'left':-1521},200);
		else
			$('.workBookListContainer').css({'left':-1521},200);
	}	
	
	if(isiPad)
	{
		var speed = 40;
		var currentPos = 0;
		$(".workBookListWrapper").swipe({
		swipeStatus :function(event,phase,direction,distance,duration,fingerCount){
			//$('#countsDiv').html(phase+' '+direction+' '+distance);
			if(phase =="move" && (direction=="left" || direction=="right") )
			{
				//var duration=0;
				currentPos = parseInt($('.workBookListWrapper .workBookListContainer').css('left'));
				if (direction == "left")
				{
					if(currentPos < -1515)
					{
						$('.workBookListWrapper .workBookListContainer').css('left', -1522);
					}else{
						$('.workBookListWrapper .workBookListContainer').css('left', currentPos+distance*(speed/duration)*-1);
					}
					
					currentPos = currentPos+distance*(speed/duration)*-1;
				}else if (direction == "right")
				{
					if(currentPos > -5)
					{
						$('.workBookListWrapper .workBookListContainer').css('left', 0);
					}else{
						$('.workBookListWrapper .workBookListContainer').css('left', currentPos+distance*(speed/duration));
					}
					
					currentPos = currentPos+distance*(speed/duration)*-1;
				}
			}else if ( phase == "cancel")
			{
				if(parseInt($('.workBookListWrapper .workBookListContainer').css('left')) > 0 )
				{
					$('.workBookListWrapper .workBookListContainer').animate({'left':0}, 50);
				}else if(parseInt($('.workBookListWrapper .workBookListContainer').css('left')) < -1521 )
				{
					$('.workBookListWrapper .workBookListContainer').animate({'left':-1521}, 50)
				}
				
			}
			else if ( phase =="end" )
			{
				if(parseInt($('.workBookListWrapper .workBookListContainer').css('left')) > 0 )
				{
					$('.workBookListWrapper .workBookListContainer').animate({'left':0}, 50);
				}else if(parseInt($('.workBookListWrapper .workBookListContainer').css('left')) < -1521 )
				{
					$('.workBookListWrapper .workBookListContainer').animate({'left':-1521}, 50)
				}
			}
		},threshold:0,triggerOnTouchEnd : true,excludedElements:"button, input, select, textarea, .noSwipe"});
		
		
		
	}else{
		$('.workBookListWrapper').mouseover(function(){
			if(parseInt($('.workBookListContainer').css('left')) >-5)
			{
				$('.workBookBtnPrev').css('display', 'none');
			}else
				$('.workBookBtnPrev').css('display', 'block');
			
			if(parseInt($('.workBookListContainer').css('left')) <= -1520)
			{
				$('.workBookBtnNext').css('display', 'none');
			}else
				$('.workBookBtnNext').css('display', 'block');
		})
		
		$('.workBookListWrapper').mouseout(function(){
			$('.workBookBtnPrev').css('display', 'none');
			$('.workBookBtnNext').css('display', 'none');
		})
		
		$('.workBookListWrapper	.workBookBtnPrev').click(function(){
			if(parseInt($('.workBookListContainer').css('left')) < 0)
			{
				var nextLeft = parseInt($('.workBookListContainer').css('left'))+190;
				if(nextLeft >= 0){
					$(this).css('visibility', 'hidden');
					nextLeft = 0;
				}
				$('.workBookBtnNext').css('visibility', 'visible');
				$('.workBookListContainer').animate({'left':nextLeft},200);
				$('.workBookBtnNext').css('display', 'block');
			}else{
				return;
			}
		})
		
		$('.workBookListWrapper	.workBookBtnNext').click(function(){
			if(parseInt($('.workBookListContainer').css('left')) > -1522)
			{
				var nextLeft = parseInt($('.workBookListContainer').css('left'))-190;
				if(nextLeft <= -1520){
					$(this).css('visibility', 'hidden');
					nextLeft = -1520;
				}
				$('.workBookBtnPrev').css('visibility', 'visible');
				$('.workBookListContainer').animate({'left':nextLeft},200);
				$('.workBookBtnPrev').css('display', 'block');
			}
		})
		
	}
}

function initPMIntroduction()
{
	$('.introButtonContainer .pm_intro_item').each(function(){
		$(this).click(function(){
			if($(this).hasClass('active')) return;
			resetPMIntro();
			$(this).addClass('active');
			if($('.introButtonContainer .pm_intro_item').index($(this)) == 0)
				$(this).animate({'margin':'0 95px 0 50px'},300)
			else if($('.introButtonContainer .pm_intro_item').index($(this)) == 3)
				$(this).animate({'margin':'0 0 0 95px'},300)
			else
				$(this).animate({'margin':'0 80px'},300)
				
			$('.introTabContentItem').eq($('.introButtonContainer .pm_intro_item').index($(this))).fadeIn();
		})
	})
	
	function resetPMIntro()
	{
		$('.introButtonContainer .active').each(function(){
			$(this).removeClass('active');
			/*if($('.introButtonContainer .pm_intro_item').index($(this)) == 0)
				$(this).animate({'margin':'0 15px 0 0'},300)
			else if($('.introButtonContainer .pm_intro_item').index($(this)) == 3)
				$(this).animate({'margin':'0 0 0 15px'},300)
			else*/
				$(this).animate({'margin':'0 5px'},300)
		})
		
		$('.introTabContentItem').each(function(){
			$(this).fadeOut();
		})
	}
}

function initPeoplePlacesTimeline()
{
	
	if(isiPad)
	{
		var speed = 25;
		var currentPos = 0;
		$(".peoplePlacesTimelineWrapper").swipe({
		swipeStatus :function(event,phase,direction,distance,duration,fingerCount){
			//$('#cursorPos').html(phase+' '+direction+' '+distance);
			if(phase =="move" && (direction=="left" || direction=="right") )
			{
				//var duration=0;
				currentPos = parseInt($('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left'));
				if (direction == "left")
				{
					if(currentPos < -565)
					{
						$('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left', -570);
						$('.peoplePlaceDrag').css('left', 313);
					}
					else{
						$('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left', currentPos+distance*(speed/duration)*-1);
						$('.peoplePlaceDrag').css('left', (currentPos*-1)/460*313);
					}
					
					currentPos = currentPos+distance*(speed/duration)*-1;
					
				}else if (direction == "right")
				{
					if(currentPos > -5)
					{
						$('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left', 0);
						$('.peoplePlaceDrag').css('left', 0);
					}else{
						$('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left', currentPos+distance*(speed/duration));
						$('.peoplePlaceDrag').css('left', (currentPos*-1)/460*313);
					}
						
					currentPos = currentPos+distance*(speed/duration);
				}
			}else if ( phase == "cancel")
			{
				if(parseInt($('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left')) > 0 )
				{
					$('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').animate({'left':0}, 50);
				}else if(parseInt($('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left')) < -570 )
				{
					$('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').animate({'left':-570}, 50)
				}
				
			}
			else if ( phase =="end" )
			{
				if(parseInt($('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left')) > 0 )
				{
					$('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').animate({'left':0}, 50);
				}else if(parseInt($('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left')) < -570 )
				{
					$('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').animate({'left':-570}, 50)
				}
			}
		},threshold:0,triggerOnTouchEnd : true,excludedElements:"button, input, select, textarea, .noSwipe"});
		
	}else{
		$('.peoplePlacesTimelineWrapper').mouseover(function(){
			if(parseInt($('.peoplePlacesTimelineContainer').css('left')) >-5)
			{
				$('.btnPeoplePlacePrev').css('display', 'none');
			}else
				$('.btnPeoplePlacePrev').css('display', 'block');
			
			if(parseInt($('.peoplePlacesTimelineContainer').css('left')) <= -570)
			{
				$('.btnPeoplePlaceNext').css('display', 'none');
			}else
				$('.btnPeoplePlaceNext').css('display', 'block');
		})
		
		$('.peoplePlacesTimelineWrapper').mouseout(function(){
			$('.btnPeoplePlacePrev').css('display', 'none');
			$('.btnPeoplePlaceNext').css('display', 'none');
		})
		
		$('.peoplePlacesTimelineWrapper .btnPeoplePlacePrev').click(function(){
			currentPos = parseInt($('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left'));																					 
			if(parseInt($('.peoplePlacesTimelineContainer').css('left')) < 0)
				{
					var nextLeft = parseInt($('.peoplePlacesTimelineContainer').css('left'))+190;
					if(nextLeft >= 0){
						$(this).css('visibility', 'hidden');
						nextLeft = 0;
						$('.leadershipDrag').css('left', 0);
				}
				$('.peoplePlaceDrag').css('left', (nextLeft*-1)/452*313);
				$('.btnPeoplePlaceNext').css('visibility', 'visible');
				$('.peoplePlacesTimelineContainer').animate({'left':nextLeft},200);
				$('.btnPeoplePlaceNext').css('display', 'block');
			}else{
				return;
			}
		})
		
		$('.peoplePlacesTimelineWrapper .btnPeoplePlaceNext').click(function(){
			if(parseInt($('.peoplePlacesTimelineContainer').css('left')) > -570)
			{
				var nextLeft = parseInt($('.peoplePlacesTimelineContainer').css('left'))-190;
				if(nextLeft <= -570){
					$(this).css('visibility', 'hidden');
					nextLeft = -570;
					$('.peoplePlaceDrag').css('left', 313);
				}
				
				$('.btnPeoplePlacePrev').css('visibility', 'visible');
				$('.peoplePlacesTimelineContainer').animate({'left':nextLeft},200);
				
				//currentPos = parseInt($('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left'));
				$('.peoplePlaceDrag').css('left', (nextLeft*-1)/452*313);
				$('.btnPeoplePlacePrev').css('display', 'block');
			}
		})
		
		var dragFactor = 565/307;
	
		//alert(parseInt($('#workflowLineContainer .workflowDrag').css('left')));
		//alert(parseInt($('#workflowLineContainer .workflowDrag').css('left'))*dragFactor);
		
		$('.peoplePlaceDrag').draggable({
			drag: function() {			
				if(parseInt($('.peoplePlaceDrag').css('left')) == 0){
					$('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left', 0);
				}else	if(parseInt($('.peoplePlaceDrag').css('left')) > 0){
					$('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left', parseInt($(' .peoplePlaceDrag').css('left'))*dragFactor*-1);
				}else	if(parseInt($('.peoplePlaceDrag').css('left')) ==313){
					$('.peoplePlacesTimelineWrapper .peoplePlacesTimelineContainer').css('left', -570);
				}
				
				if(parseInt($('.peoplePlacesTimelineContainer').css('left')) >-5)
				{
					$('.btnPeoplePlacePrev').css('display', 'none');
				}else{
					$('.btnPeoplePlacePrev').css('display', 'block');
					$('.btnPeoplePlacePrev').css('visibility', 'visible');
				}
				
				if(parseInt($('.peoplePlacesTimelineContainer').css('left')) <= -570)
				{
					$('.btnPeoplePlaceNext').css('display', 'none');
				}else{
					$('.btnPeoplePlaceNext').css('display', 'block');
					$('.btnPeoplePlaceNext').css('visibility', 'visible');
				}
			},
			containment: "parent"
		});
	}
}

function initLeadershipDrag(){
	var leadershipContainerWidth = $('.leadershipContainer .largeImg').length*198+$('.leadershipContainer .smallImg').length*137+$('.leadershipContainer .leadershipItem').length*20;
	$('.leadershipContainer').css('width',leadershipContainerWidth);
	
	if(isiPad){
		var speed = 40;
		var currentPos = 0;
		$(".leadershipWrapper").swipe({
		swipeStatus :function(event,phase,direction,distance,duration,fingerCount){
			//$('#countsDiv').html(phase+' '+direction+' '+distance);
			if(phase =="move" && (direction=="left" || direction=="right") )
			{
				//var duration=0;
				currentPos = parseInt($('.leadershipWrapper .leadershipContainer').css('left'));
				if (direction == "left")
				{
					if(currentPos < -375)
					{
						$('.leadershipWrapper .leadershipContainer').css('left', -375);
						$('.leadershipDrag').css('left', 313);
					}else{
						$('.leadershipWrapper .leadershipContainer').css('left', currentPos+distance*(speed/duration)*-1);
						$('.leadershipDrag').css('left', (currentPos*-1)/452*382);
					}
					
					currentPos = currentPos+distance*(speed/duration)*-1;
				}else if (direction == "right")
				{
					if(currentPos > -5)
					{
						$('.leadershipWrapper .leadershipContainer').css('left', 0);
						$('.leadershipDrag').css('left', 0);
					}else{
						$('.leadershipWrapper .leadershipContainer').css('left', currentPos+distance*(speed/duration));
						$('.leadershipDrag').css('left', (currentPos*-1)/452*382);
					}
					
					currentPos = currentPos+distance*(speed/duration)*-1;
				}
			}else if ( phase == "cancel")
			{
				if(parseInt($('.leadershipWrapper .leadershipContainer').css('left')) > 0 )
				{
					$('.leadershipWrapper .leadershipContainer').animate({'left':0}, 50);
				}else if(parseInt($('.leadershipWrapper .leadershipContainer').css('left')) < -375 )
				{
					$('.leadershipWrapper .leadershipContainer').animate({'left':-375}, 50)
				}
				
			}
			else if ( phase =="end" )
			{
				if(parseInt($('.leadershipWrapper .leadershipContainer').css('left')) > 0 )
				{
					$('.leadershipWrapper .leadershipContainer').animate({'left':0}, 50);
				}else if(parseInt($('.leadershipWrapper .leadershipContainer').css('left')) < -375 )
				{
					$('.leadershipWrapper .leadershipContainer').animate({'left':-375}, 50)
				}
			}
		},threshold:0,triggerOnTouchEnd : true,excludedElements:"button, input, select, textarea, .noSwipe"});
	}else{
		$('.leadershipWrapper').mouseover(function(){
			if(parseInt($('.leadershipContainer').css('left')) >-5)
			{
				$('.btnLeadershipPrev').css('display', 'none');
			}else
				$('.btnLeadershipPrev').css('display', 'block');
			
			if(parseInt($('.leadershipContainer').css('left')) <= -375)
			{
				$('.btnLeadershipNext').css('display', 'none');
			}else
				$('.btnLeadershipNext').css('display', 'block');
		})
		
		$('.leadershipWrapper').mouseout(function(){
			$('.btnLeadershipPrev').css('display', 'none');
			$('.btnLeadershipNext').css('display', 'none');
		})
		
		$('.leadershipWrapper .btnLeadershipPrev').click(function(){
			currentPos = parseInt($('.leadershipWrapper .leadershipContainer').css('left'));																					 
			if(parseInt($('.leadershipContainer').css('left')) < 0)
				{
					var nextLeft = parseInt($('.leadershipContainer').css('left'))+190;
					if(nextLeft >= 0){
						$(this).css('visibility', 'hidden');
						nextLeft = 0;
						$('.leadershipDrag').css('left', 0);
				}
				$('.leadershipDrag').css('left', (nextLeft*-1)/452*382);
				$('.btnLeadershipNext').css('visibility', 'visible');
				$('.leadershipContainer').animate({'left':nextLeft},200);
				$('.btnLeadershipNext').css('display', 'block');
			}else{
				return;
			}
		})
		
		$('.leadershipWrapper .btnLeadershipNext').click(function(){
			if(parseInt($('.leadershipContainer').css('left')) > -375)
			{
				var nextLeft = parseInt($('.leadershipContainer').css('left'))-190;
				if(nextLeft <= -450){
					$(this).css('visibility', 'hidden');
					nextLeft = -450;
					$('.leadershipDrag').css('left', 382);
				}
				
				$('.btnLeadershipPrev').css('visibility', 'visible');
				$('.leadershipContainer').animate({'left':nextLeft},200);
				
				//currentPos = parseInt($('.leadershipWrapper .leadershipContainer').css('left'));
				$('.leadershipDrag').css('left', (nextLeft*-1)/452*382);
				$('.btnLeadershipPrev').css('display', 'block');
			}
		})
		
		var dragFactor = 363/307;
		
		$('.leadershipDrag').draggable({
			drag: function() {
				if(parseInt($('.leadershipDrag').css('left')) == 0){
					$('.leadershipWrapper .leadershipContainer').css('left', 0);
				}else	if(parseInt($('.leadershipDrag').css('left')) > 0){
					$('.leadershipWrapper .leadershipContainer').css('left', parseInt($(' .leadershipDrag').css('left'))*dragFactor*-1);
				}else	if(parseInt($('.leadershipDrag').css('left')) ==383){
					$('.leadershipWrapper .leadershipContainer').css('left', -450);
				}
				
				if(parseInt($('.leadershipContainer').css('left')) >-5)
				{
					$('.btnLeadershipPrev').css('display', 'none');
				}else{
					$('.btnLeadershipPrev').css('display', 'block');
					$('.btnLeadershipPrev').css('visibility', 'visible');
				}
				
				if(parseInt($('.leadershipContainer').css('left')) <= -450)
				{
					$('.btnLeadershipNext').css('display', 'none');
				}else{
					$('.btnLeadershipNext').css('display', 'block');
					$('.btnLeadershipNext').css('visibility', 'visible');
				}
			},
			containment: "parent"
		});
	}
}

function genTopNav(){
	if (levelArray.length == 0) getLevel();
	
	var homeHref = '';
	for(var k=0; k<levelArray.length-1; k++)
	{
		homeHref += '../';
	}
	
	var str='';
	
	str +='<div class="clearfix topNavContainer">';
	str +='<a href="' + homeHref + 'index.html"><img src="' + homeHref + 'images/logo_savills_small.png" alt="" class="logo" /></a>';
	
	str +='<div id="topNav" class="clearfix">';
	str +='<a href="#" id="who-we-are"><span>Who We Are</span></a>';
	str +='<a href="#" id="where-we-play"><span>Expertise</span></a>';
	str +='<a href="#" id="our-services"><span>Our Services</span></a>';
	str +='<a href="#" id="our-research"><span>Our Research</span></a>';
	str +='<a href="#" id="our-clients"><span>Our Clients</span></a>';
	str +='<div class="floatRight">';
	str +='<a href="#" class="btnTools"><span></span></a>';
	if(!isApp)
		str +='<a href="#" class="btnShare"><span></span></a>';
	str +='<a href="#" class="btnContact"></a>';
	str +='<a href="#" class="btnSearch"></a>';
	str +='</div>';
	str +='</div>';
	
	str +='<div id="subNavContainer">';
	
	str +='<div class="subNavItem">';
	str +='<div class="subNavItemWrapper">';
	str +='<div class="sectionTitle"><a class="page-class-1" href="' + homeHref + 'who-we-are/index.html">Who We Are</a></div>';
	str +='<div class="clearfix">';
	str +='<div class="subSectionItem">';
	str +='<a class="page-class-2" href="' + homeHref + 'who-we-are/history.html">History</a>';
	str +='</div>';
	str +='<div class="subSectionItem">';
	str +='<a class="page-class-3" href="' + homeHref + 'who-we-are/our-partners.html">Our Partners</a>';
	str +='</div>';
	str +='<div class="subSectionItem">';
	str +='<a class="page-class-4 page-class-5 page-class-6" href="' + homeHref + 'who-we-are/our-team-apac.html">Our Team</a>';
	str +='</div>';
	str +='<div class="subSectionItem lastItem">';
	str +='<a class="page-class-7 page-class-8 page-class-9 page-class-10 page-class-11 page-class-12 page-class-13 page-class-14 page-class-15 page-class-16 page-class-17" href="' + homeHref + 'who-we-are/savills-by-numbers/number-of-offices.html">Savills by Numbers</a>';
	str +='</div>';
	str +='</div>';
	str +='</div>';
	str +='</div>';
	
	str +='<div class="subNavItem">';
	str +='<div class="subNavItemWrapper">';
	str +='<div class="sectionTitle"><a class="page-class-18" href="' + homeHref + 'where-we-play/index.html">Expertise</a></div>';
	str +='<div class="clearfix">';
	str +='<div class="subSectionItem">';
	str +='<a class="page-class-19" href="' + homeHref + 'where-we-play/global-footprint.html">Global Footprint</a>';
	str +='</div>';
	str +='<div class="subSectionItem">';
	str +='<a class="page-class-20" href="' + homeHref + 'where-we-play/apac-footprint.html">APAC Footprint</a>';
	str +='<ul>';
	str +='<li><a class="page-class-21" href="' + homeHref + 'where-we-play/apac-footprint-city-guide/beijing.html">Beijing</a></li>';
	str +='<li><a class="page-class-22" href="' + homeHref + 'where-we-play/apac-footprint-city-guide/hk.html">Hong Kong</a></li>';
	str +='<li><a class="page-class-239" href="' + homeHref + 'where-we-play/apac-footprint-city-guide/india/clustering.html">India</a></li>';
	str +='<li><a class="page-class-23" href="' + homeHref + 'where-we-play/apac-footprint-city-guide/manila.html">Manila</a></li>';
	str +='<li><a class="page-class-24" href="' + homeHref + 'where-we-play/apac-footprint-city-guide/melbourne.html">Melbourne</a></li>';
	str +='<li><a class="page-class-25 page-class-26 page-class-27 page-class-28" href="' + homeHref + 'where-we-play/apac-footprint-city-guide/seoul/index.html">Seoul</a></li>';
	str +='<li><a class="page-class-29" href="' + homeHref + 'where-we-play/apac-footprint-city-guide/shanghai.html">Shanghai</a></li>';
	str +='<li><a class="page-class-30" href="' + homeHref + 'where-we-play/apac-footprint-city-guide/singapore.html">Singapore</a></li>';
	str +='<li><a class="page-class-31" href="' + homeHref + 'where-we-play/apac-footprint-city-guide/sydney.html">Sydney</a></li>';
	str +='<li><a class="page-class-32" href="' + homeHref + 'where-we-play/apac-footprint-city-guide/tokyo.html">Tokyo</a></li>';
	str +='</ul>';
	str +='</div>';
	str +='<div class="subSectionItem lastItem">';
	str +='<a class="page-class-42" href="' + homeHref + 'where-we-play/europe-footprint.html">Europe Footprint</a>';
	str +='<ul>';
	str +='<li><a class="page-class-43" href="' + homeHref + 'where-we-play/europe-footprint-city-guide/amsterdam.html">Amsterdam</a></li>';
	str +='<li><a class="page-class-44" href="' + homeHref + 'where-we-play/europe-footprint-city-guide/dublin.html">Dublin</a></li>';
	str +='<li><a class="page-class-45a page-class-45b page-class-45c" href="' + homeHref + 'where-we-play/europe-footprint-city-guide/frankfurt-cbd.html">Frankfurt</a></li>';
	str +='<li><a class="page-class-46" href="' + homeHref + 'where-we-play/europe-footprint-city-guide/london.html">London</a></li>';
	str +='<li><a class="page-class-47" href="' + homeHref + 'where-we-play/europe-footprint-city-guide/madrid.html">Madrid</a></li>';
	str +='<li><a class="page-class-49" href="' + homeHref + 'where-we-play/europe-footprint-city-guide/paris.html">Paris</a></li>';
	str +='<li><a class="page-class-50" href="' + homeHref + 'where-we-play/europe-footprint-city-guide/warsaw.html">Warsaw</a></li>';
	str +='</ul>';
	str +='</div>';
	str +='</div>';
	str +='</div>';
	str +='</div>';
	str +='<div class="subNavItem ourServicesSubNav">';
	str +='<div class="subNavItemWrapper">';
	str +='<div class="sectionTitle"><a class="page-class-51" href="' + homeHref + 'our-services/index.html">Our Services</a></div>';
	str +='<div class="clearfix">';
	str +='<div class="subSectionItem">';
	str +='<a class="page-class-52 page-class-53 page-class-54 page-class-55 page-class-56 page-class-57 page-class-58 page-class-59 page-class-60 page-class-61 page-class-62 page-class-63 page-class-64 page-class-65 page-class-66 page-class-67 page-class-68 page-class-69 page-class-70 page-class-71 page-class-72" href="' + homeHref + 'our-services/transaction-management-os/index.html">Transaction<br />Management</a>';
	str +='</div>';
	str +='<div class="subSectionItem">';
	str +='<a class="page-class-73 page-class-74 page-class-75 page-class-76 page-class-77 page-class-78 page-class-79 page-class-80 page-class-81 page-class-82" href="' + homeHref + 'our-services/project-management-os/index.html">Project<br />Management</a>';
	str +='</div>';
	str +='<div class="subSectionItem">';
	str +='<a class="page-class-83 page-class-85 page-class-86 page-class-87 page-class-88 page-class-89" href="' + homeHref + 'our-services/facilities-management-os/index.html">Facilities<br />Management</a>';
	str +='</div>';
	str +='<div class="subSectionItem lastItem">';
	str +='<a class="page-class-90 page-class-92 page-class-93 page-class-94 page-class-95" href="' + homeHref + 'our-services/global-corporate-relocations/index.html">Global Corporate<br />Relocations</a>';
	str +='</div>';
	str +='</div>';
	str +='</div>';
	str +='</div>';
	str +='<div class="subNavItem">';
	str +='<div class="subNavItemWrapper">';
	str +='<div class="sectionTitle"><a href="'+homeHref+'our-research/index.html">Our Research</a></div>';
	str +='<div class="subNavTabContainer clearfix">';
	str +='<div class="subSectionItem currentTab" id="city-briefings">';
	str +='<a class="page-class-96" href="javascript:;">City Briefings</a>';
	str +='<span></span>';
	str +='</div>';
	str +='<div class="subSectionItem" id="research-reports">';
	str +='<a class="page-class-122" href="javascript:;">Research Reports</a>';
	str +='<span></span>';
	str +='</div>';
	str +='<div class="subSectionItem" id="benchmarking">';
	str +='<a class="page-class-235" href="' + homeHref + 'our-research/benchmarking.html">Benchmarking</a>';
	str +='<span></span>';
	str +='</div>';
	str +='</div>';
	str +='<div class="subNavTabChildContainer clearfix">';
	str +='<div class="subNavTabChildItem" style="display:block;">';
	str +='<div class="subSectionItem">';
	str +='<a class="page-class-97" href="' + homeHref + 'our-research/city-briefings/apac/beijing-briefing.html">APAC</a>';
	str +='<ul>';
	str +='<li><a class="page-class-97" href="' + homeHref + 'our-research/city-briefings/apac/beijing-briefing.html">Beijing</a></li>';
	str +='<li><a class="page-class-98"  href="' + homeHref + 'our-research/city-briefings/apac/hk-briefing.html">Hong Kong</a></li>';
	str +='<li><a class="page-class-99"  href="' + homeHref + 'our-research/city-briefings/apac/manila-briefing.html">Manila</a></li>';
	str +='<li><a class="page-class-100" href="' + homeHref + 'our-research/city-briefings/apac/melbourne-briefing.html">Melbourne</a></li>';
	str +='<li><a class="page-class-101" href="' + homeHref + 'our-research/city-briefings/apac/seoul-briefing.html">Seoul</a></li>';
	str +='<li><a class="page-class-102" href="' + homeHref + 'our-research/city-briefings/apac/shanghai-briefing.html">Shanghai</a></li>';
	str +='<li><a class="page-class-103" href="' + homeHref + 'our-research/city-briefings/apac/singapore-briefing.html">Singapore</a></li>';
	str +='<li><a class="page-class-104" href="' + homeHref + 'our-research/city-briefings/apac/sydney-briefing.html">Sydney</a></li>';
	str +='<li><a class="page-class-105" href="' + homeHref + 'our-research/city-briefings/apac/tokyo-briefing.html">Tokyo</a></li>';
	str +='</ul>';
	str +='</div>';
	str +='<div class="subSectionItem lastItem">';
	str +='<a class="page-class-114" href="' + homeHref + 'our-research/city-briefings/europe/amsterdam-briefing.html">Europe</a>';
	str +='<ul>';
	str +='<li><a class="page-class-114" href="' + homeHref + 'our-research/city-briefings/europe/amsterdam-briefing.html">Amsterdam</a></li>';
	str +='<li><a class="page-class-115" href="' + homeHref + 'our-research/city-briefings/europe/dublin-briefing.html">Dublin</a></li>';
	str +='<li><a class="page-class-116" href="' + homeHref + 'our-research/city-briefings/europe/frankfurt-briefing.html">Frankfurt</a></li>';
	str +='<li><a class="page-class-117" href="' + homeHref + 'our-research/city-briefings/europe/london-briefing.html">London</a></li>';
	str +='<li><a class="page-class-118" href="' + homeHref + 'our-research/city-briefings/europe/madrid-briefing.html">Madrid</a></li>';
	str +='<li><a class="page-class-120" href="' + homeHref + 'our-research/city-briefings/europe/paris-briefing.html">Paris</a></li>';
	str +='<li><a class="page-class-121" href="' + homeHref + 'our-research/city-briefings/europe/warsaw-briefing.html">Warsaw</a></li>';
	str +='</ul>';
	str +='</div>';
	str +='</div>';
	str +='<div class="subNavTabChildItem">';
	str +='<div class="subSectionItem">';
	str +='<a class="page-class-123 page-class-124 page-class-125 page-class-126 page-class-127 page-class-128 page-class-129 page-class-130 page-class-131" href="' + homeHref + 'our-research/research-reports/apac/index.html">APAC</a>';
	str +='</div>';
	str +='<div class="subSectionItem lastItem">';
	str +='<a class="page-class-208" href="' + homeHref + 'our-research/research-reports/europe/index.html">Europe</a>';
	str +='</div>';
	str +='</div>';
	str +='</div>';
	str +='</div>';
	str +='</div>';
	str +='<div class="subNavItem">';
	str +='<div class="subNavItemWrapper">';
	str +='<div class="sectionTitle"><a href="'+homeHref+'our-clients/index.html">Our Clients</a></div>';
	str +='<div class="clearfix">';
	str +='<div class="subSectionItem">';
	str +='<p>Track Record</p>';
	str +='<ul>';
	str +='<li><a class="page-class-136 page-class-232" href="' + homeHref + 'our-clients/track-record/tr-apac/index.html">APAC</a></li>';
	str +='<li><a class="page-class-138 page-class-234" href="' + homeHref + 'our-clients/track-record/tr-europe/index.html">Europe</a></li>';
	str +='</ul>';
	str +='</div>';
	str +='<div class="subSectionItem lastItem">';
	str +='<a class="page-class-139" href="' + homeHref + 'our-clients/case-studies/index.html">Case Studies</a>';
	str +='<ul>';
	str +='<li><a class="page-class-140 page-class-141 page-class-142 page-class-143 page-class-144 page-class-145 page-class-146 page-class-147 page-class-148 page-class-149 page-class-150 page-class-151 page-class-152 page-class-153 page-class-154 page-class-155 page-class-156 page-class-157" href="' + homeHref + 'our-clients/case-studies/apac/beijing-legal.html">APAC</a></li>';
	str +='<li><a class="page-class-183 page-class-184 page-class-185 page-class-186 page-class-187 page-class-188 page-class-189 page-class-190 page-class-191 page-class-192 page-class-193 page-class-194 page-class-195 page-class-196 page-class-197 page-class-198 page-class-199 page-class-200 page-class-201 page-class-202 page-class-204 page-class-205" href="' + homeHref + 'our-clients/case-studies/europe/amsterdam-technology.html">Europe</a></li>';
	str +='</ul>';
	str +='</div>';
	str +='</div>';
	str +='</div>';
	str +='</div>';
	str +='<div class="subNavItem toolsSubNav">';
	str +='<div class="subNavItemWrapper">';
	str +='<a href="javascript:window.print()" class="printThisPage">Print this page</a>';
	str +='<a href="#">PDF download</a>';
	str +='<a href="http://www.xe.com/" target="_blank">Currency converter</a>';
	str +='</div>';
	str +='</div>';
	if(!isApp){
		str +='<div class="subNavItem shareSubNav">';
		str +='<div class="subNavItemWrapper">';
		str +='<div class="addthis_toolbox addthis_default_style shareBox">';
		str +='<a class="addthis_button_facebook"></a>';
		str +='<a class="addthis_button_twitter"></a>';
		str +='<a class="addthis_button_linkedin"></a>';
		str +='<a class="addthis_button_google_plusone_share"></a> ';
		str +='</div>';
		str +='</div>';
		str +='<script type="text/javascript">var addthis_config = {"data_track_addressbar":false};</script>';
		str +='<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5268e0d937d664e1"></script>';
		str +='</div>';
		str +='<div class="subNavItem"></div>';
		str +='</div>';
	}
	if(levelArray.length-1 > 0){
		str +='<div class="clearfix" id="breadcumb"></div>';	
	}
	str +='</div>';
	
	d.write(str);
}

function initPartner()
{
	if($('.partnerItemContainer').length > 0 && $('.partnerItemContentContainer').length > 0)
	{
		$('.partnerItemContainer .partnerItem').each(function(){
			$(this).click(function(){
				resetPartner();
				$(this).addClass('active');
				$('.partnerItemContent').eq($('.partnerItemContainer .partnerItem').index($(this))).css('display', 'block');
			})
		})
	}
	
	function resetPartner()
	{
		$('.partnerItemContainer .partnerItem').each(function(){
			$(this).removeClass('active'); 
		})
		
		$('.partnerItemContent').each(function(){
			$(this).css('display', 'none'); 
		})
	}
}

function initBottomExpandableContent(){
	if($('.bottomExpandContentContainer').length > 0)
	{
		var contentHeight = $('.expandContent').height()+parseInt($('.expandContent').css('padding-top'))+parseInt($('.expandContent').css('padding-bottom'));
		
		showHideExpand(1);
		/*$(window).load(function(e) {
			getExpandableCookie(levelArray[0]+'ExpandableContent');
		});*/
		
		$('.bottomExpandContentContainer').css('bottom', contentHeight*-1);
		
		$('.btnExpandContent').click(
			function(){
				if($(this).hasClass('active')){
					setExpandableCookie(levelArray[0]+'ExpandableContent', 1);
				}else{
					setExpandableCookie(levelArray[0]+'ExpandableContent', 0);
				}
			}
		)	
	}
	
	function showHideExpand(flag){
		if(flag)
		{
			$('.btnExpandContent').addClass('active');
			$('.bottomExpandContentContainer').animate({'bottom':0},200);
			if($('.cityMapButtonContainer').length > 0)
				$('.cityMapButtonContainer').animate({'bottom':parseInt($('.cityMapButtonContainer').css('bottom'))+contentHeight},200);	
		}else{
			$('.btnExpandContent').removeClass('active');
			$('.bottomExpandContentContainer').animate({'bottom':contentHeight*-1},200);
			if($('.cityMapButtonContainer').length > 0)
				$('.cityMapButtonContainer').animate({'bottom':parseInt($('.cityMapButtonContainer').css('bottom'))-contentHeight},200);
		}		
	}
	
	function getExpandableCookie(cookieName)
	{
		if (getCookie(cookieName) == 0 || getCookie(cookieName) == null) {
			showHideExpand(1);
		}
	}
	
	function setExpandableCookie(cookieName, flag)
	{
		if(flag){
			showHideExpand(0);
			setCookie(cookieName, 1, nd, cpath, cdomain);
		}else{
			showHideExpand(1);
			setCookie(cookieName, 0, nd, cpath, cdomain);
		}	
	}

}
var homeBannerIndex = 0;
function initHomeSlideshow()
{
	//$.repeat(6000,true).$('#homeMainContent .homeSlideshowItem:first').hide().appendTo('#homeMainContent').fadeIn('slow').children(".homeContent").wait(500).fadeIn().children(".homeText").wait(500).fadeIn().parents().children(".homeContent").wait(5000).fadeOut().children(".homeText").fadeOut();	
	
	var bannerContentDelay = 500;
	var homeTitleDelay = 1000;
	var homeTextDelay = 1500;
	var bannerLoopTime = 6000;
	var controlFlag = false;
	
	/*setTimeout('$("#homeMainContent .homeSlideshowItem").eq(0).fadeIn()', bannerContentDelay);
	setTimeout('$("#homeMainContent .homeSlideshowItem .homeContent").eq(0).fadeIn()', homeTitleDelay);
	setTimeout('$("#homeMainContent .homeSlideshowItem .homeText").eq(0).fadeIn()', homeTextDelay);*/
	
	if(isIE8){
		//resetBannerContent();
		setTimeout('$("#homeMainContent .homeSlideshowItem").eq(0).animate({"opacity":1},500);  $("#homeMainContent").css({"background":"none"})', bannerContentDelay);
		setTimeout('$("#homeMainContent .homeSlideshowItem .homeContent").eq(0).show()', homeTitleDelay);
		setTimeout('$("#homeMainContent .homeSlideshowItem .homeText").eq(0).show();', homeTextDelay);
		//goForward();
		
	}else{
		setTimeout('$("#homeMainContent .homeSlideshowItem").eq(0).animate({"opacity":1},500);  $("#homeMainContent").css({"background":"none"})', bannerContentDelay);
		setTimeout('$("#homeMainContent .homeSlideshowItem .homeContent").eq(0).fadeIn()', homeTitleDelay);
		setTimeout('$("#homeMainContent .homeSlideshowItem .homeText").eq(0).fadeIn();', homeTextDelay);
	}
	
	
	
	function loopGallery(){
		if(controlFlag) return;
		goForward();
	}
	
	var t = setTimeout(function(){loopGallery();},bannerLoopTime);
	
	$('.btnHomePrev').click(function(){
		if ($('#homeMainContent').is(':animated') || $('#homeMainContent .homeSlideshowItem').is(':animated') || $("#homeMainContent .homeSlideshowItem .homeContent").is(':animated') || $("#homeMainContent .homeSlideshowItem .homeText").is(':animated'))
		{
		  return false;
		}

		if(!controlFlag) controlFlag = true;
	
		window.clearTimeout(t);		
		
		resetBannerContent();
		
		$("#homeMainContent .homeSlideshowItem:last").prependTo("#homeMainContent")
		
		$("#homeMainContent .homeSlideshowItem").eq(0).animate({"opacity":1},500);
		
		
		//setTimeout('$("#homeMainContent").animate({left:0},1000); ', 200);
		
		
		/*setTimeout('$("#homeMainContent .homeSlideshowItem").eq(0).fadeIn()', bannerContentDelay+1000);
		setTimeout('$("#homeMainContent .homeSlideshowItem img").eq(0).fadeIn()', bannerContentImgDelay+1000);*/
		if(isIE8){
			setTimeout('$("#homeMainContent .homeSlideshowItem .homeContent").eq(0).show()', homeTitleDelay);
			setTimeout('$("#homeMainContent .homeSlideshowItem .homeText").eq(0).show()', homeTextDelay);
		}else{
			setTimeout('$("#homeMainContent .homeSlideshowItem .homeContent").eq(0).fadeIn()', homeTitleDelay);
			setTimeout('$("#homeMainContent .homeSlideshowItem .homeText").eq(0).fadeIn()', homeTextDelay);
		}
		
		
		
		//setTimeout('var $me = $("#homeMainContent>div:first"); $me.parent().append($me); $("#homeMainContent").css("left","0")', bannerContentDelay+1000);
	})
	
	$('.btnHomeNext').click(function(){
		if ($('#homeMainContent').is(':animated') || $('#homeMainContent .homeSlideshowItem').is(':animated') || $("#homeMainContent .homeSlideshowItem .homeContent").is(':animated') || $("#homeMainContent .homeSlideshowItem .homeText").is(':animated'))
		{
		  return false;
		}
		if(!controlFlag) controlFlag = true;
		goForward();
	})
	
	if(isiPad){
		$(".homeMainContentWrapper").swipe({
		swipeStatus :function(event,phase,direction,distance,duration,fingerCount){
			//$('#countsDiv').html(phase+' '+direction+' '+distance);
			if(phase =="move" && direction=="left")
			{
				if ($('#homeMainContent').is(':animated') || $('#homeMainContent .homeSlideshowItem').is(':animated') || $("#homeMainContent .homeSlideshowItem .homeContent").is(':animated') || $("#homeMainContent .homeSlideshowItem .homeText").is(':animated'))
				{
				  return false;
				}
				if(!controlFlag) controlFlag = true;
				goForward();
				
			}else if (phase =="move" && direction=="right")
			{
				if ($('#homeMainContent').is(':animated') || $('#homeMainContent .homeSlideshowItem').is(':animated') || $("#homeMainContent .homeSlideshowItem .homeContent").is(':animated') || $("#homeMainContent .homeSlideshowItem .homeText").is(':animated'))
				{
				  return false;
				}
		
				if(!controlFlag) controlFlag = true;
			
				window.clearTimeout(t);
				
				resetBannerContent();
				
				$("#homeMainContent .homeSlideshowItem:last").prependTo("#homeMainContent")
				$("#homeMainContent .homeSlideshowItem").eq(0).animate({"opacity":1},500);
				
				setTimeout('$("#homeMainContent .homeSlideshowItem .homeContent").eq(0).fadeIn()', homeTitleDelay);
				setTimeout('$("#homeMainContent .homeSlideshowItem .homeText").eq(0).fadeIn()', homeTextDelay);
			}
		},threshold:0,triggerOnTouchEnd : true,excludedElements:"button, input, select, textarea, .noSwipe"});
	}
	
	function goForward(){
		window.clearTimeout(t);		
		resetBannerContent();
		
		
		
		if(isIE8){
			setTimeout('$("#homeMainContent .homeSlideshowItem").eq(1).css({"opacity":1, "filter": "alpha(opacity=100)", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)", "filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)"});', bannerContentDelay);
			setTimeout('$("#homeMainContent .homeSlideshowItem .homeContent").eq(1).show()', homeTitleDelay);
			setTimeout('$("#homeMainContent .homeSlideshowItem .homeText").eq(1).show()', homeTextDelay);
		}else{
			setTimeout('$("#homeMainContent .homeSlideshowItem").eq(1).animate({"opacity":1},500);', bannerContentDelay);
			setTimeout('$("#homeMainContent .homeSlideshowItem .homeContent").eq(1).fadeIn()', homeTitleDelay);
			setTimeout('$("#homeMainContent .homeSlideshowItem .homeText").eq(1).fadeIn()', homeTextDelay);
		}
		
		setTimeout('var $me = $("#homeMainContent .homeSlideshowItem:first"); $me.parent().append($me);', bannerContentDelay+1000);
		
		t = setTimeout(function(){loopGallery();},bannerLoopTime);
	}
	
	function resetBannerContent()
	{
		$("#homeMainContent .homeSlideshowItem").each(function(){
			if(isIE8){
				$(this).css({"opacity":0, "filter": "alpha(opacity=0)", "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)", "filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)"});
			}else{
				$(this).animate({"opacity":0},500)
			}
			
			
		});
		
		$("#homeMainContent .homeSlideshowItem .homeContent").each(function(){
			if(isIE8){
				$(this).hide();
			}else{
				$(this).fadeOut();	
			}
		});
		
		$("#homeMainContent .homeSlideshowItem .homeText").each(function(){
			if(isIE8){
				$(this).hide();
			}else{
				$(this).fadeOut();	
			}
		});
	}
}

function openBrowser(url,target,param)
{
	//console.log("open");
	browser_ref = window.open(url,target,param);
	//browser_ref.addEventListener('exit', iabClose);
}