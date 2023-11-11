async function CallUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  }
  
export default CallUser;