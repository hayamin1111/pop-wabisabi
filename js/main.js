'use strict';

anime({
  targets: '.anim_2',
  opacity: 1,
  easing: 'easeInOutQuad',
  delay: 4000
});

// 円を拡大縮小させる
const circle1 = document.getElementById('circle1');
anime({
  targets: circle1,
  easing: 'easeInOutSine',
  scale: [
    {value: .3, duration: 500, delay: 4300} ,
    {value: 5, duration: 500},
    {value: 1.3, duration: 700}, 
    {value: 9, duration: 950}, 
    {value: 0, duration: 300}
  ]  
});

// 円を順番に拡大する
const circles = document.querySelectorAll('.circle');
anime({
  targets: circles,
  easing: 'easeInOutSine',
  scale: [ 
    {value: 0},
    {value: 0, delay: 6800},
    {value: 1,
     delay: (elm, index, t) => index * 350}
  ]
});
/* ------------------------
  anim_3 四隅から四角が現れる
------------------------ */
anime({
  targets: '.anim_3',
  opacity: 1,
  easing: 'easeInOutQuad',
  delay: 7600
});

// 四隅から四角が出現その１
const squares = document.querySelectorAll('.squ');
anime({
  targets: squares,
  easing: 'easeInOutSine',
  scale: [
    {value: 0},
    {value: 0, delay: 7600},
    {value: 1, duration: 700}
  ]
});

// 四隅から四角が出現その２
const squares2 = document.querySelectorAll('.squ_2');
anime({
  targets: squares2,
  easing: 'easeInOutSine',
  scale: [
    {value: 0},
    {value: 0, delay: 8200},
    {value: 1, duration: 700}
  ]
});

//  左右から攻められる
const beltR = document.querySelectorAll('.right');
anime({
  targets: beltR,
  easing: 'easeInOutSine',
  translateX: [
    {value:-2000},
    {value:-2000, delay: 8600},
    {value: 0, 
     duration: 900,
     delay: (elem, index, t) => index * 180}
  ]
});

const beltL = document.querySelectorAll('.left');
anime({
  targets: beltL,
  easing: 'easeInOutSine',
  translateX: [
    {value:2000},
    {value:2000, delay: 8800},
    {value: 0, 
     duration: 700,
     delay: (elem, index, t) => index * 180}
  ]
});

/* ------------------------
  anim_5  放射線
------------------------ */
anime({
  targets: '.anim_5',
  opacity: 1,
  easing: 'easeInOutQuad',
  delay: 9300
});

const lineWrap = document.querySelectorAll('.line_wrap');
anime({
  targets: lineWrap,
  easing: 'easeInOutSine',
  scale: [
    {value: 0},
    {value: 0, delay: 9300},
    {value: 2, duration: 1200}
  ],
  rotate: [
    {value: 0},
    {value: 0, delay: 9300},
    {value: 180, duration: 1000},
  ]
});

const lines = document.querySelectorAll('.line');
anime({
  targets: lines,
  rotate: function (el, index ,l) { return index * 15;}
});

const circle5 = document.querySelector('.circle5');
anime({
  targets: circle5,
  easing: 'easeInOutSine',
  scale: [
    {value: 0},
    {value: 0, delay: 10000},
    {value: 2, duration: 1200}
  ]
});
/* ------------------------
  anim_6  小さい放射線（end）
------------------------ */
anime({
  targets: '.anim_6',
  opacity: 1,
  easing: 'easeInOutQuad',
  delay: 10000
});

const lineEndWrap = document.querySelectorAll('.line-end_wrap');
anime({
  targets: lineEndWrap,
  easing: 'easeInOutSine',
  scale: [
    {value: 0},
    {value: 0, delay: 10000},
    {value: 2, duration: 1200}
  ],
  rotate: [
    {value: 0},
    {value: 0, delay: 10000},
    {value: 360, duration: 2000},
  ]
});

const linesEnd = document.querySelectorAll('.line-end');
anime({
  targets: linesEnd,
  rotate: function (el, index ,l) { return index * 15;}
});

const circle6 = document.querySelectorAll('.circle6');
anime({
  targets: circle6,
  easing: 'easeInOutSine',
  scale: [
    {value: 0},
    {value: 0, delay: 11000},
    {value: 2.1, duration: 1200}
  ]
});

const txt6 = document.querySelectorAll('.txt6');
anime({
  targets: txt6,
  easing: 'easeInOutSine',
  opacity: [
    {value: 0},
    {value: 0, delay: 12100},
    {value: 1, duration: 1100}
  ]
});


// anime ({
//   targets : '.anim_1',
//   translateY: [
//     {value: 200, duration: 500},
//     {value: 0, duration: 800}
//   ],
//   // backgroundColor: 'red',
//   rotate: {
//     value: '1turn',
//     easing: 'easeInOutSine'
//   },
//   // opacity: '.3',
//   delay: function(el, i, l){return i * 1000},
//   loop: false
// });