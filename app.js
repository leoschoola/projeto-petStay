document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = document.querySelector('header').offsetHeight; // Altura do cabeçalho fixo
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            const nav = document.getElementById('main-nav');
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        }
    });

    const cadastroPetForm = document.getElementById('cadastroPetForm');
    const cadastroPetMessage = document.getElementById('cadastroPetMessage');
    const reservaForm = document.getElementById('reservaForm');
    const reservaMessage = document.getElementById('reservaMessage');

    cadastroPetForm.addEventListener('submit', function(e) {
        e.preventDefault();

        cadastroPetMessage.classList.remove('success', 'error');
        cadastroPetMessage.style.display = 'block';

        // Simula um delay para envio
        setTimeout(() => {
            const isSuccess = Math.random() > 0.2; 

            if (isSuccess) {
                cadastroPetMessage.textContent = 'Pet cadastrado com sucesso! Entraremos em contato.';
                cadastroPetMessage.classList.add('success');
                cadastroPetForm.reset(); 
            } else {
                cadastroPetMessage.textContent = 'Erro ao cadastrar pet. Tente novamente.';
                cadastroPetMessage.classList.add('error');
            }
            setTimeout(() => {
                cadastroPetMessage.style.display = 'none';
            }, 5000);
        }, 1000);
    });

    reservaForm.addEventListener('submit', function(e) {
        e.preventDefault(); 

        reservaMessage.classList.remove('success', 'error'); 
        reservaMessage.style.display = 'block';

        // Simula um delay para envio
        setTimeout(() => {
            const isSuccess = Math.random() > 0.2; 

            if (isSuccess) {
                reservaMessage.textContent = 'Reserva agendada com sucesso! Aguarde nossa confirmação.';
                reservaMessage.classList.add('success');
                reservaForm.reset(); 
            } else {
                reservaMessage.textContent = 'Erro ao agendar reserva. Verifique as datas e tente novamente.';
                reservaMessage.classList.add('error');
            }
            setTimeout(() => {
                reservaMessage.style.display = 'none';
            }, 5000);
        }, 1000);
    });
});