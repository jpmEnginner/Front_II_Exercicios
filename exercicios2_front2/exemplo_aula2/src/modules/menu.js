// ===== MENU MOBILE - CONTROLE DO ASIDE =====

// Seleção dos elementos
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const asideOverlay = document.getElementById('asideOverlay');
const closeBtn = document.getElementById('closeBtn');

// Função para abrir o sidebar
function openSidebar() {
    sidebar.classList.add('active');
    asideOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Função para fechar o sidebar
function closeSidebar() {
    sidebar.classList.remove('active');
    asideOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Event Listeners
if (menuToggle) {
    menuToggle.addEventListener('click', openSidebar);
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
}

if (asideOverlay) {
    asideOverlay.addEventListener('click', closeSidebar);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && sidebar.classList.contains('active')) {
        closeSidebar();
    }
});

document.addEventListener('touchmove', (e) => {
    if (sidebar.classList.contains('active')) {
        e.preventDefault();
    }
}, { passive: false });

// ===== ANIMAÇÃO DO BOTÃO HAMBÚRGUER =====
if (menuToggle) {
    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active');

        const spans = this.querySelectorAll('span');
        spans.forEach((span, index) => {
            if (this.classList.contains('active')) {
                switch (index) {
                    case 0:
                        span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                        break;
                    case 1:
                        span.style.opacity = '0';
                        break;
                    case 2:
                        span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                        break;
                }
            } else {
                span.style.transform = 'none';
                span.style.opacity = '1';
            }
        });
    });
}

// Resetar animação do botão quando fechar
if (closeBtn || asideOverlay) {
    const resetMenuButton = () => {
        if (menuToggle) {
            menuToggle.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        }
    };

    if (closeBtn) {
        closeBtn.addEventListener('click', resetMenuButton);
    }

    if (asideOverlay) {
        asideOverlay.addEventListener('click', resetMenuButton);
    }
}

// ===== SMOOTH SCROLL PARA LINKS DO MENU =====
document.querySelectorAll('.sidebar-link, .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href && href.startsWith('#') && href.length > 1) {
            e.preventDefault();

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Fechar o menu mobile se estiver aberto
                if (sidebar.classList.contains('active')) {
                    closeSidebar();
                }

                // Smooth scroll para o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    if (!menuToggle || !sidebar || !asideOverlay || !closeBtn) {
        console.warn('Alguns elementos do menu mobile não foram encontrados');
    }

    closeSidebar();
});