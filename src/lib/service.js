import axios from 'axios';
async function getData(userId) {
    try {
        const userResponse = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const user = userResponse.data;

        const postResponse = await axios.get(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        const posts = postResponse.data;

        return {
            ...user,
            posts: posts,
        };
    } catch (error) {
        console.error('Veri Çekilirken Hata Oluştu:', error);
        return null;
    }
}

(async () => {
  const data = await getData(1);
  console.log(data);
})();

export default getData;
