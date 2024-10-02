import { domController } from "./domController";
import habit from "./habit";

export default habitList = () => {
  let habits = [];
  let title;
  let description;

  const createHabitList = (title, desc) => {
    title = title;
    description = desc;
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

  return { createHabitList, addHabit, displayAllHabits, getInfo };
};

export { habitList };
