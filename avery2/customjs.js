$(document).ready(function(){

/*************** Staticfooter script ***************/
var window_height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var body_height = $(document.body).height();
var content = $("div[id$='content_margin']");
if(body_height < window_height){
differ = (window_height - body_height);
content_height = content.height() + differ;
$("div[id*='content_margin']").css({"min-height":content_height+"px"});
}

/* Slideshow Function Call */

if(jQuery('#ttr_slideshow_inner').length){
jQuery('#ttr_slideshow_inner').TTSlider({
stopTransition:false ,
slideShowSpeed:2000, begintime:1000,cssPrefix: 'ttr_'
});
}
/* Animation Function Call */
jQuery().TTAnimation({cssPrefix: 'ttr_'});

/*************** Hamburgermenu slideleft script ***************/
$('button#nav-expander').on('click',function(e){
e.preventDefault();
$('body').toggleClass('nav-expanded');
});

/*************** Menu click script ***************/
$('ul.ttr_menu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
if($(this).parent().hasClass('show')){
location.assign($(this).attr('href'));
}
} else {
if(window_width > 991 && $(this).attr('href')){
window.location.href = $(this).attr('href'); 
}
else{
if($(this).parent().hasClass('show')){
location.assign($(this).attr('href'));
}
}
}
});

/*************** Sidebarmenu click script ***************/
$('ul.ttr_vmenu_items.nav li [data-toggle=dropdown]').on('click', function() {
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
if(window_width > 991 && $(this).attr('href')){
window.location.href = $(this).attr('href'); 
}
else{
if($(this).parent().hasClass('show')){
location.assign($(this).attr('href'));
}
}
});

/*************** Tab menu click script ***************/
$('.ttr_menu_items ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 1200){
event.preventDefault();
event.stopPropagation();
$(this).parent().siblings().removeClass('show');
$(this).parent().toggleClass(function() {
if ($(this).is(".show") ) {
window.location.href = $(this).children("[data-toggle=dropdown]").attr('href'); 
return "";
} else {
return "show";
}
});
}
});

/*************** Tab-Sidebarmenu script ***************/
$('.ttr_vmenu_items ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) { 
var window_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
if(window_width < 992){
event.preventDefault();
event.stopPropagation();
$(this).parent().siblings().removeClass('show');
$(this).parent().toggleClass(function() {
if ($(this).is(".show") ) {
window.location.href = $(this).children("[data-toggle=dropdown]").attr('href'); 
return "";
} else {
return "show";
}
});
}
});

/*************** Google-Webfont script ***************/
WebFontConfig = {
google: { families: [ 'Amaranth'] }
};
(function() {
var wf = document.createElement('script');
wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1.0.31/webfont.js';
wf.type = 'text/javascript';
wf.async = 'true';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(wf, s);
})();
/*************** Html video script ***************/
var objects = ['iframe[src*="youtube.com"]','iframe[src*="youtu.be"]','iframe[src*="youtube-nocookie.com"]', 'object'];
for(var i = 0 ; i < objects.length ; i++){
if ($(objects[i]).length > 0 ) {
$(objects[i]).wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );
$(objects[i]).addClass('embed-responsive-item');
}
}
});
