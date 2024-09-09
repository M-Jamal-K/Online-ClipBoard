import Header from "./components/Header";
import InputCom from "./components/InputCom";
import OutputCom from "./components/OutputCom";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data } = useFetch(
    "https://json-server-rest-api.glitch.me/userData?get_Id=true",
    "null"
  );
  if (data) {
    data.forEach((element) => {
      if (new Date().getTime() >= element.expiredAt) {
        fetch(`https://json-server-rest-api.glitch.me/userData/${element.id}`, {
          method: "DELETE"
        })
          .then((res) => {
            if (res.ok) {
              // console.log("Cleared");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  return (
    <div className="App">
      <Header />
      <InputCom />
      <OutputCom />
    </div>
  );
}

export default App;
