<script>
    let { data } = $props();
</script>

<div class="container mt-5 d-flex justify-content-center">
    <div class="card shadow" style="width: 22rem;">
        <div class="card-body text-center">
        <h3 class="card-title text-uppercase">{data.pokemon.name}</h3>
      
        <img src="{data.pokemon.sprites.front_default}" class="card-img-top" alt="{data.pokemon.name}">
  
        <p class="card-text mb-2">
          <strong>Height:</strong> {data.pokemon.height / 10} m<br />
          <strong>Weight:</strong> {data.pokemon.weight / 10} kg
        </p>
  
        <p class="mb-2">
          <strong>Types:</strong><br />
          {#each data.pokemon.types as type}
            <span class="badge bg-secondary me-1 text-capitalize">{type.type.name}</span>
          {/each}
        </p>
  
        <p>
          <strong>Abilities:</strong><br />
          {#each data.pokemon.abilities as ability}
            <span class="badge bg-secondary me-1 text-capitalize">{ability.ability.name}</span>
          {/each}
        </p>
  
        <a href="/03/pokemon" class="btn btn-success mt-3">Back</a>
      </div>
    </div>
  </div>
  
