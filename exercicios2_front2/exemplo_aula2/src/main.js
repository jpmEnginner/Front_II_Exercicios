// ===== IMPORTS DE CSS =====
import './styles/main.css'

// ===== IMPORTS DOS MÓDULOS JS =====
import './modules/menu.js'
import './modules/forms.js' 
import './modules/validation.js'
import './modules/modal.js'

// ===== INICIALIZAÇÃO DA APLICAÇÃO =====
document.querySelector('#app').innerHTML = `
<!DOCTYPE html>
<html lang="pt-BR">

<!--FEITA! - ligado com back-end-->

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina Inicial</title>
</head>

<body>
    <!-- Header -->
    <header class="header">
        <div class="header-container">

            <div class="header-logo">
                <img src="/src/assets/images/icone_vdc_meio.png" alt="VaiDeCarona" class="header-logo-image">
            </div>

            <!-- Botão hambúrguer (só aparece no mobile) -->
            <button class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <!-- Navegação Desktop -->
            <nav class="nav">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Sobre</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Contato</a>
                    </li>
                    <li class="nav-item">
                        <a href="cadastro.html" class="nav-link nav-link--primary">Cadastrar</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Overlay para mobile -->
    <div class="aside-overlay" id="asideOverlay"></div>

    <!-- Aside Mobile -->
    <aside class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <div class="sidebar-logo">
                <img src="/src/assets/images/icone_vdc_meio.png" alt="VaiDeCarona" class="sidebar-logo-image">
            </div>
            <button class="close-btn" id="closeBtn">&times;</button>
        </div>

        <nav class="sidebar-nav">
            <a href="#" class="sidebar-link">Sobre</a>
            <a href="#" class="sidebar-link">Contato</a>
            <a href="cadastro.html" class="sidebar-link sidebar-link--primary">Cadastrar</a>
        </nav>
    </aside>

    <!-- Main Content -->
    <main class="main">
        <div class="login-container">
            <div class="login-form-wrapper">

                <div class="form-logo">
                    <img src="/src/assets/images/icone_vdc_meio.png" alt="VaiDeCarona" class="form-logo-image">
                </div>

                <!-- FORMULÁRIO MODIFICADO -->
                <form class="login-form" id="loginForm">
                    <div class="input-group">
                        <input type="email" class="form-input" id="email" placeholder="Email" required>
                    </div>

                    <div class="input-group">
                        <input type="password" class="form-input" id="password" placeholder="Senha" required>
                    </div>

                    <button type="submit" class="btn btn--primary">Entrar</button>
                </form>

                <div class="signup-link">
                    <p class="signup-text">
                        Não tem uma conta?
                        <a href="cadastro.html" class="signup-link-text">Cadastre-se</a>
                    </p>
                </div>

            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">

            <div class="footer-links">
                <a href="#" class="footer-link">Termos de Serviço</a>
                <a href="#" class="footer-link">Política de Privacidade</a>
                <a href="#" class="footer-link">Ajuda</a>
            </div>

            <div class="social-links">
                <a href="#" class="social-link">
                    <img src="/src/assets/images/twitter.png" alt="Twitter" class="social-icon">
                </a>
                <a href="#" class="social-link">
                    <img src="/src/assets/images/facebook.png" alt="Facebook" class="social-icon">
                </a>
                <a href="#" class="social-link">
                    <img src="/src/assets/images/instagram.png" alt="Instagram" class="social-icon">
                </a>
            </div>

            <div class="copyright">
                <p class="copyright-text">© 2025 VaiDeCarona. Todos os direitos reservados.</p>
            </div>

        </div>
    </footer>

   <script type="module" src="/src/main.js"></script>
</body>

</html>`