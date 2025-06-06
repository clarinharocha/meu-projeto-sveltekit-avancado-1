export async function load({ fetch, url }) {
    const pais = url.seacrchParams.get('pais');
    let link = 'https://dummyjson.com/users';
    if (pais) link += `key=country&value=${pais}`
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();

    return { users };
}