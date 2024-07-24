

function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.2
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
}


navAnimation();


function rightElems() {


    var rightElems = document.querySelectorAll(".Principles");

    rightElems.forEach(function (elem) {


        elem.addEventListener("mouseenter", function () {

            //elem.childNodes[1].style.opacity = 1

            gsap.to(elem.childNodes[1], {

                opacity: 1,
                scale: 1,
            })
        })


        //console.log(elem.childNodes[1]);

        elem.addEventListener("mouseleave", function () {

            gsap.to(elem.childNodes[1], {

                opacity: 0,
                scale: 0,
            })
        })

        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[1], {

                // Calculate the x position relative to the element
                x: dets.x - elem.getBoundingClientRect().x - 80,
                y: dets.y - elem.getBoundingClientRect().y - 80

            })

            // You can log it or use it as needed

        });

    })


}


rightElems();


// PAGE 3

var pagecenter = document.querySelectorAll(" #page4-center");

//console.log(pagecenter);

pagecenter.forEach(function (e) {

    //console.log(e.childNodes);

    e.addEventListener("mouseenter", function () {


        gsap.to(e.childNodes[3], {

            opacity: 1,
            scale: 1,
        })
    })


    e.addEventListener("mouseleave", function () {


        gsap.to(e.childNodes[3], {

            opacity: 0,
            scale: 0,
        })
    })
})



var pagecenter2 = document.querySelector(" #page3-center ")

var video = document.querySelector(" #page3 video")

pagecenter2.addEventListener("click", function () {


    video.play()
    gsap.to(video, {

        transform: "scaleX(1) scaleY(1)",
        opacity: 1,

    })

})


video.addEventListener("click", function () {

    video.pause()

    gsap.to(video, {

        transform: "scaleX(0.7) scaleY(0)",
        opacity: 0,
        borderRadius: "30px",


    })
})





var section = document.querySelectorAll(".sec-right ");

//var video2 = document.querySelector(".sec-right video");


section.forEach(function (elem) {

    // console.log(elem.childNodes);

    elem.addEventListener("mouseenter", function () {

        elem.childNodes[5].style.opacity = 1
        elem.childNodes[5].play()


    })

})


section.forEach(function (elem) {

    // console.log(elem.childNodes);

    elem.addEventListener("mouseleave", function () {

        elem.childNodes[5].style.opacity = 0
        elem.childNodes[5].pause()
    })
})


// gola 


function call() {

    var page1 = document.querySelector(".sec-right");
    var coursor = document.querySelector(" #gola");

    page1.addEventListener("mousemove", function (dets) {


        let rectangleloction = page1.getBoundingClientRect();

        //  console.log(rectangleloction);

        gsap.to(coursor, {

            x: dets.x - page1.getBoundingClientRect().x - 120,
            y: dets.y - page1.getBoundingClientRect().y - 80

        })
    })


    page1.addEventListener("mouseenter", function () {


        gsap.to(coursor, {

            scale: 1,
            opacity: 1,

        })
    });

    page1.addEventListener("mouseleave", function () {

        gsap.to(coursor, {

            scale: 0
        })
    })

}

call();



// page 8
const page8 = document.querySelectorAll(".page-8_3 ")

//const container = document.querySelector('.page-8_3');



page8.forEach(function (elem1) {

    console.log(elem1.childNodes)

    elem1.addEventListener("mouseenter", function () {


        gsap.to(elem1.childNodes[1], {

            opacity: 0,
            scale: 0,
        })
    })


    elem1.addEventListener("mouseleave", function () {


        gsap.to(elem1.childNodes[1], {

            opacity: 1,
            scale: 1,
        })
    })

    elem1.addEventListener("mouseenter", function () {

        // elem.childNodes[5].style.opacity = 1
        elem1.childNodes[3].play()


    })


})



gsap.to("#page10-part2 h4", {

    x: 0,
    duration: 3,

    scrollTrigger: {

        trigger: "#page10-part2",
        scroll: "#main",
         markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub: true,

    }

})



gsap.to("#page10-part3 h4", {

    x: 0,
    duration: 3,
    scrollTrigger: {

        trigger: "#page10-part2",
        scroll: "#main",
        //  markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub: true,

    }

})



gsap.to("#page10-part4 h4", {

    x: 0,
    duration: 3,


    scrollTrigger: {

        trigger: "#page10-part2",
        scroll: "#main",
        // markers: true,
        start: "top 60%",
        end: "top 10%",
        scrub: true,

    }

})


//locomotiveAnimation();