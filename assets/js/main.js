document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===location.pathname.split('/').pop())a.classList.add('active')});
