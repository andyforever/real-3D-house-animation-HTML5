$(document).ready(function() {
    
    // event.preventDefault();    var xAngle = 0, yAngle = 0, zAngle = 0, perspective = 1600;
    var _xAngle = 0, _yAngle = 0, _zAngle = 0;
    var xRotate = 0, zRotate = 0, yTranslate = 0;
    var originX = 50, originY = 200;
    var closed = true;
    var doorOpen = false;
    document.addEventListener('keydown', function(e) {
        // alert(e.keyCode);
        e.preventDefault();        switch(e.keyCode) {
        	case 116: //F5
        		window.location.reload();
            case 37:
                // left
                yAngle -= 5;
                break;

            case 38:
                // up
                xAngle += 5;
                break;
            case 39:
                // right
                yAngle += 5;
                break;

            case 40:
                // down
                xAngle -= 5;
                break;
            case 32:
                opencloseDoor();
                break;
            case 13: 
            	openDoor();
            	break;
            case 65:
                //A
                _yAngle -= 5;
                caseMove();
                break;
            case 87:
                //W
                _xAngle += 5;
                caseMove();
                break;
            case 68:
                //D
                _yAngle += 5;
                caseMove();
                break;
            case 83:
                //S
                _xAngle -= 5;
                caseMove();
                break;
            case 74:
                if(perspective <= 2500 && perspective > 400) {
                    perspective -= 100;
                } else if(perspective <= 400 && perspective > 5) {
                    perspective -= 5;
                }
                break;
            case 75:
                if(perspective < 2400) {
                    perspective += 100;
                }
                break; 
                
            case 80: //P
                playVideo();
                break;
                case 50://+
                var bed1 = new Cube("bed1", 200, 300, 100, 1300, 500, 201);
                // var cube = new Cube("sofa", 200, 100, 100, 600, 1400, 200);
                break;
            case 49: //1
            	var bed2 = new Cube("bed2", 300, 300, 100, 200, 500, 399);
            	break;
        	case 51: //1
	        	var table = new Cube("table", 100, 250, 50, 800, 550, 199);
	        	var sofa = new Cube("sofa", 100, 350, 40, 1000, 550, 199);
	        	break;
            case 188://<
                originX -= 5;
                break;
            case 190://>
                originX += 5;
                break; 
        };

        //$('#page4').css({"webkitTransform":"rotateX("+xRotate+"deg) rotateZ("+zRotate+"deg translateY("+ yTranslate + "px)"});
        // console.log(perspective);
        
        $('#view').css({
            "webkitPerspectiveOrigin": originX + "% 200px",
            "webkitPerspective" : perspective
        });
        $('#view').css({
            "mozPerspective" : perspective
        });
        
        $('#house').css({
            "webkitTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
        $('#house').css({
            "mozTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
        // $('#model').style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";

    }, false);
    
    $("#up").click(function(){
        turnUp();
    });
    $("#down").click(function(){
        turnDown();
    });
    $("#left").click(function(){
        turnLeft();
    });
    $("#right").click(function(){
        turnRight();
    });
    $("#open").click(function(){
        openBook();
    });

    function turnUp() {
        xAngle += 5;
        $('#book').css({
            "webkitTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
        $('#book').css({
            "mozTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
    }

    function turnDown() {
        xAngle -= 5;
        $('#book').css({
            "webkitTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
        $('#book').css({
            "mozTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
    }

    function turnLeft() {
        yAngle -= 5;
        $('#book').css({
            "webkitTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
        $('#book').css({
            "mozTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
    }

    function turnRight() {
        yAngle += 5;
        $('#book').css({
            "webkitTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
        $('#book').css({
            "mozTransform" : "rotateX(" + xAngle + "deg) rotateY(" + yAngle + "deg)"
        });
    }
    
    function caseMove() {
        
        $('#case').css({
            "webkitTransform" : "rotateX(" + _xAngle + "deg) rotateY(" + _yAngle + "deg) translateY(299px) translateZ(150px)"
        });
        $('#case').css({
            "mozTransform" : "rotateX(" + _xAngle + "deg) rotateY(" + _yAngle + "deg) translateY(299px) translateZ(150px)"
        });
    }
    
    function playVideo() {
        
        var tv = document.getElementById('video');
        tv.src="./res/littlelovesong.mp4";
        // tv.prepare();
        tv.play();
    }

    function opencloseDoor() {
        if (!closed) {//关闭
                    closed = true;
                    var player = document.getElementById("audioPlayer");
                    player.src = "./res/closedoor.mp3";
                    player.play();
                    $('#door1').css({
                        "webkitTransform" : "rotateY(0deg)"
                    });
                    $('#door1').css({
                        "mozTransform" : "rotateY(0deg)"
                    });
                    $('#door2').css({
                        "webkitTransform" : "rotateY(0deg)"
                    });
                    $('#door2').css({
                        "mozTransform" : "rotateY(0deg)"
                    });
                } else {//打开
                    closed = false;
                    var player = document.getElementById("audioPlayer");
                    player.src = "./res/opendoor.mp3";
                    player.play();
                    $('#door1').css({
                        "webkitTransform" : "rotateY(-120deg)"
                    });
                    $('#door1').css({
                        "mozTransform" : "rotateY(-120deg)"
                    });
                    $('#door2').css({
                        "webkitTransform" : "rotateY(-120deg)"
                    });
                    $('#door2').css({
                        "mozTransform" : "rotateY(-120deg)"
                    });
                }
    }
    
    function openDoor() {
        if (doorOpen) {//关闭
                    doorOpen = false;
                    var player = document.getElementById("audioPlayer");
                    player.src = "./res/closedoor.mp3";
                    player.play();
                    $('#men').css({
                        "webkitTransform" : "rotateY(0deg)"
                    });
                } else {//打开
                    doorOpen = true;
                    var player = document.getElementById("audioPlayer");
                    player.src = "./res/opendoor.mp3";
                    player.play();
                    $('#men').css({
                        "webkitTransform" : "rotateY(-120deg)"
                    });
                }
    }
});
