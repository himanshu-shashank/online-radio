<?php

	//function getSongDetails()
	//{
		//Display IceCast Server Stats
		$server 	= "www.whattelse.com"; //IP (x.x.x.x or domain name)
		$iceport 	= "8000"; //Port
		$iceurl 	= "live.mp3"; //Mountpoint
		$online 	= "<font color=green><b>ONLINE</b> </font><br />";
		$offline 	= "<font color=red><b>OFFLINE</b></font><br />";
		$song       = array();
		if($fp = @fsockopen($server, $iceport, $errno, $errstr, '1')) {
			fclose($fp);
			$ice_status=$online;
			//echo "<p><b>Stream Status:</b> $ice_status";
			$stats = file("http://" . $server . ":" . $iceport . "/status2.xsl");			
			if($stats[5] != ''){
			 $artist = explode("-", $stats[5]);
			 if($artist != '' && $artist != null){
				 $song['artist'] 	= $artist[1];
				 $song['song_name'] 	= $artist[2];
				 echo json_encode($song);
			 }
			}
			
			
			//$artist = explode("-", $status[5]);
			//
			//$song['song_name'] 	= $artist[2];
			//echo json_encode($song);
			//echo "<b>Listeners:</b> <b> " . $status[3] . "</b>";
		//}
	}

?>
