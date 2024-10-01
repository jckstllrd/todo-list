export default habit = () => {
  let title;
  let desc;
  let type;

  const createHabit = (title, desc, type) => {
    this.title = title;
    this.desc = desc;
    this.type = type;
  }

  const getInfo = () => {
    return {title, desc, type}
  }

  

  return {createHabit, getInfo}
}

export {habit}