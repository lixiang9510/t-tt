var oBox=document.getElementById('header2')

var isShow=false;
	window.onscroll=function(){
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
	}