function move(obj,json,fn){
	var time=null;
	var s=0;
	var curr=0;
	var flag=true;
	clearInterval(obj.time);
	obj.time=setInterval(function(){
		for(var styleName in json){
		if(styleName=='opacity'){
			curr=parseInt(parseFloat(getStyle(obj,styleName))*100);
		}else{curr=parseInt(getStyle(obj,styleName));}
		
		s=(json[styleName]-curr)/10;
		s=s>0?Math.ceil(s):Math.floor(s);
		if(curr!=json[styleName]){
			flag=false;
			if(styleName=='opacity'){
					obj.style[styleName]=(curr+s)/100;
				}else{obj.style[styleName]=curr+s+'px';}
		}else{
			flag=true;
		}
		
			}
			if(flag){
			//clearInterval(obj.time);
			
			
			if(fn){
				fn();
			}
		}	
	},30)
}

function getStyle(obj,styleName){
	if(obj.currentStyle){
		return obj.currentStyle[styleName];
	}else{
		return getComputedStyle(obj,false)[styleName];
	}
}

