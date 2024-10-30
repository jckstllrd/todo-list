import { domController } from "./domController";
import habit from "./habit";

function createHabitList (listTitle, listDesc) {
  let habits = [];
  const title = listTitle;
  const description = listDesc;
  const createHabitList = () => {
    
  };

  const getInfo = () => {
    return {title, description, displayAllHabits}
  }

  const addHabit = (habit) => {
    habits.push(habit);
  };

  const displayAllHabits = () => {
    habits.forEach((habit) => {
      domController.displayHabit(habitList, habit);
    });
  };

  return { addHabit, displayAllHabits, getInfo };
};

export { createHabitList };
