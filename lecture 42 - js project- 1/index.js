

const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const formBtn = document.querySelector("#form-btn")
const taskCount = document.querySelector("#task-count")
const completeCount = document.querySelector("#complete-count")
const cancelBtn = document.querySelector("#cancel-btn")

//"Go to Gym", "Revision web dev", "Take class"

let todos =  JSON.parse(localStorage.getItem("todos")) || [] // agr todos mil jaaye to run kra dena wrna || array of object written kra dena.
  //  [ 
//{
    //     id: Date.now() + 1,
    //     text: "Go to gym",
    //     isCompleted: false
    // },
    // {
    //     id: Date.now() + 2,
    //     text: "Revision web dev",
    //     isCompleted: false
    // },
    // {
    //     id: Date.now() + 3,
    //     text: "take class",
    //     isCompleted: false
    // }
  //  ] 
    


let editTodoId = null // flag

todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const todoValue = todoInput.value.trim();

    // agr todo ki value empty h means ("") then we do (!"") --->  true and ! is logical not operator.
    if (!todoValue) {
        return
    }

    console.log({ editTodoId, todoValue });

    if (editTodoId) {
        //editng
        todos = todos.map((todo) => {
            if (todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text: todoValue
                }
            }
            return todo
        })

        localStorage.setItem("todos" , JSON.stringify(todos))

        cancelEdit()

    } else {
        //adding
        let newTodo = {
            id: Date.now(),
            text: todoValue,
            isCompleted: false
        }

        
    todos.push(newTodo)//adding new todo on existing todo list.
    localStorage.setItem("todos" , JSON.stringify(todos))
    }

    // let newTodo = {
    //     id: Date.now(),
    //     text: todoValue,
    //     isCompleted: false
    // }
    //todoInput.value = ""
    renderTodo() // jb koi naya todo add hoga , first updated todos render ho  jayega
})

function renderTodo() {
    // todoList.innerHTML = ""
    todoList.textContent = ""
    todos.forEach(function (todo) {
        const li = document.createElement("li");

        //li.setAttribute("data-id" , todo.id) // this is jugaad
        li.dataset.id = todo.id  ///this is orijinal tareeka.

        li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`

        li.innerHTML = `
            <input
             data-action="toggle" 
             ${todo.isCompleted === true ? 'checked' : ""}
              type="checkbox"
              >

              <p class="flex-1 ${todo.isCompleted ? "line-through text-red-400" : ""}">${todo.text}</p>

             <div class="flex gap-2">
                <button data-action="edit"  class="px-2.5 py-1 text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 rounded transition-colors cursor-pointer">Edit</button>
                 <button data-action="delete" class="px-2.5 py-1 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded transition-colors cursor-pointer">Delete</button>
             </div>`
        todoList.append(li)  //here we want exact/alid html code. 
    })

    taskCount.textContent = `TASKS (${todos.length})`
    completeCount.textContent = `COMPLETED: ${todos.filter((todo) => todo.isCompleted).length}`
}

renderTodo()// jb first time file execute hogi tb exixsting todos render ho jayege.

///event delegation. (hr child ko eventlistener dena ki jgh direct parent ko hi addeventlistener de dete h.ek hi baar me kaam ho jayga)

todoList.addEventListener("click", (e) => {
   // e.stopPropagation()

    const li = e.target.closest("li")
    const id = li.dataset.id;

    let action = e.target.dataset.action
    // console.log(action)

    if (action === "delete") {
        deleteTodo(id)
    }

    if (action === "edit") {
        startEdit(id)
    }

    if (action === "toggle") {
        console.log("TOGGLE CLICKED")
        todos = todos.map((todo) => {
            if (todo.id === Number(id)) {
                 console.log("TODO FOUND", todo)

                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })
        renderTodo()
    }
})

function deleteTodo(id) {
    // e.target.closest('li').remove()
    todos = todos.filter((todo) => {
        if (todo.id !== Number(id)) {
            return todo
        }
    })
    renderTodo()
}

function startEdit(id) {
    editTodoId = id;

    let currentTodo = todos.find((todo) => {
        if (todo.id === Number(id)) {
            return todo
        }
    })

    todoInput.value = currentTodo.text
    formBtn.textContent = "update"
    formBtn.className =
        "px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.remove("hidden");
}

function cancelEdit() {
    editTodoId = null;

    todoInput.value = "";

    formBtn.textContent = "Add";

    formBtn.className =
        "px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.add("hidden");
}

cancelBtn.addEventListener("click", () => {
    cancelEdit();
});

// let checkbox = e.target.closest('input[type = "checkbox"]') // css selector ---> to select only checkbox input element.
// if (checkbox) {
//     todos = todos.map((todo) => {
//         if (todo.id === Number(id)) {
//             return {
//                 ...todo,
//                 isCompleted: !todo.isCompleted
//             }
//         }
//         return todo
//     })
// }


// //generally hm yhi tarika use krte h function banate h delet KeyboardEvent

// function deleteTodo(id) {
//     // e.target.closest('li').remove()
//     todos = todos.filter((todo) => {
//         if (todo.id !== Number(id)) {
//             return todo
//         }
//     })
//     renderTodo()
// }

// 