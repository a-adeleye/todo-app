import { nanoid } from "nanoid";

function Note(props) {
  return (
    <div className="note">
      <h5>{props.title}</h5>
      <p>{props.noteText}</p>
    </div>
  );
}

function Notes(props) {
    const noteItems = props.notes.map(note => <Note key={nanoid()} title={note.title} noteText={note.noteText}/>);

  return (
    <section className="notes">
      <h4>Notes</h4>
      <div className="notes-container">
        {noteItems}
      </div>
    </section>
  );
}

export default Notes;
