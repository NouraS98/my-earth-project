function troposphereClicked() {
    $("#troposphere").animate({
        height: '55%'
    }, "slow");
    $("#troposphere").addClass("troposphereHover");
    document.getElementById("sky").style.display = "block";

}

function stratosphereClicked() {

    $("#stratosphere").animate({
        height: '75%',
    }, "slow");
    $("#stratosphere").addClass("stratosphereHover");
    document.getElementById("stratosphereSky").style.display = "block";


}

function mesosphereClicked() {
    $("#mesosphere").animate({
        height: '88%',
    }, "slow");

    $("#mesosphere").addClass("mesosphereHover");
    document.getElementById("mesosphereSky").style.display = "block";

}

function thermosphereClicked() {
    $("#thermosphere").animate({
        height: '100%',
    }, "slow");

    $("#thermosphere").addClass("thermosphereHover");
    document.getElementById("thermosphereSky").style.display = "block";

}

function exosphereClicked() {
    $("#exosphere").animate({
        height: '105%',
    }, "slow");

    $("#exosphere").addClass("exosphereHover");
    document.getElementById("exosphereSky").style.display = "block";

}


$(document).ready(function() {


    $('.tooltip').tooltipster();


    // -------------- when hover on troposphere-----------
    $("#troposphereHeading").mouseenter(function() {
        troposphereClicked();
    });
    $("#troposphere").mouseleave(function() {
        $(".troposphere").animate({
            height: '550px'
        }, "slow");
        document.getElementById("sky").style.display = "none";
        $("#troposphere").removeClass("troposphereHover");
        $("#troposphere").addClass("troposphere");
    });


    // ---------- when hover on stratosphere ------------
    $("#stratosphereHeading").mouseenter(function() {
        stratosphereClicked();

    });

    $("#stratosphere").mouseleave(function() {
        $("#stratosphere").animate({
            height: '800px',

        }, "slow");
        document.getElementById("stratosphereSky").style.display = "none";
        $("#stratosphere").removeClass("stratosphereHover");
        $("#stratosphere").addClass("stratosphere");

    });

    // ---------- when hover on mesosphere ------------
    $("#mesosphereHeading").mouseenter(function() {

        mesosphereClicked();
    });

    $("#mesosphere").mouseleave(function() {
        $("#mesosphere").animate({
            height: '1000px',

        }, "slow");
        document.getElementById("mesosphereSky").style.display = "none";

        $("#mesosphere").removeClass("mesosphereHover");
        $("#mesosphere").addClass("mesosphere");

    });

    // ---------- when hover on thermosphere ------------
    $("#thermosphereHeading").mouseenter(function() {
        thermosphereClicked();

    });

    $("#thermosphere").mouseleave(function() {
        $("#thermosphere").animate({
            height: '1200px',

        }, "slow");
        document.getElementById("thermosphereSky").style.display = "none";

        $("#thermosphere").removeClass("thermosphereHover");
        $("#thermosphere").addClass("thermosphere");

    });
    // ---------- when hover on exosphere ------------

    $("#exosphereHeading").mouseenter(function() {

        exosphereClicked();

    });

    $("#exosphere").mouseleave(function() {
        $("#exosphere").animate({
            height: '1400px',

        }, "slow");
        document.getElementById("exosphereSky").style.display = "none";

        $("#exosphere").removeClass("exosphereHover");
        $("#exosphere").addClass("exosphere");

    });

    var text = document.getElementById('text');
    var newDom = '';
    var animationDelay = 6;

    for (let i = 0; i < text.innerText.length; i++) {
        newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
    }

    text.innerHTML = newDom;
    var length = text.children.length;

    for (let i = 0; i < length; i++) {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }


}); //end of document.ready