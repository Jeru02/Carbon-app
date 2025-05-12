const PostcodeForm = (props) => {
  return (
    <form>
      <label htmlFor="postcode-input">Enter Postcode </label>
      <input
        className="postcode-input"
        type="text"
        placeholder="SW1A"
        onChange={props.handleChange}
      />
      <button onClick={props.handleClick}>Search</button>
    </form>
  );
};
export default PostcodeForm;
