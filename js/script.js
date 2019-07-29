$(document).ready(function () {

    $('.modelement').slideUp();

    $('.minwidth').click(function () {
       
    let isActive = $(this).hasClass('act');

       if(!isActive){
        $('.modelement').slideUp();
        $(this).children('.modelement').slideDown(1000);
        $(this).addClass("act");
        $(this).children('.modtoggler').css('background', 'url(img/arrow_up.png)  left no-repeat');

       }else{
        $(this).children('.modelement').slideUp(1000);
        $(this).removeClass("act");
        $('.modtoggler').css('background', 'url(img/arrow_down.png)  left no-repeat').attr('data', 'true');

       }
      



    })



    $('.service aside li').click(function () {
        $('.dn').css('transform', 'scaleX(0)');
        let role = $(this).attr('role');
        $('.service article div').addClass('dn');
        $('.service article div#list' + role).css({ 'transform': 'scaleX(1)', 'transition': '1s' });
        $('.service aside li').removeClass('active');
        $(this).addClass('active')
    })
$('.bar').click(()=>{
    $('.hidden-menu').slideToggle(1000)
})
 


})