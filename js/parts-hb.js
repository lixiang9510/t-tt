
HammerShopping();
HammerSearch();
HammerNav();


//购物车
function HammerShopping(){
	var oSc = document.querySelector('header .sc');
	var oI = document.querySelector('header .sc .empty');
	var oShoppingCart = document.querySelector('header .sc .shopping-cart');
	var timer = 0;
	oI.onmouseenter = function(){
		oShoppingCart.style.display = 'block';
	}
	oI.onmouseleave = function(){		
		timer = setTimeout(function(){
					oShoppingCart.style.display = 'none';
				},300)
	}
	oShoppingCart.onmouseenter = function(){
		clearTimeout(timer);
		oShoppingCart.style.display = 'block';
	}
	oShoppingCart.onmouseleave = function(){
		oShoppingCart.style.display = 'none';
	}
	// function init(){
	// 	var oDiv = document.createElement('div');
	// 	var oSpan = document.createElement('span');
	// 	var oH3 = document.createElement('h3');
	// 	var oP = document.createElement('p');
	// 	oSpan.className = 'iconfont';
	// 	oSpan.innerHTML = '&#xe629;';
	// 	oH3.innerHTML = '购物车为空';
	// 	oP.innerHTML = '您还没有选购任何商品，现在前往商城选购吧！';
	// 	oDiv.className = 'shopping-cart';
	// 	oDiv.appendChild(oSpan);
	// 	oDiv.appendChild(oH3);
	// 	oDiv.appendChild(oP);
	// 	oSc.appendChild(oDiv);
	// 	oDiv.style.display = 'block';
	// }	
}
//搜索输入框
function HammerSearch(){
	var oInput = document.querySelector('nav .nav-search .nav-search-box input');
	var oP = document.querySelector('nav .nav-search .nav-search-box p');
	var oEmpty = document.querySelector('nav .nav-search .nav-search-box .nav-search-empty');
	console.log(oEmpty);
	oInput.onfocus = function(){
		if(oInput.value == ''){
			oP.style.display = 'block';
			oEmpty.style.display = 'block';
		}else{
			oP.style.display = 'none';
			oEmpty.style.display = 'none';
		}	
	}
	oInput.oninput = function(){
		if(oInput.value == ''){
			oP.style.display = 'block';
			oEmpty.style.display = 'block';s
		}else{
			oP.style.display = 'none';
		}
	}
	oInput.onblur = function(){
		oP.style.display = 'none';
		oEmpty.style.display = 'none';
	}
}

