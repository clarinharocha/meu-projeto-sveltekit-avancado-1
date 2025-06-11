<script>
    let { form } = $props();
  </script>
  
  <form method="POST">
    <input name="email" type="email" placeholder="E-mail de usuário" />
    <input name="nome" type="text" placeholder="Nome de usuário" />
    <input name="nascimento" type="date" />
    <button>Cadastrar</button>
  </form>
  
  {#if !form}
    <p>Preencha e submeta o formulário.</p>
  {:else if form.status == 400}
    <p>E-mail e senha são obrigatórios</p>
  {:else if form.status == 401}
    <p>Usuário ou senha inválidos</p>
  {:else if form.status == 200}
    <p>Login efetuado com sucesso!</p>
    <p>Bem-vindo, {form.email}!</p>
  {/if}