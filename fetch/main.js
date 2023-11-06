async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`fetch error: ${response.status}`);
    const users = await response.json();
    console.log('users array:', users);
  } catch (error) {
    console.error('fetch failed:', error);
  }
}
getData();
