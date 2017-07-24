   $(function(){
 	var scale=1;
    var timer=null;
    var flagx=true;
    var time=50;

    if (flagx) {
		clearInterval(timer);
		var d=0;	
		function Amintate(){
			$("#box img").css("display","none");
			$("#box img").eq(d).css("display","block");
			if (d>=40) {
				d=0;
			}
			d++;
	    }
	    timer=setInterval(Amintate,time);
	    flagx=false;
	}
	else{
		clearInterval(timer);
		flagx=true;
		
    }
})



function a(){
 	 $('.f1 img,.f2 img,.f3 img,.f4 img,.f5 img,.f6 img,.f7 img,.f8 img').
 	 css({ width: '0.3rem', height:'0.3rem'})
     $('.y1').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})
     $('.y2').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})   
     $('.y3').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})
     $('.y4').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})
     $('.y5').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})
     $('.y6').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})
     $('.y7').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})
     $('.y8').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})
     $('.y9').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'}) 
     $('.y10').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})
     $('.y11').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})
     $('.y12').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})
     $('.y13').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})
     $('.y14').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'}) 
     $('.y15').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'}) 
     $('.y16').css({left: '3.75rem', top: '6rem',width:'0rem', height:'0rem'})                                        
     $('.f1').css({left: '3.75rem',top: '6rem'})                                
     $('.f2').css({left: '3.95rem', top: '5.6rem'})                                          
     $('.f3').css({ left: '3.75rem',top: '6rem'})                                        
     $('.f4').css({left: '3.2rem',top: '4.5rem'})                                           
     $('.f5').css({left: '3.2rem',top: '4.5rem'})                                          
     $('.f6').css({left: '3.76rem',top: '6rem'})                                           
     $('.f7').css({left: '3.2rem', top: '4.5rem'})                                            
     $('.f8').css({left: '3.75rem',top: '6rem'}) 

    $('.x1').css({left: '3.6rem', top: '9.69rem',width:'0.01rem', height:'0.01rem'})                  
    $('.x2').css({left: '1.7rem', top: '11.99rem',width:'0.01rem', height:'0.01rem'})
    $('.x3').css({left: '2.49rem', top: '7.96rem',width:'0.01rem', height:'0.01rem'})      
    $('.x4').css({left: '0.61rem', top: '8.16rem',width:'0.01rem', height:'0.01rem'})      
    $('.x5').css({left: '2rem', top: '8.57rem',width:'0.01rem', height:'0.01rem'})      
    $('.x6').css({left: '5.60rem', top: '6.91rem',width:'0.01rem', height:'0.01rem'})      
    $('.x7').css({left: '0rem', top: '6.32rem',width:'0.01rem', height:'0.01rem'})      
    $('.x8').css({left: '4.96rem', top: '10.14rem',width:'0.01rem', height:'0.01rem'}) 
    $('.x9').css({left: '7.5rem', top: '5.96rem',width:'0.01rem', height:'0.01rem'})    
    $('.x10').css({left:'4.79rem',top:'7.02rem',width: '0rem',height: '0rem'})
    $('.x11').css({left:'7.5rem',top:'9.24rem',width: '0rem',height: '0rem'})
    $('.x12').css({left:'6.7rem',top:'11.3rem',width: '0rem',height: '0rem'}) 
    $('.x13').css({left:'5.9rem',top:'7.5rem',width: '0rem',height: '0rem'})
    $('.x14').css({left:'2.35rem',top:'5.95rem',width: '0rem',height: '0rem'})
    $('.x15').css({left:'1.84rem',top:'5.11rem',width: '0rem',height: '0rem'})
    $('.x16').css({left:'6.3rem',top:'2.4rem',width: '0rem',height: '0rem'})
    $('.x17').css({left:'4.64rem',top:'2.26rem',width: '0rem',height: '0rem'})  
    $('.x18').css({left:'3.36rem',top:'3.9rem',width: '0rem',height: '0rem'}) 
     $('.x19').css({left:'5.28rem',top:'6.16rem',width: '0rem',height: '0rem'})
     $('.x20').css({left:'5.62rem',top:'4.87rem',width: '0rem',height: '0rem'})
    $('.x21').css({left:'4.2rem',top:'5.08rem',width: '0rem',height: '0rem'})
    $('.x22').css({left:'3.22rem',top:'5.08rem',width: '0rem',height: '0rem'}) 
    $('.x23').css({left:'2.48rem',top:'7rem',width: '0rem',height: '0rem'}) 
    $('.x24').css({left:'5.48rem',top:'8.51rem',width: '0rem',height: '0rem'})
    $('.x25').css({left:'0.46rem',top:'5.77rem',width: '0rem',height: '0rem'})
     $('.x26').css({left:'0.83rem',top:'1.59rem',width: '0rem',height: '0rem'})
     $('.x27').css({left:'7.34rem',top:'4.2rem',width: '0rem',height: '0rem'}) 
    
}		
function b(){
     $('.f1').animate({left: '2.5rem',top: '2.5rem'},1000)      
     $('.f1 img').animate({width: '1.39rem',height: '1.39rem'},1500)      
     $('.f2').animate({left: '5.32rem',top: '3.51rem'},1500)
     $('.f2 img').animate({width: '1.54rem',height: '1.54rem'},1500)      
     $('.f3').animate({left: '5.6rem',top: '6.32rem'},1500)       
     $('.f3 img').animate({ width: '1.32rem',height: '1.32rem'},1500)         
     $('.f4').animate({left: '5.2rem', top: '8.3rem'},1500)
     $('.f4 img').animate({width: '1.39rem', height: '1.39rem'},1500)      
     $('.f5').animate({left: '2.87rem', top: '9.52rem' },1500)
     $('.f5 img').animate({width: '1.54rem',height: '1.54rem'},1500)           
     $('.f6').animate({left: '0.86rem', top: '8.46rem' },1500)
     $('.f6 img').animate({ width: '1.39rem',height: '1.39rem'},1500)      
     $('.f7').animate({ left: '0.98rem',top: '6.49rem' },1500)
     $('.f7 img').animate({width:'1.54rem',height:'1.54rem'},1500)                                      
     $('.f8').animate({left:'0.27rem',top:'3.76rem'},1500)                                          
     $('.f8 img').animate({width:'1.69rem',height:'1.69rem'},1500)
     $('.y1').animate({left:'0.36rem',top:'0.94rem',width:'0.74rem',height:'0.74rem'},1800)
     $('.y2').animate({left:'5.28rem',top:'7.29rem',width:'0.49rem',height:'0.49rem'},1800)
     $('.y3').animate({left:'4.5rem',top:'1.84rem',width:'0.42rem',height:'0.42rem'},1800)
     $('.y4').animate({left:'7.22rem',top:'3.95rem',width:'0.26rem',height:'0.74rem'},1800)
     $('.y5').animate({left:'0.37rem',top:'11.79rem',width:'2.38rem',height:'1.74rem'},1800)
     $('.y6').animate({left:'0.43rem',top:'5.73rem',width:'0.13rem',height:'0.13rem'},1800)
     $('.y7').animate({left:'4.77rem',top:'10.14rem',width:'0.72rem',height:'0.72rem'},1800)
     $('.y8').animate({left:'3.18rem',top:'7.85rem',width:'0.13rem',height:'0.13rem'},1800)
     $('.y9').animate({left:'0rem',top:'7.51rem',width:'0.91rem',height:'2.4rem'},1800)
     $('.y10').animate({left:'4.79rem',top:'7rem',width:'0.08rem',height:'0.08rem'},1800)
     $('.y11').animate({left:'6.58rem',top:'11.3rem',width:'0.28rem',height:'0.28rem'},1800)
     $('.y12').animate({left:'2.23rem',top:'5.79rem',width:'0.36rem',height:'0.36rem'},1800)
     $('.y13').animate({left:'5.99rem',top:'1.48rem',width:'1.22rem',height:'1.22rem'},1800)
     $('.y14').animate({left:'5.18rem',top:'6.06rem',width:'0.2rem',height:'0.2rem'},1800)
     $('.y15').animate({left:'3.97rem',top:'4.62rem',width:'0.7rem',height:'0.7rem'},1800)
     $('.y16').animate({left:'3.14rem',top:'5.02rem',width:'0.13rem',height:'0.13rem'},1800)
     $('.x1').animate({left:'3.73rem',top:'6.75rem',width:'0.13rem',height:'2.94rem'},2500) 
     $('.x2').animate({left:'1.82rem',top:'6.96rem',width:'2.02rem',height:'5.03rem'},2500)
             
     $('.x3').animate({left:'3.22rem',top:'6.8rem',width:'0.63rem',height:'1.16rem'},2500) 


    $('.x4').animate({left:'0.65rem',top:'6.75rem',width:'3.14rem',height:'1.45rem'},2500) 
             

     $('.x5').animate({left:'2.05rem',top:'6.78rem',width:'1.78rem',height:'1.93rem'},2500) 
     $('.x6').animate({left:'3.77rem',top:'6.76rem',width:'1.83rem',height:'0.23rem'},2500) 
     $('.x7').animate({left:'0rem',top:'6.27rem',width:'3.8rem',height:'0.48rem'},2500) 
     $('.x8').animate({left:'3.85rem',top:'6.8rem',width:'1.21rem',height:'3.46rem'},2500)
     $('.x9').animate({left:'3.76rem',top:'6rem',width:'3.75rem',height:'0.76rem'},2500)
     $('.x10').animate({left:'3.78rem',top:'6.73rem',width:'1.05rem',height:'0.32rem'},2500)
     $('.x11').animate({left:'3.7em',top:'6.71rem',width:'3.76rem',height:'3.11rem'},2500)
     $('.x12').animate({left:'3.8rem',top:'6.7rem',width:'2.89rem',height:'4.61rem'},2500)
     $('.x13').animate({left:'3.83rem',top:'6.78rem',width:'1.52rem',height:'0.72rem'},2500)
     $('.x14').animate({left:'2.43rem',top:'6rem',width:'1.46rem',height:'0.76rem'},2500)   
     $('.x15').animate({left:'1.8rem',top:'5.06rem',width:'2.04rem',height:'1.62rem'},2500) 
     $('.x16').animate({left:'3.8rem',top:'2.5rem',width:'2.53rem',height:'4.31rem'},2500)   
     $('.x17').animate({left:'3.82rem',top:'2.2rem',width:'0.88rem',height:'4.46rem'},2500) 
     $('.x18').animate({left:'3.38rem',top:'3.8rem',width:'0.44rem',height:'2.83rem'},2500)
     $('.x19').animate({left:'3.8rem',top:'6.14rem',width:'1.51rem',height:'0.56rem'},2500)
     $('.x20').animate({left:'3.84rem',top:'4.93rem',width:'1.86rem',height:'1.84rem'},2500)
     $('.x21').animate({left:'3.85rem',top:'5.2rem',width:'0.44rem',height:'1.57rem'},2500)  
     $('.x22').animate({left:'3.22rem',top:'5.1rem',width:'0.57rem',height:'1.58rem'},2500)      
     $('.x23').animate({left:'2.5rem',top:'6.7rem',width:'1.31rem',height:'0.32rem'},2500)
     $('.x24').animate({left:'3.86rem',top:'6.81rem',width:'1.69rem',height:'1.81rem'},2500) 
     $('.x25').animate({left:'0.5rem',top:'5.8rem',width:'3.17rem',height:'0.9rem'},2500) 
     $('.x26').animate({left:'0.79rem',top:'1.56rem',width:'2.99rem',height:'5.13rem'},2500)
     $('.x27').animate({left:'3.78rem',top:'4.3rem',width:'3.73rem',height:'2.5rem'},2500)
        
   }            
			

$(function(){
  var i=0;
 
    $(".close").click(function(){
        a();
        b();
        $(".head").css({"display":"block"});
        $(".head").stop();
        $(".xian").css({"display":"block"});
        $(".xian").stop();
        $(".content").css({"display":"none"});
      })
      $(".f").on('click',function(){
        var index=$(this).index();
          i=index;
        $(".head").css({"display":"none"});
        $(".xian").css({"display":"none"});
        $(".content").css({"display":"block"});
        $(".c").eq(index).addClass('on').siblings().removeClass('on');

       })

        $(".prev").click(function(){
          i--;
          if(i==-1){
            i=7;
          }
           $(".box2 .c").eq(i).addClass('on').siblings().removeClass('on');      
        })
        $(".next").click(function(){
          i++;
          if(i==8){
            i=0;
          }
        $(".box2 .c").eq(i).addClass('on').siblings().removeClass('on');  
         
        })
     

  })



$(function(){
    $(".w3").click(function(){
       
        $(".w").css({"display":"none"});
      })
      $(".s").on('click',function(){
         $(".w").css({"display":"block"});
         
    })
     

  })