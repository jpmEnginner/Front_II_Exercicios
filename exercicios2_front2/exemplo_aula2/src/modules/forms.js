// Import das validações
import { validarEmail, validarDados } from './validation.js';


// ===== FORMULÁRIO DE LOGIN =====
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Pega os dados do formulário
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Validações básicas
            if (!email || !password) {
                alert('Por favor, preencha todos os campos!');
                return;
            }

            // Validação de email
            if (!validarEmail(email)) {
                alert('Email inválido');
                return;
            }

            // Desabilita o botão durante o envio
            const submitButton = loginForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Entrando...';

            try {
                // Chama a função de login do fetch.js
                const result = await loginUser(email, password);

                if (result.success) {
                    alert('Login realizado com sucesso!');

                    // Redireciona baseado no tipo de usuário
                    switch (result.user.tipo_usuario) {
                        case 'PASSAGEIRO':
                            window.location.href = 'dashboardUsuario.html';
                            break;
                        case 'MOTORISTA':
                            window.location.href = 'dashboardUsuario.html';
                            break;
                        case 'ADMINISTRADOR':
                            window.location.href = 'dashboardAdm.html';
                            break;
                        default:
                            alert('Tipo de usuário não reconhecido');
                            break;
                    }
                } else {
                    alert(result.message || 'Erro ao fazer login');
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro de conexão. Tente novamente.');
            } finally {
                // Reabilita o botão
                submitButton.disabled = false;
                submitButton.textContent = 'Entrar';
            }
        });
    }
});

// ===== FORMULÁRIO DE CADASTRO =====
document.addEventListener('DOMContentLoaded', function() {
    const cadastroForm = document.getElementById('cadastroForm');
    
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Captura todos os dados do formulário
            const dadosCadastro = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                senha: document.getElementById('senha').value,
                idade: parseInt(document.getElementById('idade').value),
                sexo: document.getElementById('sexo').value,
                telefone: document.getElementById('telefone').value,
                dataNascimento: document.getElementById('dataNascimento').value,
                cpf: document.getElementById('cpf').value,
                endereco: document.getElementById('endereco').value,
                nacionalidade: document.getElementById('nacionalidade').value,
                tipoUsuario: document.getElementById('tipoUsuario').value
            };
            
            // Validações básicas
            if (!validarDados(dadosCadastro)) {
                return;
            }
            
            // Desabilita o botão durante o envio
            const submitButton = cadastroForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Cadastrando...';
            
            try {
                // Chama a função de cadastro do fetch.js
                const result = await cadastrarUsuario(dadosCadastro);
                
                if (result.success) {
                    alert('Cadastro realizado com sucesso!');
                    // Redireciona para a página de login
                    window.location.href = 'login.html';
                } else {
                    alert(result.message || 'Erro ao cadastrar usuário');
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro de conexão. Tente novamente.');
            } finally {
                // Reabilita o botão
                submitButton.disabled = false;
                submitButton.textContent = 'Cadastrar';
            }
        });
    }
});

// ===== LOGOUT =====
document.addEventListener('DOMContentLoaded', function() {
    // Busca por ambos os IDs
    const logoutBtn = document.getElementById('logoutBtn') || document.getElementById('logoutButton');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async function(e) {
            e.preventDefault();
            
            if (confirm('Tem certeza que deseja sair?')) {
                try {
                    const textoOriginal = logoutBtn.textContent;
                    logoutBtn.textContent = 'Saindo...';
                    
                    const result = await logoutUser();
                    
                    if (result.success) {
                        alert('Logout realizado com sucesso!');
                        window.location.href = 'login.html';
                    } else {
                        alert(result.message || 'Erro ao fazer logout');
                    }
                    
                } catch (error) {
                    console.error('Erro:', error);
                    alert('Erro de conexão. Tente novamente.');
                } finally {
                    logoutBtn.textContent = textoOriginal;
                }
            }
        });
    } else {
        console.log('Elemento de logout não encontrado!');
    }
});