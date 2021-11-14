
	var data = new Date()
	var time = {
		hour: data.getHours(),
		minute: data.getMinutes(),
		seconds: data.getSeconds(),
		month: data.getMonth() + 1,
		day: data.getDate(),
		yers: data.getFullYear()
	}
	if (time.hour < 10){
		document.querySelector("#hour").innerHTML = '0' + time.hour
	}else{
		document.querySelector("#hour").innerHTML = time.hour
	}
	if(time.minute < 10){
		document.querySelector("#minute").innerHTML = '0' + time.minute
	}else{
		document.querySelector("#minute").innerHTML = time.minute
	}
	if(time.seconds < 10){			
		document.querySelector("#seconds").innerHTML = time.seconds
	}else{
		document.querySelector("#seconds").innerHTML = time.seconds
	}

	document.querySelector("#day").innerHTML = time.day
	document.querySelector("#month").innerHTML = time.month
	document.querySelector("#years").innerHTML = time.yers

	var contTime = setInterval(function(){
		time.seconds += 1
		if(time.seconds < 10){
			document.querySelector("#seconds").innerHTML = '0' + time.seconds
		}else{
			document.querySelector("#seconds").innerHTML = time.seconds
		}
		if (time.seconds > 59){
			time.seconds = 0
			document.querySelector("#seconds").innerHTML = '0' + time.seconds
			time.minute += 1
			console.log("minutes: "+time.minute)
			if (time.minute < 10){
				document.querySelector("#minute").innerHTML = '0' + time.minute
			}else{
				document.querySelector("#minute").innerHTML = time.minute
			}
		}
		if (time.minute > 59){
			time.minute = 0
			document.querySelector("#minute").innerHTML = '0' + time.minute
			time.hour += 1
			console.log("hour: "+time.hour)
			if (time.hour < 10){
				document.querySelector("#hour").innerHTML = '0' + time.hour
			}else{
				document.querySelector("#hour").innerHTML = time.hour
			}
		}
		if (time.hour > 23){
			time.hour = 0
			document.querySelector("#hour").innerHTML = '0' + time.hour

			time.day += 1
			if(time.day < 10){
				document.querySelector("#day").innerHTML = "0" + time.day
			}else{
				document.querySelector("#day").innerHTML = time.day
			}
		}
	}, 1000)
