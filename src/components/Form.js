import classes from "./Form.module.css";

function Form(props) {
  return (
    <form className={classes.form} onSubmit={props.formSubmitFunc}>
      {props.showInput && (
        <label className={classes.label}>
          <span className={classes.lblname}>{props.inputlabelText}</span>
          <input
            type="number"
            required
            placeholder="Enter id of the text you want retrieved: "
          ></input>
        </label>
      )}
      <label className={classes.label}>
        {!props.showInput && (
          <span className={classes.lblname}>{props.labelText}</span>
        )}
        {props.showInput ? (
          <textarea rows="4" readOnly className={classes.readOnly}></textarea>
        ) : (
          <textarea rows="4" required></textarea>
        )}
      </label>
      <button>{props.btnText}</button>
    </form>
  );
}

export default Form;
