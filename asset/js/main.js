  // etc button
  var mWd = $('#section1').outerWidth() + $('#section2').outerWidth() + $('#section3').outerWidth() + $('#section4').outerWidth() + $('#section5').outerWidth() + $('#section6').outerWidth() + 2;
  var bBtnWd = $('#bigBtn').width();

  var cwWd = $('#section5 .cw1').outerWidth();

  var leftCount = 1;

  function onLeftClick() {

      var mnWd = mWd + cwWd * leftCount;
      var mnWdmin = mWd + cwWd * leftCount - bBtnWd;
      var bdHt = mnWd * 0.95;

      leftCount++;

      $('#container').width( mnWd + 'px');
      $('body').height(bdHt + 'px');

      if(leftCount >= 3){

        document.getElementById('bigBtn').classList.add('on');
      }
  }


$(document).ready(function(){


    //menu이동
    var ctwPs = $('#cont2').offset().left;
    var ctrdPs = $('#section3').offset().left;
    var cfrPs = $('#section4').offset().left;
    var csixPs = $('#bigBtn').offset().left;
        
    $('#navi #mn1').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: ctwPs}, 500);
    });
    $('#navi #mn2').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: ctrdPs}, 500);
    });
    $('#navi #mn3').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: cfrPs}, 500);
    });
    $('#navi #mn4').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop: csixPs}, 500);
    });

    $('.end-top').click('click', function(event) {
        event.preventDefault();
        $('html, body').stop().animate({scrollTop: 0}, 500);
    });

//etc 버튼 제어
    $('.big-view-btn a').click(function(e){
        e.preventDefault();
        $('#section5 #cont10 .ct-wrap.active').next().addClass('active');
 
    });
//window resize
    $(window).resize(function(){

        var mainWd = $('#section1').outerWidth() + $('#section2').outerWidth() + $('#section3').outerWidth() + $('#section4').outerWidth() + $('#section5').outerWidth() + $('#section6').outerWidth() + 5;
        

       

       if($(window).width() > 1300 && $(window).height() >= 850){

        var bodyHt = mainWd * 0.95;

        $('#container').width(mainWd + 'px');
        $('body').height(bodyHt + 'px');

       }

       if($(window).width() <= 1300 && $(window).height() <= 850){

        var bodyHt2 = mainWd * 0.97;

       $('#container').width(mainWd + 'px');
       $('body').height(bodyHt2 + 'px');

       }

       if($(window).width() <= 1024 && $(window).height() <= 1400){

        var bodyHt3 = mainWd * 1.02;

       $('#container').width(mainWd + 'px');
       $('body').height(bodyHt3 + 'px');

       }

       if($(window).width() <= 768 && $(window).height() <= 1024){

        var bodyHt4 = mainWd * 1.01;

       $('#container').width(mainWd + 'px');
       $('body').height(bodyHt4 + 'px');

       }

       
       if($(window).width() <= 415 && $(window).height() <= 820){

        var bodyHt3 = mainWd * 1.03;

       $('#container').width(mainWd + 'px');
       $('body').height(bodyHt3 + 'px');

       }
      
    }).resize();

    window.onresize = function(){
        document.location.reload();
    }

    //  window.onload = function(){
    //     setTimeout(function(){
    //         scrollTo(0,0);
    //     }, 100);
    //     }
 

    //toggle theme
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark")
    }

    document.getElementById("theme").addEventListener("click",() => {
      document.documentElement.classList.toggle("dark")
    });

   
    
});