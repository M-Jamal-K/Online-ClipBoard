import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Form from "./Form";

export default function OutputCom() {
  const [id, setId] = useState(null);

  const { data, isPending, error } = useFetch(
    `https://json-server-rest-api.glitch.me/userData?id=${id}`,
    id
  );

  const formSubmitFunc = (e) => {
    e.preventDefault();
    const enteredID = e.target[0].value;
    if (!enteredID.trim()) return;
    setId(enteredID);
  };

  return (
    <>
      <Form
        inputlabelText="Retrieve from Online Clipboard:"
        btnText="Retrieve"
        formSubmitFunc={formSubmitFunc}
        showInput={true}
        pending={isPending}
        output={data ? (data.length ? data[0].data : "Data Not Fount '_'") : ""}
      />
      {error && <h1>{error}</h1>}
    </>
  );
}
