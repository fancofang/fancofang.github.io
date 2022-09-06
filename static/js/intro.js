import {play,stop} from "./indexanimate.js";

$(document).ready(function(){
    play();

    $("#ckintro").click(function(){
        stop('details.html');
    });


});