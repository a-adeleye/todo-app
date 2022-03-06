import DatePicker from "sassy-datepicker";

function RightBar() {
  return (
    <section className="right-bar">
      <DatePicker />
      <div className="pro">
        <i className="fa-solid fa-crown"></i>
        <h4>Get More Features With Pro</h4>
        <button>Upgrade Plan</button>
      </div>
    </section>
  );
}

export default RightBar;
