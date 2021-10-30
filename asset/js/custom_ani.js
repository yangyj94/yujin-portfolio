//SupahScroll

class SupahScroll {
    constructor(options) {
      this.opt = options || {}
      this.el = this.opt.el ? this.opt.el : '.supah-scroll'
      this.speed = this.opt.speed ? this.opt.speed : 0.1
      this.init()
    }
  
    init() {
      this.scrollY = 0
      this.supahScroll = document.querySelectorAll(this.el)[0]
      this.supahScroll.classList.add('supah-scroll')
      // pallax img
      this.aboImg = document.querySelector('#in-img1')
      this.inImg2 = document.querySelector('#in-img2')
      this.inImg3 = document.querySelector('#in-img3')
      this.inImg4 = document.querySelector('#in-img4')
      this.inImg5 = document.querySelector('#in-img5')
      this.theme = document.querySelector('#theme')
     
      this.events()
      this.update()
      this.animate()
    }
  
    update() {
      if (this.supahScroll === null) return
     // document.body.style.height = `${this.supahScroll.getBoundingClientRect().width*0.95}px`
    }
  
    pause() {
      document.body.style.overflow = 'hidden'
      cancelAnimationFrame(this.raf)
    }
  
    play() {
      document.body.style.overflow = 'inherit'
      this.raf = requestAnimationFrame(this.animate.bind(this))
    }
  
    destroy() {
      this.supahScroll.classList.remove('supah-scroll')
      this.supahScroll.style.transform = 'none'
      document.body.style.overflow = 'inherit'
      window.removeEventListener('resize', this.update)
      cancelAnimationFrame(this.raf)
      delete this.supahScroll
    }
  
    animate() {
      this.scrollY += (window.scrollY - this.scrollY) * this.speed
      this.supahScroll.style.transform = `translate3d(${-this.scrollY}px,0,0)`
      //in-img
      this.aboImg.style.transform = `translate3d(${-this.scrollY * 0.04}px,0,0)`
      this.inImg2.style.transform = `translate3d(${-this.scrollY * 0.07}px,0,0)`
      this.inImg3.style.transform = `translate3d(${-this.scrollY * 0.07}px,0,0)`
      this.inImg4.style.transform = `translate3d(${-this.scrollY * 0.07}px,0,0)`
      this.inImg5.style.transform = `translate3d(${-this.scrollY * 0.07}px,0,0)`
  
      this.raf = requestAnimationFrame(this.animate.bind(this))
    }
  
    scrollTo(y) {
      window.scrollTo(0, y)
    }
  
    staticScrollTo(y) {
      cancelAnimationFrame(this.raf)
      this.scrollY = y
      window.scrollTo(0, y)
      this.supahScroll.style.transform = `translate3d(0,${-y}px,0)`
      this.play()
    }
  
    events() {
      window.addEventListener('load', this.update.bind(this))
      window.addEventListener('resize', this.update.bind(this))
    }
  }
  
  
  
  // Initialize
  
  const supahscroll = new SupahScroll({
      el: 'main',
      speed: 0.05
  })
  
  
    //reveal
  
  //reveal1 
  const body = document.querySelectorAll("body");
  body.forEach(elem => {
      let scrollTop = window.innerHeight/2;
      
      if(scrollTop){
          elem.classList.add("show");
      }
  });
  
  
  imagesProgress();
  
  // 로딩 스크립트 함수 
  function imagesProgress() {
  var $container = $('#progress'),
  $progressBar = $container.find('.progress-bar'),
  $progressText = $container.find('.progress-text'),
  imgLoad = imagesLoaded('html'),
  imgTotal = imgLoad.images.length,
  imgLoaded = 0,
  current = 0,
  progressTimer = setInterval(updateProgress, 1000 / 60),
  body = document.querySelector("body");
  
  imgLoad.on('progress', function(){
    imgLoaded++;
  });
  
  function updateProgress(){
    var target = (imgLoaded / imgTotal) * 100;
    current += (target - current) * 0.1;
  
    $progressBar.css({ width: current + '%' });
    $progressText.text( Math.floor(current) +  '%' );
  
    if(current >= 100){ 
      clearInterval(progressTimer);
      $container.addClass('progress-complete');      
      body.classList.add('active');
      $progressBar.add($progressText).delay(500).animate({ opacity:0 }, 250, function(){
        $container.animate({ top: '-100%' }, 1000, 'easeInOutQuint' );
      });
  
      let tl = gsap.timeline();
  
      //imageLoadingAfter();
    };
    if(current > 99.9){
      current = 100;
    };
  };
  };
  
  //로딩 후 애니메이션 
  setTimeout(function(){
    var tl = gsap.timeline();
    
    tl.to(hide, {duration:.5, width:0, opacity: 1, ease: "power1.in"}, "-=0.1");
    tl.to(mTit, {duration:.6, y:0, opacity: 1, ease: "power1.inout"}, "-=0.3");
    tl.to(mTit2, {duration:.6, y:0, opacity: 1, ease: "power1.inout"}, "-=0.3");
    tl.to(mTxt, {duration:.6, y:0, opacity: 1, ease: "power1.inout"}, "-=0.3");
    tl.to(name, {duration:.6, x:0, opacity: 1, ease: "power1.inout"}, "-=0.3");
    tl.to(bar2, {duration:.2, height:"100%", opacity: 1, ease: "power1.inout"}, "-=0.1");
    tl.to(bar, {duration:.2, width:"100%", opacity: 1, ease: "power1.inout"}, "-=0.1");
    tl.to(navi, {duration:.5, y:0, opacity: 1, ease: "power1.inout"}, "-=0.1");
    tl.to(bar3, {duration:.5, height:"100%", opacity: 1, ease: "power1.inout"}, "-=0.1");
    tl.to(ctwT, {duration:.5, y:0, opacity: 1, ease: "power1.inout"}, "-=0.1");
    tl.to(bar4, {duration:.2, width:"100%", opacity: 1, ease: "power1.inout"}, "-=0.1");
    tl.to(ctwB, {duration:.5, y:0, opacity: 1, ease: "power1.inout"}, "-=0.1");
    tl.to(ptOne, {duration:.5, x:0, opacity: 1, ease: "power1.inout"}, "-=0.1");
    tl.to(thm, {duration:.5, opacity: 1, ease: "power1.inout"}, "-=0.1");
  
  },3500);
  
  
  const mTit = document.getElementById("main-tit1");
  const mTit2 = document.getElementById("main-tit2");
  const mTxt = document.getElementById("main-txt");
  const name = document.getElementById("main-name");
  const hide = document.getElementById("hide");
  const bar = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");
  const bar4 = document.getElementById("bar4");
  const navi = document.getElementById("navi");
  const ctwT = document.getElementById("ctw-top");
  const ctwB = document.getElementById("ctw-bt");
  
  const ptOne = document.getElementById("ptObox");
  
  const tBox = document.querySelector(".t-box");
  const tBox2 = document.querySelector(".t-box2");
  const tBox3 = document.querySelector(".t-box3");
  
  const skMenu = document.getElementById("sk-menu");
  
  const skBox1 = document.querySelector(".sk-box1");
  const skBox2 = document.querySelector(".sk-box2");
  const skBox3 = document.querySelector(".sk-box3");
  
  const ct5 = document.getElementById("cont5");
  
  const wkMenu = document.getElementById("work-menu");
  
  const crImg1 = document.getElementById("cr-img1");
  const crTb1 = document.getElementById("cr-tb1");
  const crImg2 = document.getElementById("cr-img2");
  const crImg2_2 = document.getElementById("cr-img2-2");
  const crCb1 = document.querySelector("#cont7 .c-box1");
  const crCb2 = document.querySelector("#cont7 .c-box2");
  const crCb3 = document.querySelector("#cont7 .c-box3");
  const crImg3 = document.getElementById("cr-img3");
  const crImg3_2 = document.getElementById("cr-img3-2");
  const crCb3_1 = document.querySelector("#cont8 .c-box1");
  const crCb3_2 = document.querySelector("#cont8 .c-box2");
  const crCb3_3 = document.querySelector("#cont8 .c-box3");
  const crImg4 = document.getElementById("cr-img4");
  const crImg4_2 = document.getElementById("cr-img4-2");
  const crCb4_1 = document.querySelector("#cont9 .c-box1");
  const crCb4_2 = document.querySelector("#cont9 .c-box2");
  const crCb4_3 = document.querySelector("#cont9 .c-box3");
  
  const etcMenu = document.getElementById("etc-menu");
  const viewMenu = document.getElementById("view-menu");
  
  const fBox = document.getElementById("fBox");
  const cttBox= document.querySelector(".ctt-box");
  const sendBox= document.querySelector(".send-box");
  
  const endT= document.querySelector(".end-top");
  
  const thm = document.getElementById("theme");
  
  
  //scroll ani
  
  window.addEventListener("scroll",function(){
    let scrollTop = document.documentElement.scrollTop; 
  
    if(cont3.getBoundingClientRect().left - window.innerWidth*3.3/4 <= 0){
      let textAni = gsap.timeline();
      textAni.to(tBox, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
              .to(tBox2, {duration:.6, y:0, opacity: 1, ease: "power1.out"}, "-=0.3")
              .to(tBox3, {duration:.6, y:0, opacity: 1, ease: "power1.out"}, "-=0.3")
    }
  
    if(pttT.getBoundingClientRect().left - window.innerWidth*3.3/4 <= 0){
      let pttTw = gsap.timeline();
      pttTw.to(skMenu, {duration:.6, x:0, opacity: 1, ease: "power1.out"})
    }
  
    if(cont4.getBoundingClientRect().left - window.innerWidth*3.3/4 <= 0){
      let skBox = gsap.timeline();
      skBox.to(skBox1, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
            .to(skBox2, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
            .to(skBox3, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
    }
  
    if(cont5.getBoundingClientRect().left - window.innerWidth*3.3/4 <= 0){
      let cnt5 = gsap.timeline();
      cnt5.to(cont5, {duration:.6, x:0, opacity: 1, ease: "power1.out"})
    }
  
    if(pttTrd.getBoundingClientRect().left - window.innerWidth*3.3/4 <= 0){
      let pttTd = gsap.timeline();
      pttTd.to(wkMenu, {duration:.6, x:0, opacity: 1, ease: "power1.out"})
    }
  
    if(cont6.getBoundingClientRect().left - window.innerWidth*2/4 <= 0){
      let ct6desc = gsap.timeline();
      ct6desc.to(crImg1, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
            .to(crTb1, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
    }
    if(cont7.getBoundingClientRect().left - window.innerWidth*2/4 <= 0){
      let ct7desc = gsap.timeline();
      ct7desc.to(crImg2, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
            .to(crImg2_2, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
            .to(crCb1, {duration:.5, y:0, opacity: 1, ease: "power1.out"})
            .to(crCb2, {duration:.5, y:0, opacity: 1, ease: "power1.out"})
            .to(crCb3, {duration:.5, y:0, opacity: 1, ease: "power1.out"})
    }
  
    if(cont8.getBoundingClientRect().left - window.innerWidth*2/4 <= 0){
      let ct8desc = gsap.timeline();
      ct8desc.to(crImg3, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
            .to(crImg3_2, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
            .to(crCb3_1, {duration:.5, y:0, opacity: 1, ease: "power1.out"})
            .to(crCb3_2, {duration:.5, y:0, opacity: 1, ease: "power1.out"})
            .to(crCb3_3, {duration:.5, y:0, opacity: 1, ease: "power1.out"})
    }
    if(cont9.getBoundingClientRect().left - window.innerWidth*2/4 <= 0){
      let ct9desc = gsap.timeline();
      ct9desc.to(crImg4, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
            .to(crImg4_2, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
            .to(crCb4_1, {duration:.5, y:0, opacity: 1, ease: "power1.out"})
            .to(crCb4_2, {duration:.5, y:0, opacity: 1, ease: "power1.out"})
            .to(crCb4_3, {duration:.5, y:0, opacity: 1, ease: "power1.out"})
    }
  
    if(pttEtc.getBoundingClientRect().left - window.innerWidth*3.3/4 <= 0){
      let pttE = gsap.timeline();
      pttE.to(etcMenu, {duration:.6, x:0, opacity: 1, ease: "power1.out"})
    }
  
    if(bigBtn.getBoundingClientRect().left - window.innerWidth*3.5/4 <= 0){
      let bigB = gsap.timeline();
      bigB.to(viewMenu, {duration:.6, x:0, opacity: 1, ease: "power1.out"})
    }
  
    if(cont11.getBoundingClientRect().left - window.innerWidth*3.3/4 <= 0){
      let boxAni = gsap.timeline();
      boxAni.to(fBox, {duration:.6, y:0, opacity: 1, ease: "power1.out"})
              .to(cttBox, {duration:.6, y:0, opacity: 1, ease: "power1.out"}, "-=0.3")
              .to(sendBox, {duration:.6, y:0, opacity: 1, ease: "power1.out"}, "-=0.3")
    }
  
    if(cont12.getBoundingClientRect().left - window.innerWidth*3.9/4 <= 0){
      let endAni = gsap.timeline();
      endAni.to(endT, {duration:.8, x:0, opacity: 1, ease: "power1.out"})
              
    }
  });
  