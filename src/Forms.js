function ProjectForm(props) {
  return (
    <div className="form-container">
      <form className="one-column-form">
        <i className="fa-solid fa-xmark" onClick={props.hide}></i>
        <label htmlFor="project">
          Add project
          <input
            type="text"
            name="project"
            id="project"
            onChange={props.onChange}
            value={props.value}
            placeholder="Project name"
          />
        </label>
        <button type="button" onClick={props.onClick}>
          Add project
        </button>
      </form>
    </div>
  );
}

function NoteForm(props) {
    return (
      <div className="form-container">
        <form className="one-column-form">
          <i className="fa-solid fa-xmark" onClick={props.hide}></i>
          <label htmlFor="title">
            Note Title
            <input
              type="text"
              name="title"
              id="title"
              onChange={props.onChange}
              value={props.title}
              placeholder="Note title"
            />
          </label>
          <label htmlFor="text">
            Note 
            <textarea
              name="noteText"
              id="noteText"
              onChange={props.onChange}
              value={props.body}
              placeholder="Note content"
            ></textarea>
          </label>
          <button type="button" onClick={props.onClick}>
            Add Note
          </button>
        </form>
      </div>
    );
  }

export { ProjectForm, NoteForm };
