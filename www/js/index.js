(function () {
    "use strict";
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    if ($.isWin) {
        document.getElementById("theamstyle").setAttribute('href', './css/chui-win-3.8.5.css');
    }
    else
        if ($.isAndroid) {
            document.getElementById("theamstyle").setAttribute('href', './css/chui-android-3.8.5.css');
        }
        else
            if ($.isiOS) {
                document.getElementById("theamstyle").setAttribute('href', './css/chui-iso-3.8.5.css');
            }
            else {
                document.getElementById("theamstyle").setAttribute('href', './css/chui-win-3.8.5.css');
            }
    function onDeviceReady() {
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
    };
    function onPause() {
    };

    $('#btn').click(function () {
        $.UIGoToArticle('#art');
        $("#btn").stop();
    });

    $('#backbtn').click(function () {
        $.UIGoToArticle('#main');
        $("#backbtn").stop();
    });

    $('.Cancelbtn').click(function () {
        $.UIGoToArticle('#main');
    });

    $('.morebtn').click(function () {
        $('#secondnav').hide();
        $('#toggleseconddiv').show();
    });


    $('.Togglebtn2').click(function () {
        $('#secondnav').show();
        $('#toggleseconddiv').hide();
    });

    var num = 0;
    $('.Savvebtn').click(function () {
        num++;
        var mb = $('#rr').text();
        var storedvalue = localStorage.setItem("SetItemKey", mb);
        $.UIGoToArticle('#main');
        $("#showddd").prepend("<div style='background-color:#65ce71; margin-top:5px;'>"
           + "<button class='ui-btn ui-shadow ui-corner-all ui-icon-edit ui-btn-icon-notext' type='button' style='width:33px !important;height:37px !important;  background-color: #007aff !important; margin-left: 251px; margin-right: -8px;'>M</button>" + "<button class='ui-btn ui-shadow ui-corner-all ui-icon-carat-l ui-btn-icon-notext' type='button ' style='width:33px !important; height:37px !important;  background-color: #007aff !important;'>D</button>" +
             "</div>" + "<div id='page_number' style='background-color:#65ce71;'> You are watching 5th object out of 100 </div>");
        // $("#showddd").prepend("<div id='page_number' style='background-color:red; margin-top:5px;'> You are watching 5th object out of 100 </div>");
        document.getElementById('page_number').innerHTML = localStorage.getItem("SetItemKey");
        document.getElementById('numb').innerHTML = num;
        
    });

    $('#showddd').click(function () {
        $('#rr').text("");
        $.UIGoToArticle('#art');
        var md = $('#page_number').text();
        $('#rr').text(md);
    });
    $('#rr').click(function () {
        $('#spantext').toggle().hide;
        $('#rr').text("");
            
       
    })


    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();