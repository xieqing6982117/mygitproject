

				//打飞机游戏
				//游戏引擎： 对象
				//我的飞机： 对象
				//子弹： 构造函数
				//敌机： 构造函数

onload = function(){
	var ul = document.getElementById("list");

	var ali = ul.getElementsByTagName("li");
	
	for (var i=0; i<ali.length; i++) {
		ali[i].onclick = function(){
			//把ul移除
			ul.parentNode.removeChild(ul);
			
			//子弹的发射时间间隔
			myPlane.fireInterval = this.value-0;
			
			//初始化并开始游戏
			gameEngine.init().start();
		}
	}
}

