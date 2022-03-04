import DatePicker from "sassy-datepicker";

function RightBar() {
  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <section className="right-bar">
      <DatePicker onChange={onChange} />
      <div className="pro">
        <i className="fa-solid fa-crown"></i>
        <h4>Get More Features With Pro</h4>
        <a href="#">Upgrade Plan</a>
      </div>
    </section>
  );
}

export default RightBar;
