
/*
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
/**
 * @author Mehrez Labidi <mehrez.labidi@tritux.com>
 */

 function is_array(val){
		if (val instanceof Array) {
		   return true;
		} else {
		 return false;
		}
 }
 
 function explode(c , str){
    var res= str.split(c);
     return res;
 }
 
 function implode(c , arr){
        var s = "";
  	   $.each(arr, function (key, value) {
	   if(key ==0)
			{    s =  s+value;     }	
		else{s =  s+c+value;}			
       });
  
  return s; 
 }
 
 function isset(arr){ 
	 try {
			 //  var response = false ;
				 if ( (arr !== 'undefined')&&(arr !== null ) ) {
				return	response  =  true;
				 }
				// if ( arr !== null ) {
				//	response  =  true;
				// }
			// return response;
		 }
		catch (e) {
			return false;
		}
 }	
 
 function array_key(arr){
	   var res=[];
	   $.each(arr, function (key, value) {
		   res.push(key);
       });
     return res;
 }
 
 function empty(arr){
	   var res=true;
			if (arr.length > 0) {
			      res=false;
			}
     return res;
 }	
 
  function array_key_exists(val,arr){
	  var response = false ;
	   $.each(arr, function (key, value) {
		   if(val  ==  key ){
		      response  =  true;
		   }
       });
        return response;
 }
 
 function array_value_exists(val,arr){
	   var response = false ;
	   $.each(arr, function (key, value) {
		   if( value  ==  val ){
		      response  =  true;
		   }
       });
     return response;
 }
	
function array_value(arr){
	   var res=[];
	   $.each(arr, function (key, value) {
		   res.push(value);
       });
     return res;
 }
	
function is_visible(arr){
            if((document.getElementById(arr) != null )&&(arr != undefined )){
				var ById = document.getElementById(arr).offsetHeight;
				if( ById !== 0){
				    return true;
				}			
			}
			if((document.getElementsByClassName (arr) != null) &&(arr != undefined )){
		     var ByClass = document.getElementsByClassName (arr).offsetHeight;
			if(ByClass !== 0){
			 return true;
			}
		}
	return false;
}		 