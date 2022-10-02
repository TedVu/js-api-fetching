const getTodoItem = async () => {
  const item = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  alert(item.data.title);
};

getTodoItem();
