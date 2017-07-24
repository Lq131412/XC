 $(function(){
 	var flag=true;
    $(".s1").click(function(){
	  if(flag){
	      $(".biglight").css("display","block");
	      flag=false;
	  }else{
		  $(".biglight").css("display","none");
		  flag=true;
	  }
    })
})
$(function(){
	var flag1=true;
    $('.sc').click(function(){  
    	if(flag1){
    	  $('.carf').css({
    	  	left:'0.6rem',
    	  	top:'1.4rem'	  	
    	  })
          flag1=false;
    	}else{
    	  $('.carf').css({
    		left: '-2.65rem',
            top: '3.40rem'
          })
          flag1=true;
    	}
    })
})
$(function(){
	var flag2=true;
    $('.s2').click(function(){
    	if(flag2){
    	$('.carf').css({
    	  	left:'-4rem',
    	  	top:'1rem'
    	  })
    	flag2=false;
        }else{
    	  $('.carf').css({
    		left: '-2.65rem',
            top: '3.40rem'
          })
          flag2=true;
    	}
     })
})

$(".st").click(function(){
    $(".st").fadeOut(700);
    $(".sb").fadeOut(700,function(){
        $(".suna").fadeIn(300);
        $(".sunb").fadeIn(300,function(){
            $(".suna").fadeOut(2000);
            $(".sunb").fadeOut(2000,function(){
                $(".sund").fadeIn(500);
                $(".sunc").fadeIn(500,function(){
                    $(".sunc").fadeOut(1700);
                    $(".sund").fadeOut(1700,function(){
                        $(".st").css("display","block")
                        $(".sb").css("display","block");
                    })           
                })
            })
        })
    }) 
})

$('.click').click(function(){
    $('.cover,.click,.fourbc').css('display','none');
})
$('.hand1').click(function(){
    $('.hand1').css('display','none');
})