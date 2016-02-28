window.onresize=window.onload=function(){
	var width=document.documentElement.clientWidth;
  	var height=document.documentElement.clientHeight;
  	var body=document.getElementsByTagName('body')[0];
  	body.style.width=width+'px';
  	body.style.height=height+'px';
	var omusic_list=document.getElementById('music_list');
	var oli=omusic_list.getElementsByTagName('li');
	var oaudio=omusic_list.getElementsByTagName('audio');
	var ospan=omusic_list.getElementsByTagName('span');
	var otitle_t=getClass('music','title')[0];
	var oplay_l=getClass('music','play')[0];
	var oimg_l=oplay_l.getElementsByTagName('img')[0];
	var ul_img=getClass('music','img')[0];
	var ul_li_list=getClass('music','list')[0];
	var omusic_start=document.getElementById('music_start');
	var otitle_c=getClass('music_start','title')[0];
	var ojdt_span_zs=getClass('jdt','span_1')[0];
	var ojdt_span_ts=getClass('jdt','span_2')[0];
	var ojdt_span_l=getClass('jdt','span_r')[0];
	var otext=getClass('music_start','text')[0];
	var omusic_text=document.getElementById('music_text');
	var text_li=omusic_text.getElementsByTagName('li');
	var txt;
	var time;
	var on=false;
	for(var i=0;i<oli.length;i++){//歌曲的播放
		oli[i].index=i;
		oli[i].onclick=function(){
			for(var i=0;i<oaudio.length;i++){
				oaudio[i].pause();
				oaudio[i].currentTime='0';
				ojdt_span_l.style.width='0px';
				if(time){
				clearInterval(time);}
			}
			oaudio[this.index].play();
			var zs=(oaudio[this.index].duration)/60;
		    ojdt_span_zs.innerHTML=zs.toFixed(2);
			ojdt_span_ts.innerHTML=oaudio[this.index].currentTime;

			otitle_t.innerHTML=ospan[this.index].innerHTML;
			otitle_c.innerHTML=ospan[this.index].innerHTML;
			oimg_l.src='img/4.png';
			otext.innerHTML='';
			gc(this.index);
			index=this.index;
			function fn(index){
				var ts=(oaudio[index].currentTime)/60;
				ojdt_span_ts.innerHTML=ts.toFixed(2);
				ojdt_span_l.style.width=(ts/zs)*500+'px';
				var a=parseInt(oaudio[index].currentTime);
				var op=document.getElementById(a);
				var oop=otext.getElementsByTagName('p');
				if(op){
					for(var i=0;i<oop.length;i++){
					oop[i].style.color='#666666';
				}
				
				op.style.color='#2590D5';

			}	
			}
			time=setInterval(function(){
				fn(index);
			},30);
			on=true;
			
		}
		
	}
	oplay_l.onclick=function(){//歌曲的播放
	if(on){
		for(var i=0;i<oaudio.length;i++){
				oaudio[i].pause();
				oaudio[i].currentTime='0';
				oimg_l.src='img/6.png';
				ojdt_span_l.style.width='0px';
				otext.innerHTML='';
				//ojdt_span_ts.innerHTML='';
				on=false;
				clearInterval(time);
			}
	}else{
		oaudio[0].play();
		otitle_t.innerHTML=ospan[0].innerHTML;
		otitle_c.innerHTML=ospan[0].innerHTML;
		var zs=(oaudio[0].duration)/60;
		ojdt_span_zs.innerHTML=zs.toFixed(2);
		ojdt_span_ts.innerHTML=oaudio[0].currentTime;
		oimg_l.src='img/4.png';
		gc(0);
			function fn(){
				var ts=(oaudio[0].currentTime)/60;
				ojdt_span_ts.innerHTML=ts.toFixed(2);
				ojdt_span_l.style.width=(ts/zs)*500+'px';
				otext.scrollTop=(ts/zs)*400-(ts/zs)*50;
				console.log((ts/zs)*400);
				var a=parseInt(oaudio[0].currentTime);
				var op=document.getElementById(a);
				var oop=otext.getElementsByTagName('p');
				/*if(op){
					otext.style.top=op.offsetTop-(otext.offsetHeight)/2+'px';
				}*/
				if(op){
					for(var i=0;i<oop.length;i++){
					oop[i].style.color='#666666';
				}
				
				op.style.color='#2590D5';

			}	
			}
			time=setInterval(function(){
				fn();
			},30);
		on=true;
	}
	}
	ul_li_list.onclick=ul_img.onclick=function(){//列表显示和隐藏
		if(omusic_start.style.display=='block'){
			omusic_start.style.display='none';
		omusic_list.style.display='block';
		ul_li_list.innerHTML="歌词";
		}else{
			
		omusic_start.style.display='block';
		omusic_list.style.display='none';
		ul_li_list.innerHTML="列表";
		}
	}
	
	//获取总时间
	//duration

	function gc(i){//歌词
		var array=[];
		arr=text_li[i].innerHTML;
		
		arry=arr.split('[');
		arry.shift();
		for(var i=0;i<arry.length;i++){
			var o=arry[i].split(']');

			if(o[1]!=''){
				var tarr=o[0].split('.');
				var tim=tarr[0].split(':');
				//console.log(tim);
				var t=parseInt(tim[0]*60)+parseInt(tim[1]);
				//console.log(o[1]);
				var txt=o[1];
				text="<p id="+t+">"+txt+"</p>";

		        otext.innerHTML=otext.innerHTML+text;
			}

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