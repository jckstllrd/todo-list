export default todo = () => {
  let title;
  let description;
  let dueDate;
  let priority;
  let notes;
  let checklist;

  const updateTitle = (title) => {
    this.title = title;
  };
  const updateDescription = (description) => {
    this.description = description;
  };

  return { updateTitle, updateDescription };
};
