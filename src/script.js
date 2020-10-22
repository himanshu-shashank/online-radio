var aud = document.getElementById("myaud"); 

function muteBtn() {
	if($('#mute-btn').hasClass('glyphicon-pause')) {
		$('#mute-btn').removeClass('glyphicon-pause');
		$('#mute-btn').addClass('glyphicon-play');
		aud.pause();
		
	} else {
		$('#mute-btn').removeClass('glyphicon-play');
		$('#mute-btn').addClass('glyphicon-pause');
		aud.play();
	}
}
   function statusChangeCallback(response) {

          FB.api('/me', function(response) {
            
           
          });
   // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // 	Logged into your app and Facebook.
      testAPI();
       } 
   else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
     document.getElementById('fblog').innerHTML = 'Please log ' +
        'into Whattelse.';
   } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
     document.getElementById('fblog').innerHTML = 'Please log ' +
       'into Facebook.';
    }
  }

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
        FB.login(function(response) {
          FB.api('/me', {fields: 'gender, first_name, last_name,email'},function(response) {
			$.ajax({
		     url:'config.php',
			 type:'POST',
			 data:{fname:response.first_name, lname:response.last_name, email: response.email, uid: response.id, gender: response.gender},
             dataType: 'json',
             success: function (data) {
                 console.log(data);
             }});
            document.getElementById('fblog').innerHTML =
        'Thanks for logging in, ' + response.first_name + '!';
          });
        }, {scope: 'public_profile,		email'});
	
      }
	
  function GetClock(){
	var d=new Date();
	var nhour=d.getHours(),nmin=d.getMinutes(),ap;
	if(nhour==0){ap=" AM";nhour=12;}
	else if(nhour<12){ap=" AM";}
	else if(nhour==12){ap=" PM";}
	else if(nhour>12){ap=" PM";nhour-=12;}

	if(nmin<=9) nmin="0"+nmin;

	document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+ap+"";
	}

	window.onload=function(){
		GetClock();
		setInterval(GetClock,1000);
	
		setInterval(function(){
			$.ajax({
				url: "now.php", 
				success: function(result){
			console.log(result);
			 obj = JSON.parse(result);
			 document.getElementById("artist").innerHTML = "<b>Artist:<b>"+obj.artist;
			 document.getElementById("song_name").innerHTML = "<b>Song:<b>"+obj.song_name;
			}});			
		}, 10000);
	

	}


						