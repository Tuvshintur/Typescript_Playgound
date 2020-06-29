import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

//for the ts
axios.get(url).then((response) => {
    const todo = response.data as Todo;
    //once we get data as Todo
    //the TS shows you that its correct or not
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    // logTodo(id, completed, title); //its error but i cannot fetch it until execute without ts
    logTodo(id, title, completed);
});

// old way
//you cannot see is properties name is correct
//until you execute code
axios.get(url).then((response) => {
    const todo = response.data;

    const ID = todo.ID; //its error but cant see until execute without ts
    const title = todo.title;
    const finished = todo.completed;

    console.log(`
        The Todo with ID: ${ID}
        Has a title of : ${title}
        Is it finished ? : ${finished}
    `);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
        The Todo with ID: ${id}
        Has a title of : ${title}
        Is it finished ? : ${completed}
    `);
};
