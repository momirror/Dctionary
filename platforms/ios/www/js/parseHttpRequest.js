
  var exec = cordova.require('cordova/exec');

var httpParse =
{
 parse:function(jsonObj)
   {
       exec(null,null,"ParseHttpResultPlugin","parseData",[jsonObj]);
   },
    
};




