export default function Form({ onAddFlat }) {
  return (
    <form onSubmit={onAddFlat}>
      <div>
        <label htmlFor="address-input">Address:</label>
        <input
          type="text"
          id="address-input"
          name="address"
          defaultValue="address"
        />
      </div>
      <br />
      <div>
        <label htmlFor="apartment-input">Apartment:</label>
        <input
          type="text"
          id="apartment-input"
          name="apartment"
          defaultValue="apartment"
        />
      </div>
      <br />
      <div>
        <label htmlFor="name-input">Name on Doorbell:</label>
        <input
          type="text"
          id="name-input"
          name="name"
          defaultValue="name on door bell"
        />
      </div>
      <br />
      <div>
        <label htmlFor="reason-input">Additional Information:</label>
        <textarea
          id="reason-input"
          name="reason"
          placeholder="Why do you think this flat is empty?"
        />
      </div>
      <br />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
