const ToDoListApiUrl = "http://localhost:3000/";
const information = { description: "koop melk"};

async function ToDoList() {
  try {
    const response = await fetch(ToDoListApiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function postTodo() {
  const data = { description: input.value, done: false };
  try {
    const response = await fetch(ToDoListApiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const postedTodo = await response.json();
    console.log(postedTodo);
    return postedTodo;
  } catch (err) {
    console.log(err);
  }
}
  
async function deleteTodo(id) {
    const deleteUrl = deleteTodo + "" + id;
    await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
      }, 
    });
    return deleteTodo();
}