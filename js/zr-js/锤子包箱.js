var oBox=document.querySelector('.oneself2')
var oBoxBottom=document.getElementById('box3')
choose();
language();

window.addEventListener('scroll',yundong(oBox,100),false)
window.addEventListener('scroll',yundong(oBoxBottom,800),false)


function choose(){
	var oSurvey=document.querySelector('.survey');
	var oSkill=document.querySelector('.skill');
	var oFather1=document.querySelector('.main');

	var oSpan1=document.querySelector('.span2');
	var oSpan2=document.querySelector('.span3');
	var oFather2=document.querySelector('.main2');
	

	oSurvey.onclick=function(){
		oFather1.style.display='block';
		oFather2.style.display='none';
		this.className='survey active';
		oSpan1.className='span2 active';
		oSkill.className='skill';
		oSpan2.className='span3';
	}
	oSkill.onclick=function(){
		oFather2.style.display='block';
		oFather1.style.display='none';
		oSurvey.className='survey';
		oSpan1.className='span2';
		this.className='skill active';
		oSpan2.className='span3 active';
	}
	oSpan1.onclick=function(){
		oFather1.style.display='block';
		oFather2.style.display='none';
		this.className='span2 active';
		oSurvey.className='survey active';
		oSkill.className='skill';
		oSpan2.className='span3';
	}
	oSpan2.onclick=function(){
		oFather2.style.display='block';
		oFather1.style.display='none';
		oSkill.className='skill active'
		this.className='span3 active';
		oSurvey.className='survey';
		oSpan1.className='span2';	
	}
}


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
