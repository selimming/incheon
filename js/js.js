$(document).ready(function(){
    var i = 0;
    var img_w = $('.img_box>img').width();

    $('.sec2_banner').click(function(){

        i++;

        if(i>4){
            i = 0;
        }

        $('.img_box').animate({
            left: -img_w * i
        });
    });

    


    setInterval(function(){
        $('.sec2_banner').trigger('click');
    },2000);
});