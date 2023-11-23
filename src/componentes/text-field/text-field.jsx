import "./text-field.css";

export const TextField = (props) => {
  const typingOnPlaceholder = (event) => {
    props.typed(event.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={typingOnPlaceholder}
        required={props.mandatory}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
};
