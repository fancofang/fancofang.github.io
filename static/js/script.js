import {play,stop} from "./indexanimate.js";


$(document).ready(function(){
    ///添加平板样式文件
    function loadStyles(name) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = name;  //引入的文件名
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    ///移除平板样式文件
    function removeStyles(name){
      var filename = name;  //移除引入的文件名
      var targetelement = "link";
      var targetattr = "href";
      var allsuspects = document.getElementsByTagName(targetelement)
      for (var i = allsuspects.length; i>=0 ; i--){
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1) {
          allsuspects[i].parentNode.removeChild(allsuspects[i])
        }
      }
    }

    $("#ckintro").click(function(){
        stop();
        loadStyles('static/css/style.css');
        removeStyles('css/indexstyle');
        removeStyles('css/all.min');
        $("body").load(app_page_url);
    });

    if (window.location.hash !== "") {
        window.location.hash = "";
    }

    if (window.location.hash === '') {
        window.location.hash = '#intro'; // home page, show the default view
        play();
    }

});