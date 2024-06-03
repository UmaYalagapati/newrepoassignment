function changeText() {
    document.getElementById('text').innerText = 'The text has been changed!';
}

function changeImage() {
    document.getElementById('image').src = 'images/about.jpg'; // Change to another image path
}

function resetContent() {
    document.getElementById('text').innerText = 'This is the original text.';
    document.getElementById('image').src = 'images/home.jpg'; // Reset to the original image
}

function checkCode() {
    const code = document.getElementById('secretCode').value;
    const error = document.getElementById('error');
    if (code === '12345') {
        error.style.display = 'none';
        alert('Code accepted!');
    } else {
        error.style.display = 'block';
    }
}

// Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    const acc = document.getElementsByClassName('accordion');
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    }
});
