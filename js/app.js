
// Logo Animation

function animateLogo() {
  // Animation duration is 2 seconds.
  TweenMax.fromTo("#react-logo",2, {
      // from
      css: {
      	// 使用 CSS3 transform
        y: "-20px",
      }
    },{
      // to
      css: {
        y: "20px",
      },

      // option to repeat animation forever
      repeat: -1,

      // option to reverse the animation and rerun
      yoyo: true,
    
      ease: Power2.easeInOut,
    }
  );
}

// Robot Animation

function animateRobot() {
  var t = new TimelineMax({yoyo: true, repeat: -1});
  t.to("#android-robot",0.5,{rotation: "-=8deg"})
    // .to("#android-robot",1,{rotation: "15deg"})
}

function updateSliderControl() {
  // 获得所有的 slider 链接
  var links = document.querySelectorAll("#slider-control a")

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    // 获取被链接指向的部分
    var section = document.querySelector(link.getAttribute("href"));
    var sectionTop = section.offsetTop;
    var sectionBottom = section.getBoundingClientRect().bottom-section.getBoundingClientRect().top+section.offsetTop;

    // 检查 window.scrollY 是否在这部分中
    if(window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
      link.className = "active";
    } else {
      link.className = "";
    }
  }
}
// 使用 onscroll 回调函数来更新 slider
window.onscroll = function () {
	updateSliderControl();
}

function scrollToElement(element) {
  var topOfElement = element.offsetTop;

  TweenMax.to(window,1,{
    scrollTo: {
      y: topOfElement,
    },

    ease: Power2.easeInOut,
  });
}

function addSmoothScrolling() {
  var links = document.querySelectorAll("#slider-control a");

  for(var i = 0; i < links.length; i++) {
    var link = links[i];

    link.addEventListener("click",function(e) {
      e.preventDefault();

      // BUG 警告！使用闭包或者 ES6 `let` 修复。
      var href = link.attributes.getNamedItem("href").value;
      var target = document.querySelector(href);
      scrollToElement(target);
    });
  }
}

// function addScrollingBling() {
//   var controller = new ScrollMagic.Controller();
//   var moveIPhone = new new ScrollMagic.Scene({
//     triggerElement: "#native",
//     triggerHook: "onEnter",
//     duration: "100%"
//   }).addTo(controller)
//     .addIndicators({name:"move iphone"});
//     .setTween("#iphone-overlay",1,{width: "50%", y: 0});
// }

window.onload = function() {
  animateLogo();
  animateRobot();
  updateSliderControl();
  addSmoothScrolling();
  // addScrollingBling()
};

