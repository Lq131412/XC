			var startX=0,startY=0,endX=0,endY=0;			
			var divs=document.getElementById("box");			
			//divs.createEvent("TouchEvent")//固定写法。先创建触摸事件			
			divs.addEventListener("touchstart",touchStartFunc1,false);		
			divs.addEventListener("touchmove",touchStartFunc2,false);			
			divs.addEventListener("touchend",touchStartFunc3,false);			
			//需要写三个对应的函数			
			function touchStartFunc1(event){		
					var touch=event.changedTouches[0];				
					startX=Number(touch.pageX);				
					startY=Number(touch.pageY);						
			}
			var a=0,n=0;
			function touchStartFunc2(event){
			        event.preventDefault();  
					var touch=event.changedTouches[0];									
					endX=Number(touch.pageX);					
					endY=Number(touch.pageY);								
					var a=endX-startX;
                      if(a>0){
                          n--;
                          if(n<0){
                            n=71;
                          }
                          $('#box img').eq(n).show().siblings().hide();
                       }else if(a=0){
                          n=n;
                       }else{
                          n++;
                          if(n>71){
                            n=0;
                          }
                          $('#box img').eq(n).show().siblings().hide();
                       }
					
			}		
			function touchStartFunc3(event){			
			};
var scale=1;
var timer=null;
var flagx=true;
var time=50;
$(".sll").click(function(){
	divs.removeEventListener("touchstart",touchStartFunc1,false);		
	divs.removeEventListener("touchmove",touchStartFunc2,false);			
	divs.removeEventListener("touchend",touchStartFunc3,false);
	if(flagx){
		clearInterval(timer);
		var d=0;	
		function Amintate(){
			$('#box img').eq(d).show().siblings().hide();
			if(d>=71){
				d=0;
			}
			d++;
	    }
	    timer=setInterval(Amintate,time);
	    flagx=false;
	}else{
		clearInterval(timer);
		flagx=true;
		divs.addEventListener("touchstart",touchStartFunc1,false);		
		divs.addEventListener("touchmove",touchStartFunc2,false);			
		divs.addEventListener("touchend",touchStartFunc3,false);
    }
});
$(".jia").click(function(){
	scale+=0.5;
	if(scale>=2){scale=2}
	$("#box").css("transform","scale("+scale+")");
});

$(".jian").click(function(){
	scale-=0.5;
	if(scale<=0.5){scale=0.5}
	$("#box").css("transform","scale("+scale+")");
});
$("#box").click(function(){
	clearInterval(timer);
	divs.addEventListener("touchstart",touchStartFunc1,false);		
	divs.addEventListener("touchmove",touchStartFunc2,false);			
	divs.addEventListener("touchend",touchStartFunc3,false);
});
