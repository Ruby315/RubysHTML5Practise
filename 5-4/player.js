// 加载
	window.onload = function(){
	//获取音频
	let mysong = document.querySelector("#mysong");
	let mainControl = document.querySelector("#mainControl");//播放按钮
	let stopControl = document.querySelector("#stopControl");//暂停按钮
	let voiceEmp = document.querySelector(".voiceEmp");//静音按钮
	let voiceFull = document.querySelector(".voiceFull");//满音按钮
	let leftControl = document.querySelector(".leftControl");//快退按钮
	let rightControl = document.querySelector(".rightControl");//快进按钮
	let songTime = document.querySelector(".songTime");//播放时长
	
	//播放
	mainControl.onclick = function(){
		mysong.play();
		//播放按钮隐藏，暂停按钮出现
		mainControl.style.display = "none";
		stopControl.style.display = "block";
		// 时间美秒走
		setInterval(timeSpan,1000)
		// alert(mysong.duration);
		
	}
	stopControl.onclick = function(){
		mysong.pause();
	}
	// 快退
	leftControl.onclick = function(){
		mysong.currentTime -= 30.0;
	}
	// 快进
	rightControl.onclick = function(){
		mysong.currentTime += 30.0;
	}
	// 静音
	voiceEmp.onclick = function(){
		mysong.volume = 0;
	}
	// 满音
	voiceFull.onclick = function(){
		mysong.volume = 1;
	}
	
	// 格式化时间
	function timeDispose(time){
		let mm =parseInt(time/60);
		let ss = parseInt(time%60)
		return mm+":"+ss;
	}
	
	function timeSpan(){
		songTime.innerHTML = timeDispose(mysong.currentTime)+"&nbsp;|&nbsp;"+ timeDispose(mysong.duration);
		let process = document.querySelector("#process");
		let processYet = document.querySelector("#processYet");
		// alert(process.style.width);//拿取进度条宽度
		let processWidth = process.style.width.split("px")[0];
		processYet.style.width = (mysong.currentTime/mysong.duration)*processWidth+"px";
		
		
	}
}