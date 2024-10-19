import {createHabit} from "./habit";

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
    
    const habitJSON = JSON.stringify(newHabit);
    console.log(habitJSON);

    localStorage.setItem(title, habitJSON);
    console.log(localStorage.getItem(title))
  };

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
