function current_time()
{
    var nowDate = new Date();
    year = nowDate.getFullYear(); //回傳現在是幾年
    month = nowDate.getMonth();
    day = nowDate.getDate();
    hour = nowDate.getHours();
    min = nowDate.getMinutes();
    if(min <= 9)
    {
      var min = "0" + min
    }
    sec = nowDate.getSeconds();

    var suffix; //判斷是上午還是下午的功能
        if(hour >= 0 && hour < 12)
        {
            suffix = "上午";
        }else
        {
            suffix = "下午"; 
        }   
          document.getElementById("date").innerHTML = year + "年" + (month + 1) + "月" + day + "日 ";
          document.getElementById("time").innerHTML = suffix + " " + hour + "時 "+ min + "分 "+ sec + "秒";
    
    
    setTimeout('current_time()', 1000);
}
window.onload = function()
{
  current_time();
}