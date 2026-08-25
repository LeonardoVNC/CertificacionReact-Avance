let tdList = document.querySelectorAll('td')

tdList.forEach(td => {
    td.addEventListener('click', function () {
        if (td.className == 'mina') {
            tdList.forEach(celda => {
                celda.textContent = '💀'
                celda.style.color = '#fff'
            });
        } else {
            td.style.color = '#fff'
        }
    })
});