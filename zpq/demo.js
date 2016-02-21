window.onload=function(){
	var oul=document.getElementById('ul');
	var oli=oul.getElementsByTagName('li');
	var liarray=[];
	var zindex=2;
	
	for(var i=0;i<oli.length;i++){
		liarray[i]={left:oli[i].offsetLeft,top:oli[i].offsetTop}
	}
	for(var i=0;i<oli.length;i++){
		oli[i].style.position='absolute'
		oli[i].style.left=liarray[i].left+'px';
		oli[i].style.top=liarray[i].top+'px';
		oli[i].style.margin='0px';
		oli[i].index=i;
		move(oli[i]);
	}

	function move(odiv){
		odiv.onmousedown=function(event){
			odiv.style.zIndex=zindex++;			
			var event=event || window.event;
			var l=event.clientX-odiv.offsetLeft;
			var t=event.clientY-odiv.offsetTop;
			document.onmousemove=function(event){
				var event=event || window.event;
				odiv.style.left=event.clientX-l+'px';
				odiv.style.top=event.clientY-t+'px';
				for(var i=0;i<oli.length;i++){
					
					oli[i].className='';
					
				}
				var oner=findmin(odiv);
				if(oner){
					oner.className='on';
				}
				/*for(var i=0;i<oli.length;i++){
					oli[i].className='';
					if(odiv==oli[i])continue;
					if(movejc(odiv,oli[i])){

						oli[i].className='on';
					}
				}*/
				
			}
			document.onmouseup=function(){
				document.onmousemove=null;
				document.onmouseup=null;
				var oner=findmin(odiv);
				if(oner){
					oner.style.zIndex=zindex++;
					movekj(oner,liarray[odiv.index]);
					movekj(odiv,liarray[oner.index]);
					
					oner.className='';
					var tmp=0;
					tmp=odiv.index;
					odiv.index=oner.index;
					oner.index=tmp;

				}else{
					movekj(odiv,liarray[odiv.index]);
				}
					
				
				
				
			}
			clearInterval(odiv.time);
			return false;
		}

	}
	//碰撞检测
	function movejc(obj,obj1){
		var l=obj.offsetLeft;
		var r=obj.offsetLeft+obj.offsetWidth;
		var t=obj.offsetTop;
		var b=obj.offsetTop+obj.offsetHeight;
		var l1=obj1.offsetLeft;
		var r1=obj1.offsetLeft+obj1.offsetWidth;
		var t1=obj1.offsetTop;
		var b1=obj1.offsetTop+obj1.offsetHeight;
		if(r<l1 || l>r1 || b<t1 || t>b1){
			return false;
		}else{
			return true;
		}
	}
	//算距离
	function getdis(obj,obj1){
		var a=obj.offsetLeft-obj1.offsetLeft;
		var b=obj.offsetTop-obj1.offsetTop;
		var c=Math.sqrt(a*a+b*b);
		return c;
	}
	//求最小距离
	function findmin(obj){
		var make=999999;
		var makeindex=-1;
		for(var i=0;i<oli.length;i++){
			if(obj==oli[i])continue;
			if(movejc(obj,oli[i])){

				var s=getdis(obj,oli[i])
				if(make>s){
					make=s;
					makeindex=i;
				}
			}
			
		}
		if(makeindex==-1){
			return null;
		}else{
			return oli[makeindex];
		}

	}
	
	
	
}



