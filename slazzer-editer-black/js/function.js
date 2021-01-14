$(document).ready(function(){
  customScroll();
  tooltip();
  apiKey();
  Tab();
});



// OptionBer Tigger
jQuery(function(){
  // jQuery('#showall').click(function(){
  //   jQuery('.targetDiv').show();
  // });
  $('.showSingle').click(function(){
    $('.targetDiv').hide();
    $('#div'+$(this).attr('target')).show();
    $('.editer-main-area').addClass('collapseEditer');
  });
  $('.closeTarget').click(function(){
    $('.targetDiv').hide();
    $('.editer-main-area').removeClass('collapseEditer');
  });
});


// mCustom Scroll
function customScroll() {
  $('.dropdown .dropdown-menu').mCustomScrollbar({
    autoHideScrollbar:true,
  });

  $('.options-ber ul.option, .bgImage ul, .middle ul, .effectsdiv, .add-background ul, .get-option, .mscroller > ul, .count-div, .dropdown .dropdown-menu').mCustomScrollbar({
    autoHideScrollbar:true,
    scrollbarPosition:"outside"
  });
  $('.targetDiv .tabOptions, .custom-frame .modal-body ul').mCustomScrollbar({
    autoHideScrollbar:true,
    axis: "x",
    // scrollbarPosition:"outside"
  });
}



// PopUp
function apiKey() {
  $('#mask').fadeIn(500,function(){
      $('#popup').show();
   });

   $(".close").on('click', function() {
      $('#popup').hide();
      $('#mask').fadeOut(500);
   });
}


// Tooltip
function tooltip() {
  $('[data-toggle="tooltip"]').tooltip({
    trigger : 'hover'
  });
}


$(".dragablePopup").draggable({
    handle: ".modal-header"
});


function Tab() {
  $( "#tabs" ).tabs();
}