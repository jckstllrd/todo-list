const domController = (function () {
  // const displayHabit = (habit) => {};

  const loadPage = () => {
    console.log("here");

    const newHabitBtn = document.querySelector(".new-habit.btn");
    const newListBtn = document.querySelector(".new-list.btn");

    const newHabitDialog = document.querySelector(".new-habit.dialog");
    const newListDialog = document.querySelector(".new-list.dialog");

    newHabitBtn.addEventListener("click", () => {
      newHabitDialog.showModal();
      console.log("opened");
    });
    newListBtn.addEventListener("click", () => {
      newListDialog.showModal();
      console.log("opened");
    });
  };
  return { loadPage };
})();

domController.loadPage();

export { domController };
