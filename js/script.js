(function() {
const nextBtn = document.querySelector('.next');
const backBtn = document.querySelector('.back');
const card1 = document.querySelector('.c1');
const card2 = document.querySelector('.c2');
const card3 = document.querySelector('.c3');
const card4 = document.querySelector('.c4');
const card5 = document.querySelector('.c5');
const card6 = document.querySelector('.c6');
const lcard1 = document.querySelector('.sl1');
const lcard2 = document.querySelector('.sl2');
const lcard3 = document.querySelector('.sl3');
const lcard4 = document.querySelector('.sl4');
const lcard5 = document.querySelector('.sl5');
const lcard6 = document.querySelector('.sl6');
var n = 0;
setInterval(function() {
    if(n === 11) {
        n = 0 ;
    }
}, 1000);
nextBtn.addEventListener('click', function() {
  // Включение анимации нажатия
  this.style.transform = "scale(0.9)";
  // Изменение цвета фона
  this.style.backgroundColor = "#4c4d51";

  // Задержка для отображения анимации нажатия и изменения цвета
  setTimeout(() => {
    // Возврат к исходному размеру и цвету после анимации нажатия
    this.style.transform = "scale(1)";
    this.style.backgroundColor = "#2c2d31";
  }, 200); // Измените задержку, если требуется другая продолжительность анимации

    v = 0;
    n++;
    card1.classList.add('disactive');
    lcard1.classList.remove('disactive');
    if(n === 2) {
        card2.classList.add('disactive');
        lcard2.classList.remove('disactive');
    }
    if(n === 3) {
        card3.classList.add('disactive');
        lcard3.classList.remove('disactive');
    }
    if(n === 4) {
        card4.classList.add('disactive');
        lcard4.classList.remove('disactive');
    }
    if(n === 5) {
        card5.classList.add('disactive');
        lcard5.classList.remove('disactive');
    }
    if(n === 6) {
        card6.classList.add('disactive');
        lcard6.classList.remove('disactive');
    }
    if(n > 6) {
        card1.classList.remove('disactive');
        card2.classList.remove('disactive');
        card3.classList.remove('disactive');
        card4.classList.remove('disactive');
        card5.classList.remove('disactive');
        card6.classList.remove('disactive');
        lcard1.classList.add('disactive');
        lcard2.classList.add('disactive');
        lcard3.classList.add('disactive');
        lcard4.classList.add('disactive');
        lcard5.classList.add('disactive');
        lcard6.classList.add('disactive');
        n = 0;
        v = 1;
    }
});
backBtn.addEventListener('click', function() {
  // Включение анимации нажатия
  this.style.transform = "scale(0.9)";
  // Изменение цвета фона
  this.style.backgroundColor = "#4c4d51";

  // Задержка для отображения анимации нажатия и изменения цвета
  setTimeout(() => {
    // Возврат к исходному размеру и цвету после анимации нажатия
    this.style.transform = "scale(1)";
    this.style.backgroundColor = "#2c2d31";
  }, 200); // Измените задержку, если требуется другая продолжительность анимации

    if(n === 1) {
        card1.classList.remove('disactive');
        lcard1.classList.add('disactive');
        n = 11;
    }
    if(n === 2) {
        card2.classList.remove('disactive');
        lcard2.classList.add('disactive');
        n--;
    }
    if(n === 3) {
        card3.classList.remove('disactive');
        lcard3.classList.add('disactive');
        n--;
    }
    if(n === 4) {
        card4.classList.remove('disactive');
        lcard4.classList.add('disactive');
        n--;
    }
    if(n === 5) {
        card5.classList.remove('disactive');
        lcard5.classList.add('disactive');
        n--;
    }
    if(n === 6) {
        card6.classList.remove('disactive');
        lcard6.classList.add('disactive');
        n--;
    }
    if(n === 0) {
        n--;
    }
    if(n < 0) {
        card1.classList.add('disactive');
        card2.classList.add('disactive');
        card3.classList.add('disactive');
        card4.classList.add('disactive');
        card5.classList.add('disactive');
        card6.classList.add('disactive');
        lcard1.classList.remove('disactive');
        lcard2.classList.remove('disactive');
        lcard3.classList.remove('disactive');
        lcard4.classList.remove('disactive');
        lcard5.classList.remove('disactive');
        lcard6.classList.remove('disactive');
        n = 6;
    }
});
})();
///////////////////////////////////////////////////////////////////////////////////////
const option1 = document.querySelector('.collections_option1');
const option2 = document.querySelector('.collections_option2');
const seebtn = document.querySelector('.collections_btn');
const allcontent = document.querySelector('.all');
const allcontent1 = document.querySelector('.all1');
const allcontent2 = document.querySelector('.all2');
var clickcount = 0;

option1.addEventListener('click', function() {
    option1.classList.add('active');
    option2.classList.remove('active');
});
option2.addEventListener('click', function() {
    option2.classList.add('active');
    option1.classList.remove('active');
});

seebtn.addEventListener('click', function() {
    allcontent.classList.remove('all');
    allcontent1.classList.remove('all1');
    allcontent2.classList.remove('all2');
    allcontent.classList.add('down');
    allcontent1.classList.add('down');
    allcontent2.classList.add('down');
    seebtn.innerHTML = 'CLOSE';
    clickcount++;
    if(clickcount === 2) {
        allcontent.classList.remove('down');
        allcontent1.classList.remove('down');
        allcontent2.classList.remove('down');
        allcontent.classList.add('all');
        allcontent1.classList.add('all1');
        allcontent2.classList.add('all2');
        seebtn.innerHTML = 'See All Collection';
        clickcount = 0;
    }
});
///////////////////////////////////////////////////////////////////////////////////////
const nextBtn = document.querySelector('.t_next');
const backBtn = document.querySelector('.t_back');
const card1 = document.querySelector('.t_c1');
const card2 = document.querySelector('.t_c2');
const card3 = document.querySelector('.t_c3');
const card4 = document.querySelector('.t_c4');
const lcard1 = document.querySelector('.t_lc1');
const lcard2 = document.querySelector('.t_lc2');
const lcard3 = document.querySelector('.t_lc3');
const lcard4 = document.querySelector('.t_lc4');  
var n = 0;

nextBtn.addEventListener('click', function() {
    n++;
    lcard1.classList.remove('dn');
    card1.classList.add('t_disactive');
    lcard1.classList.remove('t_disactiveR');
    if(n === 2) {
        lcard2.classList.remove('dn');
        card2.classList.add('t_disactive1');
        lcard1.classList.remove('t_disactiveR');
        lcard2.classList.remove('t_disactiveR');
    }
    if(n === 3) {
        lcard3.classList.remove('dn');
        card3.classList.add('t_disactive2');
        lcard3.classList.remove('t_disactiveR');
    }
    if(n === 4) {
        lcard4.classList.remove('dn');
        card4.classList.add('t_disactive3');
        lcard4.classList.remove('t_disactiveR');
        nextBtn.style.display = 'none';
    }
});

backBtn.addEventListener('click', function() {
    if(n === 1) {
        card1.classList.remove('t_disactive');
        lcard1.classList.add('t_disactiveR');
        nextBtn.style.display = 'block';
        n--;
    }
    if(n === 2) {
        lcard2.classList.add('t_disactiveR');
        card2.classList.remove('t_disactive1');
        nextBtn.style.display = 'block';
        n--;
    }
    if(n === 3) {
        lcard3.classList.add('t_disactiveR');
        card3.classList.remove('t_disactive2');
        nextBtn.style.display = 'block';
        n--;
    }
    if(n === 4) {
        lcard4.classList.add('t_disactiveR');
        card4.classList.remove('t_disactive3');
        nextBtn.style.display = 'block';
        n--;
    }
});
///////////////////////////////////////////////////////////////////////////////////////
const ApleStorebtn = document.getElementById('AppStore');
const GooglePlaybtn = document.getElementById('GooglePLay');

ApleStorebtn.addEventListener('click', function() {
    window.location.href = "https://www.apple.com/store";
});
GooglePlaybtn.addEventListener('click', function() {
    window.location.href = "https://play.google.com/store/games";
});
///////////////////////////////////////////////////////////////////////////////////////
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
///////////////////////////////////////////////////////////////////////////////////////
const mail = document.getElementById('mail');
mail.addEventListener('click', function() {
    window.location.href = "mailto:youremail@gmail.com";
});
///////////////////////////////////////////////////////////////////////////////////////
const explorebtn = document.querySelector('.main_Explore');
const conectButton = document.getElementById('conect_Button');
const section = document.querySelector('.modalwind');
const out = document.querySelector('.modalwind_block')

explorebtn.addEventListener('click', function() {
    section.classList.remove('displaynone');
});

conectButton.addEventListener('click', function() {
    section.classList.remove('displaynone');
});

out.addEventListener('click', function() {
    section.classList.add('displaynone');
});
///////////////////////////////////////////////////////////////////////////////////////
const btn1 = document.getElementById('bt1');
const btn2 = document.getElementById('bt2');
const btn3 = document.getElementById('bt3');

btn1.addEventListener('click', function() {
    window.location.href = "https://github.com/CODEX74";
});
btn2.addEventListener('click', function() {
    window.location.href = "https://github.com/CODEX74";
});
btn3.addEventListener('click', function() {
    window.location.href = "https://github.com/CODEX74";
});



// Добавление обработчика события нажатия кнопки
nextBtn.addEventListener("mousedown", function() {
  this.style.transform = "scale(0.9)";
});

backBtn.addEventListener("mousedown", function() {
  this.style.transform = "scale(0.9)";
});

// Добавление обработчика события отпускания кнопки
nextBtn.addEventListener("mouseup", function() {
  this.style.transform = "scale(1)";
});

backBtn.addEventListener("mouseup", function() {
  this.style.transform = "scale(1)";
});
