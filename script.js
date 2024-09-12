document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('response').classList.remove('hidden');
});

document.getElementById('no').addEventListener('mouseover', function() {
    this.style.position = 'absolute';
    this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
    this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
});
