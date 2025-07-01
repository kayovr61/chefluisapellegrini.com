// Script simples para o FAQ
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', event => {
        const parent = item.parentElement;
        
        // Fecha outros itens abertos
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== parent && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-answer').style.maxHeight = 0;
            }
        });

        // Abre ou fecha o item clicado
        parent.classList.toggle('active');
        const answer = item.nextElementSibling;
        if (parent.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    });
});