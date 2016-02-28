window.onresize=window.onload=function(){
	var width=document.documentElement.clientWidth;
    var height=document.documentElement.clientHeight;
	 var onav=document.getElementById('nav');
	 var oli=onav.getElementsByTagName('li');
	 var ocontent=document.getElementById('content');
	 var oleft=getClass('content','left');
	  var oright=getClass('content','right');
	  var oh_b=getClass('home','h_b')[0];
	 //var oleft=ocontent.getElementsByTagName('div');
	  onav.style.left=(width-onav.offsetWidth)/2+'px';
	  ocontent.style.width=width+'px';
	  ocontent.style.height=height+'px';
	  oh_b.style.left=(width-oh_b.offsetWidth)/2+'px';
	  oh_b.style.top=(height-oh_b.offsetHeight)/2+'px';
	  
	  /*var arry=[];
	for(var i=0;i<odiv.length;i++){
		arry[i]={top:odiv[i].offsetTop,left:odiv[i].offsetLeft};
	}
	for(var i=0;i<odiv.length;i++){
		odiv[i].style.position='absolute';
		odiv[i].style.top=arry[i].top+'px';
		odiv[i].style.left=arry[i].left+'px';
		odiv[i].style.margin='0px';	
	}*/

	for(var i=0;i<oli.length;i++){
      oli[i].index=i;
      oleft[i].style.top=(height-oleft[0].offsetHeight)/2+'px';
      oright[i].style.top=(height-oright[0].offsetHeight)/2+'px';
      oli[i].onclick=function(){
      	var index=0;
      	index=this.index;
      	fn(index);
      	 
      }
    }
    	function fn(index){
        move(ocontent,{top:-height*index},function(){
        	//alert(a);
        	for(var i=0;i<oleft.length;i++){
        		for(var i=0;i<oleft.length;i++){
        			oleft[i].style.left=0+'px';
        		    oright[i].style.right=0+'px';
        		    oleft[i].style.opacity='0';
        		    oright[i].style.opacity='0';
        		    oli[i].className='';
        		}
        		oli[index].className='on';
        		oleft[index].style.opacity='1';
        		 oright[index].style.opacity='1';
        		if( oright[index].style.opacity=='1'){
				oleft[index].style.left=width/2+'px';
        		oright[index].style.right=width/2+'px';
        		}		
        }
        
        });}
        fn(0);
      
}
//获取class
  function getClass(obj,oclass){
    var obj=document.getElementById(obj); 
    var arr=obj.getElementsByTagName('*');
    var array=[];
    for(var i=0;i<arr.length;i++){
      if(arr[i].className==oclass)
      {
        array.push(arr[i]);
      }
    }
    return array;
     }
  //
  var S=0;
		function moveT(obj,T){
			
			time=setInterval(function(){
				S=S+(T-obj.offsetLeft)/20;
				//S=S>0?Math.ceil(S):Math.floor(S);
				S=S*0.7;
				if(T==obj.offsetLeft){
					clearInterval(time);
					
				}else{
					obj.style.left=obj.offsetLeft+S+'px';
				}
			},30)
		}
	var S=0;
		function moveL(obj,T){
			
			time=setInterval(function(){
				S=S+(T-obj.offsetright)/20;
				//S=S>0?Math.ceil(S):Math.floor(S);
				S=S*0.7;
				if(T==obj.offsetright){
					clearInterval(time);
					
				}else{
					obj.style.right=obj.offsetright+S+'px';
				}
			},30)
		}


		