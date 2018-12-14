var oBox=document.getElementById('header2')

var oBox1=document.getElementById('down')


var isShow=false;

window.addEventListener('scroll',function(){
	if(getScrollTop()>=100){
		if(!isShow){
			oBox.style.display='block'
			animate(oBox,'height',40);
			isShow=true;
		}
	}else{
		if(isShow){
			oBox.style.display='none'
			animate(oBox,'height',0);
			isShow=false;
		}	
	}
},false)

/*
window.addEventListener('scroll',function(){
	if(getScrollTop()>=850){
		if(!isShow){
			oBox1.style.display='block';
			isShow=true;
		}
	}else{
		if(isShow){
			oBox1.style.display='none';
			isShow=false;
		}
	}	
},false)
*/