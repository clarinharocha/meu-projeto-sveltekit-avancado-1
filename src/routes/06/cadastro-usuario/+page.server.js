import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const nome = data.get('nome');
    const nascimento = data.get('nascimento');

    if (!email || !senha) return fail(400, { error: 'Email e senha são obrigatórios.', email });

    if (!email.includes('@')) return fail(400, { error: 'Email inválido.', email });

    if (senha.length < 4) return fail(400, { error: 'A senha deve ter pelo menos 4 caracteres.', email });

    if (email == "email@inexistente") return fail(400, { error: 'Email ou senha inválidos.', email });

    let agora = new Date();
    let nascimento = new Date(nascimento);
    if (agora - nascimento < 38691200000)
        return fail(400, { error: 'Você ainda não completou 12 anos!', nome, email, nascimento});

    redirect(303, '/06/profile');
  }
};