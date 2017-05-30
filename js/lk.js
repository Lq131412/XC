var box=document.getElementById('box');
      var mylist=document.getElementById('mylist');
      var lis=mylist.getElementsByTagName('li');
      var goTop = 0;
      var time = null;
      window.onscroll = function(){
        goTop = document.documentElement.scrollTop||document.body.scrollTop;
        if(goTop>=243){
         box.style.display='block';
         
         if(goTop<700){      
              clear();
               lis[0].className='active';
         }
         if(goTop>=700&&goTop<1140){
             clear();
            lis[1].className='active';           
         }
         if(goTop>=1140){
             clear();
            lis[2].className='active';
         }
        }else{
          box.style.display='none';
        }
        lis[0].onclick=function(){
              clear();
              lis[0].className='active';
              document.documentElement.scrollTop =243;
              document.body.scrollTop = 243;
        }
        lis[1].onclick=function(){
              clear();
              lis[1].className='active';
              document.documentElement.scrollTop =700;
              document.body.scrollTop = 700;
        }
        lis[2].onclick=function(){
              clear();
              lis[2].className='active';
              document.documentElement.scrollTop =1140;
              document.body.scrollTop = 1140;
        }
        function clear(){
           for(var j=0;j<lis.length;j++){
              lis[j].className='';
           }
       }      
  }