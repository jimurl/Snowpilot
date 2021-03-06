<?php
//
//  Set curlopt parameters
//

$url = "http://snowpad.montanaice.com";
$username = 'jim.earl';
$password = ''; 
$cookie_file = "/tmp/cookie.txt";
//  $xml query string, just the query string, e.g. $xml_qs = "OBS_DATE_MIN=2017-01-01&USERNAME=doug.chabot";
$xml_qs = "OBS_DATE_MIN=2017-01-01";

$crl = curl_init();
 curl_setopt($crl, CURLOPT_URL, $url."/user/login");
 curl_setopt($crl, CURLOPT_USERAGENT, 'script login');
 curl_setopt($crl, CURLOPT_COOKIEFILE, "/tmp/cookie.txt");
 curl_setopt($crl, CURLOPT_COOKIEJAR, "/tmp/cookie.txt");
 curl_setopt($crl, CURLOPT_FOLLOWLOCATION, 1);
 curl_setopt($crl, CURLOPT_RETURNTRANSFER, 1);
 curl_setopt($crl, CURLOPT_POST, 1);
 $postdata=array(
    "name" => $username, 
    "pass" => $password,
    "form_id" => "user_login", 
    "op" => "Log in",
 );
 curl_setopt ($crl, CURLOPT_POSTFIELDS, $postdata);
 $result=curl_exec($crl);
	//var_dump($result);
 $headers = curl_getinfo($crl);
 curl_close($crl);
    
if ($headers['url'] == $url) {
    die("Cannot login.");
}else { 
  $crl2 = curl_init();
  curl_setopt($crl2, CURLOPT_URL, $url.'/snowpilot-query-feed.xml?'.$xml_qs);
  curl_setopt($crl2, CURLOPT_USERAGENT, 'script retreival');
  curl_setopt($crl2, CURLOPT_COOKIEFILE, $cookie_file);
  curl_setopt($crl2, CURLOPT_COOKIEJAR, $cookie_file);
  curl_setopt($crl2, CURLOPT_FOLLOWLOCATION, 1);
  curl_setopt($crl2, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($crl2, CURLOPT_CUSTOMREQUEST, 'GET');			

	$final_xml = curl_exec($crl2);
	header('Content-type: application/xml');
	print_r($final_xml);
  curl_close($crl2);
  
	// Now log out the user
  $crl3 = curl_init();
  curl_setopt($crl3, CURLOPT_URL, $url . '/user/logout');
  curl_setopt($crl3, CURLOPT_USERAGENT, 'script logout');
  curl_setopt($crl3, CURLOPT_COOKIEFILE, $cookie_file);
  curl_setopt($crl3, CURLOPT_COOKIEJAR, $cookie_file);
  curl_setopt($crl3, CURLOPT_FOLLOWLOCATION, 1);
  curl_setopt($crl3, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($crl3, CURLOPT_CUSTOMREQUEST, 'GET');			

	$logout = curl_exec($crl3);
  curl_close($crl3);

}