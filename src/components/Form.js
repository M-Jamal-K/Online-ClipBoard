import { copyToClipBoard } from "../utils/helper";
import CopyClipBoard from "./CopyClipBoard";
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
          <>
          <textarea
            rows="4"
            value={props.output}
            onClick={()=> copyToClipBoard(props.output)}
            readOnly
            className={`${classes.readOnly} textArea-readOnly`}
            ></textarea>
            {props.showCopyButton && <CopyClipBoard value={props.output} />}
            </>
        ) : (
          <textarea rows="4" required></textarea>
        )}
      </label>
      <button disabled={!props.pending ? false : true}>
        {!props.pending ? props.btnText : "Loading...."}
      </button>
      {props.id && !props.pending && !props.error && (
        <p className={classes.idandInfo}>
          ID to retrieve text is: <strong>{props.id}</strong>
          <span>
            This data will be destroyed after one hour when you refresh the site
          </span>
        </p>
      )}
    </form>
  );
}

export default Form;
