// slider top (id = anywhere)
let fullImgSlider = [
        'big/wood-big.jpg',
        'big/glass-big.jpg',
        'big/linoleum-big.jpg',
        'big/cloth-big.jpg',
        'big/marble-big.jpg',
    ],
    mobImgSlider = [
        'mob/wood-mob.jpg',
        'mob/glass-mob.png',
        'mob/linoleum-mob.png',
        'mob/cloth-mob.png',
        'mob/marble-mob.png',
    ], counter = 0;

const imgFull = document.querySelector('.slider__picture-big'),
      imgMob = document.querySelector('.slider__picture-mob'),
      btn = document.querySelectorAll('.btn');

document.querySelectorAll('.arrow-btn')[0].addEventListener('click', () => {
    counter--;
    checked(counter < 0, btn.length - 1, -1);
});

for (let i = 0; i < btn.length; i++) {
    btn[i].id = i + 1;
    btn[i].onclick = btnClick;
}

document.querySelectorAll('.arrow-btn')[1].addEventListener('click', () => {
    counter++;
    checked(counter > btn.length - 1, 0, 1);
});

function btnClick() {
    for (let item of btn) {
        if (item.classList.contains('checked')) {
            item.classList.remove('checked');
            break;
        }
    }

    counter = this.id - 1;
    this.classList.add('checked');

    imgFull.src = `img/${fullImgSlider[counter]}`;
    imgMob.src = `img/${mobImgSlider[counter]}`;
}

function checked(term, newNum, addCheck) {
    for (let i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains('checked')) {
            btn[i].classList.remove('checked');
            if (term) {
                counter = newNum;
                btn[counter].classList.add('checked');
            } else {
                btn[i + addCheck].classList.add('checked');
            }
            break;
        }
    }

    imgFull.src = `img/${fullImgSlider[counter]}`;
    imgMob.src = `img/${mobImgSlider[counter]}`;
}

// slider bottom (id = settings)

const dropLink = document.querySelectorAll('.drop__link'),
      dropInput = document.getElementById('check');

for (let i = 0; i < dropLink.length; i++) {
    dropLink[i].onclick = function() {
        dropInput.checked = false;
    }
}

const settingsImg = document.querySelector('.media__options');

function imgSwitch(num) {
    settingsImg.src = 'img/mouse-settings' + num + '.png';
}