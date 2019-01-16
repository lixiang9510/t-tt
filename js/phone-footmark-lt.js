 //处理购物车
handleCart();
//处理导航下拉框调用
handleNav();
//处理搜索框
handleSearch();
//处理导航固定调用
handleNavFixed();
//处理商品切换调用
handleGoods();


//处理购物车
function handleCart(){
	var oShopCart = document.querySelector('.shopcart img');
	var oCartBox = document.querySelector('.cart-box');

	oShopCart.onmouseenter = function(){
        oCartBox.style.display = 'block';
        // animate(oCartBox,{display:block},true);
	}
	oShopCart.onmouseleave = function(){
		oCartBox.style.display = 'none';
	}
}


//处理导航下拉框
function handleNav(){
	//1.获取元素
	var  aNavItem = document.querySelectorAll('.header .ul2 .nav-li-item');
	// console.log(aNavItem); 
	var  aNavCentent = document.querySelector('.header .nav-centent');
	// console.log(aNavCentent);
	var oNavCententContainer = aNavCentent.querySelector('.container');
	var hiddenTime = 0;
	var loadTime = 0;

	//2.绑定列表事件
    for(var i=0; i<aNavItem.length-3; i++){
    	// console.log(aNavItem[i]);
        //2.1.鼠标移入事件
        aNavItem[i].index = i;
        aNavItem[i].onmouseenter = function(){
        	// console.log(aNavItem[i]);
        	clearTimeout(hiddenTime);
            animate(aNavCentent,{height:400},true,function(){
				aNavCentent.style.overflow = 'visible';
			});	
			// 模拟数据加载完成
			var index = this.index;
			//去除不必要的加载
			clearTimeout(loadTime);
			loadTime = setTimeout(function(){
				loadData(index);
			},1000);
        }
		// 2.2.鼠标移出事件
        aNavItem[i].onmouseleave = function(){
            hiddenNavCentent();
		}
	}
	aNavCentent.onmouseenter = function(){
		clearTimeout(hiddenTime);
	}
	aNavCentent.onmouseleave = function(){
		hiddenNavCentent();
	}
	function hiddenNavCentent(){
    	hiddenTime = setTimeout(function(){
            aNavCentent.style.overflow = 'hidden';
			animate(aNavCentent,{height:0},true,function(){
			})	
        },300)
    }

    function loadData(index){
        var data = aNavItemData[index];
        var html = '<ul>';
        for(var i=0; i<data.length; i++){
        	html += '<li>';
			html +=	     '<div class="img-box">';
			html +=		     '<a href="'+data[i].url+'">';
			html +=			    '<img src="'+data[i].img+'" alt="">';
			html +=		     '</a>';
			html +=	      '</div>';
			html +=	       '<p>'+data[i].name+'</p>';
			html +=	       '<strong>'+data[i].price+' 元起</strong>';
			html +='</li>';
        }
        html += '</ul>';

        oNavCententContainer.innerHTML = html;
	}
}

//处理搜索框
function handleSearch(){
	var oSearchInput = document.querySelector('.header .inputer input');
	var oSearchSpan = document.querySelector('.header .inputer span');
	var oSearchPA = document.querySelector('.header .inputer p a');
	var osearchList = document.querySelector('.header .inputer .input-list');
	// console.log(oSearchSpan);
	// console.log(oSearchInput);
	//获取焦点事件
	oSearchInput.onfocus = function(){
		oSearchSpan.style.display = 'block';
	}
    //焦点失去事件
	oSearchInput.onblur = function(){
		oSearchSpan.style.display = 'none';
	}
	oSearchInput.oninput = function(){
		oSearchSpan.style.display = 'none';
		oSearchPA.style.display = 'none';
        osearchList.style.display = 'none';
		oSearchInput.onfocus = function(){
			oSearchSpan.style.display = 'none';
		}
	}

}

//处理导航固定调用
function handleNavFixed(){
	var oFixedNav = document.querySelector('.fixed-nav');
	var isShow = false;
	window.onscroll = function(){
		if(getScrollTop() >= 145){
			if(!isShow){
				// console.log('aa');
				animate(oFixedNav,{height:100},true,function(){
					handleCart();
				});
				isShow = true;
				
				handleNav();
			}
		}else if(getScrollTop() < 145){
			if(isShow){
				// console.log('bb');
				animate(oFixedNav,{height:0},true);
				isShow = false;
			}
		}
	}
}

//处理商品切换
//构造函数handleGoods()
function handleGoods(){
	// 1. 获取元素
	var aBtn = document.querySelectorAll('.main .phone-goods .ul5 li .ul6 li');
	var aImgBox = document.querySelectorAll('.main .phone-goods .ul5 li .img-box img');
	// console.log(aBtn);
	// console.log(aImgBox);
	// 2. 绑定事件 
	// for(var i = 0;i<aBtn.length;i++){
	// 	// console.log(aBtn[i]);
	// 	aBtn[i].index = i;
	// 	aBtn[i].onclick = function(){
	// 		for(var j = 0;j<aBtn.length;j++){
	// 			// console.log(aBtn[i]);
	// 			// console.log(aImgBox[j]);
	// 			aImgBox[j].style.zIndex = 0;
	// 		}
	// 		aImgBox[this.index].style.zIndex = 999;
	// 	}
	// }
}
