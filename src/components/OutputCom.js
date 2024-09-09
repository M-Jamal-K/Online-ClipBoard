import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Form from "./Form";
import { BASE_URL } from "../utils/Constant";

export default function OutputCom() {
  const [id, setId] = useState(null);

  const { data, isPending, error } = useFetch(`${BASE_URL}?id=${id}`, id);

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
        showCopyButton={true}
        showInput={true}
        pending={isPending}
        output={data ? (data.length ? data[0].data : "Data Not Fount '_'") : ""}
      />
      {error && <h1>{error}</h1>}
    </>
  );
}
