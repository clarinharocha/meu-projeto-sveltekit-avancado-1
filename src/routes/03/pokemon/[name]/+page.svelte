<script>
    let { data } = $props();
</script>

<b>{data.pokemon.name.toUpperCase()}</b>

<br />

<img src={data.pokemon.sprites.front_default} alt={data.pokemon.name} />

<br />

{data.pokemon.height / 10 }  m

<br />

{data.pokemon.weight / 10 } kg

<br />

{#each data.pokemon.types as type}
    <span class="badge bg-secondary text-capitalize">{type.type.name}</span>
{/each}

<br />

{#each data.pokemon.abilities as ability}
    {ability.ability.name}
    <br />
{/each}