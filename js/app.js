var dropLink = document.querySelectorAll('.drop__link'),
    dropInput = document.getElementById('check');

for (var i = 0; i < dropLink.length; i++) {
    dropLink[i].onclick = function() {
        dropInput.checked = false;
    }
}