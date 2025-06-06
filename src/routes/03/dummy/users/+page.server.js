export async function load({ fetch, url }) {
    const age = url.searchParams.get('age');
    let link = 'https://dummyjson.com/users';
    if (age) { link += `/filter?key=age&value=${age}` }
    const res = await fetch(link);
    const users = await res.json();

    return { users };
}