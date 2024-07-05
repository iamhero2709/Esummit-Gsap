function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
  
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  
    // Define the timeline after ScrollTrigger is set up
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#page1 h1',
        scroller: '#main',
        start: 'top 27%',
        end: 'top 0',
        scrub: 3
      }
    });
  
    tl.to('#page1 h1', { x: -80 }, 'anime');
    tl.to('#page1 h2', { x: 100 }, 'anime');
    tl.to('#page1 video', { width: '90%' }, 'anime');
  
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#page1 h1',
        scroller: '#main',
        start: 'top -116%',
        end: 'top -130%',
        scrub: 3
      }
    });
  
    tl2.to('#main', { backgroundColor: "#ffff" });
    tl2.to('#page2 h1', { x: 100 }, 'anime');
    tl2.to('.page2-left h2', { scale: 0.8, x: 80, y: 80 }, 'anime');
    tl2.to('.page2-right p', { x: -80 }, 'anime');
    tl2.to('.page2-right button', { x: -80 }, 'anime');
  
    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#page1 h1',
        scroller: '#main',
        start: 'top -150%',
        end: 'top -410%',
        scrub: 3
      }
    });
  
    tl3.to('#main', { backgroundColor: '#111', color: '#fff' }, 'anime');
    tl3.to('.page3-part1 img', { x: 60 }, 'anime');
    tl3.to('.page3-part1 h2', { x: -80 }, 'anime');
    tl3.to('.page3-part2 h2', { y: 90 }, 'anime');
    tl3.to('.page3-part2 img', { x: 60 }, 'anime');
    tl3.to('.page3-part3 img', { x: 60 }, 'anime');
    tl3.to('.page3-part3 h2', { y: 90 }, 'anime');
  }
  
  // Initialize the setup
  init();
  
  var cursor = document.querySelector(".cursor");
  var main = document.querySelector('#main');
  
  main.addEventListener('mousemove', function(dets) {
    cursor.style.left = dets.clientX + "px";
    cursor.style.top = dets.clientY + "px";
  });
  