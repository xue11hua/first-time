window.onresize=function(){
	var ologn_bj=document.getElementById('logn_bj');
	ologn_bj.style.width=document.documentElement.clientWidth+'px';
	ologn_bj.style.height=document.documentElement.clientHeight+'px';
	var ologn_k=document.getElementById('logn_k');
	ologn_k.style.top=(document.documentElement.clientHeight-ologn_k.offsetHeight)/2+'px';
	ologn_k.style.right=(document.documentElement.clientWidth-ologn_k.offsetWidth)/6+'px';
	var ocontent=document.getElementById('content');
	ocontent.style.width=document.documentElement.clientWidth+'px';
	ocontent.style.height=document.documentElement.clientWidth+'px';
	var onav=document.getElementById('nav');
	onav.style.width=document.documentElement.clientWidth+'px';
	var ocontent_cen=document.getElementById('content_center');
	var olist=document.getElementById('list');
	ocontent_cen.style.width=document.documentElement.clientWidth-olist.offsetWidth+'px';
	var oj_s=document.getElementById('j_s');
	oj_s.style.left=document.documentElement.clientWidth+'px';
}
window.onload=function(){
	var on=true;
	var divhtml=0;
	var ologn_bj=document.getElementById('logn_bj');
	var oj_s=document.getElementById('j_s');
	var oimg=getClass('j_s','img')[0];
	ologn_bj.style.width=document.documentElement.clientWidth+'px';
	ologn_bj.style.height=document.documentElement.clientHeight+'px';
	var ologn_k=document.getElementById('logn_k');
	ologn_k.style.top=(document.documentElement.clientHeight-ologn_k.offsetHeight)/2+'px';
	ologn_k.style.right=(document.documentElement.clientWidth-ologn_k.offsetWidth)/6+'px';
	var ocontent=document.getElementById('content');
	ocontent.style.width=document.documentElement.clientWidth+'px';
	ocontent.style.height=document.documentElement.clientWidth+'px';
	var ologn=document.getElementById('logn');
	var onav=document.getElementById('nav');
	onav.style.width=document.documentElement.clientWidth+'px';
	var ocontent_cen=document.getElementById('content_center');
	var olist=document.getElementById('list');
	var olistli=olist.getElementsByTagName('li');
	var omenu=document.getElementById('menu');
	var olistArray=[];
	var zindex=2;
	var fn;
	oj_s.style.left=document.documentElement.clientWidth+'px';
	ocontent_cen.style.width=document.documentElement.clientWidth-olist.offsetWidth+'px';
	oj_s.onclick=function(){
		if(oj_s.offsetLeft==document.documentElement.clientWidth){
		move(oj_s,{left:oj_s.offsetLeft-oj_s.offsetWidth})}else{
			move(oj_s,{left:document.documentElement.clientWidth})
		}
	}
	

	//阻止默认事件
	function show(){	
					document.onclick=function(){
				for(var j=0;j<owenj_li.length;j++){
				owenj_li[j].className='';
				owenj_p[j].className='';
			}
			os_ul.className='none';
			os_b.innerHTML='';
			menu.style.display='none';
		}}
		//阻止默认事件
		//新建文件夹方法
	function xg(){
		for(var i=0;i<owenj_li.length;i++){
			if(owenj_li[i].className=='border')
			{
				var owenj_div=document.createElement('div');
				var owenj_input=document.createElement('input');
				var owenj_input_t=document.createElement('input');
				var owenj_input_bt=document.createElement('input');
				owenj_p[i].innerHTML='';
				owenj_p[i].className='in';
				owenj_input_t.type='button';
				owenj_input_bt.type='button';
				owenj_input.className='text';
				owenj_input_t.className='bt_d';
				owenj_input_bt.className='bt_f';
				owenj_input.value='新文件夹';
				owenj_input_t.value='确定';
				owenj_input_bt.value='取消';
				owenj_div.appendChild(owenj_input);
				owenj_div.appendChild(owenj_input_t);
				owenj_div.appendChild(owenj_input_bt);
				owenj_li[i].appendChild(owenj_div);
				owenj_div.className='div';
				var obt_d=getClass('content_center','bt_d')[0];
				var otext=getClass('content_center','text')[0];
				var oin=getClass('content_center','in')[0];
				var oborder=getClass('content_center','border')[0];
				obt_d.onclick=function(){
					oin.innerHTML=otext.value;
					owenj_div.remove();	
					on=true;
				}
			}				
		}		
		}
		//新建文件夹方法
		show();
	var onew=getClass('content_center','new')[0];
	var oremove=getClass('content_center','remove')[0];
	var orevise=getClass('content_center','revise')[0];
	var owenj=getClass('content_center','wenj_x')[0];
	var owenj_s=getClass('content_center','wenj_s')[0];
	var oul=owenj.getElementsByTagName('ul')[0];
	var os_ul=owenj_s.getElementsByTagName('ul')[0];
	var os_b=owenj_s.getElementsByTagName('span')[0];
	var owenj_li=oul.getElementsByTagName('li');
	var owenj_p=oul.getElementsByTagName('p');
	//新建
	onew.onclick=function(event){
		var event=event || window.event;
		if(on){
		var owenj_li=document.createElement('li');
		var owenj_img=document.createElement('img');
		var owenj_p=document.createElement('p');
		owenj_p.innerHTML='新建文件夹';
		owenj_img.src='img/2.png';
		oul.appendChild(owenj_li);
		owenj_li.appendChild(owenj_img);
		owenj_li.appendChild(owenj_p);
		owenj_li.className='border';
		xg();
		var obt_f=getClass('content_center','bt_f')[0];
		var oborder=getClass('content_center','border')[0];
		obt_f.onclick=function(){
					oborder.remove();
					on=true;
				}
		owenj_li=rem(owenj_li);
	}else{
		alert('每次只能新建一个文件夹');
	}
	event.stopPropagation();
	on=false;
	}
	//新建
	//添加事件
	for(var i=0;i<owenj_li.length;i++){
		rem(owenj_li[i]);
	}
	function rem(obj){
		obj.onclick=function(event){
			var event=event || window.event;
			this.className='border';
			event.stopPropagation();
			os_ul.className='';
			var oborder=getClass('content_center','border');
			os_b.innerHTML='已选中'+oborder.length+'文件夹';	
		}	
	}
	//添加事件
	//删除
	oremove.onclick=function(event){
		var event=event || window.event;
		for(var i=0;i<owenj_li.length;i++){
			if(owenj_li[i].className=='border'){
				//var span=document.createElement('span');
				//owenj_li[i].appendChild(span);
				owenj_li[i].remove();
				i--;
			}	
		}
		/*var owenj=getClass('content_center','wenj_x')[0];
		var span=owenj.getElementsByTagName('span');
		for(var j=0;j<span.length;j++){
			span[j].index=j;
					console.log(span[j].index);
					span[j].parentNode.parentNode.removeChild(span[j].parentNode);
					j--;
				}*/
		event.stopPropagation();
	}
	//删除
	//修改
	orevise.onclick=function(event){
		var event=event || window.event;
		var a=0;
		var arry=[];
		var arrya=[];
		for(var i=0;i<owenj_li.length;i++){
			owenj_li[i].index=i;
		if(owenj_li[i].className=='border'){
			arry[i]={i:owenj_li[i]};
            arrya.push(arry.length);
            console.log(arrya.length);
            a=arrya.length;
            if(a>1){
            	alert('请选择一个');
            	odiv.remove();
            }
		}
		
	}
		xg();
		var obt_f=getClass('content_center','bt_f')[0];
		var oin=getClass('content_center','in')[0];
		var odiv=getClass('content_center','div')[0];
		obt_f.onclick=function(divhtml){
					oin.innerHTML='文件夹1';
					odiv.remove();
					on=true;
				}
		event.stopPropagation();
	}
	//修改
	//全选
	var	ocheck=getClass('content_center','check')[0];
	ocheck.onclick=function(event){
		var event=event || window.event;
		for(var k=0;k<owenj_li.length;k++){
			console.log(owenj_li[k]);
			owenj_li[k].className='border';
		}
		os_ul.className='';
		event.stopPropagation();
	}
	//全选
	//刷新
	var olocation=getClass('content_center','location')[0];
	olocation.onclick=function(){
		window.location.reload();
	}
	//鼠标右击
	document.oncontextmenu = function(event){
		var event=event || window.event;
		omenu.style.display='block';
		omenu.style.top=event.clientY+'px';
		omenu.style.left=event.clientX+'px';
		event.preventDefault();
	}
	//登录
	var logn_dl=getClass('logn_k','dl')[0];
	logn_dl.onclick=function(){
		
		   	move(ologn_k,{right:-(ologn_k.offsetWidth)},function(){
		   		move(ologn_bj,{opacity:0});
		   		//ologn_bj.style.display='none';
		   		move(ocontent,{opacity:100});
		        ologn.style.display='none';
		       
		         ocontent_cen.style.width=document.documentElement.clientWidth-olist.offsetWidth+'px';
		         fn();
		   	})		
	}
	 //布局转换
	function fn(){	
		for(var i=0;i<olistli.length;i++){
			olistli[i].index=i;
			olistArray[i]={left:olistli[i].offsetLeft,top:olistli[i].offsetTop};
		}
		for(var i=0;i<olistli.length;i++){
			olistli[i].style.top=olistArray[i].top+'px';
			olistli[i].style.left=olistArray[i].Left+'px';
			olistli[i].style.position='absolute';
			fntk(olistli[i],olistli[i]);
		}
	  }	   		 

	//拖拽
	var otitle=getClass('logn_k','title')[0];
		fntk(otitle,ologn_k);
		function fntk(on,box){
			var on=on;
			var obox=box;			
			on.onmousedown=function(event){				
					clearInterval(on.time);				
				on.style.zIndex=zindex++;
				var olix=obox.offsetLeft;
				var oliy=obox.offsetTop;
				event=event || window.event;				
				var x=event.clientX-obox.offsetLeft;
				var y=event.clientY-obox.offsetTop;
				document.onmousemove=function(event){
					var t=event.clientY-y;
					var l=event.clientX-x;
					var w=document.documentElement.clientWidth || document.body.clientWidth;
					var h=document.documentElement.clientHeight || document.body.clientHeight;
					obox.style.top=t+'px';
					obox.style.left=l+'px';
						//判断是否碰撞
						for(var i=0;i<olistli.length;i++){
						olistli[i].className='';
					}
					var oner=findmin(obox,olistli);
				if(oner){					
					oner.className='border';
				}					
				}
				document.onmouseup=function(){
					document.onmousemove=null;
					document.onmouseup=null;
					//位置互换
					var oner=findmin(obox,olistli);
					if(oner){
					oner.style.zIndex=zindex++;
					move(oner,olistArray[obox.index]);
					move(obox,olistArray[oner.index]);
					oner.className='';
					var tmp=0;
					tmp=obox.index;
					obox.index=oner.index;
					oner.index=tmp;
				}else{
					move(obox,olistArray[obox.index]);					
				}
				}
				return false;
			}	
		}				
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
	function findmin(obj,oli){
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