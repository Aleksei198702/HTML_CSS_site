document.getElementById('toggle').addEventListener('change', function() {
    var content = document.getElementById('toggle-content');
    if (this.checked) {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});