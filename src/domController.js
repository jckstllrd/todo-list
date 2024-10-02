export const domController = () => {
  /**
   * Functionality to load anything on the dom
   *
   * Items to load:
   * 1. Any new lists in the sidebar
   * 2. The content of lists in the main content section
   *      - How should these link?
   * 3. Will this function give functionality to all the initial
   *    dialog boxes?
   *
   */
  const displayHabit = (habit) => {};

  const initialisePage = () => {
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
  return { displayHabit, initialisePage };
};
