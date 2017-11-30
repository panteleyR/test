<?
require_once 'simplehtmldom.php';
	// Создать DOM из URL или файла
	
$html = file_get_html('http://socpublic.com/account/visit.html?type=frame');

$ret = $html->find('div[class=letter]');  
$ret1 = $ret->find('div[class=top]');  



 foreach($ret->find('div[class=left]') as $a){
 //... что то с ними делаем
 echo $a;
 
 }

/*
if($html->innertext!='' and count($html->find('div'))) {
	
 foreach($html->find('div') as $a){
 //... что то с ними делаем
 echo $a;
 
 }
}

*/
$html->clear(); 
unset($html);
?>