//load music
var tracks = [];
for (i = 0; i < 10; i++) {
    tracks[i] = document.createElement('audio');
}
tracks[0].setAttribute('src', 'music/bellbottomsaudio.mp3');
tracks[1].setAttribute('src', 'music/harlemshakeaudio.mp3');
tracks[2].setAttribute('src', 'music/babyaudio.mp3');
tracks[3].setAttribute('src', 'music/neataudio.mp3');
tracks[4].setAttribute('src', 'music/deboraaudio.mp3');
tracks[5].setAttribute('src', 'music/tequillaaudio.mp3');
tracks[6].setAttribute('src', 'music/nggyu_audio.mp3');
tracks[7].setAttribute('src', 'music/brightonrockaudio.mp3');
tracks[8].setAttribute('src', 'music/easyaudio.mp3');
tracks[9].setAttribute('src', 'music/babydriveraudio.mp3');

var popupTimeout = false;


//mute function
var muted = true;
$('.mute').click(function (event) {
    event.preventDefault();
    popupTimeout= true;
    $('.music-popup').fadeOut(500);
    if (muted == true) {
        //unmutes
        muted = false;
        $(this).children('img').attr('src', "images/unmuted.svg");
    }
    else {
        //mutes
        muted = true;
        $(this).children('img').attr('src', "images/muted.svg");
        for (i = 0; i < tracks.length; i++) {
            tracks[i].pause();
            tracks[i].currentTime = 0;
        }
    }
    console.log(muted);
});

function popupTimer() {
    if(popupTimeout == true) {

    }
    else {
        setTimeout(function(){
            $('.music-popup').fadeOut(500);
        }, 1000);
        popupTimeout= true;
    }
}

//MUSIC TRIGGERS
$(window).scroll(function () {
    popupTimer();

    if (muted == false) {
        //save a variable with the current scroll position (a number value)
        var scrollPos = $(window).scrollTop();

        //Checking position of the scroll position
        if (scrollPos > $('.bellbottoms').offset().top && scrollPos < $('.harlemshake').offset().top) {
            for (i = 0; i < tracks.length; i++) {
                if (i == 0) {

                }
                else {
                    tracks[i].pause();
                    tracks[i].currentTime = 0;
                }
            }
            tracks[0].play();
        }
        if (scrollPos > $('.harlemshake').offset().top && scrollPos < $('.baby').offset().top) {
            for (i = 0; i < tracks.length; i++) {
                if (i == 1) {
                }
                else {
                    tracks[i].pause();
                    tracks[i].currentTime = 0;
                }
            }
            tracks[1].play();
        }

        if (scrollPos > $('.baby').offset().top && scrollPos < $('.neat').offset().top) {
            for (i = 0; i < tracks.length; i++) {
                if (i == 2) {
                }
                else {
                    tracks[i].pause();
                    tracks[i].currentTime = 0;
                }
            }
            tracks[2].play();
        }

        if (scrollPos > $('.neat').offset().top && scrollPos < $('.debora').offset().top) {
            for (i = 0; i < tracks.length; i++) {
                if (i == 3) {
                }
                else {
                    tracks[i].pause();
                    tracks[i].currentTime = 0;
                }
            }
            tracks[3].play();
        }

        if (scrollPos > $('.debora').offset().top && scrollPos < $('.tequilla').offset().top) {
            for (i = 0; i < tracks.length; i++) {
                if (i == 4) {
                }
                else {
                    tracks[i].pause();
                    tracks[i].currentTime = 0;
                }
            }
            tracks[4].play();
        }

        if (scrollPos > $('.tequilla').offset().top && scrollPos < $('.nggyu').offset().top) {
            for (i = 0; i < tracks.length; i++) {
                if (i == 5) {
                }
                else {
                    tracks[i].pause();
                    tracks[i].currentTime = 0;
                }
            }
            tracks[5].play();
        }

        if (scrollPos > $('.nggyu').offset().top && scrollPos < $('.brightonrock').offset().top) {
            for (i = 0; i < tracks.length; i++) {
                if (i == 6) {
                }
                else {
                    tracks[i].pause();
                    tracks[i].currentTime = 0;
                }
            }
            tracks[6].play();
        }

        if (scrollPos > $('.brightonrock').offset().top && scrollPos < $('.easy').offset().top) {
            for (i = 0; i < tracks.length; i++) {
                if (i == 7) {
                }
                else {
                    tracks[i].pause();
                    tracks[i].currentTime = 0;
                }
            }
            tracks[7].play();
        }

        if (scrollPos > $('.easy').offset().top && scrollPos < $('.babydriver').offset().top) {
            for (i = 0; i < tracks.length; i++) {
                if (i == 8) {
                }
                else {
                    tracks[i].pause();
                    tracks[i].currentTime = 0;
                }
            }
            tracks[8].play();
        }

        if (scrollPos > $('.babydriver').offset().top) {
            for (i = 0; i < tracks.length; i++) {
                if (i == 9) {
                }
                else {
                    tracks[i].pause();
                    tracks[i].currentTime = 0;
                }
            }
            tracks[9].play();
        }

    }
});



//TIMELINES

var tl = new TimelineMax({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();
tl.from('#bellbottoms1', .5, { x: -200, opacity: 0 }, "=-1");
tl.from('#bellbottoms2', 1, { x: 200, opacity: 0 }, "=-1");
tl.from('#bellbottoms3', .5, { x: -200, opacity: 0 }, "=-1");
tl.from('#people', .5, { y: 200, scale: .60, opacity: 0 }, "=-1");
tl.from('#people', .5, { y: 200, scale: .60, opacity: 0 }, "=-1");


const bellbottoms = new ScrollMagic.Scene({
    triggerElement: ".bellbottoms",
    triggerHook: "onLeave",
    duration: "100%"
})

    .setPin(".bellbottoms")
    .setTween(tl)
    .addTo(controller);

function updatePercentage() {
    tl.progress();
}


var hs = new TimelineMax();
hs.to('#harlem', .5, { className: "shake" }, "=-1");
hs.to('#shake', 1, { className: "shake" }, "=-1");
hs.from('#coffeecups', 1, { opacity: 0 }, "=-1");


const harlemshake = new ScrollMagic.Scene({
    triggerElement: ".harlemshake",
    triggerHook: "onLeave",
    duration: "100%"
})

    .setPin(".harlemshake")
    .setTween(hs)
    .addTo(controller);

var bb = new TimelineMax();
bb.from('#baby', 1, { x: 200, opacity: 0 }, "=-1");
bb.from('#debora', 1, { x: -200, opacity: 0 }, "=-1");
bb.to('#debora', 1, { className: "animate" }, "=-1");
bb.to('#babytext', 1, { className: "animate" }, "=-1");

const baby = new ScrollMagic.Scene({
    triggerElement: ".baby",
    triggerHook: "onLeave",
    duration: "100%"
})

    .setPin(".baby")
    .setTween(bb)
    .addTo(controller);


var nnn = new TimelineMax();
nnn.to('#man1', 1, { scale: 1.40 }, "=-1");
nnn.to('#man2', 1, { scale: 1.40 }, "=-1");
nnn.to('#man3', 1, { scale: 1.40 }, "=-1");
nnn.from('#neat1', 1, { x: -80, opacity: 0 }, "=-1");
nnn.from('#neat2', 1, { y: -100, opacity: 0 }, "=-1");
nnn.from('#neat3', 1, { x: 80, opacity: 0 }, "=-1");

const neat = new ScrollMagic.Scene({
    triggerElement: ".neat",
    triggerHook: "onLeave",
    duration: "100%"
})

    .setPin(".neat")
    .setTween(nnn)
    .addTo(controller);

var deb = new TimelineMax();
deb.to('#feet2', 1, { className: "tap" }, "=-1");
deb.to('#babyfeet', 1, { className: "tap2" }, "=-1");
deb.to('#babyfeet', 1, { className: "tap3" }, "=-1");

const debora = new ScrollMagic.Scene({
    triggerElement: ".debora",
    triggerHook: "onLeave",
    duration: "100%"
})

    .setPin(".debora")
    .setTween(deb)
    .addTo(controller);


var teq = new TimelineMax();
teq.to('#blood', 1, { scale: 2.5, x: -150, y: -70 }, "=-1");

const tequilla = new ScrollMagic.Scene({
    triggerElement: ".tequilla",
    triggerHook: "onLeave",
    duration: "100%"
})

    .setPin(".tequilla")
    .setTween(teq)
    .addTo(controller);


var br = new TimelineMax();
br.from('#car', 1, { x: 800, y: -40 }, "=-1");
br.from('#police', 1, { x: 800, y: -40, className: "siren"}, "=-1");

const brightonrock = new ScrollMagic.Scene({
    triggerElement: ".brightonrock",
    triggerHook: "onLeave",
    duration: "100%"
})

    .setPin(".brightonrock")
    .setTween(br)
    .addTo(controller);

var nu = new TimelineMax();
nu.from('#nevergonna', 1, { opacity: 0, x: -100 }, "=-1");
nu.from('#giveyouup', 1, { opacity: 0, x: 100 }, "=-1");
nu.to('#jonham', 1, { scale: 1.2 }, "=-1");
nu.to('#babyNGGYU', 1, { scale: 1.3 }, "=-1");
nu.to('#deboraNGGYU', 1, { scale: 1.1 }, "=-1")

const nggyu = new ScrollMagic.Scene({
    triggerElement: ".nggyu",
    triggerHook: "onLeave",
    duration: "100%"
})

    .setPin(".nggyu")
    .setTween(nu)
    .addTo(controller);


var es = new TimelineMax();
es.to('#easycar', 1, { y: -500, x: -2 }, "=-1");

const easy = new ScrollMagic.Scene({
    triggerElement: ".easy",
    triggerHook: "onLeave",
    duration: "100%"
})

    .setPin(".easy")
    .setTween(es)
    .addTo(controller);


var bd = new TimelineMax();
//bd.from('#babydrivertext', 1, { x: 700, }, "=-1");
bd.from('#babybd', 1, { scale: 1.1 }, "=-1");
bd.to('#babybd', 1, { x: -40 }, "=-1");
bd.from('#rainbow', 1, { opacity: 0 }, "=-1");
bd.to('#deborabd', 1, { scale: 1.05 }, "=-1");

const babydriver = new ScrollMagic.Scene({
    triggerElement: ".babydriver",
    triggerHook: "onLeave",
    duration: "100%"
})

    .setPin(".babydriver")
    .setTween(bd)
    .addTo(controller);

var en = new TimelineMax();
en.to('#endtext', 1, { className: "animate"}, "=-1");

const end = new ScrollMagic.Scene({
    triggerElement: ".end",
    triggerHook: "onLeave",
    duration: "100%"
})

    .setPin(".end")
    .setTween(en)
    .addTo(controller);

//button 
mybutton = document.getElementById("restartbutton");

function topFunction() {
    document.documentElement.scrollTop = 0;
}