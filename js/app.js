var dropLink = document.querySelectorAll('.drop__link'),
    dropInput = document.getElementById('check');

for (var i = 0; i < dropLink.length; i++) {
    dropLink[i].onclick = function() {
        dropInput.checked = false;
    }
}

var settingsImg = document.querySelector('.media__options');

function imgSwitch(num) {
    settingsImg.src = 'img/mouse-settings' + num + '.png';
}