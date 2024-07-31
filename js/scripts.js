document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário
        alert('Formulário enviado com sucesso!');
    });
});