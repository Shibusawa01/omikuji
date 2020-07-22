'use strict';

{
  const btn = document.getElementById('btn');
  btn.addEventListener('click',()=>{
  // const results = ['大吉','中吉','凶','末吉'];
  // const results = ['大吉','大吉','大吉','大吉','凶'];
  // btn.textContent = results[Math.floor(Math.random()* results.length)];
  const n = Math.random();
  if(n<0.2){
    btn.textContent = 'カレーライス';
    alert(btn.textContent);
  }else if(n<0.4){
    btn.textContent = '寿司';
    alert(btn.textContent);
  }else if(n<0.6){
    btn.textContent = 'スパゲッティ';
    alert(btn.textContent);
  }else if(n<0.8){
    btn.textContent = 'ハンバーガー';
    alert(btn.textContent);
  }else{
    btn.textContent = 'ラーメン';
    alert(btn.textContent);
  }
  });
}
