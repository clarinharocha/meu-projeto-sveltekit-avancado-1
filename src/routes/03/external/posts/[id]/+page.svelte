<script>
    let { data } = $props();
    console.log(data)
</script>
<b>ID do usuário:</b> {data.post.userId}
<br />
<b>ID da postagem:</b> {data.post.id}
<br />
<b>Título:</b> {data.post.title}
<br />
<b>Conteúdo:</b> {data.post.body}
<br />
<b>Comentários:</b>
{#each data.comments as comment}
    {comment.name}
    <br />
    {comment.body}
    <br />
    {comment.email}
{/each}