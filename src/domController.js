import {createHabit} from "./habit";
import { createHabitList } from "./habitList";


const domController = (function () {
  // const displayHabit = (habit) => {};

  const extractHabit = () => {
    const title = document.querySelector("#title").value;
    const desc = document.querySelector(
      'input[name="habit-description"]'
    ).value;
    const type = document.querySelector(
      '#habit-type'
    ).value;
    console.log("habit logged");
    let newHabit = createHabit(title, desc, type);
    console.log(newHabit);

  };

  const extractHabitList = () => {
    const title = document.querySelector("#list-title").value;
    const desc = document.querySelector(
      'input[name="list-description"]'
    ).value;
    console.log("list logged");
    let newList = createHabitList(title, desc);
  };

  // const displayHabit = (habitList, habit) => {
    
  //   listDOM = document.querySelector
  // }

  const loadPage = () => {
    console.log("here");

    const newHabitBtn = document.querySelector(".new-habit.btn");
    const newListBtn = document.querySelector(".new-list.btn");

    const newHabitDialog = document.querySelector(".new-habit.dialog");
    const newListDialog = document.querySelector(".new-list.dialog");

    const newHabitDialogSubmit = document.querySelector(".habit-submit");
    newHabitDialogSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("submitting");
      extractHabit();
      newHabitDialog.close();
    });

    const newListDialogSubmit = document.querySelector(".list-submit");
    newListtDialogSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("submitting");
      extractHabitList();
      newListDialog.close();
    });


    newHabitBtn.addEventListener("click", () => {
      newHabitDialog.showModal();
      console.log("opened 1");
    });
    newListBtn.addEventListener("click", () => {
      newListDialog.showModal();
      console.log("opened 2");
    });
    const closeMenuBtns = document.querySelectorAll(".close-menu.btn");
    closeMenuBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.target.offsetParent.close();
      });
    });
  };
  return { loadPage };
})();

export { domController };
