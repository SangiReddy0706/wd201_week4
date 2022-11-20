/* eslint-disable no-undef */
const todoList = require("../todo");

let today = new Date().toLocaleDateString("en-CA");

const { all, markAsCompleted, add, overdue, dueToday, dueLater } = todoList();

describe("To Do List Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test element",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Should add new to do", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test element",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("Should mark a to do as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsCompleted(0);
    expect(all[0].completed).toBe(true);
  });

  test("Checking overdue", () => {
    let listtotodos = overdue();

    expect(
      listtotodos.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("Checking dueToday", () => {
    let listtotodos = dueToday();

    expect(
      listtotodos.every((todo) => {
        return todo.dueDate == today;
      })
    ).toBe(true);
  });

  test("Checking dueLater", () => {
    let listtotodos = dueLater();

    expect(
      listtotodos.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
