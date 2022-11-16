/* eslint-disable no-undef */
const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsCompleted = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    let overduelist = [];
    let datet = new Date();
    for (let c = 0; c < all.length; c++) {
      let over = new Date(all[c].dueDate);
      if (over.getDate() < datet.getDate()) {
        overduelist.push(all[c]);
      }
    }
    return overduelist;
  };

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    let duelist = [];
    let datet = new Date();
    for (let c = 0; c < all.length; c++) {
      let over = new Date(all[c].dueDate);
      if (over.getDate() == datet.getDate()) {
        duelist.push(all[c]);
      }
    }
    return duelist;
  };

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    let duelatlist = [];
    let datet = new Date();
    for (let c = 0; c < all.length; c++) {
      let over = new Date(all[c].dueDate);
      if (over.getDate() > datet.getDate()) {
        duelatlist.push(all[c]);
      }
    }
    return duelatlist;
  };

  const toDisplayableList = (l) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    let a = "";
    for (let i = 0; i < l.length; i++) {
      if (Object.values(l[i])[1] === today) {
        if (Object.values(l[i])[2] === true) {
          a += "[" + "x] " + Object.values(l[i])[0] + "\n";
        } else {
          a += "[ ] " + Object.values(l[i])[0] + " " + "\n";
        }
      } else {
        if (Object.values(l[i])[2] === true) {
          a +=
            "[" +
            "x] " +
            Object.values(l[i])[0] +
            " " +
            Object.values(l[i])[1] +
            "\n";
        } else {
          a +=
            "[ ] " +
            Object.values(l[i])[0] +
            " " +
            Object.values(l[i])[1] +
            "\n";
        }
      }
    }
    return a;
    // return OUTPUT_STRING
  };

  return {
    all,
    add,
    markAsCompleted,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

//const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
/* const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)*/

module.exports = todoList;
