// ===== FUNÇÕES DE VALIDAÇÃO =====

// Função para validar email
export function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para validar todos os dados do cadastro
export function validarDados(dados) {
    // Validação de email
    if (!dados.email || !validarEmail(dados.email)) {
        alert('Email inválido');
        return false;
    }
    
    // Validação de idade
    if (dados.idade < 18 || dados.idade > 100) {
        alert('Idade deve ser entre 18 e 100 anos');
        return false;
    }
    
    // Validação de CPF (básica)
    if (!dados.cpf || dados.cpf.length < 11) {
        alert('CPF inválido');
        return false;
    }
    
    // Validação de senha (básica)
    if (!dados.senha || dados.senha.length < 6) {
        alert('Senha deve ter no mínimo 6 caracteres');
        return false;
    }
    
    return true;
}

// Função para validar email (duplicada, mantendo para compatibilidade)
export function isValidEmail(email) {
    return validarEmail(email);
}