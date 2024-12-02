// back to top function 
document.addEventListener('scroll', function () {
    const btn = document.getElementById('backToTop');
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
    btn.style.position = window.scrollY > 300 && 'fixed';
});

document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
