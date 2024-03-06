export default function Form({ onAddFlat }) {
  return (
    <form onSubmit={onAddFlat}>
      <input
        type="text"
        id="address-input"
        name="address"
        defaultValue="address"
      />
      <br />
      <input
        type="text"
        id="apartment-input"
        name="apartment"
        defaultValue="apartment"
      />
      <br />
      <input
        type="text"
        id="name-input"
        name="name"
        defaultValue="name on door bell"
      />
      <br />
      <textarea placeholder="Why do you think this flat is empty?" />
      <br />
      <button type="submit">SUBMIT</button>
    </form>
  );
}
