import Form from "./Form";

export default function OutputCom() {
  const formSubmitFunc = (e) => {
    e.preventDefault();
    const outputValue = e.target[1].value;
    const enteredID = e.target[0].value;
    if (!enteredID.trim()) return;
    console.log(enteredID);
  };

  return (
    <>
      <Form
        inputlabelText="Retrieve from Online Clipboard:"
        btnText="Retrieve"
        formSubmitFunc={formSubmitFunc}
        showInput={true}
      />
    </>
  );
}
