export default habitList = () => {
    let habits = [];
    let title;
    let description;

    const createHabitList = (title, desc) => {
        this.title = title;
        this.description = desc;
    }

    const addHabit = (habit) => {
        habits.push(habit);
    }

    return { createHabitList, addHabit }

}

export { habitList }