const ToDoListApiUrl = "http://localhost:3000/";
const information = { description: "koop melk"};

async function getData() {
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

fetch(ToDoListApiUrl, {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
  },
      body: JSON.stringify(information),
})
  .then(response => response.json())
      .then(information => {
          console.log('Success:', information);
  })
  .catch((error) => {
      console.error('Error:', error);
});


async function deleteTodoData(id) {
  const deleteUrl = deleteTodoData + "" + id;
  await fetch(deleteUrl, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
    }, 
  });
  return deleteTodoData();
}

// const apiUrl = "https://localhost:3000";

// const getTodoList = async () => {
//     try {
//         const result = await fetch(apiUrl, { method: 'GET' });
//         const data = await result.json();
//         let tasks = Object.keys(data).map(key => ({
//             id: key,
//             description: data[key].description,
//             done: data[key].done
//         }));
//         return tasks;
//     } catch (error) {
//         console.log(error);
//     }
// }
