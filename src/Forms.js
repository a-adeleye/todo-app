function ProjectForm(props) {
  return (
    <div className="form-container">
      <form className="project-form">
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

export { ProjectForm };
