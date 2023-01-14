import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Form from "./Form";

export default function InputCom() {
  const [text, setText] = useState(null);
  console.log(text);
  // const { data, isPending, error } = useFetch(
  //   "https://mydatabase-eabaf-default-rtdb.firebaseio.com/clipBoard.json"
  // );
  // console.log(data);
  // console.log(isPending);
  // console.log(error);
  const formSubmitFunc = (e) => {
    e.preventDefault();
    const enteredText = e.target[0].value;
    if (!enteredText.trim()) return;
    setText(enteredText);
  };

  return (
    <>
      <Form
        labelText="Send to Online Clipboard:"
        btnText="Send above text to Online Clipboard"
        formSubmitFunc={formSubmitFunc}
      />
    </>
  );
}
