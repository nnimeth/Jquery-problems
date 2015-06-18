		

			function startTime(){
			var today=new Date();
			var h=today.getHours();
			var m=today.getMinutes();
			var s=today.getSeconds();
			var ap="AM";

			//to add AM or PM after time

			if(h>11) ap="PM";
			if(h>12) h=h-12;
			if(h==0) h=12;

			//to add zero in front of numbers<10
			
			m = checkTime(m);
			s = checkTime(s);
			
			document.getElementById('clock').innerHTML=h+":"+m+":"+s;

			var t = setTimeout('startTime()',500)
			}

			function checkTime(i){
				if (i<10)
				{i = "0" + i};
				return i;
			}
			
			window.onload=startTime;
		
        $(document).ready(function(){	

        	//when I click take me to facebook
			$("#fb").click(function(){
				$(this).css("cursor","pointer")
				window.location.href="http://www.facebook.com";
			});

			$("#fb").mouseover(function(){
				$(this).css("cursor","pointer")
			});


				//when I click take me to twitter
			$("#twitter").click(function(){
				$(this).css("cursor","pointer")
				window.location.href="http://www.twitter.com";
			});

			$("#twitter").mouseover(function(){
				$(this).css("cursor","pointer")
			});


		});
