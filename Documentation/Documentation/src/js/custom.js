function document_lazyload() {
	jQuery('.lazy:visible').Lazy({
		 afterLoad: function(element) {
			element.addClass('loaded');
		},
	 });	 
}
jQuery(window).on("load", function(){
	document_lazyload();
});	
jQuery(document).ready(function(){
	document_lazyload();
	if(window.location.href.indexOf("#") > -1) {
		var linkcuren 		= window.location.href;
		var numbercuren 	= linkcuren.search("#");
		var divcuren 		= window.location.href.slice(numbercuren);
		
		jQuery(".vg-content").css('display','none');
		jQuery(divcuren).css('display','block');
		jQuery(divcuren).parent().parent( '.vg-content').css('display','block');
		
		jQuery(".bs-sidebar > .nav > li").removeClass("active");
		jQuery(".bs-sidebar>.nav>li>a[href$='" + divcuren + "']").parent().addClass("active");
		
	}
	
	jQuery(".bs-sidebar > .nav > li > a").click(function(event) {
		jQuery(".vg-content").css('display','none');
		jQuery(jQuery(this).attr('href')).css('display','block');
		jQuery(".bs-sidebar > .nav > li").removeClass("active");
		jQuery(this).parent().addClass("active");
		
		document_lazyload();
	});
	
	jQuery(".bs-sidebar  .nav .nav > li > a").click(function(event) {
		jQuery(".vg-content").css('display','none');
		jQuery(jQuery(this).parent().parent().parent().children(".pa").attr('href')).css('display','block');
		jQuery(".bs-sidebar > .nav > li").removeClass("active");
		jQuery(this).parent().parent().parent().addClass("active");
		document_lazyload();
	});
	
	jQuery('.bs-sidebar .nav > li > a').onePageNav({
		currentClass: 'active1',
		changeHash: false,
		scrollSpeed: 800
	});
	
	// Scrolling
	jQuery('a.scrollto').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery("[name='" + this.hash.slice(1) +"']");
			if (target.length) {
				jQuery('#wrapper').removeClass('behind');
				jQuery('.mobile-nav').removeClass('active1');
				jQuery('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	
	jQuery('#back-to-top1').on('click', function (e) {
        e.preventDefault();
        jQuery('html,body').animate({
            scrollTop: 0
        }, 700);
    });
	
	jQuery(window).scroll(function() {
		
		if(jQuery(this).scrollTop() > 302) {
			jQuery('#back-to-top').addClass("fixed");
		} else {
			jQuery('#back-to-top').removeClass("fixed");
		}
		
		if(jQuery(this).scrollTop() > 302) {
			//jQuery('#docs_navigation').addClass("fixed");
		} else {
			//jQuery('#docs_navigation').removeClass("fixed");
		}
	});
});