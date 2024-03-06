export default function Form({ onAddFlat }) {
  return (
    <form onSubmit={onAddFlat}>
      <div>
        <label htmlFor="address-input">Address:</label>
        <input type="text" id="address-input" name="address" />
      </div>
      <br />
      <div>
        <label htmlFor="apartment-input">Apartment:</label>
        <input type="text" id="apartment-input" name="apartment" />
      </div>
      <br />
      <div>
        <label htmlFor="name-input">Name on Doorbell:</label>
        <input type="text" id="name-input" name="name" />
      </div>
      <br />
      <div>
        <label htmlFor="report-input">Additional Information:</label>
        <textarea
          id="report-input"
          name="report"
          placeholder="Why do you think this flat is empty?"
        />
      </div>
      <br />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
