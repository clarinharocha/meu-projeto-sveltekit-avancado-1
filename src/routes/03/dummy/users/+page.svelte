<script>
    let { data } = $props();
</script>

<h3>Usuários</h3>
<form>
    <input name="pais" placeholder="Filtrar por país" />
    <button>Filtrar</button>
</form>
<ul>
    {#each data.users as user}
      <li><a href="/03/dummy/users/{user.id}">
       {user.firstName} {user.lastName} ({user.address.country})
      </a></li>
    {/each}
</ul>