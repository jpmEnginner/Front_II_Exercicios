// Import das validações
import { isValidEmail } from './validation.js';

// ===== MODAL DE EDIÇÃO DE USUÁRIO =====

let currentUserId = null;

// Função para abrir o modal de edição
function openEditModal(userId, name, email, role) {
    currentUserId = userId;

    // Preencher os campos do modal
    document.getElementById('editUserName').value = name;
    document.getElementById('editUserEmail').value = email;
    document.getElementById('editUserRole').value = role;

    // Mostrar o modal
    document.getElementById('editUserOverlay').classList.add('active');
    document.body.style.overflow = 'hidden'; // Previne scroll da página
}

// Função para fechar o modal
function closeEditModal() {
    document.getElementById('editUserOverlay').classList.remove('active');
    document.body.style.overflow = ''; // Restaura scroll da página
    currentUserId = null;

    // Limpar os campos
    document.getElementById('editUserName').value = '';
    document.getElementById('editUserEmail').value = '';
    document.getElementById('editUserRole').value = '';
}

// Função para atualizar a tabela após edição
function updateUserInTable(userId, name, email, role) {
    const row = document.querySelector(`[data-user-id="${userId}"]`);
    if (row) {
        // Atualizar nome
        row.querySelector('[data-field="name"]').textContent = name;

        // Atualizar email
        row.querySelector('[data-field="email"]').textContent = email;

        // Atualizar função
        const roleSpan = row.querySelector('[data-field="role"] .user-role');
        roleSpan.className = `user-role user-role--${role}`;

        // Definir texto da função
        const roleTexts = {
            'admin': 'Administrador',
            'driver': 'Motorista',
            'passenger': 'Passageiro'
        };
        roleSpan.textContent = roleTexts[role];

        // Atualizar data attributes do botão
        const editBtn = row.querySelector('.btn-action--edit');
        editBtn.setAttribute('data-name', name);
        editBtn.setAttribute('data-email', email);
        editBtn.setAttribute('data-role', role);
    }
}

// Função para simular salvamento (aqui você faria a requisição para o backend)
function saveUserChanges(userId, name, email, role) {
    // Simular delay de requisição
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simular sucesso (aqui você faria a chamada real para a API)
            console.log('Salvando usuário:', { id: userId, name, email, role });
            resolve({ success: true });
        }, 1000);
    });
}

// ===== FUNCIONALIDADE DE PESQUISA =====
const searchInput = document.getElementById('searchUsers');
if (searchInput) {
    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        const rows = document.querySelectorAll('.users-table .table-row');

        rows.forEach(row => {
            const name = row.querySelector('[data-field="name"]').textContent.toLowerCase();
            const email = row.querySelector('[data-field="email"]').textContent.toLowerCase();

            if (name.includes(searchTerm) || email.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {

    // Event listener para botões de editar
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('btn-action--edit')) {
            const userId = e.target.getAttribute('data-user-id');
            const name = e.target.getAttribute('data-name');
            const email = e.target.getAttribute('data-email');
            const role = e.target.getAttribute('data-role');

            openEditModal(userId, name, email, role);
        }
    });

    // Event listener para fechar modal
    const closeBtn = document.getElementById('editUserClose');
    const cancelBtn = document.getElementById('editUserCancel');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeEditModal);
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeEditModal);
    }

    // Fechar modal clicando no overlay
    const overlay = document.getElementById('editUserOverlay');
    if (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === this) {
                closeEditModal();
            }
        });
    }

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && document.getElementById('editUserOverlay').classList.contains('active')) {
            closeEditModal();
        }
    });

    // Tratar submissão do formulário
    const editForm = document.getElementById('editUserForm');
    if (editForm) {
        editForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('editUserName').value.trim();
            const email = document.getElementById('editUserEmail').value.trim();
            const role = document.getElementById('editUserRole').value;

            // Validação básica
            if (!name || !email || !role) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Por favor, insira um email válido.');
                return;
            }

            // Desabilitar botão de salvar durante o processo
            const saveBtn = document.querySelector('.btn-edit-save');
            const originalText = saveBtn.textContent;
            saveBtn.disabled = true;
            saveBtn.textContent = 'Salvando...';

            // Salvar alterações
            saveUserChanges(currentUserId, name, email, role)
                .then((response) => {
                    if (response.success) {
                        // Atualizar a tabela com os novos dados
                        updateUserInTable(currentUserId, name, email, role);

                        // Mostrar mensagem de sucesso
                        alert('Usuário atualizado com sucesso!');

                        // Fechar modal
                        closeEditModal();
                    } else {
                        alert('Erro ao salvar alterações. Tente novamente.');
                    }
                })
                .catch((error) => {
                    console.error('Erro ao salvar:', error);
                    alert('Erro ao salvar alterações. Tente novamente.');
                })
                .finally(() => {
                    // Reabilitar botão
                    saveBtn.disabled = false;
                    saveBtn.textContent = originalText;
                });
        });
    }
});