import { fail, redirect } from '@sveltejs/kit';

function contem(texto, caracteres){
  for (const caractere of caracteres)
    if (texto.includes(caractere)) return true;
  return false;
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const dados = {
     email: data.get('email'),
     nome: data.get('nome'),
     nascimento: data.get('nascimento'),
     senha: data.get('senha'),
     confirmacaosenha: data.get('confirmacaosenha'),
     erros: []
    }

    if (!dados.email || !dados.senha || !dados.nascimento || !dados.nome || !dados.confirmacaosenha) dados.erros.push('Preencha todos os campos.');

    if (!dados.email.includes('@')) dados.erros.push('Email inválido.');

    if(dados.senha!= dados.confirmacaosenha) dados.erros.push('Senha não conferem.');

    if(!contem(dados.senha,"abcdefghijklmnopqrstuvwxyz") || !contem(dados.senha,"ABCDEFGHIJKLMNOPQRSTUVWXYZ") || !contem(dados.senha,"0123456789") || !contem(dados.senha,"!@#$%¨&*()-_+=")) dados.erros.push('A senha deve ter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.');
    
    let agora = new Date();
    let nascimento = new Date(nascimento);
    if (agora - nascimento < 38691200000)
    dados.erros.push('Você ainda não completou 12 anos!', nome, email, nascimento);
    
    redirect(303, '/06/profile');
  }
};