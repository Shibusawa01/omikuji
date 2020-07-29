'use strict';

{
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    const n = Math.random();
    if (n < 0.2) {
      btn.textContent = 'カレーライス';
    } else if (n < 0.4) {
      btn.textContent = '寿司';
    } else if (n < 0.6) {
      btn.textContent = 'スパゲッティ';
    } else if (n < 0.8) {
      btn.textContent = 'ハンバーガー';
    } else {
      btn.textContent = 'ラーメン';
    }
  });
}
