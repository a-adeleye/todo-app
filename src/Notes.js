function Note() {
  return (
    <div className="note">
      <h5>Title</h5>
      <p>Body</p>
    </div>
  );
}

function Notes() {
  return (
    <section className="notes">
      <h4>Notes</h4>
      <div className="notes-container">
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
    </section>
  );
}

export default Notes;
