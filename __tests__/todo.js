/* eslint-disable no-undef */
const todoList = require("../todo");
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
    let arr = overdue();
    let datet = new Date();
    let check = true;
    for (let c = 0; c < arr.length; c++) {
      let over = new Date(arr[c].dueDate);
      if (over.getDate() > datet.getDate()) {
        check = false;
      }
    }
    expect(check).toBe(true);
  });
  test("Checking due today", () => {
    let arr = dueToday();
    let datet = new Date();
    let check = true;
    for (let c = 0; c < arr.length; c++) {
      let over = new Date(arr[c].dueDate);
      if (over.getDate() != datet.getDate()) {
        check = false;
      }
    }
    expect(check).toBe(true);
  });
  test("Checking dueLater", () => {
    let arr = dueLater();
    let datet = new Date();
    let check = true;
    for (let c = 0; c < arr.length; c++) {
      let over = new Date(arr[c].dueDate);
      if (over.getDate() < datet.getDate()) {
        check = false;
      }
    }
    expect(check).toBe(true);
  });
});
