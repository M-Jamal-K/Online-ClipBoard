import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Form from "./Form";

export default function InputCom() {
  const [text, setText] = useState(null);
  const [randomID, setRandomID] = useState(null);

  const { isPending, error } = useFetch(
    "https://json-server-rest-api.glitch.me/userData",
    text,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: text,
        id: randomID,
        expiredAt: new Date().getTime() + 3.6e6
      })
    }
  );
  const formSubmitFunc = (e) => {
    e.preventDefault();
    const enteredText = e.target[0].value;
    if (!enteredText.trim() || text === enteredText.trim()) return;
    setRandomID(Math.floor(Math.random() * 10000));
    setText(enteredText);
  };

  return (
    <>
      <Form
        labelText="Send to Online Clipboard:"
        btnText="Send above text to Online Clipboard"
        formSubmitFunc={formSubmitFunc}
        id={randomID}
        pending={isPending}
        error={error}
      />
      {error && <h1>{error}</h1>}
    </>
  );
}
