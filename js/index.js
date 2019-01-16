language();

function language(){
	var oBox8=document.querySelector('.box8');
	var oBox9=document.querySelector('.box9');
	var oBox10=document.querySelector('.box10');
	var oBox11=document.querySelector('.box11');
	var oFather=document.querySelector('.father');
	

	oBox10.onclick=function(){
		oFather.style.display='block';
		oBox10.style.display='none';

		oBox8.onclick=function(){
			oFather.style.display='none';
			oBox10.style.display='block';
		}
		oBox9.onclick=function(){
			oFather.style.display='none';
			oBox10.style.display='none';
			oBox11.style.display='block'
		}
		oBox11.onclick=function(){
			oFather.style.display='block';
			oBox11.style.display='none';
		}
	}
}