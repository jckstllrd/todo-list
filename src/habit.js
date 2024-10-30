function createHabit (newTitle, newDesc, newType, habitList){
  const title = newTitle;
  const description = newDesc;
  const type = newType;
  const list = habitList;

  const getList = () => list;

  const getTitle = () => title;

  const getDescription = () => description;

  const getType = () => type;


  return {title, description, type, getList, getTitle, getDescription, getType}}

export {createHabit}