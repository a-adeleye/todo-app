import { nanoid } from "nanoid";

function Note(props) {

  const {title, noteText, id, editNote, deleteNote} = props;

  return (
    <div className="note">
      <h5>{title}</h5>
      <p>{noteText}</p>
      <div className="note-actions">
        <i
          className="fa-solid fa-pen-to-square"
          id={id}
          onClick={(e) => editNote(e, "noteForm")}
        ></i>
        <i className="fa-solid fa-trash" id={id} onClick={deleteNote}></i>
      </div>
    </div>
  );
}

function Notes(props) {
  const noteItems = props.notes.map((note) => (
    <Note key={nanoid()} title={note.title} id={note.id} noteText={note.noteText} deleteNote={props.deleteNote} editNote={props.editNote}/>
  ));

  return (
    <section className="notes">
      <div className="notes-container">{noteItems}</div>
    </section>
  );
}

export default Notes;
